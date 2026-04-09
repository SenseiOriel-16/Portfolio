export const site = {
  name: "Oriel Alde Jr",
  title: "Computer Science student & software developer",
  tagline:
    "Building clean, responsive web experiences and practical software—focused on solid fundamentals, teamwork, and delivering features people can actually use.",
  email: "orielalde9@gmail.com",
  phone: "+639648782675",
  githubUsername: "SenseiOriel-16",
  social: {
    instagram: "http://instagram.com/senseioriel/",
    facebook: "https://www.facebook.com/oriel.alde.75",
    tiktok: "https://www.tiktok.com/@senseioriel?_r=1&_t=ZS-95OeqqeMyBN",
    email: "mailto:orielalde9@gmail.com",
  },
  /** Hero column image (right on desktop). Use `/images/your-photo.jpg` in `public/images/`. Falls back to `about.portrait` if empty. */
  heroImage: "/public/images/profile.jpg",
  about: {
    portrait: "/public/images/profile.jpg",
    intro:
      "I’m Oriel, a Computer Science student who enjoys building reliable, user-friendly software. I’ve worked on web and app projects where I contribute to layout and UI, data handling, and turning requirements into working features—often collaborating with a team and coordinating with stakeholders to keep things clear and on track.",
    highlights: [
      "Interned with Camaligan LGU as part of the team building and improving the municipal website for residents",
      "Strong web fundamentals: layout, responsiveness, accessibility, and UI detail",
      "Comfortable collaborating in a team setup (handoffs, updates, shared ownership)",
      "Practical problem solving: breaking tasks down and shipping usable results",
      "Clear communication and documentation to support teammates and stakeholders",
    ],
  },
  techChips: [
    "Web development",
    "UI & responsiveness",
    "JavaScript / TypeScript",
    "React / Next.js",
    "API basics",
    "Git & collaboration",
    "Problem solving",
    "Documentation",
    "Accessibility",
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
      "A mobile app centered on discovering and navigating Camarines Sur. I contribute with the team—supporting UI work, organizing data and content, and helping translate requirements into clear, usable screens and flows.",
    tech: [
      "Mobile app",
      "UI collaboration",
      "Feature delivery support",
      "Data organization",
      "Team workflow",
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
    title: "Contributor — LAkbay Camsur",
    org: "LAkbay Camsur mobile app project",
    description:
      "Contributing to app work with the team—helping organize data/content, support UI tasks, and coordinate requirements so features are clear and implementable.",
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
  "Programming fundamentals": [
    { name: "JavaScript / TypeScript", value: 86 },
    { name: "Data structures & problem solving", value: 80 },
    { name: "Debugging & code reading", value: 82 },
  ],
  "Web development": [
    { name: "Responsive UI (layout & components)", value: 88 },
    { name: "React / Next.js basics", value: 82 },
    { name: "API integration (REST, fetch)", value: 78 },
  ],
  "Tools & workflow": [
    { name: "Git (branches, PRs, collaboration)", value: 84 },
    { name: "Build tooling & package managers", value: 76 },
    { name: "Documentation & handoffs", value: 82 },
  ],
  "Team & communication": [
    { name: "Clear updates & coordination", value: 86 },
    { name: "Working with stakeholders", value: 78 },
    { name: "Delivering on deadlines", value: 82 },
  ],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
