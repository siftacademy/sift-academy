"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  JOURNEY_EYEBROW,
  JOURNEY_HEADLINE,
  JOURNEY_SUBHEADLINE,
  JOURNEY_BODY,
  JOURNEY_MONTHS,
  JOURNEY_CALLOUT,
} from "@/data/journey";

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const STOP_X = [100, 300, 500, 700, 900, 1100];
const STOP_Y = [155, 125, 98,  72,  48,  25 ];

const CURVE = `
  M ${STOP_X[0]} ${STOP_Y[0]}
  C 180 148, 220 132, ${STOP_X[1]} ${STOP_Y[1]}
  S 420 104, ${STOP_X[2]} ${STOP_Y[2]}
  S 620 78,  ${STOP_X[3]} ${STOP_Y[3]}
  S 820 52,  ${STOP_X[4]} ${STOP_Y[4]}
  S 1020 28, ${STOP_X[5]} ${STOP_Y[5]}
`;

/* ── Abstract corner decoration ── */
function CornerDecoration() {
  return (
    <div
      className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
      style={{ width: "420px", height: "420px" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 w-full h-full"
      >
        {/* Outer arc */}
        <circle
          cx="420" cy="420" r="300"
          stroke="#1462FF" strokeOpacity="0.055" strokeWidth="1"
          fill="none"
        />
        {/* Mid arc */}
        <circle
          cx="420" cy="420" r="220"
          stroke="#3ABEF9" strokeOpacity="0.07" strokeWidth="1"
          fill="none"
        />
        {/* Inner arc */}
        <circle
          cx="420" cy="420" r="140"
          stroke="#1462FF" strokeOpacity="0.09" strokeWidth="1"
          fill="none"
        />
        {/* Innermost filled arc */}
        <circle
          cx="420" cy="420" r="70"
          stroke="#3ABEF9" strokeOpacity="0.12" strokeWidth="1.5"
          fill="#1462FF" fillOpacity="0.025"
        />
        {/* Radial spokes */}
        {[210, 225, 240, 255, 270, 285, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x1  = 420 + 70  * Math.cos(rad);
          const y1  = 420 + 70  * Math.sin(rad);
          const x2  = 420 + 300 * Math.cos(rad);
          const y2  = 420 + 300 * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#1462FF"
              strokeOpacity={0.04 - i * 0.004}
              strokeWidth="1"
            />
          );
        })}
        {/* Small accent dot */}
        <circle
          cx="420" cy="420" r="5"
          fill="#1462FF" fillOpacity="0.25"
        />
      </svg>
    </div>
  );
}

/* ── Top-left subtle accent ── */
function TopLeftAccent() {
  return (
    <div
      className="absolute top-0 left-0 pointer-events-none overflow-hidden"
      style={{ width: "280px", height: "280px" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Grid of dots */}
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={30 + col * 36}
              cy={30 + row * 36}
              r="1.5"
              fill="#1462FF"
              fillOpacity={0.08 - (row + col) * 0.006}
            />
          ))
        )}
      </svg>
    </div>
  );
}

/* ── Mobile vertical stepper ── */
function MobileLayout() {
  return (
    <div className="lg:hidden flex flex-col">
      {JOURNEY_MONTHS.map((item, i) => {
        const isLast = i === JOURNEY_MONTHS.length - 1;
        return (
          <motion.div
            key={item.month}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.07,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center shrink-0 pt-1">
              <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(15,12,74,0.15)]">
                <span className="text-[11px] font-black font-spotnik text-white/70">
                  {item.month}
                </span>
              </div>
              {!isLast && (
                <div className="w-px flex-1 my-2 bg-gradient-to-b from-brand-navy/20 to-transparent min-h-[40px]" />
              )}
            </div>
            <div className={cn("flex-1 pb-10", isLast && "pb-0")}>
              <p className="text-[10px] font-bold font-spotnik tracking-[0.18em] uppercase text-brand-blue mb-1.5 mt-2">
                {item.label}
              </p>
              <h3 className="font-spotnik font-bold text-brand-navy text-[0.9375rem] leading-snug mb-2">
                {item.title}
              </h3>
              <p className="font-sora text-brand-navy/50 text-[0.8125rem] leading-relaxed">
                {item.description}
              </p>
              {item.linkLabel && item.linkHref && (
                <a
                  href={item.linkHref}
                  className="inline-flex items-center gap-1 mt-2.5 text-[0.8125rem] font-semibold font-sora text-brand-blue group"
                >
                  {item.linkLabel}
                  <ArrowRight size={12} className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Main export ── */
export function Journey() {
  const sectionRef     = useRef<HTMLElement>(null);
  const timelineRef    = useRef<HTMLDivElement>(null);
  const inView         = useInView(sectionRef, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-label="The Sift Journey"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F0F5FF 0%, #F8FAFF 35%, #FAFCFF 65%, #EEF4FF 100%)",
      }}
    >
      {/* Abstract decorations */}
      <CornerDecoration />
      <TopLeftAccent />

      {/* Ambient centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(199,236,253,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative section-padding max-w-[1440px] mx-auto">

        {/* ── Header ── */}
        <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">

          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-brand-blue/30" aria-hidden="true" />
            <span className="text-[10.5px] font-bold font-spotnik tracking-[0.22em] uppercase text-brand-blue/65">
              {JOURNEY_EYEBROW}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-brand-blue/30" aria-hidden="true" />
          </motion.div>

          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-spotnik font-black text-brand-navy leading-[1.06] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {JOURNEY_HEADLINE.partOne}{" "}
            <span className="gradient-text">{JOURNEY_HEADLINE.partTwo}</span>
          </motion.h2>

          <motion.p
            custom={0.18}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-sora text-brand-navy/60 leading-relaxed mb-3"
            style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.0625rem)" }}
          >
            {JOURNEY_SUBHEADLINE.plain}{" "}
            <strong className="font-semibold text-brand-navy/80">
              {JOURNEY_SUBHEADLINE.bold}
            </strong>
          </motion.p>

          <motion.p
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-sora text-brand-navy/45 leading-relaxed"
            style={{ fontSize: "clamp(0.8125rem, 1.05vw, 0.9375rem)" }}
          >
            {JOURNEY_BODY}
          </motion.p>
        </div>

        {/* ── Desktop timeline ── */}
        <div ref={timelineRef} className="hidden lg:block mb-14">
          <div className="relative">

            {/* SVG curve layer */}
            <div
              className="absolute left-0 right-0 pointer-events-none"
              style={{ top: "60px", height: "180px" }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1200 180"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="ghostGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="#1462FF" stopOpacity="0.2" />
                    <stop offset="50%"  stopColor="#3ABEF9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1462FF" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="drawnGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="#1462FF" />
                    <stop offset="100%" stopColor="#3ABEF9" />
                  </linearGradient>
                </defs>

                {/* Ghost dashed path */}
                <path
                  d={CURVE}
                  stroke="url(#ghostGrad)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="5 4"
                  strokeLinecap="round"
                />

                {/* Animated drawn path */}
                <motion.path
                  d={CURVE}
                  stroke="url(#drawnGrad)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    timelineInView
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                />
              </svg>
            </div>

            {/* 6-column grid */}
            <div className="grid grid-cols-6 gap-4">
              {JOURNEY_MONTHS.map((item, i) => {
                const iconTop = 60 + STOP_Y[i] - 64 - 20;
                return (
                  <motion.div
                    key={item.month}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate={timelineInView ? "visible" : "hidden"}
                    className="flex flex-col items-center"
                  >
                    {/* Vertical spacer */}
                    <div style={{ height: `${Math.max(0, iconTop)}px` }} />

                    {/* Icon circle */}
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center shrink-0",
                        "bg-white border border-brand-blue/15",
                        "shadow-[0_4px_20px_rgba(20,98,255,0.08)]",
                        "transition-all duration-300",
                        "hover:border-brand-blue/40 hover:shadow-[0_6px_28px_rgba(20,98,255,0.16)] hover:-translate-y-1"
                      )}
                    >
                      <item.icon size={22} className="text-brand-blue" strokeWidth={1.5} />
                    </div>

                    {/* Connector */}
                    <div
                      className="w-px bg-gradient-to-b from-brand-blue/20 to-brand-blue/40"
                      style={{ height: "20px" }}
                      aria-hidden="true"
                    />

                    {/* Dot */}
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shrink-0"
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + i * 0.12, duration: 0.3 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    </motion.div>

                    {/* Label + title only */}
                    <div className="w-full mt-6 text-left px-1">
                      <p className="text-[10px] font-bold font-spotnik tracking-[0.18em] uppercase text-brand-blue mb-2">
                        {item.label}
                      </p>
                      <h3 className="font-spotnik font-bold text-brand-navy text-[0.9375rem] leading-snug">
                        {item.title}
                      </h3>
                      {item.linkLabel && item.linkHref && (
                        <a
                          href={item.linkHref}
                          className="inline-flex items-center gap-1 mt-3 text-[0.78rem] font-semibold font-sora text-brand-blue hover:text-brand-picton transition-colors group"
                        >
                          {item.linkLabel}
                          <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile stepper ── */}
        <div className="lg:hidden mb-12">
          <MobileLayout />
        </div>

        {/* ── Callout ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <div
            className="flex items-start sm:items-center gap-5 p-6 md:p-8 rounded-2xl border border-brand-blue/10 max-w-[780px] mx-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow:
                "0 4px 32px rgba(20,98,255,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <div
              className="shrink-0 w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center shadow-[0_6px_20px_rgba(20,98,255,0.28)]"
              aria-hidden="true"
            >
              <JOURNEY_CALLOUT.icon size={24} className="text-white" strokeWidth={1.75} />
            </div>
            <p
              className="font-sora text-brand-navy/65 leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 1.15vw, 1.0625rem)" }}
            >
              {JOURNEY_CALLOUT.text}{" "}
              <strong className="font-semibold text-brand-navy">
                {JOURNEY_CALLOUT.boldText}
              </strong>{" "}
              {JOURNEY_CALLOUT.suffix}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}