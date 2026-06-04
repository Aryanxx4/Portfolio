export const GITHUB_REVALIDATE = 86400;

export type GitHubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
};

export async function fetchGitHubProfile(
  username: string
): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: GITHUB_REVALIDATE },
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "portfolio-site",
      },
    });

    if (!res.ok) return null;

    const data = (await res.json()) as GitHubProfile;
    return data;
  } catch {
    return null;
  }
}

export function getContributionChartUrl(username: string): string {
  return `https://ghchart.rshah.org/${username}`;
}

export function getGitHubStatsImageUrl(username: string): string {
  return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=0a0a0a&title_color=fafafa&text_color=a1a1aa&icon_color=3b82f6`;
}
