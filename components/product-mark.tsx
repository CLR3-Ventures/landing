import type { Product } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * One drawn glyph per product, all on the same 24px grid and 1.5px stroke so
 * they read as a family rather than five borrowed logos.
 */
export function ProductMark({
  mark,
  className,
}: {
  mark: Product["mark"];
  className?: string;
}) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: cn("shrink-0", className),
  };

  switch (mark) {
    case "eeze":
      // conversation → checkout
      return (
        <svg {...common}>
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h8A2.5 2.5 0 0 1 17 6.5v4a2.5 2.5 0 0 1-2.5 2.5H9l-3.5 3v-3A2.5 2.5 0 0 1 4 10.5z" />
          <path d="M14.5 17.5l2 2 4-4" />
        </svg>
      );
    case "nolimitnodes":
      // node graph
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 6h8M7 7.5l4 8.5M17 7.5l-4 8.5" />
        </svg>
      );
    case "datastore":
      // columnar files
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 4v16M15 4v16M4 10h16M4 15h16" />
        </svg>
      );
    case "hyperliquidrpc":
      // order book / signal
      return (
        <svg {...common}>
          <path d="M3 15l4-5 4 3 4-8 6 7" />
          <path d="M3 20h18" />
        </svg>
      );
    case "openinfra":
      // server rack
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="6" rx="1.5" />
          <rect x="4" y="14" width="16" height="6" rx="1.5" />
          <path d="M8 7h.01M8 17h.01" strokeWidth="2.2" />
        </svg>
      );
  }
}
