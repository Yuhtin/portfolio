// Single source of truth for all site content.
// Every claim traces to Davi's résumé or verified GitHub/Design-handoff data.
// No fabricated metrics; mirrors the "Blueprint" design's verified content.js.

export const profile = {
  name: "Davi Duarte",
  role: "Software Developer",
  location: "São Paulo, BR",
  email: "rio.daviduarte@gmail.com",
  links: {
    github: "https://github.com/yuhtin",
    githubHandle: "github.com/yuhtin",
    linkedin: "https://linkedin.com/in/daviduarte",
    linkedinHandle: "linkedin.com/in/daviduarte",
    site: "daviduarte.com.br",
    resume: "/davi-duarte-resume.pdf",
  },
} as const;

export const hero = {
  index: "01",
  eyebrow: "Davi Duarte / Software Developer",
  status: "Available · exchange & research · English C1",
  nameLines: ["Davi", "Duarte"],
  // role line; the word in **bold** is rendered with weight 600
  roleLead: "Backend & ",
  roleBold: "distributed-systems",
  roleTail: " engineer. Self-taught from Rio de Janeiro, shipping in production since 2017.",
  ctas: [
    { label: "View work", href: "#work", arrow: "↓", accent: true, external: false },
    { label: "Résumé", href: profile.links.resume, arrow: "↓", accent: false, external: true },
    { label: "GitHub", href: profile.links.github, arrow: "↗", accent: false, external: true },
  ],
  figure: {
    src: "/davi-portrait.jpg",
    alt: "Davi Duarte",
    capLeftStatic: "FIG.01 · ",
    capLeftEm: "Davi Duarte",
    capRight: "Rio de Janeiro → everywhere",
  },
  spec: [
    { k: "Role", lines: ["Software", "Developer"] },
    { k: "Base", lines: ["São Paulo, BR"], sub: "← Rio de Janeiro" },
    { k: "Focus", lines: ["Distributed", "systems · cloud"] },
    { k: "Origin", lines: ["−22.90, −43.17"], strong: true, sub: "→ everywhere" },
  ],
} as const;

// Verified via authenticated GitHub GraphQL (build-time); same numbers as the design.
export const metrics = [
  { value: 9, suffix: "", prefix: "", label: "years coding", note: "self-taught · since 2017" },
  { value: 123, suffix: "", prefix: "", label: "repositories", note: "69 public · 54 private" },
  { value: 12, suffix: "k+", prefix: "", label: "contributions", note: "2022–2026 · mostly private" },
  { value: 32, suffix: "", prefix: "★ ", label: "NextEconomy", note: "top open-source project" },
] as const;

export type Milestone = {
  year: string;
  title: string;
  body: string;
  tags: string[];
  highlight?: boolean;
};

export const story = {
  index: "02",
  title: "Rio → everywhere",
  kick: "a self-taught path, in production",
  intro:
    "I started writing code as a young teenager in Rio de Janeiro, entirely self-taught, because I wanted to build things people would actually use.",
  introEm: ["Rio de Janeiro", "self-taught"],
  lead:
    "What started as a Minecraft server I ran as a teenager grew into open-source projects, freelance work, and then production systems at real companies. The throughline never changed. I build things that hold up under real load.",
  close:
    "Now I want to grow internationally through exchange and research, and to learn from engineers who push me further than I could go on my own.",
  closeEm: ["exchange and research"],
  milestones: [
    {
      year: "2017",
      title: "First lines of code",
      body: "Picked up programming on my own as a teenager in Rio de Janeiro. No course and no mentor at first, just a stubborn need to build things and watch them run.",
      tags: ["Self-taught", "Rio de Janeiro"],
    },
    {
      year: "2017–2019",
      title: "RedeLegit, my own server",
      body: "Built and ran RedeLegit, my own Minecraft server. My first real product: I shipped the features, kept it online, and learned fast because players noticed the second anything broke.",
      tags: ["Java", "First product", "Live ops"],
    },
    {
      year: "2019–2021",
      title: "Freelance developer",
      body: "Got paid to build plugins and systems for other server owners. My first taste of shipping to someone else's spec, hitting a deadline, and supporting what I delivered.",
      tags: ["Freelance", "Java", "Clients"],
    },
    {
      year: "2020–2022",
      title: "NextPlugins, open source at scale",
      body: "Turned the craft into open source the whole community could build on: 70+ repositories running across 1,200 servers and 15,000+ players.",
      tags: ["Open Source", "70+ repos", "15k+ players"],
    },
    {
      year: "2022",
      title: "Turning pro",
      body: "The teenage hobby became a profession. I started getting hired to build production backends under real load, and carried over every habit I'd learned shipping in the open.",
      tags: ["Backend", "Distributed systems"],
    },
    {
      year: "2025",
      title: "Computer Science at Inteli",
      body: "Started a CS degree at Inteli on a Telles Foundation scholarship. Since then I've led 10+ projects there as tech lead and begun teaching DSA and system design to a cohort of 12 students. Self-taught, now teaching.",
      tags: ["Inteli", "Tech Lead", "Teaching"],
    },
    {
      year: "Today",
      title: "Building in the open",
      body: "Still shipping side projects on my own domains: AlgoViz, AdaLove 2.0, a YouTube backlog kanban, and credit infrastructure for micro-entrepreneurs.",
      tags: ["AlgoViz", "AdaLove 2.0", "Self-hosted"],
      highlight: true,
    },
  ] satisfies Milestone[],
} as const;

export const experience = {
  index: "04",
  title: "Where I've shipped",
  kick: "most recent first",
  roles: [
    {
      org: "Morgan Stanley",
      role: "Summer in Technology",
      date: "Jan 2026",
      highlight: true,
      stack: ["Java", "Spring Boot", "REST", "Multithreading", "StAX/SAX", "Jenkins"],
      bullets: [
        "Delivered a secure, audit-logged trading-file REST API in 2 weeks against a 5-week scope.",
        "Solved an XML→CSV problem open since 2020 with a schema-agnostic streaming engine.",
        "Cut CPU 95% → <10% and memory 10GB+ → <900MB.",
      ],
    },
    {
      org: "Atomize",
      role: "Software Developer",
      date: "Jun 2025–present",
      stack: ["TypeScript", "AWS Lambda", "SQS/SNS", "DynamoDB", "Serverless"],
      bullets: [
        "Scaled a real-time platform to 1,000+ concurrent sessions.",
        "Built an SQS/SNS pipeline processing 10,000+ events/day, −25% API latency.",
        "Standardized 15+ services with DDD + Clean Architecture, +30% deploy speed.",
      ],
    },
    {
      org: "Jungle",
      role: "Software Developer",
      date: "2024",
      stack: ["Java", "TypeScript", "AWS", "MongoDB", "Webhooks", "Web3"],
      bullets: [
        "PIX payments confirming in <2s across millions of transactions.",
        "AWS SES + Discord email platform, −$700/month.",
        "+270% player engagement; shipped Web3 REST APIs.",
      ],
    },
    {
      org: "MineTree",
      role: "Software Developer",
      date: "2022",
      stack: ["Java", "Redis", "SQL", "Linux", "Grafana", "InfluxDB"],
      bullets: [
        "−60% response time under production load.",
        "Java + Redis high-concurrency multiplayer architecture.",
        "Observability stack on Grafana + InfluxDB.",
      ],
    },
  ],
} as const;

export type Project = {
  name: string;
  kind: string;
  featured: boolean;
  blurb: string;
  stack: string[];
  award: { short: string; full: string } | null;
  live: string | null; // host, e.g. "algorithms.daviduarte.com.br"
  cover: string | null; // /projects/*.jpg; null renders a styled placeholder
  links: { github?: string; demo?: string };
};

export const projects = {
  index: "03",
  title: "Things I've built",
  kick: "featured projects · live where possible",
  items: [
    {
      name: "TermoSense",
      kind: "IoT · Distributed Systems",
      featured: true,
      blurb:
        "Serverless IoT pipeline for power-grid monitoring. 500k+ transformers for Copel; IoT Core → Lambda → DynamoDB → SQS. Best project of the class.",
      stack: ["AWS IoT Core", "Lambda", "DynamoDB", "SQS", "ESP32"],
      award: null,
      live: null,
      cover: "/projects/termosense.jpg",
      links: {},
    },
    {
      name: "AlgoViz",
      kind: "Developer Tool",
      featured: true,
      blurb:
        "Interactive algorithm visualizer. Step-through animations, complexity analysis, and runnable Python/Rust, with YAML as the single source of truth.",
      stack: ["Next.js", "TypeScript", "Framer Motion", "D3.js", "Vitest"],
      award: null,
      live: "algorithms.daviduarte.com.br",
      cover: "/projects/algoviz.jpg",
      links: { demo: "https://algorithms.daviduarte.com.br", github: "https://github.com/yuhtin/algoviz" },
    },
    {
      name: "AdaLove 2.0",
      kind: "Full-Stack · EdTech",
      featured: true,
      blurb:
        "A full reimagining of AdaLove, Inteli's official study platform. JWT auth, kanban progress by week, timeline and table views, advanced filters, and background import from AdaLove 1.0. Documented end to end.",
      stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "JWT"],
      award: null,
      live: null,
      cover: "/projects/adalove.jpg",
      links: { github: "https://github.com/Yuhtin/adalove-cards-reimaginated" },
    },
    {
      name: "Aceito Fiado",
      kind: "Fintech · Social Impact",
      featured: true,
      blurb:
        "Credit infrastructure for Black micro-entrepreneurs in the periphery. Scores credit from alternative financial data to get around biased traditional models, with fiado checkout, receivables lock, and payment split.",
      stack: ["TypeScript", "Node.js", "PostgreSQL"],
      award: {
        short: "1st place · R$20k",
        full: "1st place + R$20k + Codex Pro (1yr) at the Feira Preta hackathon, backed by 4x4 Ventures",
      },
      live: "aceitofiado.daviduarte.com.br",
      cover: "/projects/aceitofiado.jpg",
      links: { demo: "https://aceitofiado.daviduarte.com.br", github: "https://github.com/yuhtin/aceito.fiado" },
    },
    {
      name: "ICS Select",
      kind: "EdTech · Platform",
      featured: true,
      blurb:
        "The platform behind ICS, the Big-Tech prep program I run at Inteli. Six-month cohorts of 12, weekly plans synced to your calendar, a cohort that keeps you accountable, and system-design classes.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Google Calendar"],
      award: null,
      live: "ics.daviduarte.com.br",
      cover: "/projects/ics.jpg",
      links: {},
    },
    {
      name: "SATA",
      kind: "Optimization",
      featured: false,
      blurb:
        "Instructor scheduling via integer linear programming. PuLP ILP + greedy/repair heuristics, surfaced through a Next.js UI.",
      stack: ["Python", "PuLP", "Next.js"],
      award: null,
      live: null,
      cover: null,
      links: { github: "https://github.com/yuhtin/inteli-sata" },
    },
    {
      name: "NextPlugins",
      kind: "Open Source",
      featured: false,
      blurb:
        "Open-source Java ecosystem at community scale: 70+ repositories serving 1,200 servers and 15,000+ players.",
      stack: ["Java"],
      award: null,
      live: null,
      cover: null,
      links: { github: "https://github.com/NextPlugins" },
    },
    {
      name: "HotData",
      kind: "AI/ML",
      featured: false,
      blurb:
        "ML pipeline for store-expansion targeting. RandomForest + KMeans + GPT insights generated in under a minute.",
      stack: ["Python", "scikit-learn", "Pandas", "GenAI"],
      award: null,
      live: null,
      cover: null,
      links: {},
    },
    {
      name: "DesenrolAI",
      kind: "AI",
      featured: true,
      blurb: "WhatsApp AI assistant for financial education. N8N + OpenAI + Evolution API.",
      stack: ["N8N", "OpenAI", "Evolution API"],
      award: { short: "R$3,000", full: "R$3,000 at Inovahack" },
      live: null,
      cover: "/projects/desenrolai.jpg",
      links: {},
    },
  ] satisfies Project[],
} as const;

export const skills = {
  index: "05",
  title: "Tools of the trade",
  kick: "languages → systems → cloud",
  groups: [
    { key: "languages", items: ["Java", "TypeScript", "JavaScript", "Python", "Rust"] },
    { key: "backend.systems", items: ["Spring / Spring Boot", "NestJS", "Prisma", "REST APIs", "WebSockets", "Serverless", "Microservices", "Monoliths"] },
    { key: "architecture", items: ["Distributed Systems", "Event-Driven Design", "DDD", "Clean Architecture"] },
    { key: "cloud.devops", items: ["AWS (Lambda, SQS/SNS, S3, IoT Core, DynamoDB)", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "Linux"] },
    { key: "data", items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "SQL modeling", "Pandas"] },
    { key: "observability", items: ["Grafana", "InfluxDB"] },
  ],
} as const;

export const contact = {
  index: "06",
  title: "Let's talk",
  headlineLead: "Open to ",
  headlineEm: "exchange, research",
  headlineTail: " & engineering opportunities.",
} as const;

export const footer = {
  lineStatic: "Davi Duarte · São Paulo, BR · ",
  lineEm: "Rio → everywhere",
  built: "designed & built from scratch",
} as const;

export const watching = {
  index: "✦ / Off the clock",
  title: "What I'm watching",
  kick: "tech channels on repeat",
  channels: [
    { name: "3Blue1Brown", topic: "math, visualized", href: "https://youtube.com/@3blue1brown" },
    { name: "Augusto Galego", topic: "dev & big tech (BR)", href: "https://youtube.com/@AugustoGalego" },
    { name: "Fireship", topic: "web dev, fast", href: "https://youtube.com/@Fireship" },
    { name: "ThePrimeagen", topic: "editors & performance", href: "https://youtube.com/@ThePrimeagen" },
    { name: "Computerphile", topic: "CS, explained", href: "https://youtube.com/@Computerphile" },
    { name: "Ben Eater", topic: "computers from scratch", href: "https://youtube.com/@BenEater" },
    { name: "Two Minute Papers", topic: "AI research", href: "https://youtube.com/@TwoMinutePapers" },
    { name: "Fabio Akita", topic: "deep dives (BR)", href: "https://youtube.com/@Akitando" },
    { name: "Filipe Deschamps", topic: "dev (BR)", href: "https://youtube.com/@FilipeDeschamps" },
    { name: "Hussein Nasser", topic: "backend & databases", href: "https://youtube.com/@hnasr" },
    { name: "Tsoding", topic: "low-level, live", href: "https://youtube.com/@TsodingDaily" },
    { name: "Lex Fridman", topic: "AI, long-form", href: "https://youtube.com/@lexfridman" },
  ],
} as const;

export const seo = {
  title: "Davi Duarte · Software Developer",
  description:
    "Davi Duarte, backend & distributed-systems engineer, self-taught from Rio de Janeiro and shipping in production since 2017. Open to exchange, research & engineering opportunities.",
  ogTitle: "Davi Duarte · Software Developer",
  ogDescription:
    "Backend & distributed-systems engineer, self-taught from Rio de Janeiro and shipping in production since 2017. Open to exchange, research & engineering opportunities.",
  keywords: [
    "Davi Duarte", "software developer", "backend engineer", "distributed systems",
    "AWS", "serverless", "Java", "TypeScript", "Spring Boot", "NestJS",
    "DevOps", "software architecture", "Inteli", "Computer Science",
  ],
} as const;

export const nav = [
  { n: "02", label: "Story", href: "#story" },
  { n: "03", label: "Work", href: "#work" },
  { n: "04", label: "Experience", href: "#experience" },
  { n: "05", label: "Stack", href: "#stack" },
  { n: "06", label: "Contact", href: "#contact" },
] as const;
