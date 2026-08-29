import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/site";
import { ProductMark } from "@/components/product-mark";

const capabilities = [
  "Software consulting",
  "Technical advisory",
  "Product development",
  "Managed operations",
];

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-8">
          <h1 className="animate-rise text-balance text-[2.625rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.25rem]">
            We build and run the software your business depends on.
          </h1>
          <p
            className="animate-rise mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl"
            style={{ animationDelay: "100ms" }}
          >
            CLR3 is a software consulting, advisory and product development
            company. We design, build and run production systems for our
            clients, and we run our own products on the same foundations.
          </p>
          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-2 bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-signal-strong"
            >
              Start a conversation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center border border-line-strong px-6 text-[15px] font-medium text-ink transition-colors hover:border-ink"
            >
              See what we operate
            </Link>
          </div>
        </div>

        {/* Flat capability index: a table, not a card */}
        <div
          className="animate-rise lg:col-span-4 lg:border-l lg:border-line lg:pl-10"
          style={{ animationDelay: "260ms" }}
        >
          <p className="text-sm font-medium text-ink">What we do</p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {capabilities.map((c) => (
              <li key={c} className="flex items-center justify-between py-3.5 text-[15px] text-ink-muted">
                {c}
                <span className="size-1.5 bg-signal" aria-hidden="true" />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink-faint">
            Senior engineers only. We work in your repositories, in your cloud
            and with your process.
          </p>
        </div>
      </div>

      {/* Proof strip */}
      <div className="border-t border-line bg-surface">
        <div className="container-x flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:gap-10">
          <p className="shrink-0 text-sm text-ink-faint">
            Products built and operated by CLR3
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:flex lg:flex-1 lg:flex-wrap lg:gap-x-8 lg:gap-y-2">
            {products.map((p) => (
              <li key={p.domain}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
                >
                  <ProductMark mark={p.mark} className="size-[18px] text-ink-faint transition-colors group-hover:text-signal" />
                  <span className="text-[15px] font-medium tracking-[-0.01em]">{p.domain}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
