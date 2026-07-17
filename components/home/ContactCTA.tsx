import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { profile } from "@/content/profile";

const cards = [
  {
    icon: Mail,
    title: "Work with ziiro",
    sub: profile.email,
    note: "Replies within 24 hours",
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: FaLinkedin,
    title: "Connect on LinkedIn",
    sub: "in/thakurdiv",
    note: "Building ziiro in public",
    href: "https://www.linkedin.com/in/thakurdiv/",
    external: true,
  },
];

export function ContactCTA() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <a
            key={card.title}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noreferrer noopener" : undefined}
            className="group flex flex-col rounded-xl border border-border bg-surface/40 p-5 transition-all hover:border-fg-faint hover:bg-surface"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-[18px] w-[18px] text-fg-subtle" aria-hidden />
              <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg-strong" />
            </div>
            <p className="mt-4 font-medium text-fg-strong">{card.title}</p>
            <p className="mt-0.5 text-[13px] text-fg-muted">{card.sub}</p>
            <p className="mt-3 text-[12px] text-fg-subtle">{card.note}</p>
          </a>
        );
      })}
    </div>
  );
}
