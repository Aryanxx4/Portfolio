import Image from "next/image";
import { Users, BookOpen } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { githubSectionStyles, layoutStyles } from "@/lib/component-styles";
import {
  fetchGitHubProfile,
  getContributionChartUrl,
  getGitHubStatsImageUrl,
} from "@/lib/github";
import type { SiteConfig } from "@/lib/content";

type GitHubSectionProps = {
  site: SiteConfig;
};

export async function GitHubSection({ site }: GitHubSectionProps) {
  const profile = await fetchGitHubProfile(site.githubUsername);
  const chartUrl = getContributionChartUrl(site.githubUsername);
  const statsUrl = getGitHubStatsImageUrl(site.githubUsername);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className={githubSectionStyles.section}
    >
      <div className={layoutStyles.pageMaxWidth}>
        <ScrollReveal>
          <SectionHeading
            id="github"
            title="GitHub Activity"
            subtitle="Open source contributions and public repositories."
          />
        </ScrollReveal>

        {profile ? (
          <div className={githubSectionStyles.statsGrid}>
            <ScrollReveal>
              <div className={githubSectionStyles.profileCard}>
                <div className={githubSectionStyles.profileHeader}>
                  <Image
                    src={profile.avatar_url}
                    alt={`${profile.login} avatar`}
                    width={64}
                    height={64}
                    className={githubSectionStyles.profileAvatar}
                  />
                  <div>
                    <h3 className={githubSectionStyles.profileUsername}>
                      @{profile.login}
                    </h3>
                    {profile.bio ? (
                      <p className={githubSectionStyles.profileBio}>
                        {profile.bio}
                      </p>
                    ) : null}
                    <div className={githubSectionStyles.profileStatsRow}>
                      <span className="flex items-center gap-1.5">
                        <BookOpen className={githubSectionStyles.profileStatIcon} />
                        {profile.public_repos} repos
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className={githubSectionStyles.profileStatIcon} />
                        {profile.followers} followers
                      </span>
                    </div>
                  </div>
                </div>
                <ButtonLink
                  className={githubSectionStyles.viewProfileButton}
                  href={site.socials.github}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    data-icon="inline-start"
                    className={githubSectionStyles.githubIconInButton}
                  />
                  View Profile
                </ButtonLink>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className={githubSectionStyles.statsImageCard}>
                <Image
                  src={statsUrl}
                  alt="GitHub stats"
                  width={400}
                  height={120}
                  className={githubSectionStyles.statsImage}
                  unoptimized
                />
              </div>
            </ScrollReveal>

            <ScrollReveal
              className={githubSectionStyles.chartCardSpan}
              delay={0.15}
            >
              <div className={githubSectionStyles.statsImageCard}>
                <Image
                  src={chartUrl}
                  alt="GitHub contribution chart"
                  width={800}
                  height={120}
                  className={githubSectionStyles.statsImage}
                  unoptimized
                />
              </div>
            </ScrollReveal>
          </div>
        ) : (
          <div className={githubSectionStyles.fallbackCard}>
            <p className={githubSectionStyles.fallbackText}>
              Unable to load GitHub data right now.
            </p>
            <ButtonLink
              className={githubSectionStyles.fallbackButton}
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                data-icon="inline-start"
                className={githubSectionStyles.githubIconInButton}
              />
              View on GitHub
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
