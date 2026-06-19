/**
 * HERO SECTION DATA
 * Edit this file to update all text, cards, and social proof on the hero.
 * No code changes needed anywhere else.
 */

import {
  Briefcase,
  LayoutTemplate,
  TrendingUp,
  Users,
  Trophy,
  type LucideIcon,
} from "lucide-react";

/** The eyebrow label above the main headline */
export const HERO_EYEBROW = "Get Seen. Get In. Get Ahead." as const;

/**
 * The main headline, split into three parts.
 * Part 1 and 3 render in navy. Part 2 renders in the brand gradient.
 */
export const HERO_HEADLINE = {
  partOne: "Build A Career",
  partTwo: "People",
  partThree: "Notice.",
} as const;

/** Two body paragraphs below the headline */
export const HERO_BODY = [
  "Sift Academy is a professional growth membership designed for ambitious students and early-career professionals who want to build the skills, confidence, visibility, and network needed to get ahead.",
  "Through live learning, practical resources, community support, and milestone rewards, Sift helps you grow consistently and intentionally.",
];

/** Primary and secondary CTAs */
export const HERO_CTAS = {
  primary: { label: "Become A Member", href: "#membership" },
  secondary: { label: "Join The Waitlist", href: "#waitlist" },
} as const;

/** Social proof row below CTAs */
export const HERO_SOCIAL_PROOF = {
  // Paths to avatar images. Replace with real member photos.
  avatars: [
    "/images/avatars/avatar-1.jpg",
    "/images/avatars/avatar-2.jpg",
    "/images/avatars/avatar-3.jpg",
  ],
  text: "Join a community of ambitious learners making real progress.",
} as const;

/** The four feature pills at the bottom of the hero */
export interface FeaturePillData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HERO_FEATURES: FeaturePillData[] = [
  {
    icon: LayoutTemplate,
    title: "Live Learning",
    description: "Engaging sessions with real impact.",
  },
  {
    icon: Briefcase,
    title: "Practical Resources",
    description: "Tools, guides & templates that work.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Learn. Share. Grow. Together.",
  },
  {
    icon: Trophy,
    title: "Milestone Rewards",
    description: "Celebrate wins. Stay motivated.",
  },
];

/** Floating milestone cards on the right side of the hero */
export interface MilestoneCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Controls stagger delay and position. 0-indexed. */
  index: number;
}

export const HERO_MILESTONE_CARDS: MilestoneCardData[] = [
  {
    icon: Briefcase,
    title: "Internship Secured",
    description: "Landed a top product marketing internship.",
    index: 0,
  },
  {
    icon: LayoutTemplate,
    title: "Portfolio Published",
    description: "Showcased work that opened new doors.",
    index: 1,
  },
  {
    icon: TrendingUp,
    title: "First Promotion",
    description: "New role. Greater impact. Next level unlocked.",
    index: 2,
  },
  {
    icon: Users,
    title: "Community Member",
    description: "Connected. Supported. Growing together.",
    index: 3,
  },
  {
    icon: Trophy,
    title: "Career Milestone",
    description: "Celebrating wins that fuel the journey.",
    index: 4,
  },
];

/** The image used in the hero */
export const HERO_IMAGE = {
  src: "/images/hero-section.png",
  alt: "Three ambitious professionals collaborating and growing their careers with Sift Academy",
} as const;
