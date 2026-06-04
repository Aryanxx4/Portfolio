import Link from "next/link";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";
import { footerStyles } from "@/lib/component-styles";
import type { SiteConfig } from "@/lib/content";

type FooterProps = {
  site: SiteConfig;
};

export function Footer({ site }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={footerStyles.bar}>
      <div className={footerStyles.innerRow}>
        <p className={footerStyles.copyrightText}>
          © {year} {site.name}. All rights reserved.
        </p>
        <div className={footerStyles.socialLinksRow}>
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialIconLink}
            aria-label="GitHub"
          >
            <GitHubIcon className={footerStyles.socialIconSize} />
          </Link>
          <Link
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialIconLink}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className={footerStyles.socialIconSize} />
          </Link>
          {site.socials.instagram ? (
            <Link
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={footerStyles.socialIconLink}
              aria-label="Instagram"
            >
              <InstagramIcon className={footerStyles.socialIconSize} />
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
