import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/home/Hero";
import { ContributionGraph } from "@/components/home/ContributionGraph";
import { TechStack } from "@/components/home/TechStack";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Experience } from "@/components/home/Experience";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ContactForm } from "@/components/home/ContactForm";
import { Quote } from "@/components/home/Quote";
import { VisitorCounter } from "@/components/home/VisitorCounter";

export default function HomePage() {
  return (
    <Container>
      <Hero />

      <div className="space-y-16 pb-4 sm:space-y-20">
        <Reveal>
          <section aria-label="GitHub activity">
            <ContributionGraph />
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading eyebrow="Toolbox" title="Tech I work with" />
            <TechStack />
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading eyebrow="Work" title="Featured projects" />
            <FeaturedProjects />
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading eyebrow="Journey" title="Experience" />
            <Experience />
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading eyebrow="Contact" title="Let's work together" />
            <ContactCTA />
            <div className="mt-3">
              <ContactForm />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <Quote />
        </Reveal>

        <VisitorCounter />
      </div>
    </Container>
  );
}
