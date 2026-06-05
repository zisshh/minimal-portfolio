import Image from "next/image";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects, type Project } from "@/content/projects";
import { LivePreview } from "./LivePreview";

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="text-fg-subtle transition-colors hover:text-fg-strong"
    >
      {children}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const liveUrl = project.href.includes("github.com") ? undefined : project.href;
  const repoUrl =
    project.repo ??
    (project.href.includes("github.com") ? project.href : undefined);
  const titleHref = liveUrl ?? repoUrl;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface/40 transition-colors hover:border-fg-faint">
      {project.embed ? (
        <LivePreview src={project.embed} title={`${project.name} live preview`} />
      ) : project.image ? (
        <div
          className="relative w-full overflow-hidden border-b border-border bg-surface-2"
          style={{ aspectRatio: "16 / 10" }}
        >
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-fg-strong">
            {titleHref ? (
              <a
                href={titleHref}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-accent"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
            {project.year ? (
              <span className="ml-2 font-mono text-[11px] font-normal text-fg-subtle">
                {project.year}
              </span>
            ) : null}
          </h3>

          <div className="flex shrink-0 items-center gap-3 pt-0.5">
            {repoUrl ? (
              <IconLink href={repoUrl} label={`${project.name} on GitHub`}>
                <FaGithub className="h-[17px] w-[17px]" aria-hidden />
              </IconLink>
            ) : null}
            {liveUrl ? (
              <IconLink href={liveUrl} label={`${project.name} website`}>
                <Globe className="h-[17px] w-[17px]" aria-hidden />
              </IconLink>
            ) : null}
          </div>
        </div>

        <p className="mt-2 text-[13.5px] leading-[1.65] text-fg-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border px-2 py-0.5 text-[11px] text-fg-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
