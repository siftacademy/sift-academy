"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PRICING_EYEBROW,
  PRICING_HEADLINE,
  PRICING_BODY,
  PRICING_PLANS,
  PRICING_TRUST,
  PRICING_CALLOUT,
  type PricingPlan,
} from "@/data/pricing";

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

/* ── Core (non-featured) card ── */
function CoreCard({ plan }: { plan: PricingPlan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="relative flex flex-col rounded-3xl p-8 h-full"
      style={{
        background: "linear-gradient(160deg, #FFFFFF 0%, #F8FAFF 100%)",
        border: "1px solid rgba(20,98,255,0.1)",
        boxShadow:
          "0 4px 24px rgba(20,98,255,0.06), inset 0 1px 0 rgba(255,255,255,1)",
        opacity: plan.disabled ? 0.6 : 1,
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: "linear-gradient(135deg, #EEF5FF 0%, #E4EFFF 100%)",
          border: "1px solid rgba(20,98,255,0.12)",
        }}
        aria-hidden="true"
      >
        <plan.icon size={24} className="text-brand-blue" strokeWidth={1.5} />
      </div>

      {/* Plan name */}
      <p className="text-[11px] font-bold font-spotnik tracking-[0.2em] uppercase text-brand-navy/50 mb-3">
        {plan.name}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-1">
        <span
          className="font-spotnik font-black text-brand-navy"
          style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1 }}
        >
          {plan.price}
        </span>
        <span className="font-sora text-brand-navy/45 text-sm">
          {plan.period}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-brand-blue/8 my-6" aria-hidden="true" />

      {/* Features */}
      <div className="mb-8">
        <p className="text-[10px] font-bold font-spotnik tracking-[0.18em] uppercase text-brand-navy/35 mb-4">
          Includes:
        </p>
        <ul className="flex flex-col gap-3" role="list">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2
                size={16}
                className="text-brand-blue shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="font-sora text-brand-navy/60 text-[0.8375rem]">
                {f.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        {plan.disabled ? (
          <div
            className="flex items-center justify-center w-full px-6 py-3.5 rounded-full font-spotnik font-semibold text-[0.875rem] tracking-wide text-brand-navy/35 cursor-not-allowed"
            style={{
              border: "1.5px solid rgba(15,12,74,0.1)",
              background: "rgba(15,12,74,0.03)",
            }}
            aria-disabled="true"
            role="button"
          >
            {plan.cta}
          </div>
        ) : (
          <a
            href={plan.ctaHref}
            className={cn(
              "flex items-center justify-center w-full",
              "px-6 py-3.5 rounded-full",
              "font-spotnik font-semibold text-[0.875rem] tracking-wide",
              "text-brand-blue",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            )}
            style={{
              border: "1.5px solid rgba(20,98,255,0.25)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(20,98,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(20,98,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(20,98,255,0.25)";
            }}
          >
            {plan.cta}
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ── Founding (featured) card ── */
function FoundingCard({ plan }: { plan: PricingPlan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: 0.2,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="relative flex flex-col rounded-3xl p-8 h-full"
      style={{
        background:
          "linear-gradient(145deg, #0F0C4A 0%, #1a1660 40%, #0d1875 100%)",
        boxShadow:
          "0 24px 80px rgba(20,98,255,0.25), 0 8px 32px rgba(15,12,74,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        border: "1px solid rgba(58,190,249,0.2)",
      }}
    >
      {/* Glow blob inside card */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(58,190,249,0.12) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(20,98,255,0.15) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Badge */}
      {plan.badge && (
        <div className="mb-5">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full font-spotnik font-bold text-[10px] tracking-[0.18em] uppercase"
            style={{
              background: "linear-gradient(135deg, #1462FF 0%, #3ABEF9 100%)",
              color: "white",
              boxShadow: "0 4px 16px rgba(20,98,255,0.4)",
            }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(8px)",
        }}
        aria-hidden="true"
      >
        <plan.icon size={24} className="text-brand-picton" strokeWidth={1.5} />
      </div>

      {/* Plan name */}
      <p className="text-[11px] font-bold font-spotnik tracking-[0.2em] uppercase text-white/40 mb-3">
        {plan.name}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-2">
        <span
          className="font-spotnik font-black"
          style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            lineHeight: 1,
            background: "linear-gradient(135deg, #FFFFFF 0%, #C7ECFD 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {plan.price}
        </span>
        <span className="font-sora text-white/40 text-sm">{plan.period}</span>
      </div>

      {/* Urgency */}
      {plan.urgency && (
        <div
          className="inline-flex items-center px-3.5 py-1.5 rounded-full mb-6 self-start"
          style={{
            background: "rgba(199,236,253,0.1)",
            border: "1px solid rgba(199,236,253,0.2)",
          }}
        >
          <span className="font-sora text-[10.5px] text-brand-water/80 tracking-wide">
            {plan.urgency}
          </span>
        </div>
      )}

      {/* Divider */}
      <div
        className="h-px w-full my-5"
        style={{ background: "rgba(255,255,255,0.08)" }}
        aria-hidden="true"
      />

      {/* Features */}
      <div className="mb-8 flex-1">
        <p className="text-[10px] font-bold font-spotnik tracking-[0.18em] uppercase text-white/30 mb-4">
          Includes:
        </p>
        <ul className="flex flex-col gap-3" role="list">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2
                size={16}
                className="text-brand-picton shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "font-sora text-[0.8375rem]",
                  f.bold ? "font-semibold text-white/90" : "text-white/65"
                )}
              >
                {f.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA — links to Flutterwave checkout */}
      <a
        href={plan.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center gap-2 w-full",
          "px-6 py-4 rounded-xl",
          "font-spotnik font-bold text-[0.9rem] tracking-wide text-white",
          "transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-picton focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy",
          "hover:opacity-90 active:scale-[0.98]"
        )}
        style={{
          background: "linear-gradient(135deg, #1462FF 0%, #3ABEF9 100%)",
          boxShadow: "0 4px 24px rgba(20,98,255,0.5)",
        }}
      >
        {plan.cta}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </motion.div>
  );
}

/* ── Main export ── */
export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="membership"
      aria-label="Membership Pricing"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #F0F5FF 0%, #F8FAFF 35%, #FAFCFF 65%, #EEF4FF 100%)",
      }}
    >
      {/* Abstract background blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(199,236,253,0.35) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(20,98,255,0.08) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      {/* Dot grid top-right */}
      <div
        className="absolute top-8 right-8 pointer-events-none opacity-40"
        aria-hidden="true"
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={16 + col * 32}
                cy={16 + row * 32}
                r="1.5"
                fill="#1462FF"
                fillOpacity={0.15 - (row + col) * 0.01}
              />
            ))
          )}
        </svg>
      </div>

      <div className="relative section-padding max-w-[1440px] mx-auto">

        {/* ── Header ── */}
        <div className="max-w-[640px] mx-auto text-center mb-14 md:mb-16">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div
              className="h-px w-8 bg-gradient-to-r from-transparent to-brand-blue/30"
              aria-hidden="true"
            />
            <span className="text-[10.5px] font-bold font-spotnik tracking-[0.2em] uppercase text-brand-blue/65">
              {PRICING_EYEBROW}
            </span>
            <div
              className="h-px w-8 bg-gradient-to-l from-transparent to-brand-blue/30"
              aria-hidden="true"
            />
          </motion.div>

          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-spotnik font-black text-brand-navy leading-[1.06] mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
          >
            {PRICING_HEADLINE.partOne}{" "}
            <span className="gradient-text">{PRICING_HEADLINE.partTwo}</span>
          </motion.h2>

          <motion.p
            custom={0.18}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-sora text-brand-navy/55 leading-relaxed"
            style={{ fontSize: "clamp(0.875rem, 1.15vw, 1.0625rem)" }}
          >
            {PRICING_BODY}
          </motion.p>
        </div>

        {/* ── Pricing cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[820px] mx-auto mb-10">
          {PRICING_PLANS.map((plan) =>
            plan.featured ? (
              <FoundingCard key={plan.id} plan={plan} />
            ) : (
              <CoreCard key={plan.id} plan={plan} />
            )
          )}
        </div>

        {/* ── Trust signals ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mb-14 md:mb-16"
        >
          {PRICING_TRUST.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(20,98,255,0.08)" }}
                aria-hidden="true"
              >
                <item.icon size={15} className="text-brand-blue" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-spotnik font-bold text-brand-navy text-[0.8125rem]">
                  {item.title}
                </p>
                <p className="font-sora text-brand-navy/45 text-[0.75rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Callout ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 p-6 md:p-8 rounded-2xl max-w-[680px] mx-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(20,98,255,0.1)",
              boxShadow:
                "0 4px 32px rgba(20,98,255,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            {/* Icon */}
            <div
              className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto sm:mx-0"
              style={{
                background: "linear-gradient(135deg, #EEF5FF 0%, #dbeeff 100%)",
                border: "1px solid rgba(20,98,255,0.15)",
              }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"
                  stroke="#1462FF"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#1462FF"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Text */}
            <div className="flex flex-col items-center text-center sm:text-left">
              <p
                className="font-sora text-brand-navy/55 leading-relaxed mb-1"
                style={{ fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)" }}
              >
                {PRICING_CALLOUT.text}
              </p>
              <p
                className="gradient-text font-spotnik font-bold"
                style={{ fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)" }}
              >
                {PRICING_CALLOUT.highlight}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}