/**
 * FOOTER DATA
 * Edit this file to update all footer content.
 * No code changes needed anywhere else.
 */

export const FOOTER_TAGLINE =
  "Building the careers of Africa's next generation of professionals.";

export const FOOTER_NAV = [
  {
    heading: "Platform",
    links: [
      { label: "About",        href: "#about"       },
      { label: "Membership",   href: "#membership"  },
      { label: "Benefits",     href: "#benefits"    },
      { label: "How It Works", href: "#how-it-works"},
      { label: "Pricing",      href: "#membership"  },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Testimonials",  href: "#testimonials" },
      { label: "FAQ",           href: "#faq"          },
      { label: "Join Waitlist", href: "#waitlist"     },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",    href: "/privacy"  },
      { label: "Terms of Service",  href: "/terms"    },
      { label: "Cookie Policy",     href: "/cookies"  },
    ],
  },
] as const;

export const FOOTER_SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/siftacademyafrica/",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/siftacademyafrica/",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  // {
  //   label: "Twitter / X",
  //   href: "https://twitter.com/siftacademy",
  //   icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  // },
] as const;

export const FOOTER_CONTACT = "hello@siftacademy.com";

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} Sift Academy. All rights reserved.`;

export const FOOTER_CTA = {
  label: "Become A Member",
  href: "#membership",
} as const;