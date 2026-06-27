/**
 * PRICING SECTION DATA
 * Edit this file to update the membership pricing section.
 * No code changes needed anywhere else.
 */

import { User, Crown, CheckCircle2, Shield, type LucideIcon } from "lucide-react";

export const PRICING_EYEBROW = "Section 5 — Membership Pricing";

export const PRICING_HEADLINE = {
  partOne: "One Membership.",
  partTwo: "Full Access.",
};

export const PRICING_BODY =
  "Everything you need to grow — live sessions, expert resources, a supportive community, and rewards that celebrate your progress.";

export interface PricingFeature {
  text: string;
  bold?: boolean;
}

export interface PricingPlan {
  id: string;
  icon: LucideIcon;
  name: string;
  price: string;
  period: string;
  badge?: string;
  urgency?: string;
  features: PricingFeature[];
  cta: string;
  ctaHref: string;
  featured: boolean;
  disabled?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "core",
    icon: User,
    name: "Core Membership",
    price: "₦6,500",
    period: "/month",
    features: [
      { text: "Access to all live sessions" },
      { text: "Community access" },
      { text: "Monthly resource packs" },
      { text: "Recordings library" },
      { text: "Monthly challenges" },
      { text: "Monthly prize draws" },
      { text: "Milestone rewards" },
    ],
    cta: "Coming Soon",
    ctaHref: "#",
    featured: false,
    disabled: true,
  },
  {
    id: "founding",
    icon: Crown,
    name: "Founding Member",
    price: "₦5,000",
    period: "/month",
    badge: "Founding Member Offer",
    urgency: "Available only to the first 50 members.",
    features: [
      { text: "Access to all live sessions", bold: true },
      { text: "Community access", bold: true },
      { text: "Monthly resource packs", bold: true },
      { text: "Recordings library", bold: true },
      { text: "Monthly challenges", bold: true },
      { text: "Monthly prize draws", bold: true },
      { text: "Milestone rewards", bold: true },
    ],
    cta: "Become A Founding Member",
    ctaHref: "https://flutterwave.com/pay/1vr94oitdmtb",
    featured: true,
    disabled: false,
  },
];

export const PRICING_TRUST = [
  {
    icon: Shield,
    title: "Cancel Anytime",
    description: "No long-term commitments.",
  },
  {
    icon: CheckCircle2,
    title: "Instant Access",
    description: "Start learning from day one.",
  },
];

export const PRICING_CALLOUT = {
  text: "SIFT is more than a membership — it's your competitive edge.",
  highlight: "Invest in your growth. Elevate your future.",
};