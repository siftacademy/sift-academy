/**
 * FINAL CTA SECTION DATA
 * Edit this file to update the final call-to-action section.
 * No code changes needed anywhere else.
 */

import { Users, Star, Share2, type LucideIcon } from "lucide-react";


export const CTA_HEADLINE = {
  partOne: "The Career You Want",
  partTwo: "Will Not",
  partThree: "Build Itself.",
};

export const CTA_BODY =
  "Join a community designed to help you grow your skills, increase your visibility, build meaningful connections, and move forward with confidence.";

export const CTA_BUTTONS = {
  primary: { label: "Become A Member", href: "#membership" },
  secondary: { label: "Join The Waitlist", href: "https://forms.gle/jVXRCyckeaCxgpkeA" },
} as const;

export interface CTAFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CTA_FEATURES: CTAFeature[] = [
  {
    icon: Users,
    title: "Grow Your Skills",
    description: "Learn. Improve. Stay ahead.",
  },
  {
    icon: Star,
    title: "Increase Visibility",
    description: "Be seen for the value you bring.",
  },
  {
    icon: Share2,
    title: "Build Connections",
    description: "Meaningful relationships that open doors.",
  },
];

export const CTA_IMAGE = {
  src: "/images/cta-banner.jpg",
  alt: "An open book with a winding staircase rising from its pages toward a flag at the summit",
} as const;

export const CTA_TAGLINE = [
  { plain: "Get ", highlight: "Seen." },
  { plain: "Get ", highlight: "In." },
  { plain: "Get ", highlight: "Ahead." },
];