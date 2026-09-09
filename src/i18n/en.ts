import type { Content } from "./types";
import { EMAIL, LAB_URL, LINKEDIN_URL, SITE_URL, companies, socials } from "./shared";

const en: Content = {
  meta: {
    home: {
      title: "Diego Barrio H. — Senior Backend Engineer · Java & Spring",
      description:
        "Senior Backend Engineer. Java, Spring Boot, microservices and observability for banking, fintech and mobility. 15+ years shipping production software.",
    },
    about: {
      title: "About — Diego Barrio H.",
      description:
        "About Diego Barrio H., Senior Backend & Platform Engineer with 15+ years building cloud-native systems and distributed architectures for banking, fintech and mobility.",
    },
    cv: {
      title: "CV — Diego Barrio H.",
      description:
        "CV of Diego Barrio H., Senior Backend & Platform Engineer. Java, Spring Boot, microservices, AWS, Kubernetes and AI-powered development workflows. 15+ years in production.",
    },
    projects: {
      title: "Projects — Diego Barrio H.",
      description:
        "Projects by Diego Barrio H.: Akademia (AI learning platform with RAG), Backend to the Future and other cloud-native backend systems.",
    },
  },

  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    skills: "Stack",
    lab: "Lab",
    contact: "Contact",
    cv: "CV",
    brandAlt: "Diego Barrio H. logo",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    themeToggle: "Switch theme",
    langToggle: "Ver en español",
  },

  home: {
    hero: {
      status: "Open to senior roles",
      roleParts: ["Senior Backend Engineer", "Java & Spring"],
      lead: "15+ years building scalable, maintainable, and observable backend platforms for banking, fintech, and mobility. Modern architecture for products that cannot fail.",
      cvAction: "Open CV PDF",
      contactAction: "Let's talk",
      portraitAlt: "Portrait of Diego Barrio H.",
    },
    metrics: [
      { value: "15+", label: "years shipping production software" },
      { value: "4", label: "critical industries: banking, fintech, mobility, enterprise" },
      { value: "100%", label: "backend focus: architecture, quality, observability" },
    ],
    companiesLabel: "Track record at",
    companies,
    experienceHead: { title: "Experience in systems that cannot fail.", kicker: "Experience" },
    currentBadge: "● Current",
    experience: [
      {
        period: "2024 — Present",
        current: true,
        role: "Senior Backend Engineer",
        company: "Mindden / Europcar Mobility Group",
        impact:
          "Built business-critical billing and payments APIs, strengthening operational robustness and delivery velocity.",
        stack: ["Java", "Spring Boot", "Kafka", "AWS", "Kubernetes"],
      },
      {
        period: "2022 — 2024",
        role: "Senior Analyst",
        company: "Accenture",
        impact:
          "Delivered microservices and data optimization for banking with focus on performance, uptime, and maintainability.",
        stack: ["Java", "Spring", "Microservices", "Oracle"],
      },
      {
        period: "2014 — 2022",
        role: "Senior Specialist",
        company: "SABIS",
        impact:
          "Designed enterprise platforms and internal integrations to standardize workflows across teams.",
        stack: ["Spring MVC", "JPA", "SharePoint", ".NET"],
      },
      {
        period: "2007 — 2014",
        role: "Analyst / Developer",
        company: "Banco Sabadell · Caja Mediterráneo",
        impact: "Evolved high-criticality online banking and ATM transactional platforms.",
        stack: ["Java", "Online banking", "ATM"],
      },
    ],
    projectsHead: { title: "Real work in complex domains.", kicker: "Projects" },
    highlights: [
      {
        title: "Billing & Payments APIs",
        text: "Designed mission-critical mobility billing APIs with event-driven architecture, operational observability, and cloud-native delivery.",
        stack: ["Java", "Spring Boot", "Kafka", "AWS", "Kubernetes"],
      },
      {
        title: "Core Banking Modernization",
        text: "Migrated core banking processes to modular services, improving performance, traceability, and time-to-market.",
        stack: ["Spring", "Hibernate", "Oracle", "SQL Server", "CI/CD"],
      },
      {
        title: "Enterprise Platforms",
        text: "Built internal platforms and integrations that reduced operational friction and technical debt.",
        stack: ["Spring MVC", "JPA", "SharePoint", ".NET", "Oracle"],
      },
    ],
    skillsHead: {
      title: "Technologies and practices to scale both product and team.",
      kicker: "Stack",
    },
    skills: [
      {
        title: "Backend Core",
        items: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "JPA/Hibernate", "REST APIs"],
      },
      {
        title: "Architecture & Scale",
        items: ["Microservices", "DDD", "Hexagonal", "Event-driven", "Clean Architecture", "SRE mindset"],
      },
      {
        title: "Cloud & Platform",
        items: ["AWS", "Kubernetes", "Docker", "Apache Kafka", "CI/CD", "GitLab/Jenkins"],
      },
      {
        title: "Data & Observability",
        items: ["PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Grafana", "Splunk/Sentry"],
      },
    ],
    labHead: { title: "Lab: how I think and how I build.", kicker: "Lab" },
    lab: {
      text: "A place where I document personal projects, architecture decisions, and experiments aimed at solving real problems.",
      ctaAria: "backendtothefuture.com",
    },
    contactHead: { title: "Let's build something that cannot fail.", kicker: "Contact" },
    contact: {
      lead: "Available for new projects, consulting engagements, and senior backend roles. I reply within 24 hours.",
      calendly: "Book 30 min on Calendly",
      open: "Open",
      socials,
    },
    footer: "Backend Engineering focused on quality, architecture, and delivery.",
  },

  about: {
    title: "About",
    intro:
      "I am a senior backend engineer with 15+ years building high-performance platforms in banking, fintech, and mobility. My foundation is Java and the Spring ecosystem, with a strong focus on microservices, clean design, DDD, and quality practices like TDD and CI/CD.",
    focusTitle: "Current focus",
    focus: [
      "Software architecture and evolutionary system design.",
      "DevOps, observability, and SRE principles to operate with confidence.",
      "Event-driven integrations and automation with reliable pipelines.",
    ],
    howTitle: "How I work",
    how: [
      {
        title: "Quality first",
        text: "I promote TDD, clean code, and honest reviews to keep the technical foundation healthy.",
      },
      {
        title: "Continuous delivery",
        text: "CI/CD, automation, and reliable deployments to move fast without breaking things.",
      },
    ],
    extrasTitle: "Extras",
    extras: [
      "Volunteer mentor for Engineering students (Fundación Banco Sabadell).",
      "Experience in international teams (English C1 Level).",
    ],
  },

  projects: {
    title: "Projects",
    intro:
      "Selected projects and workstreams in backend, architecture, and critical systems. If you want specific details or public demos, reach out.",
    entries: [
      {
        title: "Billing & Payments APIs",
        period: "2024 – Present",
        context: "Europcar Mobility Group (Mindden)",
        impact:
          "Critical billing and payment APIs with event-driven architecture and cloud-native deployments.",
        stack: ["Java", "Spring Boot", "AWS", "Kubernetes", "Kafka"],
      },
      {
        title: "Core Banking Modernization",
        period: "2022 – 2024",
        context: "Accenture",
        impact: "Microservices to improve modularity and performance in banking processes.",
        stack: ["Spring Boot", "Hibernate", "Oracle", "SQL Server"],
      },
      {
        title: "Enterprise Platform Suite",
        period: "2014 – 2022",
        context: "SABIS",
        impact: "Cross-cutting platforms and integrations that improved inter-department workflows.",
        stack: ["Spring MVC", "JPA", "Oracle", "SharePoint"],
      },
      {
        title: "Issue Tracking Platform",
        period: "2012 – 2014",
        context: "Banco Sabadell",
        impact: "Internal issue management system focused on usability and traceability.",
        stack: ["Spring Boot", "Thymeleaf", "Oracle"],
      },
      {
        title: "Online Banking & ATM Services",
        period: "2007 – 2012",
        context: "Caja Mediterráneo",
        impact: "Transactional services and core banking migration with high operational criticality.",
        stack: ["J2EE", "ALNOVA", "Oracle"],
      },
    ],
  },

  cv: {
    role: "Senior Backend & Platform Engineer",
    tagline: "Cloud-native systems · Distributed architectures · AI-powered development workflows",
    contact: [
      { label: "Alicante, Spain", href: null },
      { label: EMAIL, href: `mailto:${EMAIL}` },
      { label: "LinkedIn", href: LINKEDIN_URL },
      { label: "diegobarrioh.dev", href: SITE_URL },
      { label: "backendtothefuture.com", href: LAB_URL },
    ],
    openPdf: "Open CV PDF",
    back: "Back",
    headings: {
      profile: "About",
      competencies: "Core Competencies",
      projects: "Featured Projects",
      experience: "Professional Experience",
      education: "Education",
      community: "Community & Personal Projects",
      learning: "Learning Focus",
      languages: "Languages",
      technologies: "Technologies:",
      hardware: "Hardware:",
      languageCol: "Language",
      levelCol: "Level",
    },
    summary:
      "Senior Backend Engineer with over 15 years of experience designing and building distributed systems, payment platforms, and cloud-native applications. Specialized in Java, Spring Boot, event-driven architectures, and microservices, with hands-on experience operating containerized workloads on Kubernetes. Experienced in fintech, banking, and mobility domains, delivering scalable and resilient backend systems. Currently focused on Platform Engineering, Observability, and AI-powered development workflows, exploring agentic systems, LLM integrations, and modern software delivery practices.",
    competencies: [
      {
        title: "Backend Engineering",
        items: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "TDD"],
      },
      {
        title: "Software Architecture",
        items: ["Microservices", "DDD", "Hexagonal Architecture", "Clean Architecture", "Event-Driven", "API Design"],
      },
      {
        title: "Platform Engineering",
        items: ["Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "AWS", "Azure"],
      },
      {
        title: "Observability",
        items: ["Grafana", "Prometheus", "Loki", "OpenTelemetry", "Sentry", "Splunk"],
      },
      {
        title: "Data & Messaging",
        items: ["Oracle", "SQL Server", "PostgreSQL", "Apache Kafka"],
      },
      {
        title: "AI Engineering",
        items: ["LLM Integration", "Agentic Workflows", "Tool Calling", "MCP", "Ollama", "Claude Code", "OpenAI APIs", "Gemini", "RAG"],
      },
    ],
    projects: [
      {
        name: "TokenMeter",
        url: "https://tokenmeter.backendtothefuture.com",
        hardware: null,
        subtitle: "AI Cost Estimation Platform",
        description: "A platform to estimate the cost of software development using AI models.",
        bullets: [
          "Repository token analysis engine.",
          "Multi-provider pricing comparison.",
          "Dynamic pricing synchronization.",
          "Cost estimation for AI-assisted development workflows.",
          "Production deployment with Cloudflare.",
        ],
        stack: ["Java", "Spring Boot", "Docker", "Cloudflare", "AI APIs"],
      },
      {
        name: "Akademia",
        url: "https://akademia.diegobarrioh.dev",
        hardware: null,
        subtitle: "AI-Powered Learning Platform",
        description:
          "Web app to study and prepare for exams, with AI-assisted content generation and an integrated store to purchase study materials.",
        bullets: [
          "Exam preparation with structured study materials.",
          "AI question generation via RAG (OpenAI text-embedding-3-small embeddings through OpenRouter).",
          "Spaced-repetition flashcards.",
          "Integrated Stripe store to purchase study materials.",
          "Progress tracking and self-assessment.",
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "Stripe", "RAG", "OpenAI", "OpenRouter"],
      },
      {
        name: "Backend to the Future",
        url: LAB_URL,
        hardware: null,
        subtitle: "Engineering Blog & Technical Platform",
        description: "Personal platform where I publish projects, technical articles, and engineering experiments.",
        bullets: [
          "Backend development.",
          "Software architecture.",
          "Cloud-native systems.",
          "Kubernetes.",
          "AI engineering.",
          "Developer productivity.",
        ],
        stack: [],
      },
      {
        name: "Local AI Lab",
        url: null,
        hardware: "NVIDIA GeForce RTX 3060 (12 GB VRAM)",
        subtitle: "Self-Hosted AI Infrastructure",
        description: "Personal environment dedicated to evaluating and operating local Large Language Models.",
        bullets: [
          "Local LLM deployment.",
          "Ollama and LM Studio.",
          "Models tested: Qwen 3.5, Gemma 3, Llama 3.1, DeepSeek R1, and Mistral Nemo.",
          "Agentic software development workflows.",
          "MCP integrations.",
          "Autonomous coding assistants.",
        ],
        stack: [],
      },
    ],
    experience: [
      {
        role: "Senior Backend Engineer",
        company: "Mindden (for Europcar Mobility Group)",
        period: "Mar 2024 – Present",
        bullets: [
          "Designed and implemented billing and payment APIs using Spring Boot, microservices, AWS, and Kubernetes.",
          "Integrated Apache Kafka to support event-driven architectures and asynchronous processing.",
          "Promoted Domain-Driven Design, Hexagonal Architecture, and TDD practices.",
          "Improved CI/CD pipelines using GitLab.",
          "Contributed to cloud-native platform initiatives and observability practices.",
        ],
        stack: ["Java", "Spring Boot", "Kafka", "Kubernetes", "AWS", "GitLab CI/CD", "Oracle"],
      },
      {
        role: "Senior Analyst",
        company: "Accenture",
        period: "Jul 2022 – Mar 2024",
        bullets: [
          "Developed and maintained banking systems using Spring Boot and Hibernate.",
          "Built microservices focused on scalability and reliability.",
          "Managed batch processing workflows using IBM Tivoli Workload Scheduler.",
          "Optimized complex Oracle and SQL Server queries.",
        ],
        stack: ["Java", "Spring Boot", "Oracle", "SQL Server", "IBM Tivoli"],
      },
      {
        role: "Senior Specialist",
        company: "SABIS",
        period: "Jun 2014 – Jun 2022",
        bullets: [
          "Developed and maintained enterprise platforms used across multiple departments.",
          "Built applications using Spring MVC, WebFlow, JPA, and Hibernate.",
          "Participated in integrations involving .NET and SharePoint solutions.",
        ],
        stack: ["Java", "Spring MVC", "Hibernate", "Oracle", "SharePoint"],
      },
      {
        role: "Analyst",
        company: "Banco Sabadell",
        period: "Nov 2012 – Jun 2014",
        bullets: [
          "Developed internal business applications using the Spring ecosystem.",
          "Participated in the design and implementation of web-based enterprise solutions.",
        ],
        stack: ["Java", "Spring", "Thymeleaf", "Oracle"],
      },
      {
        role: "Analyst & Developer",
        company: "Caja Mediterráneo (CAM)",
        period: "Mar 2007 – Nov 2012",
        bullets: [
          "Developed and maintained online banking applications.",
          "Participated in ATM services and core banking migration projects.",
        ],
        stack: ["Java EE", "Oracle"],
      },
      {
        role: "Web Developer",
        company: "HDV",
        period: "Dec 2005 – Mar 2007",
        bullets: ["Developed dynamic web applications and interactive user interfaces."],
        stack: ["PHP", "MySQL", "JavaScript"],
      },
    ],
    education: [
      {
        title: "Master's Degree in Web Applications and Services Development",
        org: "Universidad de Alicante",
        period: "2010 – 2011",
        note: null,
      },
      {
        title: "Certificate in Java Enterprise Development",
        org: "Universidad de Alicante",
        period: "2009 – 2010",
        note: null,
      },
      {
        title: "Computer Engineering Degree",
        org: "Universidad de Alicante",
        period: "1998 – 2005",
        note: "Equivalent to MSc level under the Bologna Process.",
      },
    ],
    community: [
      "Creator of Backend to the Future, a platform focused on software architecture and backend engineering.",
      "Creator of TokenMeter, an AI development cost estimation platform.",
      "Creator of Akademia, an AI-powered learning platform with a Stripe-based study-materials store.",
      "Active experimentation with local LLMs, AI agents, and autonomous development workflows.",
      "Former mentor for Computer Science students through Fundación Banco Sabadell.",
    ],
    learning: [
      "Platform Engineering",
      "Advanced Kubernetes",
      "Observability",
      "SRE Principles",
      "AI Agents & Autonomous Workflows",
      "Rust",
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Full Professional Proficiency (C1)" },
    ],
  },
};

export default en;
