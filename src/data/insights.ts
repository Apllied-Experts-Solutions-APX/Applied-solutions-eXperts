import { homeInsights } from "@/data/homepage";

export const insightsPage = {
  seo: {
    title: "Insights",
    description:
      "Technology insights, STEM and innovation stories, digital skills, and APX news — when there is real content to share.",
  },
  hero: {
    eyebrow: "Insights & media",
    title: "Insights",
    description:
      "A home for technology insights, STEM and innovation stories, digital skills, APX news and useful educational content.",
  },
  architecture: {
    id: "topics",
    title: "What belongs here",
    lead: "The page is organised so real articles and media can land in clear groups.",
    topics: [
      {
        title: "Technology insights",
        body: "Practical thinking on tools, systems and how technology is applied.",
      },
      {
        title: "STEM & innovation",
        body: "Stories from hands-on learning, robotics and innovation work.",
      },
      {
        title: "Digital skills",
        body: "Literacy, mentorship and learning themes for institutions and learners.",
      },
      {
        title: "APX news & media",
        body: "Updates and media from across the APX ecosystem.",
      },
    ],
  },
  /** Real articles only. Empty until content is supplied. */
  articles: [] as readonly InsightArticle[],
  slots: homeInsights.slots,
  empty: {
    title: "Content is on the way",
    note: homeInsights.emptyNote,
  },
} as const;

export type InsightArticle = {
  slug: string;
  title: string;
  topic: string;
  summary: string;
  date?: string;
};
