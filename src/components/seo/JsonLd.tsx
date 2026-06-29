/**
 * JSON-LD STRUCTURED DATA COMPONENT
 * Renders a <script type="application/ld+json"> tag.
 * This is what tells Google, ChatGPT, Perplexity, and other AI crawlers
 * unambiguous facts about your business, FAQ, and offerings.
 */

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is safe here because `data` is always developer-authored,
      // never raw user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}