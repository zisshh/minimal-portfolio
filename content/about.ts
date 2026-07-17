export interface Principle {
  title: string;
  body: string;
}

export const about = {
  heading: "From building someone else's product to building my own",
  lede: "Most businesses are sitting on money they can't see. I build the AI systems that find it — and I'd rather build something I own than spend my life shipping someone else's roadmap.",

  story: [
    "I'm a Computer Science grad who got hooked on building the moment I realized code could turn an idea into something real. I spent a year at Amdocs engineering large-scale telecom systems — real scale, real rigor, and the thing that finally taught me I didn't want to build someone else's product forever.",
    "So in 2026 I went all in on ziiro, my AI consultancy. I walk into real businesses — street food stalls to startups — analyze their operations on camera for free, and show them exactly where they're losing money. Then I build the agentic systems that close the gap. The flagship is Business Brain: a private portal and an AI agent trained on a business's own data, so an owner can log in and ask their business anything — what's active, what's pending, who hasn't paid in 60 days. Built and delivered in two weeks.",
  ],

  principles: [
    {
      title: "Stay curious",
      body: "If I don't understand how something works, I'll take it apart until I do. Same instinct I take into a business — pull the operations apart until the leak is obvious.",
    },
    {
      title: "Done beats perfect",
      body: "Planning is comfortable; shipping is where the truth is. Business Brain goes from nothing to delivered in two weeks because a working system teaches you more than a perfect plan.",
    },
    {
      title: "Sweat the details",
      body: "The difference between good and great is a hundred small decisions — performance budgets, edge cases, the feel of an interaction. Nobody points at them; everybody feels them.",
    },
    {
      title: "Build for humans",
      body: "Behind every request is a person trying to get something done — usually an owner who just wants a straight answer about their own business. Good engineering is invisible; it just works.",
    },
  ] satisfies Principle[],

  beyond: {
    title: "Beyond the code",
    body: "Outside the build, I'm on camera most days educating Indian businesses about what AI can actually do for them — the free analyses, the teardowns, the unglamorous parts nobody films. I'm happiest with a hard problem and a blank editor.",
  },

  education: {
    school: "Vellore Institute of Technology",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2022 – 2025",
    detail: "CGPA 8.55 / 10",
  },

  leadership: [
    {
      role: "Core Tech Member — IET Club, VIT Vellore",
      period: "Aug 2023 – Feb 2024",
      detail:
        "Drove multimedia and social campaigns for major technical events (Yantra, HackOff), lifting engagement ~40%.",
    },
    {
      role: "Coordinator — Advanced Developers Group, VIT Vellore",
      period: "Jul 2023 – Jul 2024",
      detail:
        "Built a ride-sharing app prototype in Swift / SwiftUI with auth and real-time location; 4.8/5 from internal testers.",
    },
  ],

  achievements: [
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      href: null as string | null,
    },
  ],
} as const;
