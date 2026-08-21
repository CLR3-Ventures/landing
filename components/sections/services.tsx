import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 border-b border-line py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
              Three ways to work with us
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
              Most engagements start with one and grow into the others. All of
              them are staffed by senior engineers who have shipped and run
              systems like yours.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="grid gap-6 py-10 md:grid-cols-[minmax(0,1fr)_240px] md:gap-12"
                >
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-pretty text-base font-medium leading-relaxed text-ink">
                      {s.lead}
                    </p>
                    <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-muted">
                      {s.body}
                    </p>
                  </div>
                  <ul className="divide-y divide-line border-y border-line md:mt-1">
                    {s.engagements.map((e) => (
                      <li key={e} className="py-2.5 text-sm text-ink-muted">
                        {e}
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
