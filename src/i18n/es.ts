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
  consent: {
    title: "Analítica opcional",
    description:
      "¿Permites analítica anónima para mejorar esta web? No se carga Google Tag Manager hasta que aceptes.",
    accept: "Aceptar",
    reject: "Rechazar",
    privacy: "Privacidad",
  },

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
        "CV completo de Diego Barrio H.: 15+ años de Java y Spring Boot en banca, fintech y movilidad, desde Caja Mediterráneo en 2007 hasta Europcar hoy. Incluye formación, competencias e idiomas.",
    },
    projects: {
      title: "Proyectos — Diego Barrio H.",
      description:
        "Cómo construyo con LLMs: un pipeline RAG que genera exámenes desde tu propio material, un analizador de coste en tokens para generación agéntica de código y un generador de planes acotado por un catálogo validado. Java, Spring Boot y Kubernetes debajo.",
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
          slug: "akademia",
          url: AKADEMIA_URL,
          subtitle: "Exámenes generados por RAG desde tu propio material",
          text: "La parte difícil es la generación del RAG: convertir los recursos que sube el usuario en tests y preguntas de forma automática. Construido sobre la API de embeddings de OpenAI a través de OpenRouter, con soporte de Gemini Embedding 2 en curso.",
          stack: ["Java", "Spring Boot", "PostgreSQL", "RAG", "OpenRouter", "Stripe"],
        },
        {
          name: "TokenMeter",
          slug: "tokenmeter",
          url: TOKENMETER_URL,
          subtitle: "Lo que cuesta de verdad generar código",
          text: "Exploración abierta de la tokenización y el coste de los LLMs en la generación de código, tanto en bucles agénticos como en flujos directos de una sola pasada. Comparación de precios multiproveedor con sincronización dinámica.",
          stack: ["Java", "Spring Boot", "Docker", "Cloudflare", "APIs de LLM"],
        },
        {
          name: "Forma",
          slug: "forma",
          url: FORMA_URL,
          subtitle: "Un contrato validado para planes generados por un LLM",
          text: "Un sistema operativo personal de forma física: composición corporal, entrenamiento, nutrición y coste de la compra en un mismo ciclo semanal. Lo interesante es el límite que le puse al modelo. Un LLM puede generar un plan de alimentación, pero solo con el catálogo que publica la API, y cualquier alimento que se invente se rechaza al importar. Los macros son un dato que alguien mide, no algo que estime un modelo.",
          stack: ["Java 21", "Spring Boot 3", "Hexagonal", "PostgreSQL", "Flyway", "React 19", "Playwright"],
        },
        {
          name: "Local AI Lab",
          slug: "local-ai-lab",
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
      "Dos tipos de trabajo. Los productos que construyo y opero yo mismo, donde elijo cada restricción, y los sistemas de cliente donde las restricciones me eligen a mí.",
    buildsTitle: "Lo que construyo y opero yo mismo",
    readMore: "Ver el detalle",
    visitSite: "Visitar el sitio",
    backToProjects: "Todos los proyectos",
    statusLabel: "Estado",
    stackLabel: "Stack",
    pages: [
      {
        slug: "akademia",
        name: "Akademia",
        url: AKADEMIA_URL,
        tagline: "Exámenes generados a partir de tu propio material",
        summary:
          "Un pipeline de recuperación que convierte los PDF que subes en preguntas de examen, y que no deja que ninguna llegue a un alumno sin revisar.",
        metaTitle: "Akademia — un pipeline RAG que genera exámenes desde tus propios PDF",
        metaDescription:
          "Cómo Akademia genera preguntas de examen con RAG: troceado, embeddings a través de OpenRouter, generación en Groq y una puerta de borrador y revisión para que ninguna pregunta generada llegue sin comprobar. Java 21 y Spring Boot 3.4.",
        status: "Preproducción. Soy su primer usuario.",
        sections: [
          {
            title: "El problema",
            body: [
              "Estudiar con tu propio material obliga a escribirte antes las preguntas del examen. Es la parte más lenta de preparar cualquier cosa, y es justo la que todo el mundo se salta.",
              "Akademia coge los documentos que ya tienes y produce preguntas a partir de ellos. Lo interesante en ingeniería no es el prompt. Es todo lo que rodea al prompt.",
            ],
          },
          {
            title: "Un problema de recuperación, no de prompting",
            body: [
              "Un documento subido se almacena, se trocea en fragmentos de mil caracteres con doscientos de solapamiento, y cada fragmento se convierte en embedding y se guarda junto a su origen. La generación recupera los ocho fragmentos más cercanos a un tema y escribe preguntas solo desde esos pasajes, de modo que una pregunta sigue siendo respondible con el material que aportó el usuario.",
              "Los embeddings corren sobre text-embedding-3-small a través de OpenRouter, mientras que el modelo de chat es Llama 3.3 70B en Groq. Dos proveedores no es indecisión: Groq no sirve modelos de embedding, así que el pipeline tiene que abarcar los dos. Se está añadiendo Gemini Embedding 2 como segundo proveedor de embeddings para que ningún proveedor pueda dejar el pipeline tirado.",
            ],
          },
          {
            title: "Las preguntas generadas son borradores, no respuestas",
            body: [
              "Nada de lo que escribe un modelo se convierte en pregunta real por su cuenta. Cada elemento generado cae en una tabla de borradores con estado generado, validado o rechazado, y lleva una referencia al documento de origen del que salió.",
              "Esa puerta es todo el argumento. Un modelo que alucina una pregunta verosímil sobre el temario del que te examinan es peor que no tener pregunta, así que el sistema se construye asumiendo que lo hará y pone a una persona como último paso.",
            ],
          },
          {
            title: "Una costura donde irá el vector store",
            body: [
              "La primera versión guarda cada embedding como un array de floats en JSON dentro de una columna de texto. No es el estado final y la migración lo dice en voz alta: el camino de subida a una columna pgvector de dimensión 1536 está escrito en el esquema como comentario, y la recuperación vive detrás de un puerto.",
              "Pasar de un escaneo completo a un índice vectorial de verdad es escribir un adaptador. El dominio no se entera. Publicar primero la versión simple fue una decisión, no un descuido, y dejar la costura a la vista es lo que la convierte en decisión.",
            ],
          },
          {
            title: "El resto del producto",
            body: [
              "Alrededor del pipeline hay una aplicación de verdad: exámenes cronometrados y simulacros, flashcards de repetición espaciada con el algoritmo SM-2, una jerarquía de asignaturas, unidades y preguntas, autenticación JWT con Google OAuth2 y una tienda Stripe para los temarios.",
              "Java 21 y Spring Boot 3.4 en el backend, React 18 con Vite 5 y Tailwind en el front, y todo el stack en Docker.",
            ],
          },
        ],
        stack: ["Java 21", "Spring Boot 3.4", "PostgreSQL", "React 18", "Vite 5", "Tailwind", "RAG", "OpenRouter", "Groq", "Stripe", "Docker"],
        writing: [
          { slug: "three-agents-software-factory", title: "Flujo multi-agente: ChatGPT, Claude y Hermes Agent", date: "2026-07-05" },
          { slug: "standardizing-the-software-factory-with-ai-agents", title: "Forma madura: la semana en que estandaricé la fábrica de software", date: "2026-07-12" },
        ],
      },
      {
        slug: "tokenmeter",
        name: "TokenMeter",
        url: TOKENMETER_URL,
        tagline: "Lo que cuesta una funcionalidad cuando la escribe un modelo",
        summary:
          "Cuenta un repositorio con un tokenizador real y después pone precio al mismo trabajo en varios modelos y tres modos de uso.",
        metaTitle: "TokenMeter — cuánto cuesta generar un repositorio con un LLM",
        metaDescription:
          "TokenMeter cuenta un repositorio de GitHub con el encoder jtokkit o200k_base y pone precio a la generación en varios modelos bajo los modos raw, assisted y agentic. Open source, Java 21 y Spring Boot.",
        status: "Open source, MIT, autoalojado.",
        sections: [
          {
            title: "El problema",
            body: [
              "Los proveedores cotizan sus precios por millón de tokens. Nadie mide su repositorio en tokens, así que el número de la página de precios responde a una pregunta que nadie ha hecho.",
              "TokenMeter responde a la que la gente sí se hace: cuánto habría costado generar este código, y cuánto cambia eso según cómo trabajes.",
            ],
          },
          {
            title: "Un encoder real, no una regla de tres",
            body: [
              "El recuento de tokens sale de jtokkit ejecutando la codificación o200k_base, la misma tokenización que usan los modelos. Dividir los caracteres entre cuatro se acerca lo bastante como para sonar razonable y se equivoca lo bastante como para dejar sin sentido la comparación entre modelos, que es justo lo único que produce la herramienta.",
            ],
          },
          {
            title: "Tres modos, y honestidad sobre lo que son",
            body: [
              "El mismo repositorio se valora de tres maneras. Raw cuenta solo los tokens del código final, uno por input y nada de output: un suelo absoluto. Assisted multiplica el input por cinco y suma una vez el output, por las iteraciones humanas y un razonamiento moderado. Agentic multiplica el input por veinte y el output por cuatro, porque un agente autónomo relee su contexto en cada paso y llama a herramientas por el camino.",
              "Esos multiplicadores son aproximaciones fijas y la herramienta lo dice en su propio README. Es una estimación con suelo, no contabilidad. Publicar los multiplicadores es el argumento: un modelo de coste que no puedes inspeccionar es un número que no puedes discutir.",
            ],
          },
          {
            title: "Cómo funciona un análisis",
            body: [
              "Enviar la URL de un repositorio al endpoint de análisis devuelve un 202 y encola un trabajo asíncrono. El repositorio se clona temporalmente, se cuenta y se tira.",
              "El resultado se desglosa por lenguaje, extensión, carpeta y fichero, se puede compartir como URL pública o incrustar como badge, y se guarda para poder comparar análisis en el tiempo. Los precios de los modelos son configuración, no constantes en el código.",
            ],
          },
        ],
        stack: ["Java 21", "Spring Boot 3", "jtokkit", "o200k_base", "Docker", "Cloudflare", "SonarCloud"],
        writing: [
          { slug: "spec-driven-ai-agents-with-gentle-ai-and-the-token-bill", title: "Desarrollo dirigido por specs con Gentle AI: proceso impecable, factura en tokens brutal", date: "2026-07-26" },
          { slug: "three-agents-software-factory", title: "Flujo multi-agente: ChatGPT, Claude y Hermes Agent", date: "2026-07-05" },
          { slug: "my-test-measured-the-box-not-the-letters", title: "Mi test medía la caja, no las letras", date: "2026-09-06" },
        ],
      },
      {
        slug: "forma",
        name: "Forma",
        url: FORMA_URL,
        tagline: "Un modelo al que no se le permite inventar datos",
        summary:
          "Un sistema operativo personal de forma física donde un LLM escribe el plan pero solo puede nombrar alimentos que la API ha medido.",
        metaTitle: "Forma — acotar un LLM detrás de un contrato de dominio validado",
        metaDescription:
          "En Forma un modelo de lenguaje genera el plan de alimentación, pero solo puede referenciar identificadores de alimento que publica la API; lo que se invente se rechaza al importar. Java 21 hexagonal, Spring Boot 3, PostgreSQL y Flyway.",
        status: "Preproducción, y una banda en la app lo avisa.",
        sections: [
          {
            title: "El problema",
            body: [
              "Un plan semanal de entrenamiento y alimentación que vive en una hoja de cálculo no puede reaccionar a la composición corporal de la semana pasada, a una carrera que terminó a las once de la noche en un verano de Alicante, ni a un cambio en los precios de la compra.",
              "Forma conecta composición corporal, entrenamiento, nutrición y coste de la compra semanal en un mismo ciclo, e intenta responder a una sola pregunta: qué debería hacer esta semana, visto lo que pasó la semana pasada.",
            ],
          },
          {
            title: "El límite alrededor del modelo",
            body: [
              "Un modelo de lenguaje genera el plan. Nunca afirma un dato. La API publica un catálogo de alimentos, cada uno con macros que alguien midió, y un plan importado solo puede referenciar identificadores de ese catálogo. Cualquier otra cosa se rechaza al importar.",
              "El razonamiento está escrito en el documento del formato en una frase: los macros de un alimento son un dato que alguien mide, no que un modelo estime. El modelo puede componer. No puede afirmar.",
            ],
          },
          {
            title: "Un dominio que no sabe de frameworks",
            body: [
              "El backend es hexagonal, con el dominio libre de tipos de framework y la infraestructura contenida en la frontera de los adaptadores. La persistencia es JDBC sobre PostgreSQL con migraciones Flyway y deliberadamente sin ORM, una decisión registrada en un architecture decision record en lugar de dejarla para que alguien la redescubra más tarde.",
              "Sesenta y pico migraciones después, esa decisión sigue aguantando, que es la única evidencia que importa sobre una decisión de arquitectura.",
            ],
          },
          {
            title: "Medido, no tecleado",
            body: [
              "Las mediciones corporales entran por una integración OAuth con Withings en lugar de a mano, porque un número que tienes que reteclear es un número que dejas de registrar. Un servicio de insights semanales convierte esas métricas en bruto en ajustes pequeños, del orden de cien calorías, en vez de reescrituras dramáticas del plan.",
            ],
          },
          {
            title: "Cómo está construido",
            body: [
              "Trece architecture decision records, una especificación por historia guardada en el repositorio, y un frontend React 19 cubierto por tests unitarios en Vitest y ejecuciones end-to-end con Playwright, todo verificado en integración continua.",
            ],
          },
        ],
        stack: ["Java 21", "Spring Boot 3", "Hexagonal", "PostgreSQL 17", "Flyway", "React 19", "TypeScript", "Vite", "Vitest", "Playwright", "Docker Compose"],
        writing: [
          { slug: "my-app-stopped-inventing-numbers", title: "Mi app dejó de inventarse los números", date: "2026-08-09" },
          { slug: "building-the-catalogs-an-ai-nutrition-plan-needs", title: "Los catálogos que necesita un plan de nutrición con IA", date: "2026-08-02" },
          { slug: "the-day-of-the-week-was-my-primary-key", title: "El día de la semana era mi clave primaria", date: "2026-08-23" },
          { slug: "shipping-62-prs-in-a-week-with-spec-driven-ai-agents", title: "62 pull requests en una semana: desarrollo dirigido por especificaciones con agentes IA", date: "2026-07-19" },
          { slug: "hexagonal-architecture-in-practice", title: "Arquitectura Hexagonal en Spring Boot: puertos y adaptadores", date: "2024-03-14" },
        ],
      },
      {
        slug: "local-ai-lab",
        name: "Local AI Lab",
        url: null,
        tagline: "Afirmaciones sobre modelos locales, contrastadas con mi propia VRAM",
        summary:
          "Un conjunto fijo de tareas agénticas ejecutado contra modelos locales sobre doce gigas de hardware de consumo.",
        metaTitle: "Local AI Lab — flujos agénticos sobre 12 GB de VRAM",
        metaDescription:
          "Evaluar Qwen, Gemma, Llama, DeepSeek R1 y Mistral Nemo en local sobre una RTX 3060 con Ollama y LM Studio, contra flujos de desarrollo agénticos e integraciones MCP reales.",
        status: "Hardware personal. En curso.",
        sections: [
          {
            title: "Por qué molestarse",
            body: [
              "Toda afirmación sobre lo que puede hacer un modelo local vale exactamente lo que el presupuesto de hardware de quien la hace. Los benchmarks se ejecutan en tarjetas que nadie tiene en casa, y la pregunta interesante no es si un modelo es bueno, sino si es lo bastante bueno con doce gigas.",
            ],
          },
          {
            title: "El montaje",
            body: [
              "Una RTX 3060 con 12 GB de VRAM, Ollama y LM Studio, y un conjunto fijo de tareas de desarrollo agénticas contra el que ejecutarlo todo para que la comparación signifique algo.",
              "Entre los modelos en evaluación están Qwen, Gemma, Llama 3.1, DeepSeek R1 y Mistral Nemo.",
            ],
          },
          {
            title: "Lo que de verdad me dice",
            body: [
              "Qué flujos de desarrollo sobreviven sin un modelo frontera y cuáles se caen en silencio. El tool calling y las integraciones MCP son donde primero se ve la diferencia: un modelo que escribe código aceptable perderá igualmente el hilo en un bucle agéntico de varios pasos mucho antes de quedarse sin contexto.",
              "Es también donde averiguo lo que cuesta un flujo cuando el token marginal es gratis, que es la otra mitad de la pregunta que hace TokenMeter.",
            ],
          },
        ],
        stack: ["Ollama", "LM Studio", "MCP", "Claude Code", "RTX 3060"],
        writing: [
          { slug: "probando-local-llms", title: "LLMs locales en una RTX 3060: qué cabe en 12 GB de VRAM", date: "2026-06-08" },
          { slug: "ai-agent-as-home-lab-operator", title: "Un agente de IA operando mi homelab con Home Assistant", date: "2026-06-28" },
          { slug: "three-agents-software-factory", title: "Flujo multi-agente: ChatGPT, Claude y Hermes Agent", date: "2026-07-05" },
        ],
      },
    ],
    workTitle: "Sistemas de cliente y de empresa",
    writingTitle: "Escrito en el laboratorio",
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
          "Recuento de tokens con el encoder jtokkit o200k_base en lugar de una aproximación por caracteres.",
          "Desplegado detrás de Cloudflare.",
        ],
        stack: ["Java", "Spring Boot", "Docker", "Cloudflare", "APIs de LLM"],
      },
      {
        name: "Forma",
        url: FORMA_URL,
        hardware: null,
        subtitle: "Sistema operativo personal de forma física",
        description:
          "Sistema personal de planificación de salud y entrenamiento que conecta composición corporal, entrenamiento, nutrición y coste de la compra en un mismo ciclo semanal de decisión.",
        bullets: [
          "Backend hexagonal con un dominio libre de framework: JDBC y Flyway sobre PostgreSQL, sin ORM, decidido y registrado en un ADR.",
          "Los planes de alimentación generados por un LLM están acotados por un contrato validado: solo pueden referenciar identificadores de alimento que publica la API, y lo que el modelo se invente se rechaza al importar.",
          "Integración OAuth con Withings para sincronizar mediciones corporales automáticamente.",
          "Servicio de insights semanales que convierte métricas en bruto en ajustes pequeños y accionables.",
          "Frontend React 19 con tests unitarios en Vitest y cobertura end-to-end con Playwright, todo verificado en CI.",
          "Entrega dirigida por especificación: 13 registros de decisión de arquitectura y specs por historia dentro del repositorio.",
        ],
        stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Flyway", "React 19", "TypeScript", "Vite", "Playwright", "Docker Compose"],
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
      "Creador de Forma, sistema operativo personal de forma física donde los planes generados por un LLM están acotados por un contrato de dominio validado.",
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
