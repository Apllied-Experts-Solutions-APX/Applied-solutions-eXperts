import { homeAudiences, homeEcosystem, homeWhy } from "@/data/homepage";
import { siteConfig } from "@/config/site";

export const aboutPage = {
  seo: {
    title: "About APX",
    description:
      "APX is a Kenyan technology and innovation company helping institutions, businesses and the next generation use technology to learn, build, solve and grow.",
  },
  hero: {
    eyebrow: siteConfig.abbreviation,
    title: "About APX",
    description:
      "A Kenyan technology and innovation company helping institutions, businesses and the next generation use technology to learn, build, solve and grow.",
  },
  who: {
    id: "who-apx-is",
    title: "Who APX is",
    lead: "APPLIED SOLUTIONS eXPERTS — APX — is one ecosystem for learning, innovation and practical technology.",
    body: siteConfig.coreIdea,
  },
  what: {
    id: "what-apx-does",
    title: "What APX does",
    lead: "APX puts technology to work in classrooms, workshops, institutions and businesses.",
    items: [
      {
        title: "Learn",
        body: "Hands-on STEM, digital skills and mentorship that help people use technology with confidence.",
      },
      {
        title: "Build",
        body: "Projects, systems and tools that turn ideas into something practical.",
      },
      {
        title: "Solve",
        body: "Software, infrastructure and support for real operational needs.",
      },
      {
        title: "Grow",
        body: "Capability for institutions, businesses and the next generation — built for how technology is actually used.",
      },
    ],
  },
  ecosystem: {
    id: "ecosystem",
    title: "The APX ecosystem",
    lead: homeEcosystem.lead,
    items: homeEcosystem.items,
  },
  audiences: {
    id: "who-we-serve",
    title: "Who APX serves",
    lead: homeAudiences.lead,
    items: homeAudiences.items,
  },
  approach: {
    id: "approach",
    title: "Technology, innovation and practical application",
    lead: "APX exists at the point where technology is applied — not as a slogan, but as something people can use.",
    body: "Innovation matters when it can be built, taught, maintained and put to work. That is the thread across Labs, Digital and Solutions.",
  },
  vision: {
    id: "vision",
    title: "Direction",
    lead: "Build today’s capability with tomorrow in mind — for institutions, businesses and learners.",
    body: siteConfig.tagline,
  },
  why: {
    id: "why-apx",
    title: "Why APX exists",
    items: homeWhy.items,
  },
} as const;
