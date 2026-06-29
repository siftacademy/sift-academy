import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { Journey } from "@/components/sections/Journey";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICE_SCHEMA, FAQ_SCHEMA } from "@/data/structured-data";

export const metadata: Metadata = {
  title: "Build A Career People Notice",
  description:
    "Sift Academy is a professional growth membership for ambitious students and early-career professionals. Live sessions, mentorship, resources, and a supportive community. Join as a Founding Member from ₦5,000/month.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/*
        Page-specific structured data.
        SERVICE_SCHEMA tells search engines and AI tools exactly
        what is being sold, to whom, and at what price.
        FAQ_SCHEMA makes the FAQ section eligible for rich snippets
        and direct citation by AI answer engines.
      */}
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Pricing />
        <Journey />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}