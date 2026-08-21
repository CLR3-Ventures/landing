import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/sections/footer";
import { careersEmail, jobs } from "@/lib/site";

const job = jobs.find((j) => j.slug === "software-engineer-toronto")!;

export const metadata: Metadata = {
  title: `${job.title}, ${job.location}`,
  description: job.summary,
};

const applyHref = `mailto:${careersEmail}?subject=${encodeURIComponent(
  `Application: ${job.title}, ${job.location.split(",")[0]}`
)}`;

function List({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-line border-b border-line">
      {items.map((item) => (
        <li key={item} className="py-3 text-[15px] leading-relaxed text-ink-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-5 py-10 first:pt-0 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
      <h2 className="text-lg font-semibold tracking-[-0.015em] text-ink">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function JobPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="border-b border-line">
          <div className="container-x py-16 sm:py-24">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              All roles
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
                  {job.title}
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl">
                  {job.summary}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={applyHref}
                    className="group inline-flex h-12 items-center justify-center gap-2 bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-signal-strong"
                  >
                    Apply for this role
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <span className="text-sm text-ink-faint">
                    Opens an email to {careersEmail}
                  </span>
                </div>
              </div>
              <dl className="divide-y divide-line border-y border-line self-start lg:col-span-4 lg:border-l lg:border-y-0 lg:pl-10">
                {[
                  ["Location", job.location],
                  ["Type", job.type],
                  ["Team", job.team],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[100px_1fr] py-3 text-[15px] lg:first:pt-0">
                    <dt className="text-ink-faint">{k}</dt>
                    <dd className="font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <div className="container-x divide-y divide-line py-16 sm:py-20">
          <Section title="About CLR3">
            <div className="space-y-4 text-pretty text-[15px] leading-relaxed text-ink-muted">
              {job.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Section>
          <Section title="What you will do">
            <List items={job.responsibilities} />
          </Section>
          <Section title="What we are looking for">
            <List items={job.required} />
          </Section>
          <Section title="Nice to have">
            <List items={job.preferred} />
          </Section>
          <Section title="Who you are">
            <List items={job.whoYouAre} />
          </Section>
          <Section title="How we hire">
            <ol className="divide-y divide-line border-b border-line">
              {job.process.map((step, i) => (
                <li key={step} className="flex items-start gap-4 py-3 text-[15px] leading-relaxed text-ink-muted">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center bg-signal text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Section>
          <Section title="Apply">
            <p className="max-w-[60ch] text-pretty text-[15px] leading-relaxed text-ink-muted">
              Email {careersEmail} with a short note about yourself, a link to
              your GitHub or past work, and a CV if you have one. We read every
              application and reply to all of them.
            </p>
            <a
              href={applyHref}
              className="group mt-6 inline-flex h-12 items-center justify-center gap-2 bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-signal-strong"
            >
              Apply for this role
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
