/**
 * JOURNEY SECTION DATA
 * Edit this file to update the "What Could Change Your Career" section.
 * No code changes needed anywhere else.
 */

import {
  Users,
  Link2,
  Camera,
  FileText,
  UserCheck,
  Star,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export const JOURNEY_EYEBROW = "The Sift Journey";

export const JOURNEY_HEADLINE = {
  partOne: "What Could Change Your Career",
  partTwo: "In 6 Months?",
};

export const JOURNEY_SUBHEADLINE = {
  plain: "Most people approach their careers without a clear plan.",
  bold: "Sift Academy gives you one.",
};

export const JOURNEY_BODY =
  "Every month you stay, you unlock something real. Not content to consume but opportunities that build your presence, sharpen your profile, and move your career forward.";

export interface JourneyMonth {
  month: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  linkLabel?: string;
  linkHref?: string;
}

export const JOURNEY_MONTHS: JourneyMonth[] = [
  {
    month: "01",
    label: "Month 1",
    title: "Community Access",
    description:
      "Full access from day one. Live sessions, monthly challenges, resource packs, corporate culture Q&A, and the member prize draw.",
    icon: Users,
    linkLabel: "Start here.",
    linkHref: "#membership",
  },
  {
    month: "02",
    label: "Month 2",
    title: "LinkedIn Profile Review",
    description:
      "A real person reviews your LinkedIn headline, about section, and experience, then delivers specific, actionable written feedback.",
    icon: Link2,
  },
  {
    month: "03",
    label: "Month 3",
    title: "Professional Headshot Session",
    description:
      "A fully guided headshot session so your profile photo matches the professional you are becoming. First impressions done right.",
    icon: Camera,
  },
  {
    month: "04",
    label: "Month 4",
    title: "CV and Personal Brand Audit",
    description:
      "A full review of your CV and professional presence. You receive a structured written report with prioritised changes to make.",
    icon: FileText,
  },
  {
    month: "05",
    label: "Month 5",
    title: "1-on-1 Mentorship Session",
    description:
      "One hour with a senior professional focused entirely on your career direction. Honest guidance from someone who has been where you are going.",
    icon: UserCheck,
  },
  {
    month: "06",
    label: "Month 6",
    title: "Community Spotlight",
    description:
      "Your work, your story, your name in front of the full Sift community and network. Visibility at the moment you are most ready for it.",
    icon: Star,
  },
];

export const JOURNEY_CALLOUT = {
  icon: Trophy,
  text: "By Month 6, you will have a stronger professional presence,",
  boldText: "clearer career direction, valuable connections,",
  suffix: "and a personal brand that opens more doors.",
};