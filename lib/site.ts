export const site = {
  name: "CLR3",
  legalName: "CLR3 Ventures",
  url: "https://clr3.org",
  email: "hello@clr3.org",
  tagline: "Software consulting, advisory and product development.",
  description:
    "CLR3 is a software consulting, advisory and product development company. We design, build and operate production systems for clients — and run our own products on the same foundations.",
};

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
      "A conversational checkout that answers buyer questions from your own documentation, handles objections and guides the purchase — with server-side control over every offer and discount it can make.",
    tags: ["AI", "Commerce", "SaaS"],
    mark: "eeze",
  },
  {
    name: "NoLimitNodes",
    domain: "nolimitnodes.com",
    url: "https://nolimitnodes.com",
    summary: "Structured Solana events over gRPC.",
    detail:
      "Low-latency Solana RPC with real-time decoded data streams — over a thousand typed program events across dozens of protocols, built for trading systems, market makers and searchers.",
    tags: ["Solana", "gRPC", "Real-time"],
    mark: "nolimitnodes",
  },
  {
    name: "datastore",
    domain: "datastore.sh",
    url: "https://datastore.sh",
    summary: "Historical on-chain data as Parquet.",
    detail:
      "Decoded instructions, events and state tables for Solana and Hyperliquid delivered as versioned, checksummed Parquet files. Query with your own tools — no API quotas, no indexer to maintain.",
    tags: ["Data", "Parquet", "Research"],
    mark: "datastore",
  },
  {
    name: "HyperliquidRPC",
    domain: "hyperliquidrpc.com",
    url: "https://hyperliquidrpc.com",
    summary: "RPC, streams and archive for Hyperliquid.",
    detail:
      "Low-latency JSON-RPC for HyperEVM and HyperCore, real-time gRPC streams of every trade, order and book update, and a searchable archive of Hyperliquid market history behind a single key.",
    tags: ["Hyperliquid", "RPC", "Market data"],
    mark: "hyperliquidrpc",
  },
  {
    name: "OpenInfra",
    domain: "openinfra.sh",
    url: "https://openinfra.sh",
    summary: "Compute with the Solana stack included.",
    detail:
      "VPS, VDS and bare-metal servers with RPC, gRPC, WebSockets and ShredStream access bundled in — private networking, sub-millisecond latency and priority transaction routing on every plan.",
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
    lead: "Senior engineers embedded in your team, from architecture to production.",
    body:
      "We take on the hard, well-defined problems: systems that need to be faster, cheaper, more reliable or simply finished. We work inside your codebase and your process, and we leave it better documented than we found it.",
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
      "Fractional CTO and advisory engagements for companies making decisions they can't easily undo — what to build, what to buy, who to hire, and when to rewrite. Direct opinions, backed by having operated the systems ourselves.",
    engagements: [
      "Fractional CTO and technical leadership",
      "Technical due diligence",
      "Roadmap, build-vs-buy and vendor strategy",
      "Engineering organisation and hiring",
    ],
  },
  {
    title: "Product development",
    lead: "End-to-end delivery of software products, from first commit to operations.",
    body:
      "We design, build and run complete products: APIs, data pipelines, real-time systems and the interfaces on top of them. The same team that builds it ships it, monitors it and owns it in production.",
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
    body: "A short, intense diagnostic: code, infrastructure, data and the people running it. You get a written assessment and a plan with real estimates.",
  },
  {
    step: "Design",
    title: "Decide what to build — and what not to",
    body: "Architecture, interfaces and trade-offs agreed up front, in documents you keep. Boring technology where it works; new technology where it earns its place.",
  },
  {
    step: "Build",
    title: "Ship in weeks, in your repository",
    body: "Small senior teams, continuous delivery, visible progress. No hand-off at the end because there is no separate 'delivery' team.",
  },
  {
    step: "Operate",
    title: "Run it, measure it, improve it",
    body: "Monitoring, on-call and cost discipline from day one. We operate our own products this way, and we bring the same habits to yours.",
  },
];

export const principles = [
  {
    title: "Operators, not just builders",
    body: "Every product we list here is run by us, in production, for paying customers. Advice grounded in on-call hours, not slide decks.",
  },
  {
    title: "Senior by default",
    body: "Small teams of experienced engineers. You talk to the people writing the code.",
  },
  {
    title: "Performance is a feature",
    body: "Much of our work lives in latency-sensitive, high-throughput systems. We measure everything and design for the p99.",
  },
  {
    title: "Your code, your cloud, your IP",
    body: "We work in your repositories and your accounts. When the engagement ends, nothing is held hostage.",
  },
];
