import { ImageResponse } from "next/og";
import { getSiteConfig } from "@/lib/content";

export const alt = "Aryan Choudhary — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const site = await getSiteConfig();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#3b82f6", marginBottom: 16 }}>
          {site.title}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {site.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 24,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
