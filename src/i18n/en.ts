import type { Content } from "./types";
import {
  AKADEMIA_URL,
  EMAIL,
  FORMA_URL,
  LAB_URL,
  LINKEDIN_URL,
  SITE_URL,
  TOKENMETER_URL,
  companies,
  socials,
} from "./shared";

const en: Content = {
  consent: {
    title: "Optional analytics",
    description:
      "Allow anonymous analytics to improve this site? Google Tag Manager is not loaded until you accept.",
    accept: "Accept",
    reject: "Reject",
    privacy: "Privacy",
  },

  meta: {
    home: {
      title: "Diego Barrio H. — Senior Backend Engineer · Java, Spring & Applied AI",
      description:
        "Senior Backend Engineer. Java, Spring Boot and microservices for banking, fintech and mobility, now applied to RAG pipelines, LLM integration and agentic workflows. 15+ years shipping production software.",
    },
    about: {
      title: "About — Diego Barrio H.",
      description:
        "About Diego Barrio H., Senior Backend & Platform Engineer with 15+ years building cloud-native systems and distributed architectures for banking, fintech and mobility.",
    },
    cv: {
      title: "CV — Diego Barrio H.",
      description:
        "Full CV of Diego Barrio H.: 15+ years of Java and Spring Boot across banking, fintech and mobility, from Caja Mediterráneo in 2007 to Europcar today. Education, competencies and languages included.",
    },
    projects: {
      title: "Projects — Diego Barrio H.",
      description:
        "How I build with LLMs: a RAG pipeline that generates exams from your own material, a token-cost analyser for agentic code generation, and a plan generator fenced by a validated food catalog. Java, Spring Boot and Kubernetes underneath.",
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
    themeToggle: "Theme",
    themeLight: "Light theme",
    themeDark: "Dark theme",
    langGroup: "Language",
    langToggle: "Ver en español",
  },

  home: {
    hero: {
      status: "Open to senior roles",
      roleParts: ["Senior Backend Engineer", "Java, Spring & Applied AI"],
      lead: "15+ years building scalable, maintainable, and observable backend platforms for banking, fintech, and mobility. I now bring that same engineering standard to RAG pipelines, LLM integration, and agentic workflows.",
      cvAction: "Open CV PDF",
      contactAction: "Let's talk",
      portraitAlt: "Portrait of Diego Barrio H.",
    },
    metrics: [
      { value: "15+", label: "years shipping production software" },
      { value: "4", label: "critical industries: banking, fintech, mobility, enterprise" },
      { value: "3", label: "AI products built end to end, from RAG pipeline to deploy" },
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
      {
        title: "Applied AI",
        items: ["LLM integration", "RAG", "Embeddings", "Agentic workflows", "Tool calling", "MCP", "OpenRouter", "Ollama"],
      },
    ],
    labHead: { title: "Where I put AI to work.", kicker: "Lab" },
    lab: {
      text: "Personal products I design, build, and run myself. They are pre-production and I am their first user, which is exactly why they are where I test architecture decisions before they reach a client system.",
      ctaAria: "backendtothefuture.com",
      builds: [
        {
          name: "Akademia",
          slug: "akademia",
          url: AKADEMIA_URL,
          subtitle: "RAG-generated exams from your own material",
          text: "The hard part is the RAG generation itself: turning the resources a user uploads into tests and questions automatically. Built on the OpenAI embeddings API through OpenRouter, with Gemini Embedding 2 support in progress.",
          stack: ["Java", "Spring Boot", "PostgreSQL", "RAG", "OpenRouter", "Stripe"],
        },
        {
          name: "TokenMeter",
          slug: "tokenmeter",
          url: TOKENMETER_URL,
          subtitle: "What code generation actually costs",
          text: "An open exploration of tokenization and LLM cost in code generation, across both agentic loops and direct single-shot flows. Multi-provider pricing comparison with dynamic price synchronization.",
          stack: ["Java", "Spring Boot", "Docker", "Cloudflare", "LLM APIs"],
        },
        {
          name: "Forma",
          slug: "forma",
          url: FORMA_URL,
          subtitle: "A validated contract for LLM-generated plans",
          text: "A personal fitness operating system: body composition, training, nutrition and shopping cost in one weekly loop. The interesting part is the boundary I drew around the model. An LLM can generate a nutrition plan, but only from a catalog the API publishes, and any food it invents is rejected on import. Macros are measured data, not something a model gets to estimate.",
          stack: ["Java 21", "Spring Boot 3", "Hexagonal", "PostgreSQL", "Flyway", "React 19", "Playwright"],
        },
        {
          name: "Local AI Lab",
          slug: "local-ai-lab",
          url: null,
          subtitle: "Self-hosted models on an RTX 3060",
          text: "Local LLM deployment on 12 GB of VRAM with Ollama and LM Studio. Where I evaluate Qwen, Gemma, Llama, DeepSeek R1 and Mistral Nemo against agentic development workflows and MCP integrations.",
          stack: ["Ollama", "LM Studio", "MCP", "Claude Code"],
        },
      ],
    },
    contactHead: { title: "Let's build something that cannot fail.", kicker: "Contact" },
    contact: {
      lead: "Available for senior backend roles, remote across the EU, and for consulting on applied AI in existing systems. I reply within 24 hours.",
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
      "Two kinds of work. The products I build and run myself, where I get to choose every constraint, and the client systems where the constraints choose me.",
    buildsTitle: "What I build and run myself",
    readMore: "Read the detail",
    visitSite: "Visit the site",
    backToProjects: "All projects",
    statusLabel: "Status",
    stackLabel: "Stack",
    pages: [
      {
        slug: "akademia",
        name: "Akademia",
        url: AKADEMIA_URL,
        tagline: "Exams generated from your own material",
        summary:
          "A retrieval pipeline that turns uploaded PDFs into exam questions, and never lets one reach a student unreviewed.",
        metaTitle: "Akademia — a RAG pipeline that generates exams from your own PDFs",
        metaDescription:
          "How Akademia generates exam questions with RAG: chunking, embeddings through OpenRouter, generation on Groq, and a draft-and-review gate so no generated question reaches a student unchecked. Java 21 and Spring Boot 3.4.",
        status: "Pre-production. I am its first user.",
        sections: [
          {
            title: "The problem",
            body: [
              "Studying from your own material means writing your own exam questions first. That is the slowest part of preparing for anything, and it is the part everyone skips.",
              "Akademia takes the documents you already have and produces questions from them. The interesting engineering is not the prompt. It is everything around the prompt.",
            ],
          },
          {
            title: "A retrieval problem, not a prompting problem",
            body: [
              "An uploaded document is stored, chunked at a thousand characters with two hundred characters of overlap, and each chunk is embedded and kept alongside its source. Generation retrieves the top eight chunks for a topic and writes questions only from those passages, so a question stays answerable from the material the user actually supplied.",
              "Embeddings run on text-embedding-3-small through OpenRouter, while the chat model is Llama 3.3 70B on Groq. Two providers is not indecision: Groq serves no embedding models, so the pipeline has to span both. Gemini Embedding 2 is being added as a second embedding provider so that no single vendor can strand the pipeline.",
            ],
          },
          {
            title: "Generated questions are drafts, not answers",
            body: [
              "Nothing a model writes becomes a real question on its own. Every generated item lands in a drafts table with a status of generated, validated or rejected, and carries a reference back to the source document it came from.",
              "That gate is the whole point. A model that hallucinates a plausible question about a topic you are being examined on is worse than no question at all, so the system is built on the assumption that it will, and makes a human the last step.",
            ],
          },
          {
            title: "A seam where the vector store will go",
            body: [
              "The first version stores each embedding as a JSON float array in a text column. That is not the end state and the migration says so out loud: the upgrade path to a pgvector column of dimension 1536 is written into the schema as a comment, and retrieval sits behind a port.",
              "Switching from a full scan to a real vector index means writing one adapter. The domain does not find out. Shipping the simple version first was a choice, not an oversight, and leaving the seam visible is what makes it a choice.",
            ],
          },
          {
            title: "The rest of the product",
            body: [
              "Around the pipeline there is an actual application: timed exams and mock tests, spaced-repetition flashcards on the SM-2 algorithm, a subjects to units to questions hierarchy, JWT with Google OAuth2 for sign-in, and a Stripe store for study materials.",
              "Java 21 and Spring Boot 3.4 on the backend, React 18 with Vite 5 and Tailwind on the front, the whole stack in Docker.",
            ],
          },
        ],
        stack: ["Java 21", "Spring Boot 3.4", "PostgreSQL", "React 18", "Vite 5", "Tailwind", "RAG", "OpenRouter", "Groq", "Stripe", "Docker"],
        writing: [
          { slug: "three-agents-software-factory", title: "Multi-agent workflow: ChatGPT, Claude and Hermes Agent", date: "2026-07-05" },
          { slug: "standardizing-the-software-factory-with-ai-agents", title: "Forma matures: the week I standardized the software factory", date: "2026-07-12" },
        ],
      },
      {
        slug: "tokenmeter",
        name: "TokenMeter",
        url: TOKENMETER_URL,
        tagline: "What a feature costs when a model writes it",
        summary:
          "Counts a repository with a real tokenizer, then prices the same work across models and three usage modes.",
        metaTitle: "TokenMeter — what it costs to generate a repository with an LLM",
        metaDescription:
          "TokenMeter counts a GitHub repository with the jtokkit o200k_base encoder and prices generation across models in raw, assisted and agentic modes. Open source, Java 21 and Spring Boot.",
        status: "Open source, MIT, self-hosted.",
        sections: [
          {
            title: "The problem",
            body: [
              "Providers quote their prices per million tokens. Nobody measures their repository in tokens, so the number on the pricing page answers a question nobody asked.",
              "TokenMeter answers the question people actually have: what would it have cost to generate this codebase, and how much does that change depending on how you work.",
            ],
          },
          {
            title: "A real encoder, not a rule of thumb",
            body: [
              "Token counts come from jtokkit running the o200k_base encoding, the same tokenization the models use. Dividing character counts by four is close enough to sound right and wrong enough to make the comparison between models meaningless, which is the entire output of the tool.",
            ],
          },
          {
            title: "Three modes, and honesty about what they are",
            body: [
              "The same repository is priced three ways. Raw counts only the tokens of the final code, one times input and nothing on output: an absolute floor. Assisted multiplies input by five and adds one times output for human iteration and moderate reasoning. Agentic multiplies input by twenty and output by four, because an autonomous agent re-reads its context on every step and calls tools in between.",
              "Those multipliers are fixed approximations and the tool says so in its own README. It is an estimate with a floor, not accounting. Publishing the multipliers is the point: a cost model you cannot inspect is a number you cannot argue with.",
            ],
          },
          {
            title: "How a run works",
            body: [
              "Posting a repository URL to the analyze endpoint returns a 202 and queues an asynchronous job. The repository is cloned temporarily, counted, and thrown away.",
              "The result breaks down by language, extension, folder and individual file, can be shared as a public URL or embedded as a badge, and is kept so analyses can be compared over time. Model prices are configuration, not hard-coded constants.",
            ],
          },
        ],
        stack: ["Java 21", "Spring Boot 3", "jtokkit", "o200k_base", "Docker", "Cloudflare", "SonarCloud"],
        writing: [
          { slug: "spec-driven-ai-agents-with-gentle-ai-and-the-token-bill", title: "Spec-Driven Development with Gentle AI: flawless process, brutal token bill", date: "2026-07-26" },
          { slug: "three-agents-software-factory", title: "Multi-agent workflow: ChatGPT, Claude and Hermes Agent", date: "2026-07-05" },
          { slug: "my-test-measured-the-box-not-the-letters", title: "My test measured the box, not the letters", date: "2026-09-06" },
        ],
      },
      {
        slug: "forma",
        name: "Forma",
        url: FORMA_URL,
        tagline: "A model that is not allowed to invent facts",
        summary:
          "A personal fitness operating system where an LLM writes the plan but may only name food the API has measured.",
        metaTitle: "Forma — fencing an LLM behind a validated domain contract",
        metaDescription:
          "In Forma a language model generates the nutrition plan, but it may only reference food identifiers published by the API; anything invented is rejected on import. Hexagonal Java 21, Spring Boot 3, PostgreSQL and Flyway.",
        status: "Pre-production, and the banner in the app says so.",
        sections: [
          {
            title: "The problem",
            body: [
              "A weekly training and nutrition plan living in a spreadsheet cannot react to last week's body composition, to a run that finished at eleven at night in an Alicante summer, or to a change in shopping prices.",
              "Forma connects body composition, training, nutrition and the cost of the weekly shop into one loop, and tries to answer a single question: what should I do this week, given what happened last week.",
            ],
          },
          {
            title: "The boundary around the model",
            body: [
              "A language model generates the plan. It never states a fact. The API publishes a catalog of foods, each with macros somebody measured, and an imported plan may only reference identifiers from that catalog. Anything else is rejected at import time.",
              "The reasoning is written into the format document in one sentence: the macros of a food are something a person measures, not something a model estimates. The model gets to compose. It does not get to assert.",
            ],
          },
          {
            title: "A domain that does not know about frameworks",
            body: [
              "The backend is hexagonal, with the domain kept free of framework types and the infrastructure held at the adapter boundary. Persistence is JDBC over PostgreSQL with Flyway migrations and deliberately no ORM, a decision recorded in an architecture decision record rather than left to be rediscovered later.",
              "Sixty-odd migrations in, that choice still holds, which is the only evidence that matters about an architectural decision.",
            ],
          },
          {
            title: "Measured, not typed in",
            body: [
              "Body measurements arrive through a Withings OAuth integration rather than manual entry, because a number you have to retype is a number you stop recording. A weekly insights service turns those raw metrics into small adjustments, in the hundred-calorie range, instead of dramatic plan rewrites.",
            ],
          },
          {
            title: "How it is built",
            body: [
              "Thirteen architecture decision records, a specification per story kept in the repository, and a React 19 front end covered by Vitest unit tests and Playwright end-to-end runs, all gated in continuous integration.",
            ],
          },
        ],
        stack: ["Java 21", "Spring Boot 3", "Hexagonal", "PostgreSQL 17", "Flyway", "React 19", "TypeScript", "Vite", "Vitest", "Playwright", "Docker Compose"],
        writing: [
          { slug: "my-app-stopped-inventing-numbers", title: "My app stopped inventing numbers", date: "2026-08-09" },
          { slug: "building-the-catalogs-an-ai-nutrition-plan-needs", title: "The catalogs an AI nutrition plan needs", date: "2026-08-02" },
          { slug: "the-day-of-the-week-was-my-primary-key", title: "The day of the week was my primary key", date: "2026-08-23" },
          { slug: "shipping-62-prs-in-a-week-with-spec-driven-ai-agents", title: "62 pull requests in one week: spec-driven development with AI agents", date: "2026-07-19" },
          { slug: "hexagonal-architecture-in-practice", title: "Hexagonal Architecture in Spring Boot: ports & adapters", date: "2024-03-14" },
        ],
      },
      {
        slug: "local-ai-lab",
        name: "Local AI Lab",
        url: null,
        tagline: "Claims about local models, checked against my own VRAM",
        summary:
          "A fixed set of agentic tasks run against local models on twelve gigabytes of consumer hardware.",
        metaTitle: "Local AI Lab — running agentic workflows on 12 GB of VRAM",
        metaDescription:
          "Evaluating Qwen, Gemma, Llama, DeepSeek R1 and Mistral Nemo locally on an RTX 3060 with Ollama and LM Studio, against real agentic development workflows and MCP integrations.",
        status: "Personal hardware. Ongoing.",
        sections: [
          {
            title: "Why bother",
            body: [
              "Every claim about what a local model can do is worth exactly as much as the hardware budget of the person making it. Benchmarks are run on cards nobody has at home, and the interesting question is not whether a model is good but whether it is good enough on twelve gigabytes.",
            ],
          },
          {
            title: "The setup",
            body: [
              "An RTX 3060 with 12 GB of VRAM, Ollama and LM Studio, and a fixed set of agentic development tasks to run everything against so the comparison means something.",
              "Models under evaluation include Qwen, Gemma, Llama 3.1, DeepSeek R1 and Mistral Nemo.",
            ],
          },
          {
            title: "What it actually tells me",
            body: [
              "Which development workflows survive without a frontier model and which quietly fall apart. Tool calling and MCP integrations are where the gap shows first: a model that writes acceptable code will still lose the thread across a multi-step agentic loop long before it runs out of context.",
              "It is also where I find out what a workflow costs when the marginal token is free, which is the other half of the question TokenMeter asks.",
            ],
          },
        ],
        stack: ["Ollama", "LM Studio", "MCP", "Claude Code", "RTX 3060"],
        writing: [
          { slug: "probando-local-llms", title: "Local LLMs on an RTX 3060: what fits in 12 GB of VRAM", date: "2026-06-08" },
          { slug: "ai-agent-as-home-lab-operator", title: "An AI agent running my homelab with Home Assistant", date: "2026-06-28" },
          { slug: "three-agents-software-factory", title: "Multi-agent workflow: ChatGPT, Claude and Hermes Agent", date: "2026-07-05" },
        ],
      },
    ],
    workTitle: "Client and employer systems",
    writingTitle: "Written up on the lab",
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
    role: "Senior Backend Engineer · Java, Spring & Applied AI",
    tagline: "Cloud-native systems · Distributed architectures · RAG and agentic workflows",
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
        name: "Akademia",
        url: AKADEMIA_URL,
        hardware: null,
        subtitle: "RAG-Powered Learning Platform",
        description:
          "Web app to study and prepare for exams. The core of the system is the RAG generation pipeline: it turns the resources a user uploads into tests and questions automatically.",
        bullets: [
          "RAG generation pipeline that produces tests and questions from user-supplied material.",
          "Embeddings through the OpenAI embeddings API via OpenRouter; Gemini Embedding 2 support in progress.",
          "Chunking, indexing, and retrieval tuned so generated questions stay grounded in the source.",
          "Spaced-repetition flashcards and self-assessment.",
          "Integrated Stripe store to purchase study materials.",
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "RAG", "OpenAI Embeddings", "OpenRouter", "Stripe"],
      },
      {
        name: "TokenMeter",
        url: TOKENMETER_URL,
        hardware: null,
        subtitle: "Tokenization & LLM Cost Exploration",
        description:
          "An open project exploring tokenization and the real cost of LLMs in code generation, across both agentic loops and more direct single-shot flows.",
        bullets: [
          "Repository token analysis engine.",
          "Cost comparison of agentic versus direct code-generation flows.",
          "Token counting with the jtokkit o200k_base encoder rather than a character-based approximation.",
          "Deployed behind Cloudflare.",
        ],
        stack: ["Java", "Spring Boot", "Docker", "Cloudflare", "LLM APIs"],
      },
      {
        name: "Forma",
        url: FORMA_URL,
        hardware: null,
        subtitle: "Personal Fitness Operating System",
        description:
          "A personal health and fitness planning system that connects body composition, training, nutrition and shopping cost into one weekly decision loop.",
        bullets: [
          "Hexagonal backend with a framework-free domain: JDBC and Flyway over PostgreSQL, no ORM, decided and recorded in an ADR.",
          "LLM-generated nutrition plans are fenced by a validated contract: a plan may only reference food identifiers the API publishes, and anything the model invents is rejected on import.",
          "Withings OAuth integration for automatic body-measurement sync.",
          "Weekly insights service that turns raw metrics into small, actionable adjustments.",
          "React 19 front end with Vitest unit tests and Playwright end-to-end coverage, all gated in CI.",
          "Spec-driven delivery: 13 architecture decision records and per-story specs kept in the repository.",
        ],
        stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Flyway", "React 19", "TypeScript", "Vite", "Playwright", "Docker Compose"],
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
      "Creator of Akademia, a learning platform whose core is a RAG pipeline that generates exams from user-supplied material.",
      "Creator of TokenMeter, an open exploration of tokenization and LLM cost in code generation.",
      "Creator of Forma, a personal fitness operating system where LLM-generated plans are constrained by a validated domain contract.",
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
