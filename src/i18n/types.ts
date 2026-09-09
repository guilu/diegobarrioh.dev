export type Locale = "en" | "es";

export interface PageMeta {
  title: string;
  description: string;
}

export interface Nav {
  home: string;
  experience: string;
  projects: string;
  skills: string;
  lab: string;
  contact: string;
  cv: string;
  brandAlt: string;
  menuOpen: string;
  menuClose: string;
  themeToggle: string;
  langToggle: string;
}

export interface Hero {
  status: string;
  roleParts: [string, string];
  lead: string;
  cvAction: string;
  contactAction: string;
  portraitAlt: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SectionHead {
  title: string;
  kicker: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  impact: string;
  stack: string[];
  current?: boolean;
}

export interface Highlight {
  title: string;
  text: string;
  stack: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface LabBuild {
  name: string;
  /** Slug of the matching ProjectPage, so the home links inward, not away. */
  slug: string;
  url: string | null;
  subtitle: string;
  text: string;
  stack: string[];
}

export interface Lab {
  text: string;
  ctaAria: string;
  builds: LabBuild[];
}

export interface Contact {
  lead: string;
  calendly: string;
  open: string;
  socials: { ico: string; label: string; handle: string; href: string }[];
}

export interface Home {
  hero: Hero;
  metrics: Metric[];
  companiesLabel: string;
  companies: string[];
  experienceHead: SectionHead;
  currentBadge: string;
  experience: TimelineItem[];
  projectsHead: SectionHead;
  highlights: Highlight[];
  skillsHead: SectionHead;
  skills: SkillGroup[];
  labHead: SectionHead;
  lab: Lab;
  contactHead: SectionHead;
  contact: Contact;
  footer: string;
}

export interface AboutCard {
  title: string;
  text: string;
}

export interface About {
  title: string;
  intro: string;
  focusTitle: string;
  focus: string[];
  howTitle: string;
  how: AboutCard[];
  extrasTitle: string;
  extras: string[];
}

export interface ProjectEntry {
  title: string;
  period: string;
  context: string;
  impact: string;
  stack: string[];
}

export interface ProjectSection {
  title: string;
  body: string[];
}

/**
 * One build, with its own URL. The depth lives here and nowhere else: the
 * index and the home page carry only `tagline` and `summary`, so no two
 * indexed pages restate the same paragraphs.
 */
export interface ProjectPage {
  slug: string;
  name: string;
  /** Live deployment, when there is one to link to. */
  url: string | null;
  tagline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Honest one-liner about how finished this is. */
  status: string;
  sections: ProjectSection[];
  stack: string[];
}

export interface Projects {
  title: string;
  intro: string;
  buildsTitle: string;
  readMore: string;
  visitSite: string;
  backToProjects: string;
  statusLabel: string;
  stackLabel: string;
  workTitle: string;
  pages: ProjectPage[];
  entries: ProjectEntry[];
}

export interface CvContact {
  label: string;
  href: string | null;
}

export interface CvProject {
  name: string;
  url: string | null;
  hardware: string | null;
  subtitle: string;
  description: string;
  bullets: string[];
  stack: string[];
}

export interface CvExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export interface CvEducation {
  title: string;
  org: string;
  period: string;
  note: string | null;
}

export interface CvLanguage {
  name: string;
  level: string;
}

export interface Cv {
  role: string;
  tagline: string;
  contact: CvContact[];
  openPdf: string;
  back: string;
  headings: {
    profile: string;
    competencies: string;
    projects: string;
    experience: string;
    education: string;
    community: string;
    learning: string;
    languages: string;
    technologies: string;
    hardware: string;
    languageCol: string;
    levelCol: string;
  };
  summary: string;
  competencies: SkillGroup[];
  projects: CvProject[];
  experience: CvExperience[];
  education: CvEducation[];
  community: string[];
  learning: string[];
  languages: CvLanguage[];
}

export interface Content {
  meta: {
    home: PageMeta;
    about: PageMeta;
    cv: PageMeta;
    projects: PageMeta;
  };
  nav: Nav;
  home: Home;
  about: About;
  projects: Projects;
  cv: Cv;
}
