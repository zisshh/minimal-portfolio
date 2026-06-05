// Dev utility: pull the first real (non-badge) image from each repo's README
// and save it as a project thumbnail under public/projects/.
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const repos = [
  "permory",
  "transqlate",
  "mcp_server",
  "codetribute",
  "gravity_simulation",
  "sphynx",
];

const UA = { "User-Agent": "portfolio-thumb-fetcher" };
const OUT = "public/projects";

const BADGE =
  /(shields\.io|badgen|forthebadge|img\.shields|\/badge|codecov|circleci|travis|codacy|vercel\.com\/button|herokucdn|david-dm|snyk\.io|\/workflows\/[^/]+\/badge|deploy-?button|opensource\.org\/licenses)/i;

function extFromType(ct, url) {
  if (/png/.test(ct)) return "png";
  if (/jpe?g/.test(ct)) return "jpg";
  if (/gif/.test(ct)) return "gif";
  if (/webp/.test(ct)) return "webp";
  if (/svg/.test(ct)) return "svg";
  const m = url.split("?")[0].match(/\.(png|jpe?g|gif|webp|svg)$/i);
  return m ? m[1].toLowerCase().replace("jpeg", "jpg") : "png";
}

await mkdir(OUT, { recursive: true });
const result = {};

for (const repo of repos) {
  try {
    const api = await fetch(
      `https://api.github.com/repos/zisshh/${repo}/readme`,
      { headers: UA },
    );
    if (!api.ok) {
      console.log(`${repo}: readme API ${api.status}`);
      result[repo] = null;
      continue;
    }
    const meta = await api.json();
    const dl = meta.download_url; // https://raw.githubusercontent.com/zisshh/<repo>/<branch>/README.md
    const parts = dl.split("/");
    const baseDir = parts.slice(0, parts.length - 1).join("/") + "/";
    const md = await (await fetch(dl, { headers: UA })).text();

    const urls = [];
    const mdImg = /!\[[^\]]*\]\(\s*<?([^)\s>]+)>?\s*(?:"[^"]*")?\)/g;
    const htmlImg = /<img[^>]+src=["']([^"']+)["']/gi;
    let m;
    while ((m = mdImg.exec(md))) urls.push(m[1]);
    while ((m = htmlImg.exec(md))) urls.push(m[1]);

    const usable = urls.filter((u) => !BADGE.test(u));
    // Prefer a raster image over an SVG (usually a logo); fall back to anything.
    const pick =
      usable.find((u) => !/\.svg($|\?)/i.test(u)) ?? usable[0];
    if (!pick) {
      console.log(`${repo}: no usable image (total imgs: ${urls.length})`);
      result[repo] = null;
      continue;
    }

    let imgUrl = pick;
    if (/^https?:\/\//i.test(pick)) {
      if (/github\.com\/.+\/blob\//.test(pick)) {
        imgUrl = pick
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/blob/", "/");
      }
    } else {
      imgUrl = baseDir + pick.replace(/^\.\//, "");
    }

    const ir = await fetch(imgUrl, { headers: UA, redirect: "follow" });
    if (!ir.ok) {
      console.log(`${repo}: image ${ir.status} ${imgUrl}`);
      result[repo] = null;
      continue;
    }
    const ct = ir.headers.get("content-type") ?? "";
    const ext = extFromType(ct, imgUrl);
    const buf = Buffer.from(await ir.arrayBuffer());
    if (buf.length < 1200) {
      console.log(`${repo}: image too small ${buf.length}b ${imgUrl}`);
      result[repo] = null;
      continue;
    }
    const file = `${repo}.${ext}`;
    await writeFile(path.join(OUT, file), buf);
    result[repo] = `/projects/${file}`;
    console.log(
      `${repo}: OK -> ${file} (${Math.round(buf.length / 1024)}KB) src=${imgUrl}`,
    );
  } catch (e) {
    console.log(`${repo}: ERROR ${e.message}`);
    result[repo] = null;
  }
}

console.log("\nMAP " + JSON.stringify(result));
