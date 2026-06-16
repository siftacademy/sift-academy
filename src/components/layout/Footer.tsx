"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FOOTER_TAGLINE,
  FOOTER_NAV,
  FOOTER_SOCIALS,
  FOOTER_CONTACT,
  FOOTER_COPYRIGHT,
  FOOTER_CTA,
} from "@/data/footer";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0A0830" }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Very faint top-left radial — barely visible */}
      <div
        className="absolute top-0 left-0 w-[480px] h-[480px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(58,190,249,0.045) 0%, transparent 60%)",
        }}
      />

      {/* ── Top CTA band ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="section-padding max-w-[1440px] mx-auto py-10 md:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="font-spotnik font-black text-white leading-tight mb-1"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
            >
              Ready to build a career people notice?
            </p>
            <p className="font-sora text-white/35 text-[0.8125rem]">
              Join Sift Academy today and start growing.
            </p>
          </div>
          <a
            href={FOOTER_CTA.href}
            className={cn(
              "inline-flex items-center gap-2 shrink-0",
              "px-6 py-3 rounded-full",
              "font-spotnik font-bold text-[0.875rem] text-white",
              "border border-white/15",
              "hover:bg-white hover:text-brand-navy",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            )}
          >
            {FOOTER_CTA.label}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="section-padding max-w-[1440px] mx-auto pt-14 md:pt-16 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 xl:gap-32">

          {/* Left: brand block */}
          <div className="flex flex-col gap-7 max-w-[300px]">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-lg"
              aria-label="Sift Academy — go to homepage"
            >
              <Image
                src="/images/sift-logo.svg"
                alt="Sift Academy"
                width={130}
                height={36}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Tagline */}
            <p className="font-sora text-white/40 text-[0.8125rem] leading-relaxed">
              {FOOTER_TAGLINE}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              {FOOTER_SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center",
                    "text-white/35 hover:text-white",
                    "transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  )}
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  aria-label={social.label}
                  role="listitem"
                  dangerouslySetInnerHTML={{ __html: social.icon }}
                />
              ))}
            </div>

            {/* Contact email */}
            <a
              href={`mailto:${FOOTER_CONTACT}`}
              className="font-sora text-white/30 text-[0.78rem] hover:text-white/60 transition-colors duration-150 w-fit"
            >
              {FOOTER_CONTACT}
            </a>
          </div>

          {/* Right: nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <p className="font-spotnik font-bold text-white/50 text-[10px] tracking-[0.2em] uppercase mb-5">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "font-sora text-white/40 text-[0.8125rem]",
                          "hover:text-white/80",
                          "transition-colors duration-150",
                          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="section-padding max-w-[1440px] mx-auto py-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="font-sora text-white/25 text-[0.75rem]">
            {FOOTER_COPYRIGHT}
          </p>
          
        </div>
      </div>
    </footer>
  );
}