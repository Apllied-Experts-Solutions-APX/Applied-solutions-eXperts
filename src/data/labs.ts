import { homeLabs } from "@/data/homepage";

export const labsPage = {
  seo: {
    title: "APX Labs",
    description:
      "APX Labs focuses on hands-on STEM, robotics and innovation experiences — where curiosity becomes something you can build.",
  },
  hero: {
    eyebrow: homeLabs.focus,
    title: homeLabs.title,
    description:
      "APX Labs focuses on hands-on technology and innovation experiences. Practical STEM, robotics, electronics, coding, science projects and innovation challenges — for learners, educators and institutions.",
  },
  concept: homeLabs.concept,
  areas: {
    id: "focus-areas",
    title: "Hands-on focus",
    lead: "Practical areas APX Labs is built around.",
    items: [
      {
        title: "Robotics",
        body: "Hands-on robotics as a way to explore technology, engineering and problem-solving.",
      },
      {
        title: "Arduino & electronics",
        body: "Circuits, components and electronics that make ideas physical.",
      },
      {
        title: "Coding",
        body: "Programming as a practical tool for building and controlling what learners create.",
      },
      {
        title: "STEM projects",
        body: "Project-based work that connects science, technology, engineering and mathematics.",
      },
      {
        title: "Practical science",
        body: "Science that is done, observed and applied — not only described.",
      },
      {
        title: "Innovation challenges",
        body: "Structured challenges that turn curiosity into something you can design and test.",
      },
      {
        title: "STEM clubs & programs",
        body: "Club and program formats that help institutions sustain hands-on STEM activity.",
      },
      {
        title: "Teacher engagement & training",
        body: "Support for educators who want to bring practical STEM and technology into learning.",
      },
    ],
  },
  media: {
    id: "labs-media",
    title: "In the lab",
    lead: "Photos and video from APX Labs activity will live here as they are documented.",
    placeholders: homeLabs.mediaPlaceholders,
  },
  cta: {
    title: "Bring hands-on STEM into your institution",
    subtitle: "Talk with APX about robotics, labs and practical innovation.",
  },
} as const;
