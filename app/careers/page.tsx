import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/sections/footer";
import { careersEmail, jobs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open engineering roles at CLR3. Build and run real-time data, infrastructure and AI products with a small senior team.",
};

export default function CareersPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="border-b border-line">
          <div className="container-x py-20 sm:py-28">
            <div className="max-w-3xl">
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
                Work at CLR3
              </h1>
              <p className="mt-7 text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl">
                We are a small team of senior engineers who build and run
                production systems, for clients and for ourselves. If you want
                to own things end to end, from design to on-call, you will
                like it here.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line py-20 sm:py-28">
          <div className="container-x">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              Open roles
            </h2>
            <ul className="mt-8 border border-line">
              {jobs.map((j, i) => (
                <li key={j.slug} className={i > 0 ? "border-t border-line" : undefined}>
                  <Link
                    href={`/careers/${j.slug}`}
                    className="group grid gap-3 px-5 py-6 transition-colors hover:bg-signal-soft sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-8"
                  >
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                        {j.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted">
                        {j.location} · {j.type} · {j.team}
                      </p>
                      <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-ink-muted">
                        {j.summary}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[15px] font-medium text-signal">
                      View role
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-pretty text-[15px] leading-relaxed text-ink-muted">
              Don&rsquo;t see the right role? We still want to hear from strong
              engineers. Send a short note and a link to your work to{" "}
              <a href={`mailto:${careersEmail}`} className="font-medium text-ink underline-offset-4 hover:underline">
                {careersEmail}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
