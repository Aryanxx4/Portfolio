import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { SiteConfig } from "@/lib/content";

type AboutProps = {
  site: SiteConfig;
};

export function About({ site }: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="about"
            title="About"
            subtitle="Building systems that are fast, maintainable, and user-focused."
          />
          <div className="max-w-3xl space-y-6 text-muted-foreground">
            <p className="text-base leading-relaxed text-foreground/90">
              {site.bio}
            </p>
            <p className="leading-relaxed">
              As a full-stack developer, I work across the stack — from
              designing REST APIs and database schemas to crafting responsive
              React interfaces. I enjoy turning complex requirements into
              clean, shippable software.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="size-4 text-accent" aria-hidden />
              <span>{site.location}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
