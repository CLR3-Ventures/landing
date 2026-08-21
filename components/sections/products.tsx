import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site";
import { ProductMark } from "@/components/product-mark";

export function Products() {
  return (
    <section id="products" className="scroll-mt-16 border-b border-line bg-surface py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
            Products we build and operate
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            These are not side projects. Each one runs in production for
            paying customers, on infrastructure we own and operate. They are
            the clearest evidence of how we work.
          </p>
        </div>

        <ul className="mt-14 border border-line bg-background">
          {products.map((p, i) => (
            <li key={p.domain} className={i > 0 ? "border-t border-line" : undefined}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-5 px-5 py-7 transition-colors hover:bg-signal-soft sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:gap-8 sm:px-8 sm:py-8 lg:grid-cols-[48px_260px_minmax(0,1fr)_auto]"
              >
                <span className="flex size-11 items-center justify-center border border-line bg-surface text-ink-muted transition-colors group-hover:border-signal group-hover:text-signal sm:size-12">
                  <ProductMark mark={p.mark} />
                </span>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-faint">{p.domain}</p>
                  <p className="mt-3 text-base font-medium text-ink lg:mt-2">
                    {p.summary}
                  </p>
                </div>

                <div className="min-w-0 sm:col-span-2 lg:col-span-1">
                  <p className="max-w-[60ch] text-pretty text-[15px] leading-relaxed text-ink-muted">
                    {p.detail}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="bg-surface-raised px-2 py-0.5 text-xs font-medium text-ink-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="hidden items-start text-ink-faint transition-colors group-hover:text-signal lg:flex">
                  <ArrowUpRight className="size-5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
