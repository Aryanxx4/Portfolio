import Link from "next/link";
import { ArrowDown, FileDown } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/motion";
import type { SiteConfig } from "@/lib/content";

type HeroProps = {
  site: SiteConfig;
};

export function Hero({ site }: HeroProps) {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-[calc(100vh-4rem)] scroll-mt-20 flex-col justify-center py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-4 font-mono text-sm text-accent">
            {site.title}
          </p>
          <h1
            id="home-heading"
            className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-foreground">{site.name}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#projects" size="lg">
              View Projects
            </ButtonLink>
            <ButtonLink
              href={site.resumeUrl}
              variant="outline"
              size="lg"
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon data-icon="inline-start" className="size-4" />
              GitHub
            </ButtonLink>
          </div>
        </ScrollReveal>
        <div className="mt-20">
          <Link
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="size-4 animate-bounce" />
            Scroll to explore
          </Link>
        </div>
      </div>
    </section>
  );
}
