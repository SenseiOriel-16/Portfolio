export const site = {
  name: "Oriel Alde Jr",
  title: "Researcher & data gathering",
  tagline:
    "Turning field work, surveys, and conversations into clear findings teams can use—especially for products that serve real places and people.",
  email: "orielalde9@gmail.com",
  githubUsername: "orielalde9",
  social: {
    website: "",
    linkedin: "https://www.linkedin.com/in/oriel-alde-jr",
    email: "mailto:orielalde9@gmail.com",
  },
  /** Hero column image (right on desktop). Use `/images/your-photo.jpg` in `public/images/`. Falls back to `about.portrait` if empty. */
  heroImage: "",
  about: {
    portrait: "",
    intro:
      "I’m Oriel. My work sits at the intersection of research and data gathering—designing questions, collecting responses in the field or online, cleaning and organizing what comes back, and summarizing it so designers and developers can build the right thing. I’ve focused much of that energy on LAkbay Camsur, a mobile app rooted in Camarines Sur, and as part of the team that helped develop the municipal website for the Local Government Unit of Camaligan.",
    highlights: [
      "Internship with Camaligan LGU as part of the team building and improving the municipal website for residents",
      "Structured data gathering: surveys, interviews, and field notes tied to clear research goals",
      "Comfortable collaborating with mobile / product teams and local stakeholders",
      "Clear written and visual summaries so decisions aren’t buried in spreadsheets",
      "Organized, reliable follow-through from planning through reporting",
    ],
  },
  techChips: [
    "Web development",
    "Field research",
    "Survey design",
    "Data gathering",
    "Qualitative synthesis",
    "Google Forms / Sheets",
    "Interview guides",
    "Mobile app research",
    "Reporting & decks",
  ],
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "LAkbay Camsur — mobile app",
    description:
      "A mobile app centered on discovering and navigating Camarines Sur. I contribute as a researcher and data-gathering lead: shaping what we need to learn, running surveys and conversations with users and partners, capturing field insights, and packaging results so the product reflects how people actually move, plan trips, and use local services.",
    tech: [
      "Data gathering",
      "Field research",
      "Surveys",
      "User insights",
      "Reporting",
      "Mobile product",
    ],
    githubUrl: "mailto:orielalde9@gmail.com?subject=LAkbay%20Camsur%20%E2%80%94%20overview",
    liveUrl: "mailto:orielalde9@gmail.com?subject=LAkbay%20Camsur%20%E2%80%94%20app%20link%20%2F%20demo",
  },
  {
    id: "2",
    title: "Camaligan LGU — municipal website",
    description:
      "I was part of the project team that developed the LGU’s municipal website in Camaligan, Camarines Sur—contributing alongside others on layout, pages, and structure so services, announcements, and local information are easier for citizens to find and trust.",
    tech: ["Web development", "Vue.js/Sass/Grunt", "Team collaboration", "LGU partnership"],
    githubUrl: "mailto:orielalde9@gmail.com?subject=Camaligan%20LGU%20website%20%E2%80%94%20overview",
    liveUrl: "mailto:orielalde9@gmail.com?subject=Camaligan%20LGU%20%E2%80%94%20site%20link",
  },
  {
    id: "3",
    title: "Personal portfolio site",
    description:
      "A responsive personal site that brings together profile, selected work, and contact in one place—structured for clarity on any device.",
    tech: ["Web", "UX writing", "Information layout", "Accessibility"],
    githubUrl: "mailto:orielalde9@gmail.com?subject=Portfolio%20website%20%E2%80%94%20overview",
    liveUrl: "mailto:orielalde9@gmail.com?subject=Portfolio%20website%20%E2%80%94%20live%20link",
  },
  // {
  //   id: "4",
  //   title: "Research deliverables & documentation",
  //   description:
  //     "Slide decks, one-pagers, and appendix materials that translate raw inputs into themes, priorities, and next steps for decision-makers—available on request with appropriate context.",
  //   tech: ["Synthesis", "Documentation", "Visualization", "Stakeholder comms"],
  //   githubUrl: "mailto:orielalde9@gmail.com?subject=Research%20samples%20request",
  //   liveUrl: "https://www.linkedin.com/in/oriel-alde-jr",
  // },
];

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "work" | "program" | "internship";
};

export const timeline: TimelineItem[] = [
  {
    id: "e1",
    period: "2022 — 2026",
    title: "Bachelor of Science in Computer Science",
    org: "Naga College Foundation Inc.",
    description:
      "Computer Science program focused on computer systems, software development, and applied problem solving.",
    type: "education",
  },
  {
    id: "e2",
    period: "2025",
    title: "Web development intern",
    org: "Local Government Unit of Camaligan",
    description:
      "Internship as part of the team developing the municipal website—shared responsibility for pages and layout, organizing public-facing information with colleagues, coordinating with LGU staff on content and updates, and keeping the site clear and usable for residents.",
    type: "internship",
  },
  {
    id: "e3",
    period: "2024 — Present",
    title: "Researcher & data gathering — LAkbay Camsur",
    org: "LAkbay Camsur mobile app project",
    description:
      "Research planning, data collection in the field and online, coordination with partners, and reporting that informs the mobile product roadmap for Camarines Sur.",
    type: "work",
  },
  {
    id: "e4",
    period: "2023",
    title: "Leadership & communications intensive",
    org: "Professional development program",
    description:
      "Facilitation, public speaking, and collaborative planning with peers from mixed sectors.",
    type: "program",
  },
];

export const skillCategories = {
  Research: [
    { name: "Field & survey data gathering", value: 92 },
    { name: "Interviews & qualitative synthesis", value: 88 },
    { name: "Data cleaning, tables & basic analysis", value: 80 },
  ],
  Communication: [
    { name: "Research reports & memos", value: 90 },
    { name: "Presentations for teams & stakeholders", value: 86 },
    { name: "Plain-language summaries", value: 85 },
  ],
  "Product & collaboration": [
    { name: "Working with designers & developers", value: 84 },
    { name: "Research ops (schedules, trackers, consent)", value: 82 },
    { name: "Mobile / app user research basics", value: 78 },
  ],
  Tools: [
    { name: "Sheets / Forms / Docs", value: 90 },
    { name: "Web basics (HTML, CSS, site structure)", value: 82 },
    { name: "Notion or similar", value: 78 },
    { name: "Slides & simple charts", value: 85 },
  ],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
