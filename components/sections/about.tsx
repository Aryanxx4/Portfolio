import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { aboutStyles, layoutStyles } from "@/lib/component-styles";
import type { SiteConfig } from "@/lib/content";

type AboutProps = {
  site: SiteConfig;
};

export function About({ site }: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={aboutStyles.section}
    >
      <div className={layoutStyles.pageMaxWidth}>
        <ScrollReveal>
          <SectionHeading
            id="about"
            title="About"
            subtitle="Building systems that are fast, maintainable, and user-focused."
          />
          <div className={aboutStyles.bodyText}>
            <p className={aboutStyles.primaryParagraph}>{site.bio}</p>
            <p className={aboutStyles.secondaryParagraph}>
              As a full-stack developer, I work across the stack — from
              designing REST APIs and database schemas to crafting responsive
              React interfaces. I enjoy turning complex requirements into
              clean, shippable software.
            </p>
            <div className={aboutStyles.locationRow}>
              <MapPin className={aboutStyles.locationIcon} aria-hidden />
              <span>{site.location}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
