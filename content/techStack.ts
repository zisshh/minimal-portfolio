/** `icon` keys map to brand icons in components/ui/TechIcon.tsx. */
export interface TechItem {
  name: string;
  icon: string;
}

// Logo-only grid (names shown on hover) — minimal, like siddz.com.
export const techStack: TechItem[] = [
  { name: "C++", icon: "cplusplus" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Redux", icon: "redux" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express", icon: "express" },
  { name: ".NET Core", icon: "dotnet" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Firebase", icon: "firebase" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub Actions", icon: "githubactions" },
  { name: "Postman", icon: "postman" },
  { name: "Jest", icon: "jest" },
  { name: "LangChain", icon: "langchain" },
];
