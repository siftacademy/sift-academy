"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  ABOUT_EYEBROW,
  ABOUT_HEADLINE,
  ABOUT_BODY,
  ABOUT_FEATURES,
  ABOUT_CTA,
  ABOUT_IMAGES,
  ABOUT_INVISIBLE_BADGES,
  ABOUT_VISIBLE_BADGES,
  ABOUT_STRIP_HEADLINE,
  ABOUT_STRIP_CTA,
  ABOUT_PILLARS,
} from "@/data/about";

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

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (d = 0) => ({
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const slideIn: Variants = {
  hidden: (side: "left" | "right") => ({
    opacity: 0,
    x: side === "left" ? -16 : 16,
  }),
  visible: (d = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: d,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/* ── Invisible badge pill ── */
function InvisibleBadge({ text, index }: { text: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5 + index * 0.08,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="flex items-center gap-2 px-3.5 py-2 rounded-full whitespace-nowrap"
      style={{
        background: "rgba(15,12,74,0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center shrink-0">
        <X size={9} className="text-white/60" />
      </div>
      <span className="text-[11.5px] font-sora text-white/75">{text}</span>
    </motion.div>
  );
}

/* ── Visible badge pill ── */
function VisibleBadge({ text, index }: { text: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5 + index * 0.08,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="flex items-center gap-2 px-3.5 py-2 rounded-full whitespace-nowrap"
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(20,98,255,0.15)",
        boxShadow: "0 2px 12px rgba(20,98,255,0.08)",
      }}
    >
      <div className="w-4 h-4 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
        <Check size={9} className="text-white" strokeWidth={3} />
      </div>
      <span className="text-[11.5px] font-semibold font-sora text-brand-navy">{text}</span>
    </motion.div>
  );
}

/* ── Split image composition ── */
function SplitImage() {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(15,12,74,0.16)]">

      {/* Left half — Invisible (dark, desaturated) */}
      <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
        <Image
          src={ABOUT_IMAGES.invisible.src}
          alt={ABOUT_IMAGES.invisible.alt}
          fill
          className="object-cover object-center"
          style={{ filter: "grayscale(60%) brightness(0.55)" }}
          sizes="25vw"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,12,74,0.35) 0%, rgba(15,12,74,0.15) 100%)",
          }}
        />
        {/* Right-edge fade to blend */}
        <div
          className="absolute inset-y-0 right-0 w-20"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(15,12,74,0.6))",
          }}
          aria-hidden="true"
        />

        {/* INVISIBLE label */}
        <div className="absolute top-6 left-0 right-0 flex flex-col items-center gap-2 z-10">
          <span className="text-[11px] font-bold font-spotnik tracking-[0.25em] uppercase text-white/70">
            Invisible
          </span>
          <div className="w-6 h-px bg-white/30" aria-hidden="true" />
          <p className="text-white/50 font-sora text-[11px] text-center px-4 leading-relaxed">
            Talented but overlooked.<br />Working hard with no recognition.
          </p>
        </div>

        {/* Invisible badges */}
        <div className="absolute bottom-6 left-4 flex flex-col gap-2 z-10">
          {ABOUT_INVISIBLE_BADGES.map((text, i) => (
            <InvisibleBadge key={text} text={text} index={i} />
          ))}
        </div>
      </div>

      {/* Right half — Visible (bright, full color) */}
      <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <Image
          src={ABOUT_IMAGES.visible.src}
          alt={ABOUT_IMAGES.visible.alt}
          fill
          className="object-cover object-center"
          sizes="25vw"
        />
        {/* Subtle blue overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,98,255,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Left-edge fade to blend */}
        <div
          className="absolute inset-y-0 left-0 w-20"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(240,245,255,0.4))",
          }}
          aria-hidden="true"
        />

        {/* VISIBLE label */}
        <div className="absolute top-6 left-0 right-0 flex flex-col items-center gap-2 z-10">
          <span className="text-[11px] font-bold font-spotnik tracking-[0.25em] uppercase text-brand-blue">
            Visible
          </span>
          <div className="w-6 h-px bg-brand-blue/40" aria-hidden="true" />
          <p className="text-brand-navy/60 font-sora text-[11px] text-center px-4 leading-relaxed">
            Recognized. Valued.<br />Moving forward with confidence.
          </p>
        </div>

        {/* Visible badges */}
        <div className="absolute bottom-6 right-4 flex flex-col gap-2 z-10 items-end">
          {ABOUT_VISIBLE_BADGES.map((text, i) => (
            <VisibleBadge key={text} text={text} index={i} />
          ))}
        </div>
      </div>

      {/* Centre divider line */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px z-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent 5%, rgba(58,190,249,0.5) 30%, rgba(20,98,255,0.7) 50%, rgba(58,190,249,0.5) 70%, transparent 95%)",
        }}
        aria-hidden="true"
      />

      {/* Centre SIFT badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative"
        >
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(20,98,255,0.3) 0%, transparent 70%)",
              transform: "scale(1.8)",
            }}
            aria-hidden="true"
          />
          {/* Badge */}
          <div
            className="relative w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #0F0C4A 0%, #1462FF 100%)",
              boxShadow:
                "0 0 0 3px rgba(58,190,249,0.4), 0 0 0 6px rgba(20,98,255,0.15), 0 8px 32px rgba(20,98,255,0.4)",
            }}
          >
            <span className="text-[11px] font-black font-spotnik text-white tracking-wider">
              SIFT
            </span>
          </div>
          {/* Horizontal connector dots */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -left-6 w-5 h-px"
            style={{ background: "linear-gradient(to left, rgba(58,190,249,0.6), transparent)" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 -right-6 w-5 h-px"
            style={{ background: "linear-gradient(to right, rgba(58,190,249,0.6), transparent)" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 -left-7 w-1.5 h-1.5 rounded-full bg-brand-picton"
            style={{ boxShadow: "0 0 6px rgba(58,190,249,0.8)" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 -right-7 w-1.5 h-1.5 rounded-full bg-brand-picton"
            style={{ boxShadow: "0 0 6px rgba(58,190,249,0.8)" }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Bottom pillars strip ── */
function PillarsStrip() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="mt-16 md:mt-20 rounded-2xl overflow-hidden border border-brand-blue/8"
      style={{
        background:
          "linear-gradient(135deg, #F4F8FF 0%, #FAFCFF 50%, #F4F8FF 100%)",
        boxShadow: "0 2px 24px rgba(20,98,255,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* Headline */}
      <div className="px-8 pt-8 pb-6 text-center border-b border-brand-blue/8">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-sora text-brand-navy/65 leading-relaxed max-w-[680px] mx-auto"
          style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.0625rem)" }}
        >
          {ABOUT_STRIP_HEADLINE}{" "}
          <span className="gradient-text font-semibold">{ABOUT_STRIP_CTA}</span>
        </motion.p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {ABOUT_PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            custom={0.1 + i * 0.08}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={cn(
              "flex items-start gap-4 p-6 md:p-7",
              i < 3 ? "md:border-r border-brand-blue/8" : "",
              i < 2 ? "border-b md:border-b-0 border-brand-blue/8" : ""
            )}
          >
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #EEF5FF 0%, #E4EFFF 100%)",
              }}
              aria-hidden="true"
            >
              <pillar.icon size={18} className="text-brand-blue" strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-spotnik font-bold text-brand-navy text-[0.9rem] mb-1">
                {pillar.title}
              </p>
              <p className="font-sora text-brand-navy/50 text-[0.78rem] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Main export ── */
export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="Why Sift Exists"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Subtle background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(199,236,253,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative section-padding max-w-[1440px] mx-auto">

        {/* ── Main grid: left text + right split image ── */}
        <div className="grid lg:grid-cols-[420px_1fr] xl:grid-cols-[460px_1fr] gap-10 xl:gap-16 items-center">

          {/* Left column */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-2.5 mb-6"
            >
              <div
                className="h-px w-8"
                style={{ background: "linear-gradient(90deg, #1462FF, #3ABEF9)" }}
                aria-hidden="true"
              />
              <span className="text-[10.5px] font-bold font-spotnik tracking-[0.22em] uppercase text-brand-blue/70">
                {ABOUT_EYEBROW}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              custom={0.08}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-spotnik font-black text-brand-navy leading-[1.06] mb-6"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.75rem)" }}
            >
              {ABOUT_HEADLINE.partOne.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
              {ABOUT_HEADLINE.partTwo.split("\n").map((line, i) => (
                <span key={i} className="block gradient-text">{line}</span>
              ))}
            </motion.h2>

            {/* Body */}
            <motion.p
              custom={0.16}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-sora text-brand-navy/55 leading-relaxed mb-8"
              style={{ fontSize: "clamp(0.875rem, 1.1vw, 1rem)" }}
            >
              {ABOUT_BODY}
            </motion.p>

            {/* Feature list */}
            <div className="flex flex-col gap-0 mb-10">
              {ABOUT_FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  custom={0.22 + i * 0.07}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-4 py-3.5 border-b border-brand-navy/6 last:border-b-0"
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg, #EEF5FF 0%, #E4EFFF 100%)" }}
                    aria-hidden="true"
                  >
                    <feature.icon size={15} className="text-brand-blue" strokeWidth={1.75} />
                  </div>
                  <p className="font-sora text-brand-navy/65 text-[0.875rem] leading-relaxed pt-1">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Button href={ABOUT_CTA.href} size="lg" showArrow>
                {ABOUT_CTA.label}
              </Button>
            </motion.div>
          </div>

          {/* Right column: split image */}
          <motion.div
            custom={0.1}
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
            style={{ height: "min(70vh, 560px)" }}
          >
            <SplitImage />
          </motion.div>
        </div>

        {/* Bottom pillars strip */}
        <PillarsStrip />

      </div>
    </section>
  );
}