"use client";

import React from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { CheckCircle2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MilestoneCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  floatVariant?: "slow" | "medium" | "fast";
  className?: string;
}

const floatTransition: Record<"slow" | "medium" | "fast", Transition> = {
  slow:   { duration: 7, repeat: Infinity, ease: "easeInOut" },
  medium: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
  fast:   { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
};

const entranceVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.7 + i * 0.12,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function MilestoneCard({
  icon: Icon,
  title,
  description,
  index,
  floatVariant = "medium",
  className,
}: MilestoneCardProps) {
  return (
    <motion.div
      custom={index}
      variants={entranceVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={floatTransition[floatVariant]}
        className={cn(
          "flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl cursor-default",
          "bg-white/95 backdrop-blur-md",
          "border border-white/80",
          "shadow-[0_4px_24px_rgba(15,12,74,0.08),0_1px_4px_rgba(15,12,74,0.04)]",
          "max-w-[210px]",
          className
        )}
        role="listitem"
      >
        <div
          className="shrink-0 w-7 h-7 rounded-lg bg-brand-blue/8 flex items-center justify-center"
          aria-hidden="true"
        >
          <Icon size={14} className="text-brand-blue" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1">
            <p className="text-[11px] font-semibold text-brand-navy font-spotnik leading-tight truncate">
              {title}
            </p>
            <CheckCircle2 size={11} className="text-brand-blue shrink-0" />
          </div>
          <p className="text-[10px] text-brand-navy/45 font-spotnik leading-tight mt-0.5 truncate">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}