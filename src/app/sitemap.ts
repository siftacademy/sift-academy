import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-config";

/**
 * SITEMAP
 * Next.js automatically serves this at /sitemap.xml.
 * Add a new entry here every time a new page/route is created.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // {
    //   url: `${SITE_CONFIG.url}/about`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // Add future pages here, e.g.:
    // {
    //   url: `${SITE_CONFIG.url}/membership`,
    //   lastModified: now,
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
  ];
}