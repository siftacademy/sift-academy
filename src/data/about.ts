/**
 * ABOUT SECTION DATA
 * Edit this file to update the "Why Sift Exists" section.
 * No code changes needed anywhere else.
 */

import {
  MessageCircle,
  User,
  Users,
  Eye,
  GraduationCap,
  Shield,
  Heart,
  type LucideIcon,
} from "lucide-react";

export const ABOUT_EYEBROW = "Why Sift Exists";

export const ABOUT_HEADLINE = {
  partOne: "Talent Gets You\nIn The Door.",
  partTwo: "Visibility Helps\nYou Move Forward.",
};

export const ABOUT_BODY =
  "Many talented people never get the opportunities they deserve because nobody taught them how to navigate the workplace.";

export interface AboutFeature {
  icon: LucideIcon;
  text: string;
}

export const ABOUT_FEATURES: AboutFeature[] = [
  { icon: MessageCircle, text: "How to communicate confidently." },
  { icon: User,          text: "How to position themselves professionally." },
  { icon: Users,         text: "How to build meaningful relationships." },
  { icon: Eye,           text: "How to become visible for the right opportunities." },
];

export const ABOUT_CTA = {
  label: "Become A Member",
  href: "#membership",
} as const;

/* Split image */
export const ABOUT_IMAGES = {
  invisible: {
    src: "/images/invisible.jpg",
    alt: "A talented professional who is overlooked and undervalued",
  },
  visible: {
    src: "/images/visible.jpg",
    alt: "A confident professional who is recognized and moving forward",
  },
} as const;

/* Invisible side badges */
export const ABOUT_INVISIBLE_BADGES = [
  "Little visibility",
  "No guidance",
  "Limited network",
  "Unclear direction",
];

/* Visible side badges */
export const ABOUT_VISIBLE_BADGES = [
  "High visibility",
  "Strong network",
  "Clear direction",
  "Better opportunities",
];

/* Bottom strip */
export const ABOUT_STRIP_HEADLINE =
  "At Sift, we help you build the workplace skills, confidence, visibility, and support system you need to";

export const ABOUT_STRIP_CTA = "grow your career intentionally.";

export interface AboutPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    icon: GraduationCap,
    title: "Workplace Skills",
    description: "Practical skills that help you show up and stand out.",
  },
  {
    icon: Shield,
    title: "Confidence",
    description: "Build self-belief and communicate with impact.",
  },
  {
    icon: Users,
    title: "Visibility",
    description: "Showcase your strengths to the right people.",
  },
  {
    icon: Heart,
    title: "Support System",
    description: "A community that supports your growth every step.",
  },
];