"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_CTA } from "@/data/nav";
import { Button } from "../ui/Button";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-[0_1px_0_0_rgba(199,236,253,0.8)]"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="section-padding flex items-center justify-between h-16 md:h-20 max-w-[1440px] mx-auto"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
            aria-label="Sift Academy — go to homepage"
          >
            <Image
              src="/images/sift-logo.svg"
              alt="Sift Academy"
              width={100}
              height={40}
              className="h-6 md:h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium font-spotnik",
                    "text-brand-navy/70 hover:text-brand-navy hover:bg-brand-blue-soft",
                    "transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href={NAV_CTA.href} size="md" showArrow>
              {NAV_CTA.label}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg",
              "text-brand-navy hover:bg-brand-blue-soft",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            )}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brand-navy/40 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            <motion.div
              key="mobile-menu"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-white shadow-2xl flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex justify-end p-5 border-b border-brand-water/50">
                {/* <Image
                  src="/images/sift-logo.svg"
                  alt="Sift Academy"
                  width={110}
                  height={32}
                  className="h-7 w-auto object-contain"
                /> */}
                <button
                  onClick={closeMobile}
                  className="p-2 rounded-lg text-brand-navy hover:bg-brand-blue-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5">
                <ul className="flex flex-col gap-1" role="list">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className={cn(
                          "block px-4 py-3 rounded-xl",
                          "text-base font-medium font-spotnik text-brand-navy/80",
                          "hover:bg-brand-blue-soft hover:text-brand-navy",
                          "transition-colors duration-150",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-5 border-t border-brand-water/50">
                <Button
                  href={NAV_CTA.href}
                  size="lg"
                  showArrow
                  className="w-full justify-center"
                  onClick={closeMobile}
                >
                  {NAV_CTA.label}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}