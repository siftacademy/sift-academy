"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CTA_HEADLINE,
  CTA_BODY,
  CTA_BUTTONS,
  CTA_FEATURES,
  CTA_IMAGE,
  CTA_TAGLINE,
} from "@/data/cta";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: d,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px" });
  const taglineInView = useInView(taglineRef, { once: true, margin: "-40px" });

  return (
    <section
      ref={sectionRef}
      id="join"
      aria-label="Final Call To Action"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #F8FAFF 0%, #FFFFFF 40%, #F4F8FF 100%)",
      }}
    >
      {/* Ambient glow — top left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(199,236,253,0.22) 0%, transparent 60%)",
        }}
      />
      {/* Ambient — bottom right behind image */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(58,190,249,0.08) 0%, transparent 60%)",
        }}
      />

      {/* ── Main hero row ── */}
      <div className="relative grid lg:grid-cols-[1fr_48%] xl:grid-cols-[1fr_52%] min-h-[88vh] items-center">

        {/* LEFT: text content */}
        <div className="section-padding max-w-none py-12 md:py-24 lg:py-28 flex flex-col">

          

          {/* Headline — maximum presence */}
          <h2
            className="font-spotnik font-black text-brand-navy leading-[1.02] mb-5"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}
            aria-label={`${CTA_HEADLINE.partOne} ${CTA_HEADLINE.partTwo} ${CTA_HEADLINE.partThree}`}
          >
            <motion.span
              custom={0.08}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="block"
            >
              {CTA_HEADLINE.partOne}
            </motion.span>
            <motion.span
              custom={0.16}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="block"
            >
              {CTA_HEADLINE.partTwo}{" "}
              <span className="gradient-text">{CTA_HEADLINE.partThree}</span>
            </motion.span>
          </h2>

          {/* Decorative arrow line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: "80px" } : {}}
            transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 mb-8 overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="h-px flex-1"
              style={{ background: "linear-gradient(90deg,#1462FF,#3ABEF9)" }}
            />
            {/* Diamond tip */}
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <rect
                x="1" y="1" width="6" height="6"
                rx="1"
                transform="rotate(45 4 4)"
                fill="#3ABEF9"
              />
            </svg>
          </motion.div>

          {/* Body */}
          <motion.p
            custom={0.32}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-sora text-brand-navy/55 leading-[1.85] mb-10 max-w-[460px]"
            style={{ fontSize: "clamp(0.9rem, 1.15vw, 1.0625rem)" }}
          >
            {CTA_BODY}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            {/* Primary */}
            <a
              href={CTA_BUTTONS.primary.href}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-spotnik font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              style={{
                background: "linear-gradient(135deg,#1462FF 0%,#3ABEF9 100%)",
                boxShadow: "0 4px 24px rgba(20,98,255,0.32)",
                fontSize: "clamp(0.875rem,1vw,0.9375rem)",
              }}
            >
              {CTA_BUTTONS.primary.label}
              <ArrowRight size={15} aria-hidden="true" />
            </a>

            {/* Secondary */}
            <a
              href={CTA_BUTTONS.secondary.href}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-spotnik font-semibold text-brand-navy transition-all duration-200 hover:bg-brand-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
              style={{
                border: "1.5px solid rgba(15,12,74,0.2)",
                fontSize: "clamp(0.875rem,1vw,0.9375rem)",
              }}
            >
              {CTA_BUTTONS.secondary.label}
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Feature trio */}
          <motion.div
            custom={0.48}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8"
            role="list"
          >
            {CTA_FEATURES.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
                role="listitem"
              >
                <div
                  className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(20,98,255,0.07)" }}
                  aria-hidden="true"
                >
                  <f.icon size={15} className="text-brand-blue" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-spotnik font-bold text-brand-navy text-[0.8375rem] leading-tight mb-0.5">
                    {f.title}
                  </p>
                  <p className="font-sora text-brand-navy/45 text-[0.75rem] leading-snug">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: book image — bleeds to viewport edge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative hidden lg:block h-full min-h-[88vh]"
          aria-hidden="true"
        >
          <Image
            src={CTA_IMAGE.src}
            alt={CTA_IMAGE.alt}
            fill
            priority
            className="object-cover object-left-bottom"
            sizes="52vw"
          />
          {/* Left-edge blend into section background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #F8FAFF 0%, rgba(248,250,255,0.4) 20%, transparent 45%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(248,250,255,0.3) 0%, transparent 20%)",
            }}
          />
        </motion.div>
      </div>

      {/* ── Typographic tagline strip ── */}
      <div
        ref={taglineRef}
        className="relative border-t border-brand-navy/6"
        style={{
          background:
            "linear-gradient(135deg, #FAFCFF 0%, #FFFFFF 50%, #F8FAFF 100%)",
        }}
      >
        {/* Top decorative line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
          style={{
            background: "linear-gradient(135deg,#1462FF,#3ABEF9)",
            boxShadow: "0 0 8px rgba(20,98,255,0.4)",
          }}
          aria-hidden="true"
        />

        <div className="section-padding max-w-[1440px] mx-auto py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={taglineInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-0"
            aria-label="Get Seen. Get In. Get Ahead."
          >
            {CTA_TAGLINE.map((tag, i) => (
              <React.Fragment key={i}>
                <span
                  className="font-spotnik font-black text-brand-navy whitespace-nowrap"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
                >
                  {tag.plain}
                  <span className="gradient-text">{tag.highlight}</span>
                </span>
                {i < CTA_TAGLINE.length - 1 && (
                  <span
                    className="hidden sm:block mx-6 md:mx-10 text-brand-navy/15 font-light select-none"
                    style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Bottom diamond separator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={taglineInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mt-6"
            aria-hidden="true"
          >
            <div
              className="h-px w-24 md:w-40"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(20,98,255,0.2))",
              }}
            />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect
                x="1.5" y="1.5" width="7" height="7"
                rx="1"
                transform="rotate(45 5 5)"
                fill="#1462FF"
                fillOpacity="0.35"
              />
            </svg>
            <div
              className="h-px w-24 md:w-40"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(20,98,255,0.2))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}