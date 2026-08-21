export const site = {
  name: "CLR3",
  legalName: "CLR3 Ventures",
  url: "https://clr3.org",
  email: "hello@clr3.org",
  tagline: "Software consulting, advisory and product development.",
  description:
    "CLR3 is a software consulting, advisory and product development company. We design, build and run production systems for clients, and we run our own products on the same foundations.",
};

export const careersEmail = "careers@clr3.org";

export type Product = {
  name: string;
  domain: string;
  url: string;
  summary: string;
  detail: string;
  tags: string[];
  mark: "eeze" | "nolimitnodes" | "datastore" | "hyperliquidrpc" | "openinfra";
};

export const products: Product[] = [
  {
    name: "eeze",
    domain: "eeze.xyz",
    url: "https://eeze.xyz",
    summary: "The AI checkout for SaaS.",
    detail:
      "A conversational checkout that answers buyer questions from your own docs, handles objections and walks people through to purchase. You keep full control of every offer and discount it is allowed to make.",
    tags: ["AI", "Commerce", "SaaS"],
    mark: "eeze",
  },
  {
    name: "NoLimitNodes",
    domain: "nolimitnodes.com",
    url: "https://nolimitnodes.com",
    summary: "Structured Solana events over gRPC.",
    detail:
      "Low-latency Solana RPC with real-time decoded data streams. Over a thousand typed program events across dozens of protocols, built for trading systems, market makers and searchers.",
    tags: ["Solana", "gRPC", "Real-time"],
    mark: "nolimitnodes",
  },
  {
    name: "datastore",
    domain: "datastore.sh",
    url: "https://datastore.sh",
    summary: "Historical on-chain data as Parquet.",
    detail:
      "Decoded instructions, events and state tables for Solana and Hyperliquid, delivered as versioned Parquet files with checksums. Query them with your own tools. No API quotas and no indexer to maintain.",
    tags: ["Data", "Parquet", "Research"],
    mark: "datastore",
  },
  {
    name: "HyperliquidRPC",
    domain: "hyperliquidrpc.com",
    url: "https://hyperliquidrpc.com",
    summary: "RPC, streams and archive for Hyperliquid.",
    detail:
      "Low-latency JSON-RPC for HyperEVM and HyperCore, real-time gRPC streams of every trade, order and book update, and a searchable archive of Hyperliquid market history. One API key for all of it.",
    tags: ["Hyperliquid", "RPC", "Market data"],
    mark: "hyperliquidrpc",
  },
  {
    name: "OpenInfra",
    domain: "openinfra.sh",
    url: "https://openinfra.sh",
    summary: "Compute with the Solana stack included.",
    detail:
      "VPS, VDS and bare-metal servers with RPC, gRPC, WebSockets and ShredStream access bundled in. Private networking, sub-millisecond latency and priority transaction routing on every plan.",
    tags: ["Infrastructure", "Bare metal", "Solana"],
    mark: "openinfra",
  },
];

export type Service = {
  title: string;
  lead: string;
  body: string;
  engagements: string[];
};

export const services: Service[] = [
  {
    title: "Consulting",
    lead: "Senior engineers working inside your team, from architecture to production.",
    body:
      "We take on the hard, well-defined problems: systems that need to be faster, cheaper, more reliable, or simply finished. We work in your codebase and follow your process, and we leave things better documented than we found them.",
    engagements: [
      "Architecture and system design",
      "Distributed and event-driven systems",
      "Performance and reliability engineering",
      "Platform, infrastructure and DevOps",
    ],
  },
  {
    title: "Advisory",
    lead: "Technical judgment for founders, boards and leadership teams.",
    body:
      "Fractional CTO and advisory work for companies facing decisions they can't easily undo. What to build, what to buy, who to hire, and when to rewrite. You get direct opinions from people who have run these systems themselves.",
    engagements: [
      "Fractional CTO and technical leadership",
      "Technical due diligence",
      "Roadmap, build-vs-buy and vendor strategy",
      "Engineering organisation and hiring",
    ],
  },
  {
    title: "Product development",
    lead: "Complete software products, from the first commit to day-to-day operations.",
    body:
      "We design, build and run whole products: APIs, data pipelines, real-time systems and the interfaces on top of them. The team that builds it also ships it, monitors it and owns it in production.",
    engagements: [
      "Zero-to-one product builds",
      "Real-time data and streaming platforms",
      "AI-enabled product features",
      "Managed operations and SRE",
    ],
  },
];

export const approach = [
  {
    step: "Discover",
    title: "Understand the system before touching it",
    body: "A short, focused look at your code, infrastructure, data and the people running it. You get a written assessment and a plan with honest estimates.",
  },
  {
    step: "Design",
    title: "Decide what to build, and what not to",
    body: "We agree on architecture, interfaces and trade-offs up front, in documents you keep. Boring technology where it works, new technology where it earns its place.",
  },
  {
    step: "Build",
    title: "Ship in weeks, in your repository",
    body: "Small senior teams, continuous delivery, visible progress every week. There is no hand-off at the end because there is no separate delivery team.",
  },
  {
    step: "Operate",
    title: "Run it, measure it, improve it",
    body: "Monitoring, on-call and cost discipline from day one. We run our own products this way and we bring the same habits to yours.",
  },
];

export const principles = [
  {
    title: "Operators, not just builders",
    body: "Every product listed here is run by us, in production, for paying customers. Our advice comes from on-call hours, not slide decks.",
  },
  {
    title: "Senior by default",
    body: "Small teams of experienced engineers. You talk to the people writing the code.",
  },
  {
    title: "Performance is a feature",
    body: "Most of our work lives in latency-sensitive, high-throughput systems. We measure everything and design for the p99.",
  },
  {
    title: "Your code, your cloud, your IP",
    body: "We work in your repositories and your accounts. When the engagement ends, nothing is held hostage.",
  },
];

export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  team: string;
  summary: string;
  about: string[];
  responsibilities: string[];
  required: string[];
  preferred: string[];
  whoYouAre: string[];
  process: string[];
};

export const jobs: Job[] = [
  {
    slug: "software-engineer-toronto",
    title: "Software Engineer",
    location: "Toronto, Canada",
    type: "Full-time, hybrid",
    team: "Engineering",
    summary:
      "Build and run the real-time data, infrastructure and AI products CLR3 operates in production, and ship client systems alongside a small senior team.",
    about: [
      "CLR3 is a software consulting, advisory and product development company. We build production systems for clients and we run our own products (eeze, NoLimitNodes, datastore, HyperliquidRPC and OpenInfra) on infrastructure we own and operate.",
      "We are opening our Toronto engineering team. You will work directly with the founders and senior engineers on systems where latency, throughput and reliability matter: streaming pipelines, RPC infrastructure, data platforms and the products built on top of them.",
    ],
    responsibilities: [
      "Design, build and ship backend services, APIs and data pipelines that run in production",
      "Work on real-time, high-throughput systems: streaming, decoding, storage and query layers",
      "Own what you build, including monitoring, on-call, performance and cost",
      "Contribute to client engagements alongside senior CLR3 engineers",
      "Take part in architecture decisions, code review and technical planning",
      "Improve developer tooling, CI/CD and the reliability of our platforms",
      "Write clear documentation and design notes that others can build on",
    ],
    required: [
      "Strong programming skills in at least one backend language (Go, Rust, TypeScript, Python or similar) and a willingness to learn others",
      "Experience building and running APIs and services in production",
      "Working knowledge of databases, queues or streaming systems, and of testing",
      "Solid fundamentals in data structures, concurrency and system design",
      "Clear written and spoken communication, and comfort working directly with clients",
      "Able to work from our Toronto office part of the week",
    ],
    preferred: [
      "Experience with distributed, event-driven or low-latency systems",
      "Familiarity with gRPC, Kafka, NATS or similar messaging systems",
      "Experience with Solana, Hyperliquid or other blockchain data and infrastructure",
      "Hands-on time with Kubernetes, bare-metal or cloud infrastructure, and observability tooling",
      "Experience shipping AI-enabled product features",
      "Open-source contributions or a technical blog",
    ],
    whoYouAre: [
      "You like building things and seeing them run",
      "You take ownership without waiting to be told",
      "You care more about solving the problem than about which language you use",
      "You ask questions early and share what you learn",
      "You are comfortable being on call for the systems you build",
    ],
    process: [
      "Intro call with an engineer, about 30 minutes",
      "Short take-home assignment, scoped to around two hours",
      "Technical conversation about your assignment and past work",
      "Conversation with the founders",
      "Offer",
    ],
  },
];
