import Link from "next/link";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/content/profile";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-background/70 backdrop-blur-md [-webkit-mask-image:linear-gradient(to_bottom,black_72%,transparent)] [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
      />
      <Container className="relative flex h-16 items-center justify-between">
        <Link
          href="/"
          className="link-underline text-sm font-medium text-fg-strong"
        >
          {profile.name}
        </Link>
        <nav className="flex items-center gap-5 sm:gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-fg-subtle transition-colors hover:text-fg-strong"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
