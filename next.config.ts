import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so file tracing isn't confused by stray lockfiles
  // higher up the filesystem (e.g. ~/package-lock.json).
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      // GitHub's auto-generated repository social-preview images (project thumbnails)
      { protocol: "https", hostname: "opengraph.githubassets.com" },
    ],
  },
};

export default nextConfig;
