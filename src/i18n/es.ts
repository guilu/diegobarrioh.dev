import type { Content } from "./types";
import { EMAIL, LAB_URL, LINKEDIN_URL, SITE_URL, companies, socials } from "./shared";

const es: Content = {
  meta: {
    home: {
      title: "Diego Barrio H. — Senior Backend Engineer · Java & Spring",
      description:
        "Senior Backend Engineer. Java, Spring Boot, microservicios y observabilidad para banca, fintech y movilidad. 15+ años entregando software en producción.",
    },
    about: {
      title: "Sobre mí — Diego Barrio H.",
      description:
        "Sobre Diego Barrio H., Senior Backend & Platform Engineer con 15+ años construyendo sistemas cloud-native y arquitecturas distribuidas para banca, fintech y movilidad.",
    },
    cv: {
      title: "CV — Diego Barrio H.",
      description:
        "CV de Diego Barrio H., Senior Backend & Platform Engineer. Java, Spring Boot, microservicios, AWS, Kubernetes y flujos de desarrollo asistidos por IA. 15+ años en producción.",
    },
    projects: {
      title: "Proyectos — Diego Barrio H.",
      description:
        "Proyectos de Diego Barrio H.: Akademia (plataforma de aprendizaje con IA y RAG), Backend to the Future y otros sistemas backend cloud-native.",
    },
  },

  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Stack",
    lab: "Lab",
    contact: "Contacto",
    cv: "CV",
    brandAlt: "Logo de Diego Barrio H.",
    menuOpen: "Abrir menú de navegación",
    menuClose: "Cerrar menú de navegación",
    themeToggle: "Cambiar tema",
    langToggle: "View in English",
  },

  home: {
    hero: {
      status: "Disponible para roles senior",
      roleParts: ["Senior Backend Engineer", "Java & Spring"],
      lead: "15+ años construyendo plataformas backend escalables, mantenibles y observables para banca, fintech y movilidad. Arquitectura moderna para productos que no pueden fallar.",
      cvAction: "Ver CV en PDF",
      contactAction: "Hablemos",
      portraitAlt: "Retrato de Diego Barrio H.",
    },
    metrics: [
      { value: "15+", label: "años entregando software en producción" },
      { value: "4", label: "sectores críticos: banca, fintech, movilidad, enterprise" },
      { value: "100%", label: "foco backend: arquitectura, calidad y observabilidad" },
    ],
    companiesLabel: "Trayectoria en",
    companies,
    experienceHead: { title: "Experiencia en sistemas que no pueden fallar.", kicker: "Experiencia" },
    currentBadge: "● Actual",
    experience: [
      {
        period: "2024 — Hoy",
        current: true,
        role: "Senior Backend Engineer",
        company: "Mindden / Europcar Mobility Group",
        impact:
          "Desarrollo de APIs de negocio crítico para pagos y facturación, reforzando robustez operativa y velocidad de entrega.",
        stack: ["Java", "Spring Boot", "Kafka", "AWS", "Kubernetes"],
      },
      {
        period: "2022 — 2024",
        role: "Senior Analyst",
        company: "Accenture",
        impact:
          "Microservicios y optimización de datos para banca, con foco en rendimiento, uptime y mantenibilidad.",
        stack: ["Java", "Spring", "Microservices", "Oracle"],
      },
      {
        period: "2014 — 2022",
        role: "Senior Specialist",
        company: "SABIS",
        impact:
          "Diseño de plataformas enterprise e integraciones internas para estandarizar flujos entre equipos.",
        stack: ["Spring MVC", "JPA", "SharePoint", ".NET"],
      },
      {
        period: "2007 — 2014",
        role: "Analyst / Developer",
        company: "Banco Sabadell · Caja Mediterráneo",
        impact: "Evolución de plataformas transaccionales en banca online y servicios ATM de alta criticidad.",
        stack: ["Java", "Banca online", "ATM"],
      },
    ],
    projectsHead: { title: "Trabajo real en dominios complejos.", kicker: "Proyectos" },
    highlights: [
      {
        title: "APIs de facturación y pagos",
        text: "Diseño de APIs críticas para movilidad, con arquitectura orientada a eventos, observabilidad operativa y despliegues cloud-native.",
        stack: ["Java", "Spring Boot", "Kafka", "AWS", "Kubernetes"],
      },
      {
        title: "Modernización de core bancario",
        text: "Migración de procesos bancarios a servicios modulares, mejorando rendimiento, trazabilidad y time-to-market.",
        stack: ["Spring", "Hibernate", "Oracle", "SQL Server", "CI/CD"],
      },
      {
        title: "Plataformas enterprise",
        text: "Construcción de plataformas e integraciones para equipos internos, reduciendo fricción operativa y deuda técnica.",
        stack: ["Spring MVC", "JPA", "SharePoint", ".NET", "Oracle"],
      },
    ],
    skillsHead: {
      title: "Tecnologías y prácticas para escalar producto y equipo.",
      kicker: "Stack",
    },
    skills: [
      {
        title: "Backend Core",
        items: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "JPA/Hibernate", "REST APIs"],
      },
      {
        title: "Arquitectura y escalado",
        items: ["Microservices", "DDD", "Hexagonal", "Event-driven", "Clean Architecture", "SRE mindset"],
      },
      {
        title: "Cloud y plataforma",
        items: ["AWS", "Kubernetes", "Docker", "Apache Kafka", "CI/CD", "GitLab/Jenkins"],
      },
      {
        title: "Data y observabilidad",
        items: ["PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Grafana", "Splunk/Sentry"],
      },
    ],
    labHead: { title: "Laboratorio: cómo pienso y cómo construyo.", kicker: "Lab" },
    lab: {
      text: "Un espacio donde documento proyectos personales, decisiones de arquitectura y experimentos orientados a resolver problemas reales.",
      ctaAria: "backendtothefuture.com",
    },
    contactHead: { title: "¿Construimos algo que no pueda fallar?", kicker: "Contacto" },
    contact: {
      lead: "Disponible para nuevos proyectos, consultoría y roles senior de backend. Respuesta en menos de 24 horas.",
      calendly: "Reservar 30 min en Calendly",
      open: "Abrir",
      socials,
    },
    footer: "Backend Engineering con foco en calidad, arquitectura y entrega.",
  },

  about: {
    title: "Sobre mí",
    intro:
      "Soy Ingeniero Backend senior con más de 15 años construyendo plataformas de alto rendimiento en banca, fintech y movilidad. Mi base es Java y el ecosistema Spring, con especial foco en microservicios, diseño limpio, DDD y prácticas de calidad como TDD y CI/CD.",
    focusTitle: "En qué estoy enfocado",
    focus: [
      "Arquitectura de software y diseño evolutivo de sistemas.",
      "DevOps, observabilidad y principios SRE para operar con confianza.",
      "Integración de eventos y automatización con pipelines confiables.",
    ],
    howTitle: "Cómo trabajo",
    how: [
      {
        title: "Calidad primero",
        text: "Promuevo TDD, código limpio y revisiones honestas para mantener la base técnica sana.",
      },
      {
        title: "Entrega continua",
        text: "CI/CD, automatización y despliegues confiables para mover rápido sin romper.",
      },
    ],
    extrasTitle: "Extras",
    extras: [
      "Mentor voluntario para estudiantes de Ingeniería (Fundación Banco Sabadell).",
      "Experiencia en equipos internacionales (inglés nivel C1).",
    ],
  },

  projects: {
    title: "Proyectos",
    intro:
      "Selección de proyectos y líneas de trabajo relevantes en backend, arquitectura y sistemas críticos. Si quieres detalles específicos o demos públicas, escríbeme.",
    entries: [
      {
        title: "APIs de facturación y pagos",
        period: "2024 – Actualidad",
        context: "Europcar Mobility Group (Mindden)",
        impact:
          "APIs críticas para facturación y pagos, con arquitectura basada en eventos y despliegues cloud-native.",
        stack: ["Java", "Spring Boot", "AWS", "Kubernetes", "Kafka"],
      },
      {
        title: "Modernización de core bancario",
        period: "2022 – 2024",
        context: "Accenture",
        impact: "Microservicios para modularidad y mejoras de rendimiento en procesos bancarios.",
        stack: ["Spring Boot", "Hibernate", "Oracle", "SQL Server"],
      },
      {
        title: "Suite de plataformas enterprise",
        period: "2014 – 2022",
        context: "SABIS",
        impact: "Plataformas transversales e integraciones que mejoraron flujos interdepartamentales.",
        stack: ["Spring MVC", "JPA", "Oracle", "SharePoint"],
      },
      {
        title: "Plataforma de seguimiento de incidencias",
        period: "2012 – 2014",
        context: "Banco Sabadell",
        impact: "Sistema interno para gestión de incidencias con foco en usabilidad y trazabilidad.",
        stack: ["Spring Boot", "Thymeleaf", "Oracle"],
      },
      {
        title: "Banca online y servicios ATM",
        period: "2007 – 2012",
        context: "Caja Mediterráneo",
        impact: "Servicios transaccionales y migración de core bancario con alta criticidad operativa.",
        stack: ["J2EE", "ALNOVA", "Oracle"],
      },
    ],
  },

  cv: {
    role: "Senior Backend & Platform Engineer",
    tagline: "Sistemas cloud-native · Arquitecturas distribuidas · Flujos de desarrollo asistidos por IA",
    contact: [
      { label: "Alicante, España", href: null },
      { label: EMAIL, href: `mailto:${EMAIL}` },
      { label: "LinkedIn", href: LINKEDIN_URL },
      { label: "diegobarrioh.dev", href: SITE_URL },
      { label: "backendtothefuture.com", href: LAB_URL },
    ],
    openPdf: "Abrir CV en PDF",
    back: "Volver",
    headings: {
      profile: "Perfil",
      competencies: "Competencias clave",
      projects: "Proyectos destacados",
      experience: "Experiencia profesional",
      education: "Educación",
      community: "Comunidad y proyectos personales",
      learning: "En aprendizaje",
      languages: "Idiomas",
      technologies: "Tecnologías:",
      hardware: "Hardware:",
      languageCol: "Idioma",
      levelCol: "Nivel",
    },
    summary:
      "Senior Backend Engineer con más de 15 años de experiencia diseñando y construyendo sistemas distribuidos, plataformas de pago y aplicaciones cloud-native. Especialista en Java, Spring Boot, arquitecturas event-driven y microservicios, con experiencia operando cargas en contenedores sobre Kubernetes. Experiencia en fintech, banca y movilidad, entregando sistemas backend escalables y resilientes. Actualmente enfocado en Platform Engineering, Observabilidad y flujos de desarrollo asistidos por IA, explorando sistemas agénticos, integraciones con LLMs y prácticas modernas de entrega de software.",
    competencies: [
      {
        title: "Ingeniería Backend",
        items: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "TDD"],
      },
      {
        title: "Arquitectura de Software",
        items: ["Microservices", "DDD", "Hexagonal Architecture", "Clean Architecture", "Event-Driven", "API Design"],
      },
      {
        title: "Platform Engineering",
        items: ["Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "AWS", "Azure"],
      },
      {
        title: "Observabilidad",
        items: ["Grafana", "Prometheus", "Loki", "OpenTelemetry", "Sentry", "Splunk"],
      },
      {
        title: "Datos y Mensajería",
        items: ["Oracle", "SQL Server", "PostgreSQL", "Apache Kafka"],
      },
      {
        title: "Ingeniería de IA",
        items: ["LLM Integration", "Agentic Workflows", "Tool Calling", "MCP", "Ollama", "Claude Code", "OpenAI APIs", "Gemini", "RAG"],
      },
    ],
    projects: [
      {
        name: "TokenMeter",
        url: "https://tokenmeter.backendtothefuture.com",
        hardware: null,
        subtitle: "Plataforma de estimación de costes con IA",
        description: "Plataforma para estimar el coste del desarrollo de software usando modelos de IA.",
        bullets: [
          "Motor de análisis de tokens de repositorios.",
          "Comparación de precios entre múltiples proveedores.",
          "Sincronización dinámica de precios.",
          "Estimación de coste para flujos de desarrollo asistido por IA.",
          "Despliegue en producción con Cloudflare.",
        ],
        stack: ["Java", "Spring Boot", "Docker", "Cloudflare", "AI APIs"],
      },
      {
        name: "Akademia",
        url: "https://akademia.diegobarrioh.dev",
        hardware: null,
        subtitle: "Plataforma de aprendizaje con IA",
        description:
          "Aplicación web para estudiar y preparar exámenes, con generación de contenido asistida por IA y una tienda integrada para comprar temarios.",
        bullets: [
          "Estudio y preparación de exámenes con temarios estructurados.",
          "Generación de preguntas con IA mediante RAG (embeddings OpenAI text-embedding-3-small vía OpenRouter).",
          "Flashcards con repetición espaciada.",
          "Tienda integrada con Stripe para comprar temarios.",
          "Seguimiento de progreso y autoevaluación.",
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "Stripe", "RAG", "OpenAI", "OpenRouter"],
      },
      {
        name: "Backend to the Future",
        url: LAB_URL,
        hardware: null,
        subtitle: "Blog de ingeniería y plataforma técnica",
        description: "Plataforma personal donde publico proyectos, artículos técnicos y experimentos de ingeniería.",
        bullets: [
          "Desarrollo backend.",
          "Arquitectura de software.",
          "Sistemas cloud-native.",
          "Kubernetes.",
          "Ingeniería de IA.",
          "Productividad del desarrollador.",
        ],
        stack: [],
      },
      {
        name: "Local AI Lab",
        url: null,
        hardware: "NVIDIA GeForce RTX 3060 (12 GB de VRAM)",
        subtitle: "Infraestructura de IA autoalojada",
        description: "Entorno personal dedicado a evaluar y operar modelos de lenguaje (LLM) en local.",
        bullets: [
          "Despliegue de LLMs en local.",
          "Ollama y LM Studio.",
          "Modelos probados: Qwen 3.5, Gemma 3, Llama 3.1, DeepSeek R1 y Mistral Nemo.",
          "Flujos de desarrollo de software agénticos.",
          "Integraciones MCP.",
          "Asistentes de código autónomos.",
        ],
        stack: [],
      },
    ],
    experience: [
      {
        role: "Ingeniero Backend Senior",
        company: "Mindden (para Europcar Mobility Group)",
        period: "Mar 2024 – Actualidad",
        bullets: [
          "Diseño e implementación de APIs de facturación y pagos con Spring Boot, microservicios, AWS y Kubernetes.",
          "Integración de Apache Kafka para arquitecturas event-driven y procesamiento asíncrono.",
          "Promoción de Domain-Driven Design, arquitectura hexagonal y prácticas TDD.",
          "Mejora de pipelines CI/CD con GitLab.",
          "Contribución a iniciativas de plataforma cloud-native y prácticas de observabilidad.",
        ],
        stack: ["Java", "Spring Boot", "Kafka", "Kubernetes", "AWS", "GitLab CI/CD", "Oracle"],
      },
      {
        role: "Analista Senior",
        company: "Accenture",
        period: "Jul 2022 – Mar 2024",
        bullets: [
          "Desarrollo y mantenimiento de sistemas bancarios con Spring Boot e Hibernate.",
          "Construcción de microservicios enfocados en escalabilidad y fiabilidad.",
          "Gestión de flujos batch con IBM Tivoli Workload Scheduler.",
          "Optimización de queries complejas en Oracle y SQL Server.",
        ],
        stack: ["Java", "Spring Boot", "Oracle", "SQL Server", "IBM Tivoli"],
      },
      {
        role: "Especialista Senior",
        company: "SABIS",
        period: "Jun 2014 – Jun 2022",
        bullets: [
          "Desarrollo y mantenimiento de plataformas enterprise usadas en múltiples departamentos.",
          "Aplicaciones con Spring MVC, WebFlow, JPA e Hibernate.",
          "Participación en integraciones con soluciones .NET y SharePoint.",
        ],
        stack: ["Java", "Spring MVC", "Hibernate", "Oracle", "SharePoint"],
      },
      {
        role: "Analista",
        company: "Banco Sabadell",
        period: "Nov 2012 – Jun 2014",
        bullets: [
          "Desarrollo de aplicaciones de negocio internas con el ecosistema Spring.",
          "Participación en el diseño e implementación de soluciones enterprise web.",
        ],
        stack: ["Java", "Spring", "Thymeleaf", "Oracle"],
      },
      {
        role: "Analista y Desarrollador",
        company: "Caja Mediterráneo (CAM)",
        period: "Mar 2007 – Nov 2012",
        bullets: [
          "Desarrollo y mantenimiento de aplicaciones de banca online.",
          "Participación en servicios ATM y proyectos de migración de core banking.",
        ],
        stack: ["Java EE", "Oracle"],
      },
      {
        role: "Desarrollador Web",
        company: "HDV",
        period: "Dic 2005 – Mar 2007",
        bullets: ["Desarrollo de aplicaciones web dinámicas e interfaces interactivas."],
        stack: ["PHP", "MySQL", "JavaScript"],
      },
    ],
    education: [
      {
        title: "Máster en Desarrollo de Aplicaciones y Servicios Web",
        org: "Universidad de Alicante",
        period: "2010 – 2011",
        note: null,
      },
      {
        title: "Certificado en Java Enterprise Development",
        org: "Universidad de Alicante",
        period: "2009 – 2010",
        note: null,
      },
      {
        title: "Ingeniería Informática (5 años)",
        org: "Universidad de Alicante",
        period: "1998 – 2005",
        note: "Equivalente a nivel de Máster según el Plan Bolonia.",
      },
    ],
    community: [
      "Creador de Backend to the Future, plataforma centrada en arquitectura de software e ingeniería backend.",
      "Creador de TokenMeter, plataforma de estimación de costes de desarrollo con IA.",
      "Creador de Akademia, plataforma de aprendizaje con IA y tienda de temarios (Stripe).",
      "Experimentación activa con LLMs locales, agentes de IA y flujos de desarrollo autónomos.",
      "Antiguo mentor de estudiantes de Informática a través de la Fundación Banco Sabadell.",
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
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Competencia profesional plena (C1)" },
    ],
  },
};

export default es;
