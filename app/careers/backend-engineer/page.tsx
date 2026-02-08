import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConstellationBackground } from "@/components/constellation-background";

export const metadata: Metadata = {
  title: "Software Engineer (Backend) - CLR3 Ventures",
  description:
    "Join CLR3 Ventures as a Backend Software Engineer. Bangalore office, hands-on development, APIs, and backend systems.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BackendEngineerPage() {
  const responsibilities = [
    "Write, test, and deploy backend code in object-oriented languages",
    "Build and maintain APIs, services, and data pipelines",
    "Work on system design and help improve the architecture as things evolve",
    "Collaborate with teammates to break down requirements and deliver solutions",
    "Participate in code reviews and contribute to engineering best practices",
    "Debug and troubleshoot issues across the stack",
    "Help improve performance, reliability, and developer tooling",
    "Write clean, well-documented code that others can build on",
  ];

  const requiredQualifications = [
    "Solid programming skills in at least one backend language \u2014 and willingness to pick up new ones",
    "Familiarity with building APIs, working with databases, and writing tests",
    "Basic understanding of data structures, algorithms, and system design",
    "Good communication skills and comfort working in a team",
  ];

  const preferredQualifications = [
    "Experience with distributed or event-driven systems",
    "Familiarity with CI/CD pipelines and DevOps practices",
    "Experience with messaging systems like Kafka, NATS, or Redpanda",
    "Contributions to open-source projects or a technical blog",
    "Interest in real-time data or high-throughput systems",
  ];

  const whoYouAre = [
    "You like building things and seeing them work",
    "You\u2019re comfortable asking questions and learning on the go",
    "You take ownership of your work without needing to be told what to do",
    "You care more about solving the problem than which language you use",
    "You\u2019re a team player who shares what you know",
  ];

  return (
    <div className="min-h-screen bg-black flex items-start justify-center p-4 sm:p-6 relative overflow-x-hidden">
      <ConstellationBackground />

      <div className="w-full max-w-4xl relative z-10 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
              CLR3 Ventures
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Software Engineer &mdash; Backend
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 text-xs text-zinc-400 border border-white/[0.08] rounded-md px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              Bangalore, India
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-zinc-400 border border-white/[0.08] rounded-md px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              Full-time, On-site
            </span>
          </div>

          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            We&apos;re looking for a Software Engineer to join our backend team.
            You&apos;ll work on real systems that power our products &mdash;
            writing code, building APIs, and helping shape how things work under
            the hood. If you enjoy solving problems, learning new tools, and
            writing clean code, this is a great fit.
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-3">
          {/* About the Role */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-zinc-600 uppercase tracking-widest font-medium">
                  Overview
                </div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h2 className="text-lg font-semibold text-white mb-3">
                About the Role
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                This is a hands-on engineering role. You&apos;ll be writing
                backend code, working with databases and APIs, and collaborating
                with the rest of the team to ship features and fix bugs. We
                value curiosity and initiative &mdash; you don&apos;t need to
                know everything on day one, but you should be eager to learn and
                grow.
              </p>
            </div>
          </Card>

          {/* Responsibilities */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-zinc-600 uppercase tracking-widest font-medium">
                  What You&apos;ll Do
                </div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Key Responsibilities
              </h2>
              <div className="space-y-3">
                {responsibilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Two-column: Required + Preferred */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Required Qualifications */}
            <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-zinc-600 uppercase tracking-widest font-medium">
                    Requirements
                  </div>
                  <div className="w-1 h-1 rounded-full bg-zinc-700" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-4">
                  Required Qualifications
                </h2>
                <div className="space-y-3">
                  {requiredQualifications.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Preferred Qualifications */}
            <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-zinc-600 uppercase tracking-widest font-medium">
                    Nice to Have
                  </div>
                  <div className="w-1 h-1 rounded-full bg-zinc-700" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-4">
                  Preferred Qualifications
                </h2>
                <div className="space-y-3">
                  {preferredQualifications.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Who You Are */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-zinc-600 uppercase tracking-widest font-medium">
                  Culture Fit
                </div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Who You Are
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {whoYouAre.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Apply CTA */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white mb-1">
                  Interested?
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Send your resume and a short note about what excites you about
                  this role.
                </p>
              </div>
              <a href="mailto:careers@clr3.org?subject=Application%20-%20Software%20Engineer%20(Backend)">
                <Button className="bg-white text-black hover:bg-zinc-200 h-9 text-xs font-semibold tracking-wide px-6 shrink-0">
                  Apply Now
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-xs text-zinc-700 tracking-wider">
            &copy; 2025 CLR3 Ventures
          </p>
        </div>
      </div>
    </div>
  );
}
