import { cn } from "@/lib/utils";

/**
 * CLR3 wordmark. Three bars for the "3", set as a single flat glyph.
 * `inverted` renders it for dark bands.
 */
export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
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
        <rect x="1" y="1" width="20" height="20" className={inverted ? "fill-band-foreground" : "fill-ink"} />
        <rect x="6" y="6" width="10" height="2.2" className={inverted ? "fill-band" : "fill-background"} />
        <rect x="9" y="9.9" width="7" height="2.2" className={inverted ? "fill-band" : "fill-background"} />
        <rect x="6" y="13.8" width="10" height="2.2" className={inverted ? "fill-band" : "fill-background"} />
      </svg>
      <span
        className={cn(
          "text-[15px] font-semibold tracking-[-0.02em]",
          inverted ? "text-band-foreground" : "text-ink"
        )}
      >
        CLR3
      </span>
    </span>
  );
}
