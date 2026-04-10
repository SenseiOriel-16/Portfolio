export const site = {
  name: "Oriel Alde Jr",
  title: "Open to many kinds of work — CS-trained, not tech-only",
  tagline:
    "I’m finishing a Computer Science degree, but I don’t box myself into one lane. I’m happy in tech when it fits, and I’m just as motivated in coordination, service, documentation, field-facing work, or whatever the role needs—organized, dependable, and quick to learn.",
  email: "orielalde9@gmail.com",
  phone: "+639648782675",
  /** PDF served from `public/` — Resume button in hero + footer when set. Not a file:// path (won’t work on the web). */
  resumeUrl: "/cv-oriel.pdf",
  githubUsername: "SenseiOriel-16",
  social: {
    website: "",
    messenger: "",
    instagram: "http://instagram.com/senseioriel/",
    facebook: "https://www.facebook.com/oriel.alde.75",
    tiktok: "https://www.tiktok.com/@senseioriel?_r=1&_t=ZS-95OeqqeMyBN",
    email: "mailto:orielalde9@gmail.com",
  },
  /** Hero column image (right on desktop). Use `/images/your-photo.jpg` in `public/images/`. Falls back to `about.portrait` if empty. */
  heroImage: "/profile.jpg",
  about: {
    portrait: "/profile.jpg",
    intro:
      "I’m Oriel. My background is Computer Science, but what I care about most is doing useful work well—whether that’s behind a screen or not. I’ve helped on web and app projects with teams and local partners, and I’m equally interested in roles built on communication, organization, customer or community contact, and steady follow-through. Tell me what you need; I’ll adapt.",
    highlights: [
      "Camaligan LGU internship: part of the team that built and improved the municipal site—coordination, content structure, and public-facing clarity mattered as much as the code",
      "Comfortable with digital tools, documents, and basic web work when the job calls for it—not limited to engineering titles",
      "Reliable teammate: updates, handoffs, and shared ownership without drama",
      "Breaks messy work into steps and finishes what I start",
      "Clear writing and documentation so people aren’t guessing what was decided",
    ],
  },
  techChips: [
    "Organization & follow-through",
    "Communication & documentation",
    "Team collaboration",
    "Customer / stakeholder contact",
    "Digital tools & spreadsheets",
    "Web basics when needed",
    "Problem solving",
    "Adaptability",
    "CS & software foundation",
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
    title: "Lakbay CamSur — mobile app",
    description:
      "A mobile app centered on discovering and navigating Camarines Sur. I work with the team on whatever moves the product forward—organizing information, supporting screens and flows, and keeping requirements understandable for everyone involved.",
    tech: [
      "Team collaboration",
      "Coordination & clarity",
      "Content & data organization",
      "Mobile product support",
      "Stakeholder-friendly delivery",
    ],
    githubUrl: "mailto:orielalde9@gmail.com?subject=Lakbay%20CamSur%20%E2%80%94%20overview",
    liveUrl: "mailto:orielalde9@gmail.com?subject=Lakbay%20CamSur%20%E2%80%94%20app%20link%20%2F%20demo",
  },
  {
    id: "2",
    title: "Camaligan LGU — municipal website",
    description:
      "I was part of the project team that developed the LGU’s municipal website in Camaligan, Camarines Sur—working with others on layout, pages, and structure so citizens can find services and announcements more easily. Mix of technical tasks and plain teamwork with LGU staff.",
    tech: ["Public-sector collaboration", "Web & layout support", "Team delivery", "Clear information design"],
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
      "Computer Science program—systems, software, and applied problem solving. Training I can apply in technical roles or as a strong general foundation for operations, admin, and other non-dev paths.",
    type: "education",
  },
  {
    id: "e2",
    period: "2026",
    title: "Intern — municipal web & public information",
    org: "Local Government Unit of Camaligan",
    description:
      "Internship as part of the team developing the municipal website—shared responsibility for pages and layout, organizing public-facing information with colleagues, coordinating with LGU staff on content and updates, and keeping the site clear and usable for residents.",
    type: "internship",
  },
  {
    id: "e3",
    period: "2024 — 2026",
    title: "Contributor — Lakbay CamSur",
    org: "Lakbay CamSur mobile app project",
    description:
      "Supporting the app with the team—organizing content and data, helping keep requirements clear, and pitching in on UI and delivery tasks as needed.",
    type: "work",
  },
];

export const skillCategories = {
  "Communication & reliability": [
    { name: "Clear updates, email, and documentation", value: 90 },
    { name: "Listening and restating what people need", value: 86 },
    { name: "Showing up consistently and finishing tasks", value: 88 },
  ],
  "Organization & delivery": [
    { name: "Planning steps and tracking progress", value: 86 },
    { name: "Keeping files, notes, and handoffs tidy", value: 84 },
    { name: "Working under deadlines without dropping quality", value: 82 },
  ],
  "Digital & technical (when useful)": [
    { name: "Web basics, forms, and everyday software", value: 82 },
    { name: "CS foundation: logic, data, troubleshooting", value: 80 },
    { name: "Collaborating in Git / team tools", value: 78 },
  ],
  "People & teamwork": [
    { name: "Working respectfully with supervisors and peers", value: 88 },
    { name: "Service-oriented mindset (public, clients, community)", value: 84 },
    { name: "Adjusting when priorities change", value: 82 },
  ],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
