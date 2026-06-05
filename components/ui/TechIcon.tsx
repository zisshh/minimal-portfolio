import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiPostman,
  SiJest,
  SiLangchain,
} from "react-icons/si";
import { cn } from "@/lib/utils";

interface IconMeta {
  Icon: IconType;
  /** Brand color. Omitted for monochrome logos so they inherit the text color. */
  color?: string;
}

/** Brand icons + colors keyed by `content/techStack.ts`. */
const ICONS: Record<string, IconMeta> = {
  cplusplus: { Icon: SiCplusplus, color: "#00599C" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  python: { Icon: SiPython, color: "#4B8BBE" },
  react: { Icon: SiReact, color: "#61DAFB" },
  nextdotjs: { Icon: SiNextdotjs }, // monochrome
  tailwindcss: { Icon: SiTailwindcss, color: "#38BDF8" },
  redux: { Icon: SiRedux, color: "#764ABC" },
  nodedotjs: { Icon: SiNodedotjs, color: "#5FA04E" },
  express: { Icon: SiExpress }, // monochrome
  dotnet: { Icon: SiDotnet, color: "#8B5CF6" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  firebase: { Icon: SiFirebase, color: "#FFA000" },
  docker: { Icon: SiDocker, color: "#2496ED" },
  git: { Icon: SiGit, color: "#F05032" },
  githubactions: { Icon: SiGithubactions, color: "#2088FF" },
  postman: { Icon: SiPostman, color: "#FF6C37" },
  jest: { Icon: SiJest, color: "#C63D14" },
  langchain: { Icon: SiLangchain, color: "#1FA89A" },
};

interface TechIconProps {
  icon: string;
  name: string;
  className?: string;
}

export function TechIcon({ icon, name, className }: TechIconProps) {
  const meta = ICONS[icon];
  if (meta) {
    const { Icon, color } = meta;
    return (
      <Icon
        className={className}
        style={color ? { color } : undefined}
        aria-hidden
      />
    );
  }
  return (
    <span
      className={cn("inline-flex items-center justify-center font-mono", className)}
      aria-hidden
    >
      {name.charAt(0)}
    </span>
  );
}
