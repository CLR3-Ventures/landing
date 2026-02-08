import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Assignment — CLR3 Ventures",
  description: "Substreams assignment for backend engineering candidates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AssignmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <div className="mb-10 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-400 font-mono">
            <span>CLR3 Ventures</span>
            <span>/</span>
            <span>Backend Assignment</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Substreams Assignment: Solana Transfer Extraction
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-medium">
              Time Limit: 2 Hours
            </span>
          </div>
        </div>

        {/* Important Callout */}
        <div className="mb-10 rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3">
            Read This First
          </h2>
          <p className="text-[15px] text-blue-900 leading-relaxed mb-4">
            <strong>This is an extremely difficult assignment.</strong>
          </p>
          <p className="text-[15px] text-blue-800 leading-relaxed mb-4">
            You may have never heard of blockchain, Rust, Substreams, or Solana
            before. Most candidates haven&apos;t. That&apos;s intentional.
          </p>
          <p className="text-[15px] text-blue-800 leading-relaxed mb-4">
            <strong>We WANT you to use AI tools.</strong> Use ChatGPT, Claude,
            Copilot, Gemini, or any AI assistant you prefer. Use Google, Stack
            Overflow, GitHub, official docs &mdash; whatever helps you succeed.
          </p>
          <div className="rounded-md bg-blue-100 border border-blue-200 p-4 mb-4">
            <p className="text-[15px] text-blue-900 font-semibold leading-relaxed">
              Why are we doing this?
            </p>
            <p className="text-[15px] text-blue-800 leading-relaxed mt-2">
              We&apos;re evaluating how you perform when faced with a hard,
              ambiguous task in unfamiliar territory. We want to see:
            </p>
            <ul className="mt-2 space-y-1 text-[15px] text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 shrink-0">&bull;</span>
                How you break down a complex problem
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 shrink-0">&bull;</span>
                How effectively you leverage AI and other resources
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 shrink-0">&bull;</span>
                How you persist through challenges
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 shrink-0">&bull;</span>
                Your problem-solving approach
              </li>
            </ul>
          </div>
          <p className="text-[15px] text-blue-900 leading-relaxed mb-4">
            <strong>
              Making good progress on this assignment often means we instantly
              hire you.
            </strong>{" "}
            This is not an exaggeration &mdash; candidates who demonstrate
            strong problem-solving with unfamiliar technologies stand out
            significantly.
          </p>
          <p className="text-[15px] text-blue-900 font-semibold leading-relaxed">
            All we need from you: Don&apos;t give up. Try your best.
          </p>
        </div>

        {/* Overview */}
        <Section number={1} title="Overview">
          <p>
            Your goal is to create a{" "}
            <strong>Substreams SPKG file</strong> that extracts transfer actions
            from the Solana blockchain.
          </p>
          <p>
            You must extract transfers for{" "}
            <strong>Solana blocks 385870151 to 385870156</strong>.
          </p>
        </Section>

        {/* Required Output Format */}
        <Section number={2} title="Required Output Format">
          <p>
            Each transfer message must be in this exact JSON format:
          </p>
          <CodeBlock>
            {`{"from": "Eq1c3uNugn3FRpJ99K2q1ZyQrora3jntUqvkMnGroKkB", "to": "4XpSNfoNfireSgdg8hY6Ng3dWrHjewZhmCancypjbcCN", "amount": 325253}`}
          </CodeBlock>
          <p>Where:</p>
          <ul>
            <li>
              <code>from</code> &mdash; The sender&apos;s Solana wallet address
              (base58 encoded)
            </li>
            <li>
              <code>to</code> &mdash; The recipient&apos;s Solana wallet address
              (base58 encoded)
            </li>
            <li>
              <code>amount</code> &mdash; The transfer amount (as an integer)
            </li>
          </ul>
          <Callout>
            A single block can contain <strong>multiple transfers</strong>. Your
            output should include one JSON object per transfer found in each
            block. For example, if block 385870151 has 5 transfers, you should
            output 5 separate JSON messages for that block.
          </Callout>
        </Section>

        {/* What You Need To Do */}
        <Section number={3} title="What You Need To Do">
          <Step step={1} title="Install Rust">
            <p>
              You must use <strong>Rust</strong> to build the Substreams SPKG
              package &mdash; this is mandatory.
            </p>
            <p>
              We understand you may have never heard of Rust before. That&apos;s
              exactly the point. We want to see how you thrive in an unknown
              language using AI tools. Many successful candidates have completed
              this assignment without any prior Rust experience.
            </p>
            <p>Figure out how to install Rust on your system.</p>
          </Step>

          <Step step={2} title="Install the Substreams CLI">
            <p>
              Go to the Substreams documentation and figure out how to install
              the CLI.
            </p>
            <p className="text-gray-500 italic">
              We evaluate whether you can navigate documentation and figure out
              installation on your own.
            </p>
          </Step>

          <Step step={3} title="Get a Free API Key">
            <p>
              You need an API key to stream data from a Substreams provider.
              Figure out how to obtain one.
            </p>
          </Step>

          <Step step={4} title="Develop Your Substreams Module">
            <p>
              You need to create a Rust-based Substreams module that:
            </p>
            <ol>
              <li>Processes Solana blocks</li>
              <li>Extracts transfer instructions</li>
              <li>Outputs each transfer in the required format</li>
            </ol>
            <p>This will involve:</p>
            <ul>
              <li>Setting up a Rust project</li>
              <li>
                Creating a <code>substreams.yaml</code> manifest
              </li>
              <li>Writing protobuf definitions</li>
              <li>Implementing your map module in Rust</li>
            </ul>
          </Step>

          <Step step={5} title="Build the SPKG File">
            <p>Package your module into an SPKG file.</p>
          </Step>

          <Step step={6} title="Run and Verify">
            <p>
              Run your Substreams against blocks{" "}
              <strong>385870151 to 385870156</strong> and verify the output
              matches the required format.
            </p>
          </Step>
        </Section>

        {/* Success Criteria */}
        <Section number={4} title="Success Criteria">
          <p>To successfully complete this assignment, you must:</p>
          <ol>
            <li>
              <strong>Build a valid SPKG file</strong> &mdash; The package must
              compile without errors
            </li>
            <li>
              <strong>Run the Substreams</strong> &mdash; Successfully execute
              against blocks 385870151&ndash;385870156
            </li>
            <li>
              <strong>Output correct format</strong> &mdash; Each transfer must
              be formatted as:
            </li>
          </ol>
          <CodeBlock>
            {`{"from": "...", "to": "...", "amount": 123456}`}
          </CodeBlock>
        </Section>

        {/* Tips */}
        <Section number={5} title="Tips for Success">
          <ol>
            <li>
              <strong>Start with understanding</strong> &mdash; Spend time
              reading documentation before coding
            </li>
            <li>
              <strong>Use AI effectively</strong> &mdash; Ask AI tools to
              explain concepts, debug errors, and suggest code
            </li>
            <li>
              <strong>Work incrementally</strong> &mdash; Get a basic version
              working first, then refine
            </li>
            <li>
              <strong>Read error messages</strong> &mdash; They often tell you
              exactly what&apos;s wrong
            </li>
          </ol>
        </Section>

        {/* Final Note */}
        <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
          <p className="text-[15px] text-gray-700 leading-relaxed mb-2">
            We&apos;re not expecting perfection. We want to see your
            problem-solving process, how you handle ambiguity, and how
            effectively you use available tools and resources.
          </p>
          <p className="text-lg font-bold text-gray-900">
            Don&apos;t give up. Try your best. Good luck!
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2025 CLR3 Ventures &middot; This assignment is confidential
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Helper Components ── */

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 [&_p]:text-[15px] [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_ul]:space-y-1.5 [&_li]:text-[15px] [&_li]:text-gray-700 [&_li]:leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-3 [&_ol]:space-y-1.5 [&_code]:text-[13px] [&_code]:bg-gray-100 [&_code]:border [&_code]:border-gray-200 [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-gray-800">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold shrink-0">
          {number}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Step({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 pl-4 border-l-2 border-gray-200">
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        Step {step}: {title}
      </h3>
      {children}
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mb-4 rounded-lg bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm font-mono leading-relaxed">
      <code>{children}</code>
    </pre>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 p-4 text-[15px] text-amber-800 leading-relaxed">
      {children}
    </div>
  );
}
