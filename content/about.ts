export interface Principle {
  title: string;
  body: string;
}

export const about = {
  heading: "From a curious kid to building for the web",
  lede: "Great software isn't about adding more — it's about refining until nothing else can be removed. I like figuring out how things work, then making them work better.",

  story: [
    "I'm a Computer Science undergrad at VIT Vellore who got hooked on building the moment I realized code could turn an idea into something real and usable. What started as small experiments turned into shipping production software.",
    "Today I split my time between founding-engineer work at Ziiro — building a product from zero — and engineering at Amdocs on large-scale telecom systems. The contrast keeps me sharp: one teaches me to move fast and own everything, the other to build things that hold up at scale.",
  ],

  principles: [
    {
      title: "Stay curious",
      body: "If I don't understand how something works, I'll take it apart until I do. Most of my projects started as 'I wonder if I could build this myself.'",
    },
    {
      title: "Done beats perfect",
      body: "Shipping teaches you more than planning. I'd rather get something real in front of people and iterate than polish in the dark.",
    },
    {
      title: "Sweat the details",
      body: "The difference between good and great is a hundred small decisions — performance budgets, edge cases, the feel of an interaction.",
    },
    {
      title: "Build for humans",
      body: "Behind every request is a person trying to get something done. Good engineering is invisible; it just works.",
    },
  ] satisfies Principle[],

  beyond: {
    title: "Beyond the code",
    body: "Outside of shipping features, I've led tech for student communities — coordinating events, mentoring builders, and prototyping ideas just to see if they'd fly. I'm happiest with a hard problem and a blank editor.",
  },

  education: {
    school: "Vellore Institute of Technology",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2022 – Present",
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
