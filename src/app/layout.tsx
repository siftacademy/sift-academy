import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG, absoluteUrl } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORGANIZATION_SCHEMA } from "@/data/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} – Build A Career People Notice`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} – Build A Career People Notice`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: absoluteUrl(SITE_CONFIG.ogImage),
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    title: `${SITE_CONFIG.name} – Build A Career People Notice`,
    description: SITE_CONFIG.description,
    images: [absoluteUrl(SITE_CONFIG.ogImage)],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /*
    Hints AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) generally
    respect the same robots directives as Googlebot, gated through robots.txt
    rather than meta tags. See public robots.ts for the actual gating.
  */

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F0C4A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sora antialiased">
        {/* Site-wide structured data — present on every page */}
        <JsonLd data={ORGANIZATION_SCHEMA} />
        {children}
      </body>
    </html>
  );
}