import { approach, principles } from "@/lib/site";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 border-b border-line py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
            How an engagement runs
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            Four phases, the same whether we are advising, building for you or
            building with you. The order matters. We don&rsquo;t write code
            for a system we don&rsquo;t understand yet.
          </p>
        </div>

        <ol className="mt-14 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <li key={a.step} className="border-r border-b border-line p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-7 items-center justify-center bg-signal text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-ink-faint">{a.step}</span>
              </div>
              <h3 className="mt-6 text-balance text-lg font-semibold leading-snug tracking-[-0.015em] text-ink">
                {a.title}
              </h3>
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-muted">
                {a.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-24 grid gap-10 border-t border-line pt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
              What you can expect
            </h2>
          </div>
          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {principles.map((p) => (
              <div key={p.title} className="border-t-2 border-ink pt-4">
                <dt className="text-lg font-semibold tracking-[-0.015em] text-ink">
                  {p.title}
                </dt>
                <dd className="mt-2.5 text-pretty text-[15px] leading-relaxed text-ink-muted">
                  {p.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
