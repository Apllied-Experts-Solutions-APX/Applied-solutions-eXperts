import { homeDigital } from "@/data/homepage";

export const digitalPage = {
  seo: {
    title: "APX Digital",
    description:
      "APX Digital helps learners and institutions build practical digital capability through literacy, mentorship and projects.",
  },
  hero: {
    eyebrow: homeDigital.focus,
    title: homeDigital.title,
    description:
      "APX Digital helps learners and institutions build practical digital capability — literacy, mentorship and projects that make technology usable.",
  },
  concept: homeDigital.concept,
  role: {
    id: "role",
    title: "Practical digital capability",
    lead: "Confidence with technology comes from using it — with guidance, not only from hearing about it.",
    body: "APX Digital sits between exposure and application: helping people understand tools, practice skills and connect that work to real contexts in schools, training settings and everyday digital life.",
  },
  areas: {
    id: "focus-areas",
    title: "What this covers",
    items: [
      {
        title: "Digital literacy",
        body: "Foundational skills for using technology with confidence in learning and work.",
      },
      {
        title: "Technology exposure",
        body: "Guided introduction to tools, ideas and practices that shape modern digital work.",
      },
      {
        title: "Coding & software mentorship",
        body: "Mentorship that treats coding as a practical skill, not a distant specialism.",
      },
      {
        title: "Digital career guidance",
        body: "Orientation toward digital pathways — so learners can see where skills can lead.",
      },
      {
        title: "Practical technology projects",
        body: "Project work that turns digital skills into something you can show and improve.",
      },
      {
        title: "Mentorship",
        body: "People-centred support for learners and institutions building digital capability.",
      },
    ],
  },
  future: {
    id: "direction",
    title: "Future direction",
    note: homeDigital.futureNote,
  },
  media: {
    id: "digital-media",
    title: "Mentorship and training",
    lead: "Media from mentorship and training activity will appear here when it is available.",
    placeholders: homeDigital.mediaPlaceholders,
  },
  cta: {
    title: "Build digital capability with APX",
    subtitle: "Talk with us about literacy, mentorship and practical technology projects.",
  },
} as const;
