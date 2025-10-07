import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Blogger Star",
  description:
    "MSVL theme starter theme. Built with Astro, Tailwind CSS, and Markdown.",
  href: "#",
  author: "Eric Mosvel",
  locale: "en-CA",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Blog",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
  documentation: {
    path: "#",
    label: "Documentation",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:eric.mosvel@gmail.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/ericmosvel",
  },
  linkedIn: {
    label: "LinkedIn",
    href: "#",
  },
};
