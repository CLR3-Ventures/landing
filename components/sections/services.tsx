import { Check } from "lucide-react";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
              Three ways to work with us
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
              Most engagements start with one and grow into the others. Every
              one of them is staffed by senior engineers who have shipped and
              operated systems like yours.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="grid gap-6 py-10 first:pt-8 last:pb-8 md:grid-cols-[minmax(0,1fr)_240px] md:gap-12"
                >
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-pretty text-base font-medium leading-relaxed text-ink">
                      {s.lead}
                    </p>
                    <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-muted">
                      {s.body}
                    </p>
                  </div>
                  <ul className="space-y-2.5 md:pt-1">
                    {s.engagements.map((e) => (
                      <li key={e} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden="true" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
