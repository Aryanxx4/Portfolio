import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteConfig } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();

  return {
    title: `${site.name} | ${site.title}`,
    description: site.tagline,
    metadataBase: new URL("https://aryan-choudhary.dev"),
    openGraph: {
      title: `${site.name} | ${site.title}`,
      description: site.tagline,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} | ${site.title}`,
      description: site.tagline,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = await getSiteConfig();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.bio,
    url: "https://aryan-choudhary.dev",
    sameAs: [site.socials.github, site.socials.linkedin],
  };

  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
