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
  mark: "eeze" | "nolimitnodes" | "datastore" | "hyperliquidrpc" | "openinfra" | "robinhoodrpc" | "swqos";
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
  {
    slug: "robinhoodrpc",
    name: "RobinhoodRPC",
    domain: "robinhoodrpc.io",
    url: "https://robinhoodrpc.io",
    docsUrl: "https://robinhoodrpc.io/docs/quickstart",
    category: "Robinhood Chain infrastructure",
    summary: "Robinhood Chain RPC, the consolidated tape, and portfolio data that is correct.",
    detail:
      "Full JSON-RPC with tracing and simulation for Robinhood Chain, a real-time consolidated tape across six venues, and balances for tokenized equities that survive a stock split. One key for RPC, streams and history.",
    tags: ["Robinhood Chain", "RPC", "Tokenized equities"],
    mark: "robinhoodrpc",
    headline: "Robinhood Chain RPC, the consolidated tape, and portfolio data that is correct.",
    intro: [
      "Robinhood Chain moves tokenized equities at 100ms block times, and equities carry baggage that crypto tokens do not: splits, dividends, reverse splits and a dozen other corporate actions that change what a balance means. Most infrastructure ignores that and quietly reports numbers that are wrong by hundreds of percent after a split.",
      "RobinhoodRPC is built around getting that right. Full JSON-RPC with tracing and simulation, a consolidated tape across six venues, and a portfolio layer that applies the multiplier that was true at the block, not the one that is true today.",
    ],
    stats: [
      { value: "4.2ms", label: "median reads, measured and published hourly" },
      { value: "200+", label: "tokenized equities with typed corporate actions" },
      { value: "6", label: "venues in the consolidated tape" },
    ],
    facts: [
      { label: "Category", value: "Robinhood Chain RPC, streams and history" },
      { label: "Network", value: "Robinhood Chain (chain ID 4663), mainnet and testnet" },
      { label: "Interfaces", value: "JSON-RPC, gRPC and gRPC-Web, REST, GraphQL, webhooks" },
      { label: "Sinks", value: "Kafka, Postgres, ClickHouse and S3 on Scale" },
      { label: "SLA", value: "99.9% Build, 99.99% Scale, with automatic credits" },
      { label: "Pricing", value: "From $50/mo, half price for the first month" },
    ],
    features: [
      {
        title: "Complete JSON-RPC",
        body: "Standard eth, net, web3 and txpool methods plus debug and trace, with transaction simulation. QuickNode-compatible, so existing tooling and migration guides work as-is.",
      },
      {
        title: "Balances that survive a split",
        body: "Historical balances and profit and loss use the multiplier in effect at that block. Competitors that use today's multiplier can report a 300 percent error on the same position.",
      },
      {
        title: "Consolidated tape",
        body: "Trades, orders and book updates across six venues, delivered in well under a second, with every tick at top of book.",
      },
      {
        title: "Typed corporate actions",
        body: "Thirteen corporate action types across 200 plus stock tokens, reconciled hourly, so a split or dividend shows up as structured data rather than a surprise.",
      },
      {
        title: "Streams and sinks",
        body: "gRPC and gRPC-Web streaming with six-hour replay, and on the Scale plan direct sinks into Kafka, Postgres, ClickHouse or S3.",
      },
      {
        title: "A deep archive",
        body: "Over 1.65 billion order events, a billion book updates and 14 million trades, plus complete funding, liquidation and TWAP history.",
      },
    ],
    audience: [
      "Quant and HFT teams trading tokenized equities",
      "Market makers on Robinhood Chain",
      "Copy-trading and portfolio products",
      "Data applications that need corporate actions handled correctly",
    ],
    included: {
      title: "Plans",
      items: [
        "Build, $50/mo: 250 req/s, 90-day history, 10 webhooks, simulation, consolidated tape, REST and GraphQL",
        "Scale, $200/mo: 1,000 req/s, full history, gRPC streaming, database sinks, sequencer feed states",
        "Dedicated nodes and enterprise terms on request; annual billing saves 17 percent",
      ],
    },
    note: "RobinhoodRPC is an independent infrastructure provider. It is not affiliated with, endorsed by, or sponsored by Robinhood Markets, Inc. Robinhood Chain is a public permissionless network.",
  },
  {
    slug: "swqos",
    name: "swqos",
    domain: "swqos.com",
    url: "https://swqos.com",
    docsUrl: "https://swqos.com/docs/quickstart",
    category: "Solana transaction relay",
    summary: "The fastest way to land a transaction on Solana.",
    detail:
      "A prepaid relay that forwards your signed Solana transactions straight to the current leader over stake-weighted QoS connections that are already open. No keys, no modification, no RPC in the hot path. Pay 0.0002 SOL per accepted send.",
    tags: ["Solana", "SWQoS", "Transaction relay"],
    mark: "swqos",
    headline: "The fastest way to land a transaction on Solana.",
    intro: [
      "On Solana, whether your transaction lands often comes down to how it reaches the leader. Stake-weighted quality of service gives staked connections priority, and keeping those connections open removes the handshake and TCP slow start that cost you on every send.",
      "swqos is that path, and only that path. You sign locally, hand over the bytes, and they go unchanged over persistent QUIC connections to the leader. There is no blockhash fetch, no simulation and no status polling in between. You keep control of the transaction; swqos is a route, not a middleman.",
    ],
    stats: [
      { value: "0", label: "RPC calls in the hot path" },
      { value: "0.0002 SOL", label: "per accepted send, refusals cost nothing" },
      { value: "90s", label: "dedupe window, resent signatures are free" },
    ],
    facts: [
      { label: "Category", value: "Stake-weighted Solana transaction relay" },
      { label: "Endpoints", value: "send.swqos.com:11000 over QUIC, or HTTPS POST /v1/transactions" },
      { label: "Custody", value: "None. You sign locally, swqos never sees a key" },
      { label: "Payload", value: "Up to 1,232 bytes, forwarded unmodified" },
      { label: "Billing", value: "Prepaid SOL balance, no cards or subscriptions" },
    ],
    features: [
      {
        title: "Zero hops to the leader",
        body: "Transactions go from the relay directly to the current leader over staked connections, bypassing the general RPC layer and its queues entirely.",
      },
      {
        title: "Connections already warm",
        body: "Staked QUIC connections are opened at startup and kept alive, with round-robin and retry across them, so no send pays for a handshake.",
      },
      {
        title: "Nothing in the hot path",
        body: "No blockhash fetching, no simulation, no status checks. The relay does one job: get your bytes to the leader as fast as physics allows.",
      },
      {
        title: "Two ways to send",
        body: "HTTPS for the simplest integration, a single JSON POST per transaction. QUIC for the fastest, one persistent connection with authentication only at the handshake.",
      },
      {
        title: "Honest accounting",
        body: "You pay 0.0002 SOL for each accepted send. Refused submissions cost nothing, and a duplicate signature within 90 seconds is free.",
      },
      {
        title: "You stay in control",
        body: "swqos never holds keys and never edits a transaction. A receipt means the bytes were forwarded and the upstream acknowledged the stream.",
      },
    ],
    audience: [
      "Trading bots where landing rate is the strategy",
      "Market makers and arbitrage systems",
      "Wallets and apps that already build their own transaction flow",
      "Teams that want a relay without a subscription",
    ],
    included: {
      title: "How it works",
      items: [
        "Top up a prepaid balance in SOL and get your credentials",
        "Build and sign the transaction locally, exactly as you do today",
        "POST the serialized bytes over HTTPS, or stream them over QUIC, and confirm landing with your own RPC",
      ],
    },
    note: "A receipt from swqos means the transaction was forwarded and acknowledged upstream. Inclusion in a block is the network's decision, so confirm landing separately through your own RPC.",
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
      "CLR3 is a software consulting, advisory and product development company. We build production systems for clients and we run our own products (eeze, NoLimitNodes, datastore, HyperliquidRPC, OpenInfra, RobinhoodRPC and swqos) on infrastructure we own and operate.",
      "We are growing our Toronto engineering team. You will work directly with the founders and senior engineers on systems where latency, throughput and reliability matter: streaming pipelines, RPC infrastructure, data platforms and the products built on top of them.",
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
  {
    slug: "senior-infrastructure-engineer-toronto",
    title: "Senior Infrastructure Engineer",
    location: "Toronto, Canada",
    type: "Full-time, hybrid",
    team: "Infrastructure",
    summary:
      "Own the bare metal, networks and platforms behind OpenInfra, NoLimitNodes and HyperliquidRPC, where a millisecond is a feature and downtime is a refund.",
    about: [
      "Our products promise things most providers will not put in writing: sub-millisecond round trips, four nines of uptime, streams that sustain over a hundred thousand messages a second. Somebody has to make those numbers true every day. That is this role.",
      "You will run the fleet behind OpenInfra, NoLimitNodes and HyperliquidRPC: bare-metal servers, private networking, validators, RPC nodes and the observability that watches all of it. You will also advise clients on their own infrastructure when engagements call for it.",
    ],
    responsibilities: [
      "Run and grow our bare-metal fleet: provisioning, networking, storage and capacity planning",
      "Keep our latency and uptime promises honest with real measurement and alerting",
      "Operate Solana and Hyperliquid node infrastructure, including upgrades and incident response",
      "Automate everything that gets done twice, from provisioning to failover",
      "Design private networking and peering so data takes the shortest path",
      "Handle escalations and take part in a sane on-call rotation",
      "Advise clients on infrastructure during consulting engagements",
    ],
    required: [
      "Years of hands-on experience running production infrastructure, ideally bare metal as well as cloud",
      "Strong Linux fundamentals: networking, storage, performance tuning and debugging under pressure",
      "Experience with infrastructure as code and configuration management",
      "Comfort with monitoring and observability stacks, and opinions about what to alert on",
      "A track record of being calm and useful during incidents",
      "Able to work from our Toronto office part of the week",
    ],
    preferred: [
      "Experience running blockchain nodes or validators at scale",
      "Familiarity with high-performance networking, kernel tuning or DPDK-style work",
      "Experience with Kubernetes and with deciding when not to use it",
      "Background in data centre selection, peering and transit negotiation",
      "Scripting or systems programming in Go, Rust or Python",
    ],
    whoYouAre: [
      "You think uptime numbers should be measured, not marketed",
      "You would rather automate a task than document a manual process",
      "You stay calm when the pager goes off and honest in the postmortem",
      "You enjoy squeezing latency out of systems most people consider fast enough",
      "You like owning things end to end",
    ],
    process: [
      "Intro call with an engineer, about 30 minutes",
      "Deep-dive conversation about systems you have run and incidents you have handled",
      "Practical exercise built around a realistic infrastructure scenario",
      "Conversation with the founders",
      "Offer",
    ],
  },
  {
    slug: "rust-engineer-trading-infrastructure-toronto",
    title: "Rust Engineer, Trading Infrastructure",
    location: "Toronto, Canada",
    type: "Full-time, hybrid",
    team: "Engineering",
    summary:
      "Write the hot path. Decoders, streams and transaction routing where microseconds show up in the product and in customer results.",
    about: [
      "NoLimitNodes parses over a thousand typed events from thirty-seven Solana programs in real time. HyperliquidRPC serves RPC with a 4.2ms median and archives hundreds of millions of events a day. The code that does this is mostly Rust, and it is the part of the stack where performance work pays off immediately.",
      "This role sits in that hot path. You will write and tune decoders, stream processors and routing logic, measure everything, and watch your improvements show up in customer-facing latency numbers the same week.",
    ],
    responsibilities: [
      "Build and maintain high-throughput decoders and stream processors in Rust",
      "Profile and optimise the hot path: allocation, serialisation, network and syscall behaviour",
      "Keep parsers current as on-chain programs upgrade and layouts change",
      "Design schemas and protocols that stay stable while the data underneath moves",
      "Build backpressure, replay and recovery mechanics that survive real traffic",
      "Own benchmarks and regression tests so performance does not rot quietly",
      "Work with infrastructure engineers on placement, networking and capacity",
    ],
    required: [
      "Strong Rust, or deep systems experience in C or C++ with real interest in moving to Rust",
      "Experience with concurrent, latency-sensitive or high-throughput systems",
      "Comfort with profilers, flame graphs and reading what the machine is actually doing",
      "Good instincts for binary formats, serialisation and protocol design",
      "Honest engineering habits: benchmarks before claims, tests before refactors",
      "Able to work from our Toronto office part of the week",
    ],
    preferred: [
      "Familiarity with Solana internals: accounts, instructions, Geyser, Yellowstone gRPC",
      "Experience in trading systems, market data or MEV-adjacent work",
      "Time spent with io_uring, zero-copy techniques or kernel-bypass networking",
      "Experience running the things you build, not just writing them",
    ],
    whoYouAre: [
      "You find a 20 percent latency win genuinely exciting",
      "You measure first and optimise second",
      "You read other people's code to learn, not just to review",
      "You want your work to have a number attached to it",
      "You are comfortable being on call for the systems you build",
    ],
    process: [
      "Intro call with an engineer, about 30 minutes",
      "Short take-home assignment involving real decoded Solana data",
      "Technical conversation about your assignment, performance work and past systems",
      "Conversation with the founders",
      "Offer",
    ],
  },
  {
    slug: "frontend-engineer-toronto",
    title: "Frontend Engineer",
    location: "Toronto, Canada",
    type: "Full-time, hybrid",
    team: "Product",
    summary:
      "Build the dashboards, checkouts and consoles our products live in. Real users, real money, and interfaces that have to earn trust in seconds.",
    about: [
      "Every CLR3 product has a surface people stare at all day: the eeze checkout and its admin, the NoLimitNodes and HyperliquidRPC consoles, dataset browsers, status pages and billing. These are not marketing sites. They are working tools where clarity and speed decide whether customers stay.",
      "You will own these surfaces end to end with a small team, from component design to shipped feature, and you will have a real say in how the products feel.",
    ],
    responsibilities: [
      "Build and maintain product interfaces in React, Next.js and TypeScript",
      "Turn dense technical data, like latency metrics and stream catalogues, into interfaces people can scan",
      "Own frontend performance: bundle size, rendering, perceived speed",
      "Work with backend engineers on API design so the frontend is simple to build well",
      "Build the checkout and conversation surfaces for eeze, where UI quality is the product",
      "Keep accessibility and keyboard use working, not aspirational",
      "Ship, measure, and iterate with real customer feedback",
    ],
    required: [
      "Strong TypeScript and React experience with production apps you can show us",
      "Good taste in interface design and the craft to implement it precisely",
      "Solid understanding of the web platform: rendering, caching, forms, focus, history",
      "Experience consuming real APIs, including the messy parts like errors and loading states",
      "Clear communication and comfort working directly with users and clients",
      "Able to work from our Toronto office part of the week",
    ],
    preferred: [
      "Experience with data-heavy interfaces: tables, charts, live streams, dashboards",
      "Familiarity with design systems and component libraries you have helped build",
      "Some backend ability, enough to fix the API instead of working around it",
      "Experience with payments or checkout flows",
      "An eye for motion and micro-interactions used sparingly",
    ],
    whoYouAre: [
      "You sweat details users notice and skip decoration they do not",
      "You prototype to answer questions instead of debating them",
      "You treat slow interfaces as bugs",
      "You like talking to the people who use what you build",
      "You want ownership of a surface, not tickets from a queue",
    ],
    process: [
      "Intro call with an engineer, about 30 minutes",
      "Short take-home assignment building a small interface from a real dataset",
      "Technical conversation about your assignment and past work",
      "Conversation with the founders",
      "Offer",
    ],
  },
  {
    slug: "data-engineer-toronto",
    title: "Data Engineer",
    location: "Toronto, Canada",
    type: "Full-time, hybrid",
    team: "Data",
    summary:
      "Build the pipelines behind datastore: decoding years of on-chain history into clean, versioned Parquet that researchers can trust.",
    about: [
      "datastore sells something unusual: files, not API access. Customers download decoded on-chain history as Parquet and run their own queries. That only works if the data is actually right, which makes correctness, lineage and reproducibility the product.",
      "You will build and run the pipelines that decode Solana and Hyperliquid history at scale: backfills over billions of rows, schema design, checksums, manifests and the quality checks that let a quant trust a file they did not produce themselves.",
    ],
    responsibilities: [
      "Design and run large-scale decoding and backfill pipelines",
      "Model typed schemas for instructions, events and state across dozens of protocols",
      "Build validation that catches bad data before customers do",
      "Keep versioning, checksums, manifests and lineage docs accurate on every delivery",
      "Tune storage layout and partitioning so files query fast in DuckDB and Polars",
      "Add new protocols and chains to the catalogue",
      "Support customer questions about schemas and coverage",
    ],
    required: [
      "Experience building production data pipelines at meaningful scale",
      "Strong SQL plus one of Python, Rust or Go",
      "Real familiarity with columnar formats, ideally Parquet, and query engines like DuckDB, Polars or Spark",
      "Care for data correctness: testing, validation and reconciliation",
      "Comfort owning pipelines in production, including when they break at night",
      "Able to work from our Toronto office part of the week",
    ],
    preferred: [
      "Experience with blockchain data or other messy, high-volume event streams",
      "Familiarity with warehouse ecosystems your customers use, like Snowflake, BigQuery or ClickHouse",
      "Background in quantitative research support or backtesting infrastructure",
      "Experience with orchestration tools and with knowing when a cron job is enough",
    ],
    whoYouAre: [
      "You think an unverified number is worse than no number",
      "You write pipelines you would be happy to debug at 2am, so they rarely need it",
      "You like schemas that make the next person's query obvious",
      "You get satisfaction from a backfill that reconciles to the last row",
      "You explain data problems in plain language",
    ],
    process: [
      "Intro call with an engineer, about 30 minutes",
      "Short take-home assignment working with a real decoded dataset",
      "Technical conversation about your assignment and pipelines you have run",
      "Conversation with the founders",
      "Offer",
    ],
  },
  {
    slug: "ai-engineer-toronto",
    title: "AI Engineer",
    location: "Toronto, Canada",
    type: "Full-time, hybrid",
    team: "Product",
    summary:
      "Make eeze smarter and safer: retrieval, grounding and guardrails for an AI that negotiates with real money on the line.",
    about: [
      "eeze is an AI checkout. It answers buyer questions from a company's own docs, handles objections and can negotiate, but only inside rules the founder wrote, with every offer validated server-side. That combination of useful and safe is the whole product, and it is an engineering problem more than a prompt problem.",
      "You will own the AI layer: retrieval quality, grounding and citations, evaluation, guardrails and cost. You will also help clients ship AI features in their own products during consulting engagements.",
    ],
    responsibilities: [
      "Improve retrieval and grounding so answers cite the tenant's knowledge base accurately",
      "Design and enforce guardrails around offers, discounts and claims",
      "Build evaluation suites that catch regressions before customers see them",
      "Tune latency and cost across Anthropic and OpenAI models, including bring-your-own-key setups",
      "Turn knowledge-gap analytics into a product feature founders act on",
      "Prototype and ship AI features with clients during engagements",
      "Stay current on model capabilities and separate the useful from the noise",
    ],
    required: [
      "Strong software engineering fundamentals; this is a production engineering role, not a research role",
      "Hands-on experience shipping LLM features to real users",
      "Practical knowledge of retrieval, embeddings, context management and evaluation",
      "Experience with at least one of the major model APIs in production",
      "A healthy scepticism and the habit of measuring model behaviour instead of assuming it",
      "Able to work from our Toronto office part of the week",
    ],
    preferred: [
      "Experience with structured outputs, tool use and multi-step agent flows",
      "Background in payments, commerce or other domains where mistakes cost money",
      "Familiarity with guardrail and validation patterns for user-facing AI",
      "Experience running evals in CI",
    ],
    whoYouAre: [
      "You treat the model as a component, not a magic box",
      "You would rather ship a reliable small feature than demo an impressive fragile one",
      "You test with adversarial inputs because customers will",
      "You write down what you learn so the team compounds",
      "You care whether the answer is actually true",
    ],
    process: [
      "Intro call with an engineer, about 30 minutes",
      "Short take-home assignment around retrieval and grounding on real docs",
      "Technical conversation about your assignment and AI features you have shipped",
      "Conversation with the founders",
      "Offer",
    ],
  },
  {
    slug: "product-designer-toronto",
    title: "Product Designer",
    location: "Toronto, Canada",
    type: "Full-time, hybrid",
    team: "Product",
    summary:
      "Design developer-facing products where clarity is the brand: consoles, checkouts, docs and dashboards across seven live products.",
    about: [
      "Our customers are engineers, traders and founders. They do not want delight, they want to find the number, trust it and get back to work. Designing for that audience is a discipline of its own, and right now it is spread across seven products that each deserve better than developer-drawn interfaces.",
      "You will be our first dedicated designer, working across all seven CLR3 products, plus the CLR3 site itself. You will set the design system and the standard.",
    ],
    responsibilities: [
      "Own end-to-end design for product surfaces: flows, wireframes, final UI",
      "Build and maintain a design system that seven products can share",
      "Design data-dense screens, like stream catalogues, latency dashboards and dataset browsers, that stay scannable",
      "Work directly with engineers and ship alongside them, not ahead of them",
      "Talk to customers and turn what you hear into concrete design changes",
      "Raise the bar on docs, onboarding and empty states, where developer products are won",
      "Keep marketing surfaces honest and consistent with the products",
    ],
    required: [
      "A portfolio of shipped product design work, ideally developer tools, fintech or data products",
      "Fluency in modern design tooling and enough HTML and CSS literacy to design what can be built",
      "Strong typography and information-hierarchy fundamentals",
      "Comfort designing from real data and edge cases, not lorem ipsum",
      "Clear reasoning: you can explain why a design is right without pointing at a trend",
      "Able to work from our Toronto office part of the week",
    ],
    preferred: [
      "Experience designing for technical audiences: consoles, CLIs, docs, APIs",
      "Experience with design systems used by more than one team",
      "Basic familiarity with React, enough to prototype or pair with engineers",
      "Writing skill; UX copy in our products is design work",
    ],
    whoYouAre: [
      "You think removing an element is usually the better redesign",
      "You would rather watch a user struggle than guess what they need",
      "You defend the user in reviews and defend engineering constraints to yourself",
      "You finish things: states, errors and edge cases included",
      "You want your work shipped, not framed",
    ],
    process: [
      "Intro call, about 30 minutes",
      "Portfolio walkthrough of two or three projects in depth",
      "Short design exercise built around one of our real screens",
      "Conversation with the founders",
      "Offer",
    ],
  },
  {
    slug: "solutions-engineer-remote",
    title: "Solutions Engineer",
    location: "Remote, Americas",
    type: "Full-time, remote",
    team: "Consulting",
    summary:
      "Sit between our customers and our systems: integrations, onboarding, technical answers and the occasional pull request.",
    about: [
      "Our products are technical and so are our customers. When a trading team evaluates NoLimitNodes, or a quant fund needs a custom datastore delivery, or a client engagement needs someone who can both talk and code, that is this role.",
      "You will run technical evaluations and onboarding, answer the hard support questions, build integration examples and sample code, and feed what you learn back into the products. It suits an engineer who likes people as much as systems.",
    ],
    responsibilities: [
      "Guide prospects through technical evaluations and proofs of concept",
      "Onboard new customers onto streams, RPC and datasets, and stay their technical contact",
      "Write integration guides, sample code and honest comparison docs",
      "Answer escalated technical questions with real investigation, not templates",
      "Scope custom deliveries and enterprise setups with the engineering team",
      "Feed recurring friction back into product priorities",
      "Support consulting engagements when a customer-facing engineer is needed",
    ],
    required: [
      "A software engineering background; you can read, write and debug real code",
      "Experience in a customer-facing technical role, or clear evidence you would be good at one",
      "Strong writing; most of your output is words engineers will judge",
      "Comfort with APIs, websockets, gRPC and the debugging that comes with them",
      "Self-direction; this role is remote and you will run your own queue",
    ],
    preferred: [
      "Familiarity with trading, market data or blockchain infrastructure",
      "Experience writing public docs or sample repositories",
      "Prior startup experience where you wore several hats",
      "Overlap with North American trading hours",
    ],
    whoYouAre: [
      "You explain complicated things simply because you actually understand them",
      "You follow a problem to its root instead of pattern-matching a reply",
      "You enjoy the moment a customer's integration finally works",
      "You keep promises small and delivery certain",
      "You notice product problems before customers report them",
    ],
    process: [
      "Intro call, about 30 minutes",
      "Written exercise: explain a technical topic to two different audiences",
      "Technical conversation with an engineer",
      "Conversation with the founders",
      "Offer",
    ],
  },
];

