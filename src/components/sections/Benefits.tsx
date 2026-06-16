"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BENEFITS_EYEBROW,
  BENEFITS_HEADLINE,
  BENEFITS_BODY,
  BENEFITS,
  BENEFITS_CALLOUT,
  type Benefit,
} from "@/data/benefits";

/* ── Animation variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: d,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 + (i % 4) * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/* ── Shared card inner content ── */
function CardContent({ benefit }: { benefit: Benefit }) {
  return (
    <>
      {/* Image zone */}
      <div
        className="relative w-full overflow-hidden flex-shrink-0"
        style={{ background: benefit.tint, height: "180px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(20,98,255,0.04) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <Image
          src={benefit.image}
          alt={benefit.imageAlt}
          fill
          className="object-contain object-center p-6 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        {/* Number badge */}
        <div
          className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            border: "1.5px solid rgba(20,98,255,0.3)",
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(8px)",
          }}
          aria-hidden="true"
        >
          <span className="text-[10px] font-black font-spotnik text-brand-blue">
            {benefit.number}
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        <h3 className="font-spotnik font-bold text-brand-navy text-[0.9375rem] leading-snug mb-2.5">
          {benefit.title}
        </h3>
        <p className="font-sora text-brand-navy/50 text-[0.78rem] leading-relaxed flex-1 mb-4">
          {benefit.description}
        </p>
        <div className="mt-auto">
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-full font-sora text-[0.7rem] font-semibold text-brand-blue"
            style={{
              background: "rgba(20,98,255,0.07)",
              border: "1px solid rgba(20,98,255,0.1)",
            }}
          >
            {benefit.tagline}
          </span>
        </div>
      </div>
    </>
  );
}

/* ── Desktop: static 4x2 grid ── */
function DesktopGrid() {
  return (
    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {BENEFITS.map((benefit, i) => (
        <motion.div
          key={benefit.number}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          whileHover={{ y: -6, transition: { duration: 0.22 } }}
          className="group relative rounded-2xl overflow-hidden flex flex-col cursor-default"
          style={{
            background: "linear-gradient(160deg, #FFFFFF 0%, #F8FAFF 100%)",
            boxShadow:
              "0 1px 3px rgba(15,12,74,0.04), 0 8px 32px rgba(20,98,255,0.05), inset 0 1px 0 rgba(255,255,255,1)",
            border: "1px solid rgba(20,98,255,0.08)",
          }}
        >
          {/* Hover accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"
            style={{ background: "linear-gradient(90deg, #1462FF, #3ABEF9)" }}
            aria-hidden="true"
          />
          <CardContent benefit={benefit} />
        </motion.div>
      ))}
    </div>
  );
}

/* ── Mobile: horizontal swipeable carousel ── */
function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    // Card width = 85vw, gap = 12px
    const cardW = track.clientWidth * 0.85 + 12;
    const idx   = Math.round(track.scrollLeft / cardW);
    setActiveIndex(Math.min(idx, BENEFITS.length - 1));
  };

  return (
    <div className="sm:hidden">
      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          // Left padding so first card aligns with page margin
          paddingLeft: "clamp(1rem, 5vw, 6rem)",
          // Right padding so last card shows partial next
          paddingRight: "clamp(1rem, 5vw, 6rem)",
        }}
      >
        {BENEFITS.map((benefit, i) => (
          <motion.div
            key={benefit.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.05 + i * 0.04,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="snap-start flex-shrink-0 rounded-2xl overflow-hidden flex flex-col"
            style={{
              width: "85vw",
              background: "linear-gradient(160deg, #FFFFFF 0%, #F8FAFF 100%)",
              boxShadow:
                "0 1px 3px rgba(15,12,74,0.04), 0 8px 32px rgba(20,98,255,0.06)",
              border: "1px solid rgba(20,98,255,0.08)",
            }}
          >
            <CardContent benefit={benefit} />
          </motion.div>
        ))}

        {/* Trailing spacer so last card doesn't sit flush at edge */}
        <div className="flex-shrink-0 w-4" aria-hidden="true" />
      </div>

      {/* Dot indicators */}
      <div
        className="flex items-center justify-center gap-1.5 mt-2"
        role="tablist"
        aria-label="Benefit cards"
      >
        {BENEFITS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={activeIndex === i}
            aria-label={`Go to card ${i + 1}`}
            onClick={() => {
              const track = trackRef.current;
              if (!track) return;
              const cardW = track.clientWidth * 0.85 + 12;
              track.scrollTo({ left: i * cardW, behavior: "smooth" });
            }}
            className={cn(
              "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
              activeIndex === i
                ? "w-5 h-1.5 bg-brand-blue"
                : "w-1.5 h-1.5 bg-brand-navy/15"
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main export ── */
export function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });
  const calloutRef = useRef<HTMLDivElement>(null);
  const calloutInView = useInView(calloutRef, { once: true, margin: "-40px" });

  return (
    <section
      ref={sectionRef}
      id="benefits"
      aria-label="Everything Included In Your Membership"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F7F9FF 40%, #FFFFFF 100%)",
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(199,236,253,0.2) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(20,98,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative section-padding max-w-[1440px] mx-auto">

        {/* ── Header ── */}
        <div className="max-w-[720px] mx-auto text-center mb-14 md:mb-16">

          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-brand-blue/30" aria-hidden="true" />
            <span className="text-[10.5px] font-bold font-spotnik tracking-[0.2em] uppercase text-brand-blue/65">
              {BENEFITS_EYEBROW}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-brand-blue/30" aria-hidden="true" />
          </motion.div>

          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-spotnik font-black text-brand-navy leading-[1.06] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {BENEFITS_HEADLINE.partOne}{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">{BENEFITS_HEADLINE.partTwo}</span>
          </motion.h2>

          <motion.p
            custom={0.18}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-sora text-brand-navy/55 leading-relaxed"
            style={{ fontSize: "clamp(0.875rem, 1.15vw, 1.0625rem)" }}
          >
            {BENEFITS_BODY}
          </motion.p>
        </div>

        {/* ── Cards: desktop grid / mobile carousel ── */}
        <div className="mb-14 md:mb-16">
          {/* Mobile carousel — outside section-padding so cards bleed to edge */}
          <div className="-mx-[clamp(1rem,5vw,6rem)]">
            <MobileCarousel />
          </div>
          {/* Desktop grid — inside normal padding */}
          <DesktopGrid />
        </div>

        {/* ── Callout strip ── */}
       

      </div>
    </section>
  );
}