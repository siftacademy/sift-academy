"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  showArrow?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-sm gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center font-spotnik font-semibold tracking-wide",
    "transition-all duration-200 cursor-pointer select-none whitespace-nowrap",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    disabled || loading ? "opacity-40 pointer-events-none" : ""
  );

  const variants: Record<ButtonVariant, string> = {
    primary: cn(
      "bg-brand-navy text-white rounded-full",
      "hover:bg-brand-navy-soft",
      "shadow-[0_2px_16px_rgba(15,12,74,0.18)] hover:shadow-[0_4px_24px_rgba(15,12,74,0.28)]"
    ),
    secondary: cn(
      "bg-transparent text-brand-navy rounded-full",
      "ring-1 ring-brand-navy/25 hover:ring-brand-navy/60",
      "hover:bg-brand-navy/4"
    ),
    ghost: cn(
      "bg-transparent text-brand-blue",
      "border-b border-brand-blue/40 rounded-none pb-0.5",
      "hover:border-brand-blue"
    ),
  };

  const classes = cn(base, variants[variant], sizeStyles[size], className);

  const inner = (
    <>
      {loading && (
        <svg className="animate-spin h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={14}
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return <a href={href} className={cn(classes, "group")}>{inner}</a>;
  }

  return (
    <button className={cn(classes, "group")} disabled={disabled || loading} {...props}>
      {inner}
    </button>
  );
}