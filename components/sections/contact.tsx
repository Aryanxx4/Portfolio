import Link from "next/link";
import { Mail, FileDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { SiteConfig } from "@/lib/content";

type ContactProps = {
  site: SiteConfig;
};

export function Contact({ site }: ContactProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="contact"
            title="Contact"
            subtitle="Open to internships, collaborations, and full-stack roles."
          />
          <div className="max-w-xl rounded-xl border border-white/10 bg-card/50 p-8">
            <p className="text-muted-foreground">
              The fastest way to reach me is via LinkedIn or email. I typically
              respond within a few days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                render={<Link href={`mailto:${site.email}`} />}
              >
                <Mail data-icon="inline-start" />
                Email Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={
                  <Link
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <LinkedInIcon data-icon="inline-start" className="size-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={
                  <Link
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <GitHubIcon data-icon="inline-start" className="size-4" />
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="lg"
                render={
                  <Link
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <FileDown data-icon="inline-start" />
                Resume
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
