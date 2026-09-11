import { homeSolutions } from "@/data/homepage";

export const solutionsPage = {
  seo: {
    title: "APX Solutions",
    description:
      "APX Solutions delivers practical technology across software, business systems, infrastructure, hardware and consulting.",
  },
  hero: {
    eyebrow: homeSolutions.focus,
    title: homeSolutions.title,
    description:
      "Technology that solves real problems — software, business systems, infrastructure, hardware and consulting, organised as one capability set.",
  },
  concept: homeSolutions.concept,
  groups: {
    id: "capabilities",
    title: "Capability areas",
    lead: "Clear groups — not a catalogue. Talk with APX about what your organisation actually needs.",
    items: [
      {
        title: "Digital Solutions",
        detail: "Websites, web applications and software.",
        body: "Digital products that help institutions and businesses publish, operate and serve people online.",
      },
      {
        title: "Business Technology",
        detail: "POS, inventory and business systems.",
        body: "Systems that support day-to-day operations — sales, stock and the tools a business runs on.",
      },
      {
        title: "Infrastructure & Security",
        detail: "CCTV, networking, IT infrastructure and support.",
        body: "The physical and network layer that keeps environments connected, visible and supported.",
      },
      {
        title: "Hardware",
        detail: "Computers, hardware sales, repairs, upgrades and maintenance.",
        body: "Devices and upkeep so the technology in use stays usable.",
      },
      {
        title: "Consulting",
        detail: "Technology consulting, digital strategy and solution planning.",
        body: "Guidance before and during implementation — so technology choices fit the problem.",
      },
    ],
  },
  cta: {
    title: "Need technology that solves a real problem?",
    subtitle: "Tell APX what you are trying to run, fix or build.",
  },
} as const;
