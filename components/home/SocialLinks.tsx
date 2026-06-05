import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-1.5", className)}>
      {profile.socials.map((social) => (
        <li key={social.label} className="group relative">
          <a
            href={social.href}
            target={social.icon === "mail" ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-fg-subtle transition-colors hover:bg-surface hover:text-fg-strong"
          >
            <SocialIcon name={social.icon} className="h-[18px] w-[18px]" />
          </a>
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-surface-2 px-2.5 py-1 text-[12px] font-medium text-fg opacity-0 shadow-lg ring-1 ring-border transition-all duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {social.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
