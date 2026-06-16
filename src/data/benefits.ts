/**
 * BENEFITS SECTION DATA
 * Edit this file to update the "Everything Included" section.
 * No code changes needed anywhere else.
 */

import { Award, type LucideIcon } from "lucide-react";

export const BENEFITS_EYEBROW = "Everything Included In Your Membership";

export const BENEFITS_HEADLINE = {
  partOne: "Everything You Need",
  partTwo: "To Keep Growing",
};

export const BENEFITS_BODY =
  "Your membership combines practical learning, professional development resources, accountability, and community support designed to help you grow both personally and professionally.";

export interface Benefit {
  number: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  imageAlt: string;
  /** Subtle tint color for the image background zone */
  tint: string;
}

export const BENEFITS: Benefit[] = [
  {
    number: "01",
    title: "Live Soft Skills Session",
    description:
      "One live session every month covering workplace communication, personal branding, work ethics, negotiation, confidence, and other essential career skills.",
    tagline: "Learn. Ask. Grow.",
    image: "/images/microphone.png",
    imageAlt: "Microphone representing live sessions",
    tint: "rgba(20,98,255,0.05)",
  },
  {
    number: "02",
    title: "Practical Tools Session",
    description:
      "Learn how to apply workplace skills using tools such as Excel, Canva, Notion, PowerPoint, and more.",
    tagline: "Tools that make you better.",
    image: "/images/tools.png",
    imageAlt: "Workplace tools including Canva, Excel, Notion and PowerPoint",
    tint: "rgba(58,190,249,0.06)",
  },
  {
    number: "03",
    title: "Recordings Library",
    description:
      "Access previous sessions anytime and learn at your own pace.",
    tagline: "Learn on your time.",
    image: "/images/recordings.png",
    imageAlt: "Laptop with video player representing recordings library",
    tint: "rgba(20,98,255,0.05)",
  },
  {
    number: "04",
    title: "Monthly Resource Pack",
    description:
      "Templates, scripts, checklists, guides, and frameworks designed for real workplace situations.",
    tagline: "Resources you can use.",
    image: "/images/resources.png",
    imageAlt: "Documents and folders representing monthly resource packs",
    tint: "rgba(58,190,249,0.06)",
  },
  {
    number: "05",
    title: "Corporate Culture Q&A",
    description:
      "Get practical advice on workplace situations, difficult conversations, and career decisions.",
    tagline: "Real advice. Real impact.",
    image: "/images/qa.png",
    imageAlt: "Chat bubbles representing corporate culture Q&A",
    tint: "rgba(15,12,74,0.04)",
  },
  {
    number: "06",
    title: "Monthly Challenge",
    description:
      "Simple activities designed to help you apply what you have learned and build momentum.",
    tagline: "Small steps. Big results.",
    image: "/images/challenge.png",
    imageAlt: "Checklist with pen representing monthly challenges",
    tint: "rgba(20,98,255,0.05)",
  },
  {
    number: "07",
    title: "Monthly Prize Draw",
    description:
      "Attend at least one session and stand a chance to win exciting rewards.",
    tagline: "Engage. Participate. Win.",
    image: "/images/prize.png",
    imageAlt: "Gift box representing the monthly prize draw",
    tint: "rgba(58,190,249,0.06)",
  },
  {
    number: "08",
    title: "Community Access",
    description:
      "Connect with ambitious professionals who are committed to growth and accountability.",
    tagline: "Your people. Your support.",
    image: "/images/community.png",
    imageAlt: "People figures representing community access",
    tint: "rgba(20,98,255,0.05)",
  },
];

export const BENEFITS_CALLOUT = {
  icon: Award,
  text: "Every session, every resource, every connection is designed to help you",
  highlight: "grow your skills, grow your confidence,",
  suffix: "and grow your career.",
};