import { cn } from "@/lib/utils";

/**
 * CLR3 wordmark. Three bars for the "3", set as a single glyph so it reads
 * as a mark at 16px and as lettering at 40px.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="1" y="1" width="20" height="20" rx="4" className="fill-foreground" />
        <rect x="6" y="6" width="10" height="2.2" rx="1" className="fill-background" />
        <rect x="9" y="9.9" width="7" height="2.2" rx="1" className="fill-background" />
        <rect x="6" y="13.8" width="10" height="2.2" rx="1" className="fill-background" />
      </svg>
      <span className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
        CLR3
      </span>
    </span>
  );
}
