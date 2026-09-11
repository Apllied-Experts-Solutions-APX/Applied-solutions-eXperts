export const homeHero = {
  headline: "Technology that helps you learn, build, solve & grow.",
  supporting:
    "APX is a Kenyan technology and innovation company helping institutions, businesses and the next generation turn technology into practical solutions and opportunities.",
  primaryCta: {
    label: "Let's Talk",
    href: "/contact",
  },
  secondaryCta: {
    label: "Explore APX",
    href: "#ecosystem",
  },
  /** Owner-supplied hero background videos — transition when both are available. 
  videos: ["/videos/APX1.mp4", "/videos/APX2.mp4"] as const,*/
  videos: [
  
  "/Applied-solutions-eXperts/videos/APX2.mp4",
] as const,
} as const;

export const homeEcosystem = {
  id: "ecosystem",
  title: "Three ways APX puts technology to work.",
  lead: "One APX ecosystem — Labs, Digital and Solutions working together.",
  items: [
    {
      id: "labs",
      name: "APX Labs",
      href: "/labs",
      focus: "STEM • Robotics • Innovation",
      description:
        "Hands-on STEM, robotics, electronics, coding and science — where curiosity becomes something you can build.",
    },
    {
      id: "digital",
      name: "APX Digital",
      href: "/digital",
      focus: "Digital Skills • Mentorship • Learning",
      description:
        "Digital literacy, mentorship and practical projects that build confidence for the next generation.",
    },
    {
      id: "solutions",
      name: "APX Solutions",
      href: "/solutions",
      focus: "Technology • Software • Infrastructure",
      description:
        "Technology that solves real problems — software, business systems, infrastructure and IT support.",
    },
  ],
} as const;

export const homeAudiences = {
  id: "who-we-serve",
  title: "Who we serve",
  lead: "Organizations and people — institutions, businesses and learners.",
  items: [
    {
      title: "Schools",
      detail: "Primary • JSS • Senior Secondary",
    },
    {
      title: "TVETs",
      detail: "Technical training • Digital skills • Technology",
    },
    {
      title: "Institutions",
      detail: "Education • Training • Organizations",
    },
    {
      title: "Businesses",
      detail: "SMEs • Organizations • Growing enterprises",
    },
    {
      title: "Learners",
      detail: "Technology • Skills • Mentorship • Innovation",
    },
  ],
} as const;

export const homeLabs = {
  id: "labs",
  title: "APX Labs",
  focus: "STEM • Robotics • Innovation",
  concept: "Where curiosity becomes something you can build.",
  lead: "Practical STEM, robotics, electronics, coding, science projects and innovation challenges.",
  href: "/labs",
  cta: "Explore APX Labs",
  themes: [
    "Robotics",
    "Arduino",
    "Electronics",
    "Coding",
    "STEM projects",
    "Practical science",
    "Engineering challenges",
    "Innovation",
  ],
  mediaPlaceholders: [
    { label: "Robotics practical" },
    { label: "STEM activity" },
    { label: "Science practical" },
    { label: "Learner project" },
  ],
} as const;

export const homeDigital = {
  id: "digital",
  title: "APX Digital",
  focus: "Digital Skills • Mentorship • Learning",
  concept: "Building digital confidence for the next generation.",
  lead: "Digital literacy, technology mentorship and practical projects for learners and institutions.",
  href: "/digital",
  cta: "Explore APX Digital",
  capabilities: [
    "Digital literacy",
    "Technology mentorship",
    "Coding / software mentorship",
    "Digital career guidance",
    "Practical technology projects",
    "Institution-based programs",
  ],
  futureNote:
    "Structured courses, certificates and an online learning experience are part of where APX Digital is headed — not what is live today.",
  mediaPlaceholders: [
    { label: "Mentorship session" },
    { label: "Training activity" },
    { label: "Learner project" },
  ],
} as const;

export const homeSolutions = {
  id: "solutions",
  title: "APX Solutions",
  focus: "Technology • Software • Infrastructure",
  concept: "Technology that solves real problems.",
  lead: "Capability areas across software, business technology, infrastructure and support.",
  href: "/solutions",
  cta: "Explore APX Solutions",
  items: [
    {
      title: "Digital Solutions",
      detail: "Websites • Web Apps • Software",
    },
    {
      title: "Business Technology",
      detail: "POS • Inventory • Business Systems",
    },
    {
      title: "Infrastructure & Security",
      detail: "CCTV • Networking • IT Infrastructure",
    },
    {
      title: "Hardware & IT Support",
      detail: "Computers • Laptops • Repairs • Upgrades",
    },
    {
      title: "Consulting",
      detail: "Technology Strategy • Digital Transformation • IT Guidance",
    },
  ],
} as const;

export const homeWork = {
  id: "work",
  title: "Our work",
  lead: "Proof from across the APX ecosystem — software, STEM programs, mentorship, infrastructure and more.",
  href: "/work",
  cta: "View Our Work",
  structure: ["Problem", "APX approach", "Outcome"] as const,
  structureLead:
    "Every engagement follows a simple path: understand the problem, apply the right APX approach, and deliver a useful outcome.",
  categories: [
    "Software",
    "Websites",
    "School systems",
    "Robotics / STEM programs",
    "Digital mentorship",
    "CCTV",
    "Networking",
    "Hardware",
  ],
  placeholders: [
    {
      category: "Software",
      label: "Project media",
    },
    {
      category: "Robotics / STEM",
      label: "Project media",
    },
    {
      category: "Infrastructure",
      label: "Project media",
    },
  ],
  emptyNote:
    "Project stories and media will appear here as work is documented. No fabricated case studies.",
} as const;

export const homeWhy = {
  id: "why-apx",
  title: "Why APX",
  items: [
    {
      title: "Practical",
      description:
        "Technology should be useful in the real world — skills, systems and solutions that hold up where they are used.",
    },
    {
      title: "Connected",
      description:
        "Learning, innovation and technology solutions belong in one ecosystem — Labs, Digital and Solutions together.",
    },
    {
      title: "Future-focused",
      description:
        "Build today's capability with tomorrow in mind — for institutions, businesses and the next generation.",
    },
    {
      title: "Kenyan",
      description:
        "Designed around the realities of Kenyan institutions, learners and businesses.",
    },
  ],
} as const;

export const homeInsights = {
  id: "insights",
  title: "Insights & media",
  lead: "Articles, technology insights, STEM and innovation stories, and media from APX will live here.",
  href: "/insights",
  emptyNote: "Content is on the way. This space is ready for real APX stories and media.",
  slots: [
    { kind: "Articles", label: "Article preview" },
    { kind: "Technology insights", label: "Insight preview" },
    { kind: "STEM / innovation", label: "Story preview" },
  ],
} as const;

export const homeFinalCta = {
  id: "lets-talk",
  title: "Have a problem worth solving?",
  subtitle: "Have an idea worth building?",
  cta: {
    label: "Let's Talk",
    href: "/contact",
  },
} as const;

export const homeSeo = {
  title: "APX — Technology that helps you learn, build, solve & grow",
  description:
    "APX is a Kenyan technology and innovation company helping institutions, businesses and the next generation turn technology into practical solutions and opportunities.",
} as const;
