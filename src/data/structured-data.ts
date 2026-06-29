/**
 * STRUCTURED DATA DEFINITIONS
 * Edit this file to update the facts AI crawlers and Google read about Sift Academy.
 * These power the JSON-LD injected into page <head> sections.
 */

import { SITE_CONFIG, absoluteUrl } from "@/lib/seo-config";

/**
 * Organization schema — establishes Sift Academy as a real entity.
 * This is the single most important schema for both Google and AI
 * answer engines, since it anchors every other claim about the brand.
 */
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: absoluteUrl("/images/sift-logo.svg"),
  description: SITE_CONFIG.description,
  sameAs: [
    "https://instagram.com/siftacademy",
    "https://linkedin.com/company/siftacademy",
    "https://twitter.com/siftacademy",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@siftacademy.com",
    contactType: "Customer Support",
  },
} as const;

/**
 * Course / Service schema — describes the membership offering itself.
 * Helps AI engines understand what Sift Academy actually sells and to whom.
 */
export const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Professional Development Membership",
  provider: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  name: "Sift Academy Membership",
  description:
    "A monthly membership combining live workplace skills sessions, practical resource packs, mentorship, community support, and milestone rewards for students and early-career professionals.",
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Students and early-career professionals",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Founding Member",
      price: "5000",
      priceCurrency: "NGN",
      availability: "https://schema.org/LimitedAvailability",
    },
  ],
} as const;

/**
 * FAQ schema — pulled from the same content shown in the FAQ section.
 * This is the highest-leverage schema for AI answer engines specifically,
 * since tools like ChatGPT and Google's AI Overviews lift Q&A pairs
 * almost verbatim when they are marked up this way.
 *
 * Keep this in sync with src/data/faq.ts — when you edit one, edit both.
 */
export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Sift Academy a course?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Sift Academy is a membership community focused on continuous professional growth. Members get live sessions, resources, mentorship, and community rather than a one-time course.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I miss a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "All sessions are recorded and available in the recordings library, so members can watch them at their own pace, anytime.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Sift Academy for?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Students, recent graduates, and early-career professionals looking to grow their skills, confidence, visibility, and professional network.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Membership can be cancelled at any time with no penalties or long-term commitments.",
      },
    },
    {
      "@type": "Question",
      name: "How do milestone rewards work?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Milestones are unlocked automatically through continuous membership. The longer a member stays, the more they unlock, from reviews and sessions to job board access and community spotlights.",
      },
    },
  ],
} as const;

/**
 * Breadcrumb schema generator — call with the current page's trail.
 * Improves how Google displays your URL path in search results.
 */
export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}