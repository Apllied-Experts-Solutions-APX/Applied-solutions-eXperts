import { homeWork } from "@/data/homepage";

export const workPage = {
  seo: {
    title: "Our Work",
    description:
      "Work from across the APX ecosystem — software, STEM, mentorship, infrastructure and more. Real projects only.",
  },
  hero: {
    eyebrow: "Portfolio",
    title: "Our work",
    description:
      "Proof from across the APX ecosystem. Each story follows a simple path: challenge, APX approach, result.",
  },
  path: {
    id: "approach",
    title: "How work is presented",
    lead: "A consistent structure so projects can grow richer over time — without inventing outcomes.",
    steps: [
      {
        title: "Challenge",
        body: "The problem, need or opportunity as it actually stood.",
      },
      {
        title: "APX Approach",
        body: "How Labs, Digital, Solutions — or a combination — was applied.",
      },
      {
        title: "Result",
        body: "What was delivered, built or changed, in factual terms.",
      },
    ],
  },
  categories: {
    id: "categories",
    title: "Across the ecosystem",
    lead: "Work can come from any part of APX — not a single service line.",
    items: homeWork.categories,
  },
  /** Real project records only. Empty until documented work is supplied. */
  projects: [] as readonly WorkProject[],
  placeholders: homeWork.placeholders,
  empty: {
    title: "Project stories will appear here",
    note: homeWork.emptyNote,
  },
  cta: {
    title: "Have a problem worth solving?",
    subtitle: "Have an idea worth building?",
  },
} as const;

export type WorkProject = {
  slug: string;
  title: string;
  category: string;
  challenge: string;
  approach: string;
  result: string;
  mediaLabel?: string;
};
