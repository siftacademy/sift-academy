/**
 * FAQ SECTION DATA
 * Edit this file to update questions, answers, trust pills, and CTA.
 * No code changes needed anywhere else.
 */

import {
  RefreshCw,
  PlayCircle,
  Users,
  FileText,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";


export const FAQ_HEADLINE = {
  partOne: "Frequently Asked",
  partTwo: "Questions.",
};

export const FAQ_BODY = "Everything you need to know before joining Sift Academy.";

export interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    number: "01",
    question: "Is Sift Academy a course?",
    answer:
      "No. Sift Academy is a membership community focused on continuous professional growth. You get live sessions, resources, mentorship, and community — not a one-time course.",
  },
  {
    number: "02",
    question: "What happens if I miss a session?",
    answer:
      "All sessions are recorded and available in the recordings library. You can watch them at your own pace, anytime.",
  },
  {
    number: "03",
    question: "Who is Sift Academy for?",
    answer:
      "Students, recent graduates, and early-career professionals looking to grow their skills, confidence, visibility, and professional network.",
  },
  {
    number: "04",
    question: "Can I cancel anytime?",
    answer:
      "Yes. Membership can be cancelled at any time with no penalties or long-term commitments.",
  },
  {
    number: "05",
    question: "How do milestone rewards work?",
    answer:
      "Milestones are unlocked automatically through continuous membership. The longer you stay, the more you unlock — from reviews and sessions to job board access and community spotlights.",
  },
];

export interface TrustPill {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FAQ_TRUST_PILLS: TrustPill[] = [
  {
    icon: RefreshCw,
    title: "Cancel anytime",
    description: "Full control, always.",
  },
  {
    icon: PlayCircle,
    title: "Access recordings",
    description: "Learn on your schedule.",
  },
  {
    icon: Users,
    title: "Community support",
    description: "You are never alone.",
  },
  {
    icon: FileText,
    title: "Monthly resources",
    description: "New tools, every month.",
  },
];

export const FAQ_LEFT_PANEL = {
  heading: "Still have questions?",
  body: "We are here to help you every step of the way. Reach out to our team if you need any clarification.",
  email: "hello@siftacademy.com",
};

export const FAQ_CTA = {
  icon: TrendingUp,
  heading: "Ready to start your growth journey?",
  body: "Join a community of ambitious professionals committed to becoming their best.",
  button: "Become A Founding Member",
  href: "#membership",
};