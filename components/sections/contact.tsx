import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { jobs, site } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-band py-24 text-band-foreground sm:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Tell us what you&rsquo;re building.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-band-muted sm:text-lg">
              A short note is enough. A senior engineer replies, usually
              within one business day.
            </p>
            <dl className="mt-10 divide-y divide-band-line border-y border-band-line">
              <div className="grid gap-1 py-4 sm:grid-cols-[120px_1fr]">
                <dt className="text-sm text-band-muted">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-[15px] font-medium underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[120px_1fr]">
                <dt className="text-sm text-band-muted">Careers</dt>
                <dd>
                  {jobs.map((j) => (
                    <Link
                      key={j.slug}
                      href={`/careers/${j.slug}`}
                      className="group inline-flex items-center gap-1.5 text-[15px] font-medium underline-offset-4 hover:underline"
                    >
                      {j.title}, {j.location.split(",")[0]}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-band-line lg:pl-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
