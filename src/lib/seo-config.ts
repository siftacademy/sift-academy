/**
 * SITE-WIDE SEO CONFIG
 * Single source of truth for SEO constants used across the site.
 * Edit this file to update site name, domain, and default social previews.
 */

export const SITE_CONFIG = {
  name: "Sift Academy",
  // Update this to your real production domain once confirmed
  url: "https://www.siftacademy.com",
  description:
    "Sift Academy is a professional growth membership for ambitious students and early-career professionals. Build the skills, confidence, visibility, and network needed to get ahead.",
  ogImage: "/images/og-default.jpg",
  twitterHandle: "@siftacademy",
  locale: "en_US",
  keywords: [
    "career development membership",
    "professional growth Nigeria",
    "early career mentorship",
    "workplace skills training",
    "personal branding for professionals",
    "career coaching community",
    "Sift Academy",
  ],
} as const;

/**
 * Builds a consistent absolute URL for a given path.
 * Use this anywhere a full URL is required (canonical tags, JSON-LD, OG).
 */
export function absoluteUrl(path: string): string {
  return `${SITE_CONFIG.url}${path.startsWith("/") ? path : `/${path}`}`;
}