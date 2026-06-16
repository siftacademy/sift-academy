"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { Plus, Minus, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FAQ_HEADLINE,
  FAQ_BODY,
  FAQ_ITEMS,
  FAQ_LEFT_PANEL,
  type FAQItem,
} from "@/data/faq";

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

/* ─── Single FAQ row ─── */
function FAQRow({
  item,
  index,
  isOpen,
  onToggle,
  isLast,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: 0.06 + index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={cn(!isLast && "border-b border-brand-navy/6")}
    >
      <button
        onClick={onToggle}
        className="group w-full text-left py-7 flex items-start gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
      >
        {/* Number */}
        <span
          className="shrink-0 text-[11px] font-black font-spotnik tabular-nums transition-colors duration-300 pt-1"
          style={{ color: isOpen ? "#1462FF" : "rgba(15,12,74,0.2)" }}
          aria-hidden="true"
        >
          {item.number}
        </span>

        {/* Question */}
        <span
          className="flex-1 font-spotnik font-bold leading-snug transition-colors duration-200"
          style={{
            fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
            color: isOpen ? "#0F0C4A" : "rgba(15,12,74,0.65)",
          }}
        >
          {item.question}
        </span>

        {/* Toggle */}
        <div
          className={cn(
            "shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300",
            isOpen
              ? "shadow-[0_2px_12px_rgba(20,98,255,0.2)]"
              : "bg-brand-navy/5 group-hover:bg-brand-navy/8"
          )}
          style={
            isOpen
              ? { background: "linear-gradient(135deg,#1462FF,#3ABEF9)" }
              : {}
          }
          aria-hidden="true"
        >
          {isOpen
            ? <Minus size={13} className="text-white" strokeWidth={2.5} />
            : <Plus size={13} className="text-brand-navy/40 group-hover:text-brand-navy/60" strokeWidth={2.5} />
          }
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="ans"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              opacity: { duration: 0.22, delay: 0.05 },
            }}
            className="overflow-hidden"
          >
            <div className="flex gap-5 pb-7 pl-9">
              {/* Gradient accent bar */}
              <div
                className="shrink-0 w-[2px] rounded-full self-stretch"
                style={{
                  background: "linear-gradient(180deg,#1462FF,#3ABEF9)",
                  minHeight: "20px",
                }}
                aria-hidden="true"
              />
              <p
                className="font-sora text-brand-navy/55 leading-[1.85]"
                style={{ fontSize: "clamp(0.84rem,1vw,0.9375rem)" }}
              >
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main export ─── */
export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px" });
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const toggle = (i: number) => setOpenIndex(p => p === i ? null : i);

  return (
    <>
      {/* ─────────────────────────────────────────
          FAQ SECTION
      ───────────────────────────────────────── */}
      <section
        ref={sectionRef}
        id="faq"
        aria-label="Frequently Asked Questions"
        className="relative overflow-hidden py-16 md:py-32"
        style={{
          background:
            "linear-gradient(160deg,#F8FAFF 0%,#FFFFFF 50%,#F4F8FF 100%)",
        }}
      >
        {/* Subtle ambient — left side only */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(199,236,253,0.12) 0%, transparent 60%)",
          }}
        />
        {/* Very faint top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at top,rgba(20,98,255,0.04) 0%,transparent 70%)",
          }}
        />

        <div className="relative section-padding max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-16 xl:gap-24 items-start">

            {/* ── LEFT: sticky panel ── */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="lg:sticky lg:top-28 flex flex-col gap-10"
            > 
              {/* Headline */}
              <div>
                <h2
                  className="font-spotnik font-black text-brand-navy leading-[1.06] mb-5"
                  style={{ fontSize: "clamp(2.5rem,3.2vw,3rem)" }}
                >
                  {FAQ_HEADLINE.partOne}{" "}
                  <span className="gradient-text">{FAQ_HEADLINE.partTwo}</span>
                </h2>
                <p
                  className="font-sora text-brand-navy/50 leading-relaxed"
                  style={{ fontSize: "clamp(0.875rem,1.05vw,0.9375rem)" }}
                >
                  {FAQ_BODY}
                </p>
              </div>

              {/* Decorative number strip — quiet typographic detail */}
             

              {/* Still have questions card */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-5"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(255,255,255,0.9) 0%,rgba(240,246,255,0.8) 100%)",
                  border: "1px solid rgba(20,98,255,0.09)",
                  boxShadow:
                    "0 4px 24px rgba(20,98,255,0.05), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(20,98,255,0.07)" }}
                  aria-hidden="true"
                >
                  <MessageCircle size={18} className="text-brand-blue" strokeWidth={1.75} />
                </div>

                <div>
                  <p className="font-spotnik font-bold text-brand-navy text-[0.9375rem] mb-1.5">
                    {FAQ_LEFT_PANEL.heading}
                  </p>
                  <p className="font-sora text-brand-navy/50 text-[0.8rem] leading-relaxed">
                    {FAQ_LEFT_PANEL.body}
                  </p>
                </div>

                {/* Email link */}
                <a
                  href={`mailto:${FAQ_LEFT_PANEL.email}`}
                  className="inline-flex items-center gap-2.5 group"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-150 group-hover:bg-brand-blue"
                    style={{ background: "rgba(20,98,255,0.08)" }}
                    aria-hidden="true"
                  >
                    <Mail size={12} className="text-brand-blue group-hover:text-white transition-colors duration-150" strokeWidth={1.75} />
                  </div>
                  <span className="font-sora text-[0.8rem] font-semibold text-brand-blue group-hover:text-brand-picton transition-colors duration-150">
                    {FAQ_LEFT_PANEL.email}
                  </span>
                </a>
              </div>
            </motion.div>

            {/* ── RIGHT: scrolling accordion ── */}
            <div className="flex flex-col">
              {FAQ_ITEMS.map((item, i) => (
                <FAQRow
                  key={item.number}
                  item={item}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                  isLast={i === FAQ_ITEMS.length - 1}
                />
              ))}

              {/* Bottom note */}
             
            </div>

          </div>
        </div>
      </section>
      
    </>
  );
}