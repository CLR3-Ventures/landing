import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-band py-24 text-band-foreground sm:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Tell us what you&rsquo;re building.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-band-muted sm:text-lg">
              A short note is enough: what the system does, where it hurts,
              and what a good outcome looks like. A senior engineer replies,
              usually within one business day.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                id="open-popup-button"
                type="button"
                className="group inline-flex h-12 items-center justify-center gap-2 bg-band-foreground px-6 text-[15px] font-medium text-band transition-colors hover:bg-band-muted"
              >
                Send a message
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-12 items-center justify-center border border-band-line px-6 text-[15px] font-medium text-band-foreground transition-colors hover:border-band-foreground"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="border-t border-band-line pt-10 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
            <h3 className="text-lg font-semibold tracking-[-0.015em]">Join the team</h3>
            <p className="mt-2.5 text-pretty text-[15px] leading-relaxed text-band-muted">
              We hire engineers who want to own systems end to end — from
              design to on-call. Current openings are listed on our careers
              page.
            </p>
            <Link
              href="/careers/backend-engineer"
              className="group mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium underline-offset-4 hover:underline"
            >
              Software Engineer, Backend
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
