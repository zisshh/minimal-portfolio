import { TechIcon } from "@/components/ui/TechIcon";
import { techStack } from "@/content/techStack";

export function TechStack() {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {techStack.map((tech) => (
        <li key={tech.name} className="group relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface/50 transition-colors hover:border-fg-faint">
            <TechIcon
              icon={tech.icon}
              name={tech.name}
              className="h-[20px] w-[20px]"
            />
          </div>
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-surface-2 px-2.5 py-1 text-[12px] font-medium text-fg opacity-0 shadow-lg ring-1 ring-border transition-all duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
