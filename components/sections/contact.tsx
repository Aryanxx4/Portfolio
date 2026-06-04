import { Mail, FileDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { contactStyles, layoutStyles } from "@/lib/component-styles";
import type { SiteConfig } from "@/lib/content";

type ContactProps = {
  site: SiteConfig;
};

export function Contact({ site }: ContactProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={contactStyles.section}
    >
      <div className={layoutStyles.pageMaxWidth}>
        <ScrollReveal>
          <SectionHeading
            id="contact"
            title="Contact"
            subtitle="Open to internships, collaborations, and full-stack roles."
          />
          <div className={contactStyles.contactCard}>
            <p className={contactStyles.contactMessage}>
              The fastest way to reach me is via LinkedIn or email. I typically
              respond within a few days.
            </p>
            <div className={contactStyles.contactButtonRow}>
              <ButtonLink href={`mailto:${site.email}`} size="lg">
                <Mail data-icon="inline-start" />
                Email Me
              </ButtonLink>
              <ButtonLink
                href={site.socials.linkedin}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  data-icon="inline-start"
                  className={contactStyles.socialIconInButton}
                />
                LinkedIn
              </ButtonLink>
              <ButtonLink
                href={site.socials.github}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  data-icon="inline-start"
                  className={contactStyles.socialIconInButton}
                />
                GitHub
              </ButtonLink>
              <ButtonLink
                href={site.resumeUrl}
                variant="ghost"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown data-icon="inline-start" />
                Resume
              </ButtonLink>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
