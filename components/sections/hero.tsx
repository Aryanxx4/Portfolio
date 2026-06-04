import Link from "next/link";
import { ArrowDown, FileDown } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/motion";
import { heroStyles } from "@/lib/component-styles";
import type { SiteConfig } from "@/lib/content";

type HeroProps = {
  site: SiteConfig;
};

export function Hero({ site }: HeroProps) {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className={heroStyles.section}
    >
      <div className={heroStyles.gridBackground} aria-hidden />
      <div className={heroStyles.contentWrapper}>
        <ScrollReveal>
          <p className={heroStyles.roleLabel}>{site.title}</p>
          <h1 id="home-heading" className={heroStyles.mainHeading}>
            Hi, I&apos;m{" "}
            <span className="text-foreground">{site.name}</span>
          </h1>
          <div className={heroStyles.ctaButtonRow}>
            <ButtonLink
              href="#projects"
              size="lg"
              className={heroStyles.ctaButtonSize}
            >
              View Projects
            </ButtonLink>
            <ButtonLink
              href={site.resumeUrl}
              variant="outline"
              size="lg"
              className={heroStyles.ctaButtonSize}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown data-icon="inline-start" />
              Resume
            </ButtonLink>
            <ButtonLink
              href={site.socials.github}
              variant="ghost"
              size="lg"
              className={heroStyles.ctaButtonSize}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                data-icon="inline-start"
                className={heroStyles.githubIconInButton}
              />
              GitHub
            </ButtonLink>
          </div>
        </ScrollReveal>
        <div className={heroStyles.scrollHintWrapper}>
          <Link
            href="#about"
            className={heroStyles.scrollHintLink}
            aria-label="Scroll to about section"
          >
            <ArrowDown className={heroStyles.scrollHintIcon} />
            Scroll to explore
          </Link>
        </div>
      </div>
    </section>
  );
}
