import { ArrowRight } from "lucide-react";
import { products } from "@/lib/site";
import { ProductMark } from "@/components/product-mark";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Engineering grid + single cool glow, masked so it dissolves into the page */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-radial" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[140px]" />
      </div>

      <div className="container-x">
        <div className="max-w-4xl">
          <h1 className="animate-rise text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
            We build and run the software your business depends on.
          </h1>
          <p
            className="animate-rise mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            CLR3 is a software consulting, advisory and product development
            company. We design, build and operate production systems for our
            clients — and we run our own products on the same foundations.
          </p>
          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-foreground px-6 text-[15px] font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Start a conversation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#products"
              className="inline-flex h-12 items-center justify-center rounded-md border border-line-strong px-6 text-[15px] font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-surface"
            >
              See what we operate
            </a>
          </div>
        </div>

        {/* Proof strip: products we build and run */}
        <div
          className="animate-rise mt-20 border-t border-line pt-8 sm:mt-28"
          style={{ animationDelay: "340ms" }}
        >
          <p className="text-sm text-ink-faint">
            Products designed, built and operated by CLR3
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
            {products.map((p) => (
              <li key={p.domain}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-ink-muted transition-colors hover:text-foreground"
                >
                  <ProductMark mark={p.mark} className="size-5 text-ink-faint transition-colors group-hover:text-signal" />
                  <span className="text-[15px] font-medium tracking-[-0.01em]">
                    {p.domain}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
