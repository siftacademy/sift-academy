"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturePillProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1 + i * 0.07,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function FeaturePill({ icon: Icon, title, description, index, className }: FeaturePillProps) {
  return (
    <motion.div
      custom={index}
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn("flex items-center gap-3 group", className)}
    >
      <div
        className="shrink-0 w-8 h-8 rounded-xl bg-brand-navy/5 group-hover:bg-brand-blue/10 flex items-center justify-center transition-colors duration-200"
        aria-hidden="true"
      >
        <Icon size={15} className="text-brand-navy/60 group-hover:text-brand-blue transition-colors duration-200" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-xs font-semibold text-brand-navy font-spotnik">{title}</p>
        <p className="text-[11px] text-brand-navy/45 font-spotnik mt-0.5">{description}</p>
      </div>
    </motion.div>
  );
}