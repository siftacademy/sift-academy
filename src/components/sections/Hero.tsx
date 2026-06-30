"use client";

import React, { useId } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MilestoneCard } from "@/components/ui/MilestoneCard";
import { FeaturePill } from "@/components/ui/FeaturePill";
import { cn } from "@/lib/utils";
import {
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_BODY,
  HERO_LAUNCH_NOTICE,
  HERO_CTAS,
  HERO_SOCIAL_PROOF,
  HERO_FEATURES,
  HERO_MILESTONE_CARDS,
  HERO_IMAGE,
} from "@/data/hero";

const FLOAT_VARIANTS = ["medium", "slow", "fast", "medium"] as const;

/*
  Card positions — percentage based so they scale with the image container.
  Only rendered on lg+ where the image is visible.
*/
const CARD_POSITIONS: React.CSSProperties[] = [
  { top: "6%",  left: "6%"  },
  { top: "28%", right: "4%" },
  { top: "54%", left: "4%"  },
  { top: "74%", right: "3%" },
];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const headlineId = useId();

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #F8FAFF 0%, #FFFFFF 50%, #F4F9FF 100%)",
      }}
      aria-labelledby={headlineId}
    >
      {/* Faint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#1462FF 1px, transparent 1px), linear-gradient(90deg, #1462FF 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto section-padding">
        <div
          className={cn(
            "grid",
            "grid-cols-1",
            "lg:grid-cols-[1fr_44%]",
            "xl:grid-cols-[1fr_48%]",
            "2xl:grid-cols-[1fr_520px]",
            "gap-10 lg:gap-12 xl:gap-16",
            "items-start",
            "pt-[calc(64px+36px)] md:pt-[calc(80px+48px)]",
            "pb-16 md:pb-20 lg:pb-24"
          )}
        >
          {/* ── Left column: all text content ── */}
          <div className="flex flex-col w-full max-w-[580px] mx-auto lg:mx-0">

            {/* Eyebrow */}
            <motion.div
              custom={0.1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2.5 mb-6 md:mb-8"
            >
              <span
                className={cn(
                  "inline-flex items-center gap-2",
                  "px-3.5 py-1.5 rounded-full",
                  "border border-brand-navy/12",
                  "text-brand-navy/55 text-[11px] font-sora font-semibold",
                  "uppercase tracking-[0.14em]",
                  "bg-white/70"
                )}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 shrink-0"
                  aria-hidden="true"
                />
                {HERO_EYEBROW}
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              id={headlineId}
              className="font-spotnik mb-5 md:mb-6"
              style={{ lineHeight: 1.08 }}
            >
              <motion.span
                custom={0.18}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block font-light text-brand-navy/75"
                style={{ fontSize: "clamp(1.75rem, 3.4vw, 3rem)" }}
              >
                {HERO_HEADLINE.partOne}
              </motion.span>

              <motion.span
                custom={0.26}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block"
                style={{ fontSize: "clamp(1.75rem, 3.4vw, 3rem)" }}
              >
                <span className="gradient-text font-black">
                  {HERO_HEADLINE.partTwo}
                </span>
                <span className="text-brand-navy font-black">
                  {" "}{HERO_HEADLINE.partThree}
                </span>
              </motion.span>

              {/* Animated underline */}
              <motion.span
                className="block"
                custom={0.34}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 180 10"
                  fill="none"
                  className="w-28 sm:w-36 mt-1.5"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M1 7 C35 3, 75 8, 115 5 S155 2, 179 6"
                    stroke="url(#ug)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="ug" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1462FF" />
                      <stop offset="1" stopColor="#3ABEF9" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.span>
            </h1>

            {/* Body — single paragraph only */}
            <div className="mb-6">
              {HERO_BODY.map((p, i) => (
                <motion.p
                  key={i}
                  custom={0.38 + i * 0.08}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-sora text-brand-navy/50 leading-[1.8]"
                  style={{ fontSize: "clamp(0.875rem, 1.1vw, 0.9375rem)" }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Launch notice badge */}
            <motion.div
              custom={0.46}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start mb-7 md:mb-8"
            >
              <span
                className={cn(
                  "inline-flex items-center gap-2",
                  "px-3.5 py-2 rounded-full",
                  "border border-brand-blue/20",
                  "bg-brand-blue/[0.06]",
                  "text-brand-blue text-[12px] font-sora font-semibold"
                )}
              >
                <HERO_LAUNCH_NOTICE.icon
                  size={13}
                  className="shrink-0"
                  aria-hidden="true"
                />
                {HERO_LAUNCH_NOTICE.text}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={0.54}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8 md:mb-10"
            >
              <Button href={HERO_CTAS.primary.href} size="lg" showArrow>
                {HERO_CTAS.primary.label}
              </Button>

              {/* Join the Waitlist — opens external form in a new tab */}
              <Button
                href={HERO_CTAS.secondary.href}
                variant="secondary"
                size="lg"
                {...(HERO_CTAS.secondary.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {HERO_CTAS.secondary.label}
              </Button>
            </motion.div>

            {/* Divider */}
            <motion.div
              custom={0.64}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="h-px w-full bg-gradient-to-r from-brand-water/60 via-brand-water/30 to-transparent mb-7 md:mb-8"
              aria-hidden="true"
            />

            {/* Feature pills — 1 col on xs, 2 col on sm+ */}
            <motion.div
              custom={0.72}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-4"
              role="list"
              aria-label="Platform features"
            >
              {HERO_FEATURES.map((f, i) => (
                <FeaturePill
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  index={i}
                />
              ))}
            </motion.div>
          </div>

          {/* ── Right column: image — hidden below lg ── */}
          <div className="relative hidden lg:block self-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="relative w-full"
              style={{ aspectRatio: "3/4", maxHeight: "680px" }}
            >
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1280px) 44vw, 520px"
              />

              {/* Four-sided blend */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{ background: "linear-gradient(to bottom, #F8FAFF 0%, transparent 22%)" }} />
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{ background: "linear-gradient(to top, #FFFFFF 0%, transparent 30%)" }} />
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{ background: "linear-gradient(to right, #F8FAFF 0%, transparent 28%)" }} />
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{ background: "linear-gradient(to left, #F4F9FF 0%, transparent 20%)" }} />

              {/* Milestone cards */}
              <div role="list" aria-label="Member success stories">
                {HERO_MILESTONE_CARDS.slice(0, 4).map((card, i) => (
                  <div
                    key={card.title}
                    className="absolute z-10"
                    style={CARD_POSITIONS[i]}
                  >
                    <MilestoneCard
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      index={card.index}
                      floatVariant={FLOAT_VARIANTS[i]}
                    />
                  </div>
                ))}
              </div>

              {/* Active members badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_2px_16px_rgba(15,12,74,0.1)] whitespace-nowrap">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                  <span className="text-[11px] font-semibold font-sora text-brand-navy">
                    247 members active this week
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Mobile image — shown only below lg, sits below text ── */}
          <div className="relative lg:hidden w-full mt-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(15,12,74,0.1)]"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,12,74,0.18) 0%, transparent 50%)",
                }}
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_2px_12px_rgba(15,12,74,0.1)] whitespace-nowrap">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                  <span className="text-[10px] font-semibold font-sora text-brand-navy">
                    247 members active this week
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}