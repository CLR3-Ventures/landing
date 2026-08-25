import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/sections/footer";
import { ProductMark } from "@/components/product-mark";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The products CLR3 builds and operates: eeze, NoLimitNodes, datastore, HyperliquidRPC and OpenInfra.",
};

export default function ProductsIndexPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="border-b border-line">
          <div className="container-x py-20 sm:py-28">
            <div className="max-w-3xl">
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
                Products we build and operate
              </h1>
              <p className="mt-7 text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl">
                Five products, all running in production for paying customers,
                on infrastructure we own. They are how we stay honest: every
                piece of advice we give a client is something we also have to
                live with ourselves.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line py-20 sm:py-28">
          <div className="container-x">
            <ul className="grid border-t border-l border-line md:grid-cols-2">
              {products.map((p) => (
                <li key={p.slug} className="border-r border-b border-line">
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex h-full flex-col p-7 transition-colors hover:bg-signal-soft sm:p-9"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex size-12 items-center justify-center border border-line bg-surface text-ink-muted transition-colors group-hover:border-signal group-hover:text-signal">
                        <ProductMark mark={p.mark} />
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                        {p.category}
                      </span>
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-ink">
                      {p.name}
                    </h2>
                    <p className="mt-1 text-sm text-ink-faint">{p.domain}</p>
                    <p className="mt-4 text-base font-medium text-ink">{p.summary}</p>
                    <p className="mt-2 flex-1 text-pretty text-[15px] leading-relaxed text-ink-muted">
                      {p.detail}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-signal">
                      About {p.name}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
              <li className="flex flex-col justify-center border-r border-b border-line bg-surface p-7 sm:p-9">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                  Want one of these for your company?
                </h2>
                <p className="mt-3 max-w-md text-pretty text-[15px] leading-relaxed text-ink-muted">
                  Every product here started as an internal build. We take on a
                  small number of zero-to-one product engagements each year.
                </p>
                <Link
                  href="/#contact"
                  className="group mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-signal"
                >
                  Talk to us about product development
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
