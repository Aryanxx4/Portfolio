import Link from "next/link";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";
import type { SiteConfig } from "@/lib/content";

type FooterProps = {
  site: SiteConfig;
};

export function Footer({ site }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-5" />
          </Link>
          <Link
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-5" />
          </Link>
          {site.socials.instagram ? (
            <Link
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-5" />
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
