export interface Project {
  name: string;
  description: string;
  /** Primary link (live site or repo). */
  href: string;
  /** Repo link, shown as a "View on GitHub" action when present. */
  repo?: string;
  /** Live site to embed as an interactive preview. */
  embed?: string;
  /** Static preview thumbnail (local path). Used when there's no live embed. */
  image?: string;
  tags: string[];
  year?: string;
}

// Two featured projects — the rest live behind the GitHub link in the hero.
export const projects: Project[] = [
  {
    name: "ziiro",
    description:
      "My AI consultancy — custom agentic systems for businesses. I analyze real operations on camera, then build what closes the gaps. Flagship: Business Brain, a private portal and AI agent trained on a business's own data, shipped in ~2 weeks.",
    href: "https://ziiro.work",
    embed: "https://ziiro.work",
    tags: ["AI Agents", "Automation", "Next.js", "Node.js"],
    year: "2026",
  },
  {
    name: "transqlate",
    description:
      "A schema-aware natural-language → SQL CLI. A RAG pipeline extracts schema and adapts SQL dialects; a QLoRA-fine-tuned Phi-4 Mini hits ~85% on the Spider benchmark. Shipped on PyPI.",
    href: "https://github.com/zisshh/transqlate",
    repo: "https://github.com/zisshh/transqlate",
    image: "/projects/transqlate.gif",
    tags: ["Python", "RAG", "LLM", "CLI"],
    year: "2025",
  },
];
