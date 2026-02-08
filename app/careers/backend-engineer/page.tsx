import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConstellationBackground } from "@/components/constellation-background";

export const metadata: Metadata = {
  title: "Backend Software Engineer - CLR3 Ventures",
  description:
    "Join CLR3 Ventures as a Backend Software Engineer. Bangalore office, hands-on development, system architecture, and technical leadership.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BackendEngineerPage() {
  const responsibilities = [
    "Hands-on development — design, code, test, deploy, and maintain high-quality software in any object-oriented backend language",
    "Architect scalable, robust, and secure systems including APIs, distributed systems, data pipelines, and cloud-native services",
    "Lead independent technical initiatives with minimal oversight; drive projects from idea to production",
    "Mentor and guide junior and mid-level engineers through code reviews, best practices, and technical direction",
    "Collaborate with product and leadership to translate business requirements into technical solutions",
    "Identify and implement improvements in performance, scalability, reliability, and developer productivity",
    "Own technical decisions, propose solution options, and evaluate trade-offs",
    "Champion engineering best practices including automated testing, CI/CD, clean code, and documentation",
    "Troubleshoot complex issues and improve system observability, monitoring, and incident response",
  ];

  const requiredQualifications = [
    "2+ years of professional software engineering experience (including internships and personal projects) with a strong portfolio of shipped projects",
    "Deep hands-on programming skills — language-agnostic, comfortable picking up new languages quickly",
    "Experience architecting and building distributed systems, microservices, or high-scale applications",
    "Strong understanding of data structures, algorithms, system design, and performance optimization",
    "Experience with modern cloud infrastructure (AWS, GCP, Azure) and container technologies (Docker, Kubernetes)",
    "Proven ability to lead technical initiatives independently",
    "Excellent communication and collaborative problem-solving skills",
  ];

  const preferredQualifications = [
    "Experience working with high-throughput, real-time, or event-driven systems",
    "Familiarity with DevOps, SRE practices, and CI/CD pipelines",
    "Experience guiding small teams or leading architecture and design reviews",
    "Contributions to open-source projects or technical blogs",
    "Experience with distributed messaging systems (Kafka, NATS, Redpanda, Pulsar, etc.)",
  ];

  const whoYouAre = [
    "A self-motivated builder who thrives in ownership and autonomy",
    "A pragmatic engineer who balances ideal architecture with real-world constraints",
    "A mentor who enjoys uplifting others and sharing knowledge",
    "A problem-solver who doesn\u2019t wait for instructions \u2014 you propose solutions",
    "A generalist who cares more about solving problems than what language is used",
  ];

  return (
    <div className="min-h-screen bg-black flex items-start justify-center p-4 relative overflow-x-hidden">
      <ConstellationBackground />

      <div className="w-full max-w-4xl relative z-10 py-12 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
              CLR3 Ventures
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-3 leading-tight">
            Backend Software Engineer
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 border border-white/[0.08] rounded-md px-2.5 py-1">
              <span className="w-1 h-1 rounded-full bg-zinc-500" />
              Bangalore, India
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 border border-white/[0.08] rounded-md px-2.5 py-1">
              <span className="w-1 h-1 rounded-full bg-zinc-500" />
              Full-time, On-site
            </span>
          </div>

          <p className="text-xs text-zinc-500 max-w-2xl leading-relaxed">
            We are looking for a highly skilled Software Engineer who combines
            deep technical expertise with strong leadership instincts. This role
            is for a true self-starter — someone who thrives in fast-moving
            environments, is language-agnostic, and is motivated by solving
            challenging engineering problems end-to-end.
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-2.5">
          {/* About the Role */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
                  Overview
                </div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h2 className="text-base font-semibold text-white mb-2">
                About the Role
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                This role is ideal for someone who is hands-on with coding,
                capable of architecting complex systems, and comfortable leading
                independent initiatives from concept to production. You will
                mentor junior engineers, influence technical decisions across the
                team, and drive high-impact projects with minimal supervision.
              </p>
            </div>
          </Card>

          {/* Responsibilities */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
                  What You&apos;ll Do
                </div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h2 className="text-base font-semibold text-white mb-3">
                Key Responsibilities
              </h2>
              <div className="space-y-2">
                {responsibilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Two-column: Required + Preferred */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {/* Required Qualifications */}
            <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
                    Requirements
                  </div>
                  <div className="w-1 h-1 rounded-full bg-zinc-700" />
                </div>
                <h2 className="text-base font-semibold text-white mb-3">
                  Required Qualifications
                </h2>
                <div className="space-y-2">
                  {requiredQualifications.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Preferred Qualifications */}
            <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
                    Nice to Have
                  </div>
                  <div className="w-1 h-1 rounded-full bg-zinc-700" />
                </div>
                <h2 className="text-base font-semibold text-white mb-3">
                  Preferred Qualifications
                </h2>
                <div className="space-y-2">
                  {preferredQualifications.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Who You Are */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
                  Culture Fit
                </div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h2 className="text-base font-semibold text-white mb-3">
                Who You Are
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {whoYouAre.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Apply CTA */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-white mb-1">
                  Interested?
                </h2>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Send your resume and a brief note about why you&apos;re
                  excited about this role.
                </p>
              </div>
              <a href="mailto:careers@clr3.org?subject=Application%20-%20Backend%20Software%20Engineer">
                <Button className="bg-white text-black hover:bg-zinc-200 h-8 text-[11px] font-semibold tracking-wide px-6 shrink-0">
                  Apply Now
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-[10px] text-zinc-700 tracking-wider">
            &copy; 2025 CLR3 Ventures
          </p>
        </div>
      </div>
    </div>
  );
}
