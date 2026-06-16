import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sift Academy – Build A Career People Notice",
    template: "%s | Sift Academy",
  },
  description:
    "Sift Academy is a professional growth membership for ambitious students and early-career professionals. Build the skills, confidence, visibility, and network needed to get ahead.",
  keywords: [
    "career development",
    "professional training",
    "workplace skills",
    "early career",
    "career growth",
    "professional membership",
  ],
  authors: [{ name: "Sift Academy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siftacademy.com",
    siteName: "Sift Academy",
    title: "Sift Academy – Build A Career People Notice",
    description:
      "Join Sift Academy and build the skills, confidence, visibility, and network needed to get ahead in your career.",
    images: [
      {
        url: "/images/sift-logo.svg",
        width: 1200,
        height: 630,
        alt: "Sift Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sift Academy – Build A Career People Notice",
    description:
      "Professional growth membership for ambitious students and early-career professionals.",
    images: ["/images/sift-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {children}
      </body>
    </html>
  );
}
