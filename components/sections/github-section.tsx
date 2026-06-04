import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
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
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="github"
            title="GitHub Activity"
            subtitle="Open source contributions and public repositories."
          />
        </ScrollReveal>

        {profile ? (
          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-xl border border-white/10 bg-card/50 p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src={profile.avatar_url}
                    alt={`${profile.login} avatar`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      @{profile.login}
                    </h3>
                    {profile.bio ? (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {profile.bio}
                      </p>
                    ) : null}
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="size-4 text-accent" />
                        {profile.public_repos} repos
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="size-4 text-accent" />
                        {profile.followers} followers
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  className="mt-6"
                  variant="outline"
                  render={
                    <Link
                      href={site.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <GitHubIcon data-icon="inline-start" className="size-4" />
                  View Profile
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-card/50 p-4">
                <Image
                  src={statsUrl}
                  alt="GitHub stats"
                  width={400}
                  height={120}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-2" delay={0.15}>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-card/50 p-4">
                <Image
                  src={chartUrl}
                  alt="GitHub contribution chart"
                  width={800}
                  height={120}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
            </ScrollReveal>
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-card/50 p-8 text-center">
            <p className="text-muted-foreground">
              Unable to load GitHub data right now.
            </p>
            <Button
              className="mt-4"
              render={
                <Link
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <GitHubIcon data-icon="inline-start" className="size-4" />
              View on GitHub
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
