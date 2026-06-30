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
  "Every month you remain a member, you unlock practical opportunities that help you become more visible, more confident, and more prepared for the next stage of your career.";

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
    title: "Full community access",
    description:
      "You're in. Live sessions, monthly challenges, resource packs, corporate culture Q&A, and the prize draw. The journey starts here.",
    icon: Users,
    linkLabel: "Start here.",
    linkHref: "#membership",
  },
  {
    month: "02",
    label: "Month 2",
    title: "LinkedIn Profile Review",
    description:
      "A real person reviews your LinkedIn headline, about section, experience, and gives specific, actionable written feedback",
    icon: Link2,
  },
  {
    month: "03",
    label: "Month 3",
    title: "CV and Personal Brand Audit",
    description:
      "Full review of your CV and overall professional presence. A structured written report with specific changes to make.",
    icon: FileText,
  },
  {
    month: "04",
    label: "Month 4",
    title: "Complimentary Personal brand Asset",
    description:
      "Work with our team to get a professionally written personal bio + a header image for yourself",
    icon: Camera,
  },
  {
    month: "05",
    label: "Month 5",
    title: "1-on-1 Mentorship Session",
    description:
      "A one-hour session with a senior professional guiding you on your career. Visibility and guidance in the same month.",
    icon: UserCheck,
  },
  {
    month: "06",
    label: "Month 6",
    title: "Sift job board + Opportunity Access",
    description:
      "Access to Sift's curated job board: verified roles, internships, and opportunities shared directly with the community",
    icon: Star,
  },
];

export const JOURNEY_CALLOUT = {
  icon: Trophy,
  text: "By Month 6, you will have a stronger professional presence,",
  boldText: "clearer career direction, valuable connections,",
  suffix: "and a personal brand that opens more doors.",
};