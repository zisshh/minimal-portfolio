export type SocialIcon = "github" | "linkedin" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const profile = {
  name: "Thakur Divyansh",
  title: "Software Engineer",
  email: "thkrdiv@gmail.com",
  location: "Gurugram, India",
  pronouns: null as string | null,
  githubUser: "zisshh",

  /** Cycled in the hero, per-character blur-in. */
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Founding Developer",
    "Curious Builder",
  ],

  bio: "I build full-stack products end-to-end — from system architecture and APIs down to the pixels people actually touch. Right now I'm a founding developer at Ziiro and a software engineer at Amdocs, working across TypeScript, React, Node, and .NET. I care about performance, clean systems, and shipping things that feel obvious to use.",

  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
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
