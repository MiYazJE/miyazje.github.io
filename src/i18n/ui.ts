export const languages = ['en', 'es'] as const;

export type Language = (typeof languages)[number];

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
};

const ui = {
  en: {
    meta: {
      title: 'Rubén Saiz — Full-stack Developer',
      description:
        'Portfolio of Rubén Saiz, a full-stack developer building reliable digital products from interface to infrastructure.',
    },
    header: {
      navigationLabel: 'Primary navigation',
      homeLabel: 'Rubén Saiz, home',
      role: 'Full-stack developer',
      work: 'Work',
      experience: 'Experience',
      downloadCv: 'Download CV',
      language: 'Language',
      changeLanguage: 'Change language',
      themeTitle: 'Change colour theme',
      switchToDark: 'Switch to dark mode',
      switchToLight: 'Switch to light mode',
    },
    hero: {
      role: 'Full-stack developer',
      location: 'Valencia, Spain',
      locationSuffix: 'Building for the web',
      titleLineOne: 'I design, build',
      titleLineTwo: 'and grow digital products.',
      intro:
        'I combine product thinking with full-stack engineering to turn complex problems into useful experiences and maintainable systems.',
      viewWork: 'View selected work',
      githubLabel: 'Rubén on GitHub',
      linkedinLabel: 'Rubén on LinkedIn',
      capabilitiesLabel: 'Core capabilities',
      capabilities: ['Product interfaces', 'APIs & services', 'Cloud delivery'],
      diagramLabel: 'Full-stack system diagram',
      graphName: 'product-system.graph',
      healthy: 'healthy',
      requestLifecycle: 'Request lifecycle',
      interface: 'interface',
      reactUi: 'React UI',
      userExperience: 'user experience',
      gateway: 'gateway',
      nodeApi: 'Node API',
      businessLogic: 'business logic',
      persistence: 'persistence',
      dataLayer: 'Data layer',
      reliableState: 'reliable state',
      cloudEvents: 'events routed to cloud services',
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Products built around real people.',
      intro:
        'A selection of end-to-end products spanning civic response, shared digital experiences and real-time multiplayer systems.',
      project: 'Project',
      featured: 'Featured',
      caseStudy: 'Case study',
      imageAlt: 'project interface',
      technologies: 'technologies',
      visitProduct: 'Visit product',
      viewSource: 'View source',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Growth through building and leading.',
      intro:
        'From owning front-end delivery to leading teams across distributed systems, each role has expanded the scope of what I can take from idea to production.',
      years: 'years shaping production software',
      summary:
        'Hands-on across product, engineering and cloud delivery, with a strong focus on maintainable systems.',
      present: 'Present',
    },
    footer: {
      eyebrow: 'Let’s build something useful',
      title: 'Have a product or engineering challenge?',
      conversation: 'Start a conversation',
      github: 'Explore GitHub',
      signature: 'Rubén Saiz · Full-stack developer',
      backToTop: 'Back to top',
    },
  },
  es: {
    meta: {
      title: 'Rubén Saiz — Desarrollador full-stack',
      description:
        'Portfolio de Rubén Saiz, desarrollador full-stack especializado en productos digitales fiables, desde la interfaz hasta la infraestructura.',
    },
    header: {
      navigationLabel: 'Navegación principal',
      homeLabel: 'Rubén Saiz, inicio',
      role: 'Desarrollador full-stack',
      work: 'Proyectos',
      experience: 'Experiencia',
      downloadCv: 'Descargar CV',
      language: 'Idioma',
      changeLanguage: 'Cambiar idioma',
      themeTitle: 'Cambiar tema de color',
      switchToDark: 'Cambiar al modo oscuro',
      switchToLight: 'Cambiar al modo claro',
    },
    hero: {
      role: 'Desarrollador full-stack',
      location: 'Valencia, España',
      locationSuffix: 'Creando para la web',
      titleLineOne: 'Diseño, construyo',
      titleLineTwo: 'y hago crecer productos digitales.',
      intro:
        'Combino visión de producto e ingeniería full-stack para convertir problemas complejos en experiencias útiles y sistemas mantenibles.',
      viewWork: 'Ver proyectos destacados',
      githubLabel: 'Rubén en GitHub',
      linkedinLabel: 'Rubén en LinkedIn',
      capabilitiesLabel: 'Competencias principales',
      capabilities: ['Interfaces de producto', 'APIs y servicios', 'Despliegue cloud'],
      diagramLabel: 'Diagrama de sistema full-stack',
      graphName: 'sistema-producto.graph',
      healthy: 'operativo',
      requestLifecycle: 'Ciclo de una petición',
      interface: 'interfaz',
      reactUi: 'React UI',
      userExperience: 'experiencia de usuario',
      gateway: 'entrada',
      nodeApi: 'API Node',
      businessLogic: 'lógica de negocio',
      persistence: 'persistencia',
      dataLayer: 'Capa de datos',
      reliableState: 'estado fiable',
      cloudEvents: 'eventos enviados a servicios cloud',
    },
    projects: {
      eyebrow: 'Proyectos destacados',
      title: 'Productos creados para personas reales.',
      intro:
        'Una selección de productos completos que abarcan respuesta ciudadana, experiencias digitales compartidas y sistemas multijugador en tiempo real.',
      project: 'Proyecto',
      featured: 'Destacado',
      caseStudy: 'Caso de estudio',
      imageAlt: 'interfaz del proyecto',
      technologies: 'tecnologías',
      visitProduct: 'Visitar producto',
      viewSource: 'Ver código',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Crecer construyendo y liderando.',
      intro:
        'Desde asumir la entrega del frontend hasta liderar equipos en sistemas distribuidos, cada puesto ha ampliado lo que puedo llevar de una idea a producción.',
      years: 'años creando software en producción',
      summary:
        'Experiencia práctica en producto, ingeniería y despliegue cloud, con especial atención a sistemas mantenibles.',
      present: 'Actualidad',
    },
    footer: {
      eyebrow: 'Construyamos algo útil',
      title: '¿Tienes un reto de producto o ingeniería?',
      conversation: 'Empezar una conversación',
      github: 'Explorar GitHub',
      signature: 'Rubén Saiz · Desarrollador full-stack',
      backToTop: 'Volver arriba',
    },
  },
} as const;

export const getUi = (language: Language) => ui[language];
