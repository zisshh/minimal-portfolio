export type SocialIcon = "github" | "linkedin" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const profile = {
  name: "Thakur Divyansh",
  title: "Founder of ziiro",
  email: "thkrdiv@gmail.com",
  location: "Gurugram, India",
  pronouns: null as string | null,
  githubUser: "zisshh",

  /** Cycled in the hero, per-character blur-in. */
  roles: [
    "Founder of ziiro",
    "AI Consultant",
    "Agentic Systems Builder",
    "Full-Stack Engineer",
  ],

  bio: "I build AI systems that make businesses money. I founded ziiro — an AI consultancy that walks into real businesses, finds where they're bleeding revenue, and ships the custom agentic systems that close the gap. Before this I spent a year engineering large-scale telecom systems at Amdocs. Now I build for myself, and I ship in public.",

  quote: {
    text: "I'd rather bleed for myself than be comfortable for someone else.",
    author: "Thakur Divyansh",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/zisshh", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thakurdiv/",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:thkrdiv@gmail.com", icon: "mail" },
  ] satisfies SocialLink[],
} as const;
