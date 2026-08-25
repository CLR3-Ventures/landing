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
  slug: string;
  name: string;
  domain: string;
  url: string;
  docsUrl?: string;
  category: string;
  summary: string;
  detail: string;
  tags: string[];
  mark: "eeze" | "nolimitnodes" | "datastore" | "hyperliquidrpc" | "openinfra";
  /* Detail page content. Facts and claims below come from each product's own site. */
  headline: string;
  intro: string[];
  stats: { value: string; label: string }[];
  facts: { label: string; value: string }[];
  features: { title: string; body: string }[];
  audience: string[];
  included: { title: string; items: string[] };
  note?: string;
};

export const products: Product[] = [
  {
    slug: "eeze",
    name: "eeze",
    domain: "eeze.xyz",
    url: "https://eeze.xyz",
    category: "AI commerce",
    summary: "The AI checkout for SaaS.",
    detail:
      "A conversational checkout that answers buyer questions from your own docs, handles objections and walks people through to purchase. You keep full control of every offer and discount it is allowed to make.",
    tags: ["AI", "Commerce", "SaaS"],
    mark: "eeze",
    headline: "A checkout that answers questions, handles objections and closes the sale.",
    intro: [
      "Most SaaS checkouts lose buyers at the exact moment they have a question. eeze replaces the silent payment form with a conversation. It answers from your own documentation, negotiates only within rules you wrote, and takes payment right there in the thread.",
      "Every answer is grounded in your knowledge base and every offer is validated server-side, so the AI can sell without ever promising something you did not approve.",
    ],
    stats: [
      { value: "1 afternoon", label: "from signup to a live checkout" },
      { value: "100%", label: "of offers validated server-side" },
      { value: "0", label: "card details touching its servers" },
    ],
    facts: [
      { label: "Category", value: "AI checkout for SaaS" },
      { label: "Payments", value: "Stripe Payment Element" },
      { label: "AI providers", value: "Anthropic or OpenAI, bring your own key" },
      { label: "Security", value: "AES-256-GCM at rest, TLS 1.3 in transit" },
      { label: "Compliance", value: "PCI DSS Level 1 via Stripe" },
    ],
    features: [
      {
        title: "Grounded answers",
        body: "Every claim the checkout makes is cited from your knowledge base. Point it at a docs export or llms.txt file and it sells from what you actually wrote.",
      },
      {
        title: "Guardrailed offers",
        body: "The AI can negotiate, but only within rules the founder wrote. Discounts, plan swaps and terms are all validated on the server before a buyer ever sees them.",
      },
      {
        title: "Inline payment",
        body: "Stripe's Payment Element sits inside the conversation. The buyer pays without leaving the thread, and card details never touch eeze servers.",
      },
      {
        title: "Knowledge-gap analytics",
        body: "Questions the checkout cannot answer are flagged and ranked by frequency, so you know exactly which page of your docs to write next.",
      },
      {
        title: "One-click publishing",
        body: "Ship to an eeze subdomain or your own custom domain, with rollback if you need to step back a version.",
      },
      {
        title: "Works without an AI key",
        body: "Start on the built-in model, then bring your own Anthropic or OpenAI key when you want full control of the model and the bill.",
      },
    ],
    audience: [
      "SaaS teams whose buyers stall at the pricing page",
      "Founders who want sales conversations without hiring sales",
      "Products with docs good enough to sell from",
      "Teams already running on Stripe",
    ],
    included: {
      title: "Getting live takes three steps",
      items: [
        "Sign up and start from a working template for plans, copy and knowledge base",
        "Customise: swap in your plans, theme and docs URL, and optionally your AI key",
        "Publish to an eeze subdomain or your own domain, with one-click rollback",
      ],
    },
  },
  {
    slug: "nolimitnodes",
    name: "NoLimitNodes",
    domain: "nolimitnodes.com",
    url: "https://nolimitnodes.com",
    docsUrl: "https://nolimitnodes.com/docs",
    category: "Solana infrastructure",
    summary: "Structured Solana events over gRPC.",
    detail:
      "Low-latency Solana RPC with real-time decoded data streams. Over a thousand typed program events across dozens of protocols, built for trading systems, market makers and searchers.",
    tags: ["Solana", "gRPC", "Real-time"],
    mark: "nolimitnodes",
    headline: "Solana RPC, gRPC streams and Shredstream, with the decoding already done.",
    intro: [
      "Raw Solana data is a firehose of opaque bytes. NoLimitNodes runs private RPC nodes, Yellowstone gRPC and Shredstream, and then goes one step further: it parses the stream server-side into typed, schema-stable events, so your trading system consumes clean data instead of maintaining its own decoders.",
      "The catalogue covers 1,074 typed events across 37 programs, from PumpFun and Raydium to Jupiter, Orca, Meteora and Kamino, with engineers watching parser updates around the clock.",
    ],
    stats: [
      { value: "1,074", label: "typed events, schema-stable" },
      { value: "37", label: "Solana programs decoded" },
      { value: "100k+", label: "messages per second over gRPC" },
    ],
    facts: [
      { label: "Category", value: "Solana RPC and data streams" },
      { label: "Transports", value: "HTTP RPC, WebSocket, Yellowstone gRPC, Shredstream" },
      { label: "Programs", value: "PumpFun, Raydium, Orca, Meteora, Jupiter, Kamino and 31 more" },
      { label: "Uptime", value: "99.99% claimed" },
      { label: "Pricing", value: "From $49/mo, flat rate" },
    ],
    features: [
      {
        title: "Enhanced streams",
        body: "18 server-side parsed streams covering DEX activity, token lifecycle and system events. Typed schemas that stay stable while the programs underneath keep changing.",
      },
      {
        title: "Four transports",
        body: "HTTP JSON-RPC, WebSocket, Yellowstone gRPC and Jito-compatible Shredstream from one provider, on private instances with noisy-neighbour isolation.",
      },
      {
        title: "Built for latency",
        body: "Sniper bots on the platform clock under 20ms from instruction to bundle, and the gRPC layer sustains over 100k messages per second.",
      },
      {
        title: "Parsers maintained for you",
        body: "When a program upgrades and its layout changes, NoLimitNodes engineers update the decoders. Your consumers keep reading the same schema.",
      },
      {
        title: "Geyser plugin hosting",
        body: "Shared and dedicated Geyser plugin hosting for teams that need custom extraction without running validator infrastructure.",
      },
      {
        title: "Flat-rate pricing",
        body: "No per-event billing. Plans start at $49 a month, with a 10x price guarantee against cheaper competitor quotes.",
      },
    ],
    audience: [
      "Trading bots and MEV searchers",
      "Market makers and liquidity providers",
      "Wallets, explorers and trading dashboards",
      "Indexers and on-chain analytics teams",
    ],
    included: {
      title: "Plans",
      items: [
        "Pro, $49/mo: 200 req/s, WebSocket and gRPC access, priority support",
        "Ultra, $199/mo: 500 req/s, 20 streams, Shredstream destination, 30 hours of dev help included",
        "Enterprise: dedicated cluster, unlimited streams and a dedicated support engineer",
      ],
    },
  },
  {
    slug: "datastore",
    name: "datastore",
    domain: "datastore.sh",
    url: "https://datastore.sh",
    category: "Blockchain data",
    summary: "Historical on-chain data as Parquet.",
    detail:
      "Decoded instructions, events and state tables for Solana and Hyperliquid, delivered as versioned Parquet files with checksums. Query them with your own tools. No API quotas and no indexer to maintain.",
    tags: ["Data", "Parquet", "Research"],
    mark: "datastore",
    headline: "On-chain history, decoded and ready to query.",
    intro: [
      "Every team that does serious on-chain research eventually builds the same thing: an indexer, a decoder, a backfill job and a warehouse to hold it all. datastore exists so you can skip that project entirely. You buy the files, not API access.",
      "Datasets arrive as partitioned Parquet with typed schemas, SHA-256 checksums, manifests and lineage docs. Load them into DuckDB, Polars or your warehouse and run whatever queries you want, as often as you want.",
    ],
    stats: [
      { value: "52", label: "datasets in the catalogue" },
      { value: "51", label: "Solana protocols decoded" },
      { value: "0", label: "API quotas, ever" },
    ],
    facts: [
      { label: "Category", value: "Historical blockchain datasets" },
      { label: "Chains", value: "Solana and Hyperliquid" },
      { label: "Format", value: "Partitioned Parquet with typed schemas" },
      { label: "Integrity", value: "SHA-256 checksums, versioning, manifests" },
      { label: "Pricing", value: "Per dataset and coverage window" },
    ],
    features: [
      {
        title: "Files you own",
        body: "Download the Parquet files once and keep them. Your queries run on your compute, with no rate limits, no metering and no bill that grows with your curiosity.",
      },
      {
        title: "Decoded, not raw",
        body: "Instructions, events and state tables come pre-decoded with typed schemas and documentation, so analysis starts at the query, not at the byte layout.",
      },
      {
        title: "A deep Solana catalogue",
        body: "51 protocols including Pump.fun, Jupiter, Raydium, Orca, Meteora, Kamino, Drift, Marinade, Phoenix, Metaplex and the core SPL programs.",
      },
      {
        title: "Hyperliquid market history",
        body: "Perps market data for Hyperliquid, one of the catalogue's most requested datasets, in the same portable format.",
      },
      {
        title: "Verifiable lineage",
        body: "Every delivery ships with checksums, version information and manifests, so you can prove exactly what data a result was computed from.",
      },
      {
        title: "Flexible delivery",
        body: "Query locally with DuckDB or Polars, load into your warehouse, or have files delivered straight to your cloud storage.",
      },
    ],
    audience: [
      "Quant researchers and backtesting teams",
      "Data engineers replacing in-house indexers",
      "Analysts and academic researchers",
      "Teams building AI and ML models on on-chain data",
    ],
    included: {
      title: "How delivery works",
      items: [
        "Pick datasets and a coverage window, from a recent slice to full history",
        "Files are cut, checksummed and versioned, with schemas and manifests included",
        "Download or receive them in your cloud bucket, then query with your own tools",
      ],
    },
  },
  {
    slug: "hyperliquidrpc",
    name: "HyperliquidRPC",
    domain: "hyperliquidrpc.com",
    url: "https://hyperliquidrpc.com",
    docsUrl: "https://hyperliquidrpc.com/docs/quickstart",
    category: "Hyperliquid infrastructure",
    summary: "RPC, streams and archive for Hyperliquid.",
    detail:
      "Low-latency JSON-RPC for HyperEVM and HyperCore, real-time gRPC streams of every trade, order and book update, and a searchable archive of Hyperliquid market history. One API key for all of it.",
    tags: ["Hyperliquid", "RPC", "Market data"],
    mark: "hyperliquidrpc",
    headline: "Hyperliquid RPC, real-time streams and historical data behind one key.",
    intro: [
      "Building on Hyperliquid usually means stitching together an RPC provider, a websocket feed and your own archive job. HyperliquidRPC collapses that into one service: Ethereum-compatible JSON-RPC for HyperEVM, the HyperCore API for markets and accounts, real-time gRPC streams, and a continuously growing historical archive.",
      "Streams carry wallet attribution and profit-and-loss on every trade, with server-side filtering by coin and wallet, so your application receives exactly the slice of the market it cares about.",
    ],
    stats: [
      { value: "4.2ms", label: "median RPC latency, measured hourly" },
      { value: "462+", label: "markets covered" },
      { value: "725M+", label: "events archived every day" },
    ],
    facts: [
      { label: "Category", value: "Hyperliquid market infrastructure" },
      { label: "Interfaces", value: "JSON-RPC, HyperCore API, gRPC streams, exports" },
      { label: "Tooling", value: "Works with viem, ethers and web3.py" },
      { label: "SLA", value: "99.9% Pro, 99.99% Ultra and dedicated" },
      { label: "Pricing", value: "From $49/mo" },
    ],
    features: [
      {
        title: "Ethereum-compatible RPC",
        body: "Standard methods including sendRawTransaction, with a 4.2ms median response measured hourly from Frankfurt. Point viem or ethers at it and it just works.",
      },
      {
        title: "Streams with attribution",
        body: "Live trades, orders and book updates with the wallet behind every trade and its running profit and loss, delivered in under a second.",
      },
      {
        title: "Server-side filtering",
        body: "Subscribe by coin or wallet address and let the server do the filtering, instead of drinking the whole feed and throwing most of it away.",
      },
      {
        title: "A real archive",
        body: "Over 1.6 billion order events captured so far, growing by more than 725 million a day, exportable as Parquet, CSV or JSONL with exact financial decimals.",
      },
      {
        title: "Replay",
        body: "The Ultra plan replays streams from any block in the last six hours, which turns a missed window or a crashed consumer into a non-event.",
      },
      {
        title: "Dedicated nodes",
        body: "Private nodes with custom SLAs up to 99.99% for teams whose strategies cannot share infrastructure.",
      },
    ],
    audience: [
      "Quant and HFT teams",
      "Market makers",
      "Copy-trading platforms",
      "Analytics products built on Hyperliquid",
    ],
    included: {
      title: "Plans",
      items: [
        "Pro, $49/mo: 250 req/s RPC, 50 GB/day stream egress, manual historical exports",
        "Ultra, $199/mo: 1,000 req/s RPC, 500 GB/day egress, unlimited filters, 6-hour replay",
        "Dedicated: private nodes and custom SLAs through enterprise sales",
      ],
    },
    note: "HyperliquidRPC is an independent service. It is not affiliated with Hyperliquid or the Hyper Foundation.",
  },
  {
    slug: "openinfra",
    name: "OpenInfra",
    domain: "openinfra.sh",
    url: "https://openinfra.sh",
    docsUrl: "https://openinfra.sh/docs",
    category: "Compute and infrastructure",
    summary: "Compute with the Solana stack included.",
    detail:
      "VPS, VDS and bare-metal servers with RPC, gRPC, WebSockets and ShredStream access bundled in. Private networking, sub-millisecond latency and priority transaction routing on every plan.",
    tags: ["Infrastructure", "Bare metal", "Solana"],
    mark: "openinfra",
    headline: "Rent the server. The Solana infrastructure comes with it.",
    intro: [
      "Most providers rent you a server and then charge hundreds of dollars a month again for Solana access on top. OpenInfra starts from a different premise: there is no reason to charge separately for Solana infrastructure. Every server includes the full stack at no extra cost, forever.",
      "Because your application lives on the same private network as the nodes, Solana data never crosses the public internet. That is where the sub-millisecond round trips come from.",
    ],
    stats: [
      { value: "$0", label: "for Solana infra access, forever" },
      { value: "<1ms", label: "median round trip on the private network" },
      { value: ">99.99%", label: "uptime over rolling 12 months" },
    ],
    facts: [
      { label: "Category", value: "Compute with bundled Solana access" },
      { label: "Included", value: "JSON-RPC, WebSockets, Yellowstone gRPC, ShredStream" },
      { label: "Extras", value: "Slot notifications, transaction relay, priority routing" },
      { label: "Plans", value: "VPS, VDS and bare metal" },
      { label: "Pricing", value: "From $25/mo, 3-day free trials" },
    ],
    features: [
      {
        title: "The stack is included",
        body: "JSON-RPC, WebSockets, Yellowstone gRPC and raw-UDP ShredStream ship with every server. Competitors charge $200 to $1,000 a month for the same access.",
      },
      {
        title: "Private fabric",
        body: "Solana data travels over OpenInfra's internal network rather than the public internet, which keeps median round trips under a millisecond.",
      },
      {
        title: "Priority transaction routing",
        body: "Direct block-engine access gives transactions higher landing rates and earlier confirmation than firing them into the public mempool.",
      },
      {
        title: "Three shapes of compute",
        body: "VPS from $25/mo for isolated virtual machines, VDS from $50/mo with guaranteed dedicated cores, and bare metal from $354/mo with up to 2 TB of RAM.",
      },
      {
        title: "Placed where Solana lives",
        body: "Servers sit in well-peered data centres in the regions that carry the most Solana traffic, so the shortest path is the default path.",
      },
      {
        title: "Try before paying",
        body: "VPS and VDS plans start with a 3-day free trial. Card verification, $0 charged today.",
      },
    ],
    audience: [
      "Trading systems and HFT teams",
      "DeFi applications and validators",
      "Developers priced out of separate infra subscriptions",
      "Production workloads that need predictable latency",
    ],
    included: {
      title: "Plans",
      items: [
        "VPS from $25/mo: 4 to 64 vCPU, 4 to 128 GB RAM, isolated virtual environment",
        "VDS from $50/mo: 2 to 32 dedicated vCPU with guaranteed compute and priority routing",
        "Bare metal from $354/mo: physical servers, 128 GB to 2 TB RAM, dedicated IP block",
      ],
    },
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
