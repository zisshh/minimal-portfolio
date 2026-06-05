import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/home/SocialLinks";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Thakur Divyansh — founding developer at Ziiro, engineer at Amdocs, and the path from a curious CS student to shipping products.",
};

export default function AboutPage() {
  return (
    <Container>
      <section className="pt-32">
        <SectionHeading eyebrow="About" />
        <h1 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-fg-strong sm:text-[1.75rem]">
          {about.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] font-[450] leading-[1.85] text-fg-muted">
          {about.lede}
        </p>
      </section>

      <div className="mt-16 space-y-16 pb-4">
        <Reveal>
          <section>
            <SectionHeading eyebrow="How it started" />
            <div className="max-w-2xl space-y-4">
              {about.story.map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-[1.85] text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading eyebrow="How I work" title="Principles" />
            <div className="grid gap-3 sm:grid-cols-2">
              {about.principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-xl border border-border bg-surface/40 p-5"
                >
                  <h3 className="font-medium text-fg-strong">{principle.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.7] text-fg-muted">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading eyebrow="Beyond the code" />
            <p className="max-w-2xl text-[15px] leading-[1.85] text-fg-muted">
              {about.beyond.body}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading eyebrow="Education & community" />
            <div className="rounded-xl border border-border bg-surface/40 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-medium text-fg-strong">
                  {about.education.school}
                </h3>
                <span className="font-mono text-[12px] text-fg-subtle">
                  {about.education.period}
                </span>
              </div>
              <p className="mt-0.5 text-[13.5px] text-fg-muted">
                {about.education.degree} · {about.education.detail}
              </p>
            </div>

            <ul className="mt-3 space-y-3">
              {about.leadership.map((item) => (
                <li
                  key={item.role}
                  className="rounded-xl border border-border bg-surface/40 p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-medium text-fg-strong">{item.role}</h3>
                    <span className="font-mono text-[12px] text-fg-subtle">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-[13.5px] leading-[1.7] text-fg-muted">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>

            <ul className="mt-3 flex flex-wrap gap-2">
              {about.achievements.map((achievement) => (
                <li
                  key={achievement.title}
                  className="rounded-lg border border-border bg-surface/50 px-3 py-1.5 text-[12.5px] text-fg-muted"
                >
                  {achievement.title}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading eyebrow="Contact" title="Let's connect" />
            <p className="mb-4 max-w-2xl text-[14px] leading-[1.8] text-fg-muted">
              Always up for a good conversation — about a role, a project, or
              just something you&apos;re building.
            </p>
            <SocialLinks />
          </section>
        </Reveal>
      </div>
    </Container>
  );
}
