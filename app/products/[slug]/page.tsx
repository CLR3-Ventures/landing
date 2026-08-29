import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/sections/footer";
import { ProductMark } from "@/components/product-mark";
import { products } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug)!;
  return {
    title: `${p.name} (${p.domain})`,
    description: `${p.headline} ${p.name} is built and operated by CLR3.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug)!;
  const others = products.filter((x) => x.slug !== slug);

  return (
    <>
      <SiteNav />
      <main>
        {/* Masthead */}
        <section className="border-b border-line">
          <div className="container-x py-16 sm:py-24">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              All products
            </Link>

            <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center border border-line bg-surface text-ink">
                    <ProductMark mark={p.mark} />
                  </span>
                  <div>
                    <p className="text-xl font-semibold tracking-[-0.02em] text-ink">{p.name}</p>
                    <p className="text-sm text-ink-faint">{p.category}</p>
                  </div>
                </div>
                <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl">
                  {p.headline}
                </h1>
                <div className="mt-7 max-w-2xl space-y-4 text-pretty text-lg leading-relaxed text-ink-muted">
                  {p.intro.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center justify-center gap-2 bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-signal-strong"
                  >
                    Visit {p.domain}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  {p.docsUrl && (
                    <a
                      href={p.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 border border-line-strong px-6 text-[15px] font-medium text-ink transition-colors hover:border-ink"
                    >
                      <BookOpen className="size-4 text-ink-faint" />
                      Documentation
                    </a>
                  )}
                </div>
              </div>

              {/* Fact table */}
              <aside className="self-start lg:col-span-4 lg:border-l lg:border-line lg:pl-10" aria-label="Key facts">
                <h2 className="text-sm font-semibold text-ink">At a glance</h2>
                <dl className="mt-3 divide-y divide-line border-y border-line">
                  {p.facts.map((f) => (
                    <div key={f.label} className="grid gap-0.5 py-3">
                      <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                        {f.label}
                      </dt>
                      <dd className="text-[15px] leading-relaxed text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-ink-faint">
                  Built and operated by CLR3. Figures and claims are from the
                  product&rsquo;s own published material.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="border-b border-line bg-surface" aria-label="Key numbers">
          <div className="container-x grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {p.stats.map((s) => (
              <div key={s.label} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <p className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm text-ink-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-b border-line py-20 sm:py-28">
          <div className="container-x">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
              What it does
            </h2>
            <div className="mt-10 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
              {p.features.map((f) => (
                <article key={f.title} className="border-r border-b border-line p-7 sm:p-8">
                  <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-muted">
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for + plans/steps */}
        <section className="border-b border-line py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                Who it&rsquo;s for
              </h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {p.audience.map((a) => (
                  <li key={a} className="flex items-center gap-3 py-3.5 text-[15px] text-ink-muted">
                    <span className="size-1.5 shrink-0 bg-signal" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 lg:border-l lg:border-line lg:pl-16">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {p.included.title}
              </h2>
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {p.included.items.map((item, i) => (
                  <li key={item} className="flex items-start gap-4 py-4 text-[15px] leading-relaxed text-ink-muted">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center bg-signal text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              {p.note && (
                <p className="mt-6 border-l-[1px] border-line-strong pl-4 text-sm leading-relaxed text-ink-faint">
                  {p.note}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* CLR3 band */}
        <section className="border-b border-line bg-band py-16 text-band-foreground sm:py-20">
          <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
                The team behind {p.name} is the team you hire.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-band-muted sm:text-base">
                CLR3 designs, builds and operates {p.name} end to end. When we
                take on consulting and product work, it is this same team, with
                the same habits: measured latency, monitored systems and
                documentation people can actually use.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href="/#contact"
                className="group inline-flex h-12 items-center justify-center gap-2 bg-band-foreground px-6 text-[15px] font-medium text-band transition-colors hover:bg-band-muted"
              >
                Work with us
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Other products */}
        <section className="py-16 sm:py-20" aria-label="Other CLR3 products">
          <div className="container-x">
            <h2 className="text-sm font-semibold text-ink">More from CLR3</h2>
            <ul className="mt-4 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug} className="border-r border-b border-line">
                  <Link
                    href={`/products/${o.slug}`}
                    className="group flex h-full flex-col gap-2 p-5 transition-colors hover:bg-signal-soft"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <ProductMark mark={o.mark} className="size-5 text-ink-faint transition-colors group-hover:text-signal" />
                      <span className="text-[15px] font-semibold text-ink">{o.name}</span>
                    </span>
                    <span className="text-sm leading-relaxed text-ink-muted">{o.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
