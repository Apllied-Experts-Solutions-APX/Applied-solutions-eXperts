export const siteConfig = {
  name: "APPLIED SOLUTIONS eXPERTS",
  abbreviation: "",
  tagline: "Guiding you through the digital frontier.",
  coreIdea:
    "APX helps institutions, businesses and the next generation use technology to learn, build, solve and grow.",
  audiences: [
    "Schools",
    "TVET institutions",
    "Educational/training institutions",
    "Businesses",
    "Learners and young people",
  ] as const,
  primaryCta: {
    label: "Let's Talk",
    href: "/contact",
  },
} as const;

export type SiteConfig = typeof siteConfig;
