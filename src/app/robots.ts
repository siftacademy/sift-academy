import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-config";

/**
 * ROBOTS.TXT
 * Next.js automatically serves this at /robots.txt.
 *
 * This explicitly allows the major AI answer-engine crawlers
 * (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) in addition
 * to standard search engine bots. Many sites accidentally block
 * these by default via overly broad disallow rules — being explicit
 * here is what makes a site eligible to be cited by AI tools at all.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicit allow for AI crawlers used by major answer engines
      { userAgent: "GPTBot", allow: "/" },          // OpenAI / ChatGPT
      { userAgent: "ChatGPT-User", allow: "/" },     // ChatGPT browsing
      { userAgent: "ClaudeBot", allow: "/" },        // Anthropic / Claude
      { userAgent: "anthropic-ai", allow: "/" },     // Anthropic (legacy UA)
      { userAgent: "PerplexityBot", allow: "/" },    // Perplexity
      { userAgent: "Google-Extended", allow: "/" },  // Google AI features
      { userAgent: "Bingbot", allow: "/" },          // Bing / Copilot
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}