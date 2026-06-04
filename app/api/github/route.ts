import { NextResponse } from "next/server";
import { fetchGitHubProfile } from "@/lib/github";
import { getSiteConfig } from "@/lib/content";

export async function GET() {
  const site = await getSiteConfig();
  const profile = await fetchGitHubProfile(site.githubUsername);

  if (!profile) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub profile" },
      { status: 502 }
    );
  }

  return NextResponse.json(profile);
}
