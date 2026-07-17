export interface ExperienceEntry {
  role: string;
  company: string;
  href?: string;
  start: string;
  end: string;
  location: string;
  type: string;
  points: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Founder",
    company: "ziiro",
    href: "https://ziiro.work",
    start: "2026",
    end: "Present",
    location: "Remote",
    type: "Full-time",
    points: [
      "Founded ziiro, an AI consultancy building custom agentic systems for businesses — free, on-camera operations analysis first, then the paid systems that close the gaps it surfaces.",
      "Built Business Brain, ziiro's flagship product: a private portal and AI agent trained on a business's own data, so an owner can ask what's active, what's pending, and who hasn't paid in 60 days — delivered in ~2 weeks.",
      "Analyze real businesses on camera — street-food stalls to startups — showing where they lose money and which pipelines eat revenue, and ship daily content educating Indian businesses about AI.",
    ],
    tags: ["AI Agents", "Automation", "Next.js", "TypeScript"],
  },
  {
    role: "Software Engineer",
    company: "Amdocs",
    start: "Jun 2025",
    end: "2026",
    location: "Gurugram, India",
    type: "Full-time",
    points: [
      "Built a .NET Core Account Health API aggregating customer, billing, subscriber, order, memo, and alert data into a unified endpoint for telecom account-management dashboards.",
      "Integrated enterprise services across Oracle DB, Tuxedo middleware, JWT-secured APIs, IIS-hosted applications, and React frontends within a large-scale telecom ecosystem.",
      "Cut React/Redux monorepo setup time by 83% (120 → 20 min) through build-pipeline optimization, parallelized dependency installs, and custom Node.js automation.",
      "Developed reusable React/Redux dashboard components with robust API integration, state management, and error handling.",
    ],
    tags: [".NET Core", "React", "Redux", "Oracle DB", "Node.js"],
  },
  {
    role: "Core Developer",
    company: "Shipd by Datacurve",
    start: "Jul 2024",
    end: "May 2025",
    location: "Remote",
    type: "Contract",
    points: [
      "Designed Python and TypeScript feature-request problems for high-visibility open-source repositories (500+ stars), increasing the platform's evaluation-dataset diversity by ~20%.",
      "Resolved bug-fix issues across multiple open-source modules in the \"Project Mars\" initiative, contributing to an estimated 15% reduction in the unresolved-issues backlog.",
    ],
    tags: ["Python", "TypeScript", "Open Source"],
  },
  {
    role: "Software Engineer Intern",
    company: "App Scoop",
    start: "May 2024",
    end: "Jun 2024",
    location: "On-site",
    type: "Internship",
    points: [
      "Engineered and optimized cross-platform mobile and web applications with React Native and Node.js; boosted load speeds by 30% and improved user retention.",
      "Collaborated with cross-functional teams in Agile sprints to deliver feature-rich modules, reducing delivery time by ~20%.",
    ],
    tags: ["React Native", "Node.js"],
  },
];
