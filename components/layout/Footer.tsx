import Link from "next/link";
import { Container } from "./Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/70 py-9">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-fg-subtle">
          © {year} {profile.name}.
        </p>

        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-5 text-[13px] text-fg-subtle">
            <Link href="/" className="link-underline transition-colors hover:text-fg-strong">
              Home
            </Link>
            <Link
              href="/about"
              className="link-underline transition-colors hover:text-fg-strong"
            >
              About
            </Link>
          </nav>
          <div className="h-4 w-px bg-border" />
          <ul className="flex items-center gap-3">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="text-fg-subtle transition-colors hover:text-fg-strong"
                >
                  <SocialIcon name={social.icon} className="h-[17px] w-[17px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
