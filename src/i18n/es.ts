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

const es: Content = {
  meta: {
    home: {
      title: "Diego Barrio H. — Senior Backend Engineer · Java, Spring e IA aplicada",
      description:
        "Senior Backend Engineer. Java, Spring Boot y microservicios para banca, fintech y movilidad, aplicados ahora a pipelines RAG, integración de LLMs y flujos agénticos. 15+ años entregando software en producción.",
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
      roleParts: ["Senior Backend Engineer", "Java, Spring e IA aplicada"],
      lead: "15+ años construyendo plataformas backend escalables, mantenibles y observables para banca, fintech y movilidad. Ahora llevo ese mismo estándar de ingeniería a pipelines RAG, integración de LLMs y flujos agénticos.",
      cvAction: "Ver CV en PDF",
      contactAction: "Hablemos",
      portraitAlt: "Retrato de Diego Barrio H.",
    },
    metrics: [
      { value: "15+", label: "años entregando software en producción" },
      { value: "4", label: "sectores críticos: banca, fintech, movilidad, enterprise" },
      { value: "3", label: "productos de IA construidos de punta a punta, del pipeline RAG al despliegue" },
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
      {
        title: "IA aplicada",
        items: ["Integración de LLMs", "RAG", "Embeddings", "Flujos agénticos", "Tool calling", "MCP", "OpenRouter", "Ollama"],
      },
    ],
    labHead: { title: "Dónde pongo la IA a trabajar.", kicker: "Lab" },
    lab: {
      text: "Productos personales que diseño, construyo y opero yo mismo. Están en preproducción y soy su primer usuario, y justo por eso son el sitio donde pruebo decisiones de arquitectura antes de que lleguen al sistema de un cliente.",
      ctaAria: "backendtothefuture.com",
      builds: [
        {
          name: "Akademia",
          url: AKADEMIA_URL,
          subtitle: "Exámenes generados por RAG desde tu propio material",
          text: "La parte difícil es la generación del RAG: convertir los recursos que sube el usuario en tests y preguntas de forma automática. Construido sobre la API de embeddings de OpenAI a través de OpenRouter, con soporte de Gemini Embedding 2 en curso.",
          stack: ["Java", "Spring Boot", "PostgreSQL", "RAG", "OpenRouter", "Stripe"],
        },
        {
          name: "TokenMeter",
          url: TOKENMETER_URL,
          subtitle: "Lo que cuesta de verdad generar código",
          text: "Exploración abierta de la tokenización y el coste de los LLMs en la generación de código, tanto en bucles agénticos como en flujos directos de una sola pasada. Comparación de precios multiproveedor con sincronización dinámica.",
          stack: ["Java", "Spring Boot", "Docker", "Cloudflare", "APIs de LLM"],
        },
        {
          name: "Forma",
          url: FORMA_URL,
          subtitle: "Planes de alimentación y entrenamiento generados con IA",
          text: "Genera un plan de alimentación y una rutina de ejercicios para mejorar la salud y la forma física, convirtiendo objetivos poco estructurados en un plan que una persona puede seguir de verdad.",
          stack: ["Spring Boot", "APIs de LLM", "Diseño de prompts"],
        },
        {
          name: "Local AI Lab",
          url: null,
          subtitle: "Modelos autoalojados sobre una RTX 3060",
          text: "Despliegue de LLMs en local sobre 12 GB de VRAM con Ollama y LM Studio. Donde evalúo Qwen, Gemma, Llama, DeepSeek R1 y Mistral Nemo contra flujos de desarrollo agénticos e integraciones MCP.",
          stack: ["Ollama", "LM Studio", "MCP", "Claude Code"],
        },
      ],
    },
    contactHead: { title: "¿Construimos algo que no pueda fallar?", kicker: "Contacto" },
    contact: {
      lead: "Disponible para roles senior de backend, en remoto dentro de la UE, y para consultoría sobre IA aplicada a sistemas ya existentes. Respuesta en menos de 24 horas.",
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
    role: "Senior Backend Engineer · Java, Spring e IA aplicada",
    tagline: "Sistemas cloud-native · Arquitecturas distribuidas · RAG y flujos agénticos",
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
        name: "Akademia",
        url: AKADEMIA_URL,
        hardware: null,
        subtitle: "Plataforma de aprendizaje basada en RAG",
        description:
          "Aplicación web para estudiar y preparar exámenes. El núcleo del sistema es el pipeline de generación RAG: convierte los recursos que sube el usuario en tests y preguntas de forma automática.",
        bullets: [
          "Pipeline de generación RAG que produce tests y preguntas a partir del material aportado por el usuario.",
          "Embeddings mediante la API de OpenAI a través de OpenRouter; soporte de Gemini Embedding 2 en curso.",
          "Chunking, indexado y recuperación ajustados para que las preguntas generadas se mantengan fieles a la fuente.",
          "Flashcards con repetición espaciada y autoevaluación.",
          "Tienda integrada con Stripe para comprar temarios.",
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "RAG", "OpenAI Embeddings", "OpenRouter", "Stripe"],
      },
      {
        name: "TokenMeter",
        url: TOKENMETER_URL,
        hardware: null,
        subtitle: "Exploración de tokenización y coste de LLMs",
        description:
          "Proyecto libre para explorar la tokenización y el coste real de los LLMs en la generación de código, tanto en bucles agénticos como en flujos directos de una sola pasada.",
        bullets: [
          "Motor de análisis de tokens de repositorios.",
          "Comparación de coste entre flujos de generación agénticos y directos.",
          "Comparación de precios multiproveedor con sincronización dinámica.",
          "Desplegado detrás de Cloudflare.",
        ],
        stack: ["Java", "Spring Boot", "Docker", "Cloudflare", "APIs de LLM"],
      },
      {
        name: "Forma",
        url: FORMA_URL,
        hardware: null,
        subtitle: "Planes de salud y entrenamiento generados con IA",
        description:
          "Genera un plan de alimentación y una rutina de ejercicios para mejorar la salud y la forma física a partir de los objetivos y las restricciones del usuario.",
        bullets: [
          "Convierte objetivos poco estructurados en un plan lo bastante concreto como para seguirlo.",
          "Diseño de prompts y de la salida para que los planes generados sean consistentes y seguros.",
          "Salida estructurada del LLM mapeada sobre un modelo de dominio, no texto libre.",
        ],
        stack: ["Spring Boot", "APIs de LLM", "Diseño de prompts"],
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
      "Creador de Akademia, plataforma de aprendizaje cuyo núcleo es un pipeline RAG que genera exámenes a partir del material del usuario.",
      "Creador de TokenMeter, exploración abierta de la tokenización y el coste de los LLMs en la generación de código.",
      "Creador de Forma, generador con IA de planes de alimentación y entrenamiento.",
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
