import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-6", className)}>
      {eyebrow ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-fg-subtle">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-fg-strong">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
