import { experience } from "@/content/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <ol className="space-y-9">
      {experience.map((entry) => {
        const current = entry.end === "Present";
        return (
        <li key={`${entry.company}-${entry.role}`} className="relative border-l border-border pl-6">
          <span
            aria-hidden
            className={cn(
              "absolute -left-[5px] top-[7px] h-[9px] w-[9px] rounded-full",
              current
                ? "bg-emerald-500 ring-2 ring-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                : "border border-fg-faint bg-background",
            )}
          />

          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="font-medium text-fg-strong">
              {entry.role}
              <span className="font-normal text-fg-subtle">
                {" · "}
                {entry.href ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline transition-colors hover:text-fg-strong"
                  >
                    {entry.company}
                  </a>
                ) : (
                  entry.company
                )}
              </span>
            </h3>
            <span className="font-mono text-[12px] text-fg-subtle">
              {entry.start} – {entry.end}
            </span>
          </div>

          <p className="mt-0.5 text-[12px] text-fg-subtle">
            {entry.location} · {entry.type}
          </p>

          <ul className="mt-3 space-y-1.5">
            {entry.points.map((point, i) => (
              <li
                key={i}
                className="relative pl-4 text-[13.5px] leading-[1.7] text-fg-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-fg-faint"
              >
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border px-2 py-0.5 text-[11px] text-fg-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        </li>
        );
      })}
    </ol>
  );
}
