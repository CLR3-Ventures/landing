import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PortfolioCube } from "@/components/portfolio-cube";
import { ConstellationBackground } from "@/components/constellation-background";

export default function Home() {
  // Portfolio companies - easily extensible
  const portfolioCompanies = [
    {
      name: "Nolimitnodes",
      description: "Ultra-fast Solana RPC infrastructure provider offering unlimited requests, sub-50ms latency, and real-time WebSocket support for DeFi, NFT, and trading applications",
      url: "https://nolimitnodes.com"
    },
    {
      name: "Cloak Labs AI",
      description: "Predictive microstructure modeling for low-cap DEX assets, built from the behavioral profiles of known on-chain participants.",
      url: "https://nolimitnodes.com"
    },
    {
      name: "Intelligence Labs AI",
      description: "A cross-chain intelligence engine that tracks every wallet, contract, and program to model insider-grade behavior for trading alpha.",
      url: "https://nolimitnodes.com"
    }
    // Add more companies here
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-x-hidden">
      {/* Constellation background */}
      <ConstellationBackground />

      <div className="w-full max-w-6xl relative z-10 py-8 md:py-0">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">CLR3 Ventures</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3 leading-tight">
            Building the future
            <br />
            of technology
          </h1>
          <p className="text-xs text-zinc-500 max-w-lg mx-auto leading-relaxed">
            Technology holding company focused on strategic consulting and venture building.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 max-w-5xl mx-auto auto-rows-fr">
          {/* Consulting Card */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all group relative overflow-hidden h-full flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">Services</div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Consulting</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                Strategic advisory and technical execution
              </p>
              <div className="space-y-1.5 border-t border-white/[0.05] pt-3 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  <div className="text-[11px] text-zinc-500">Strategic Advisory</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  <div className="text-[11px] text-zinc-500">Technical Leadership</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  <div className="text-[11px] text-zinc-500">Growth Strategy</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Portfolio Companies - Rotating Cube */}
          <div className="relative h-full">
            <PortfolioCube companies={portfolioCompanies} />
          </div>

          {/* Contact Card */}
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all group relative overflow-hidden h-full flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">Get in Touch</div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Contact</h3>
              <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                Interested in working together?
              </p>
              <a
                href="mailto:hello@clr3.org"
                className="block text-[11px] text-zinc-300 hover:text-white transition-colors mb-3 font-mono"
              >
                hello@clr3.org
              </a>
              <Button
                id="open-popup-button"
                className="w-full bg-white text-black hover:bg-zinc-200 h-8 text-[11px] font-semibold tracking-wide mt-auto"
              >
                Send Message
              </Button>
            </div>
          </Card>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-6">
          <p className="text-[10px] text-zinc-700 tracking-wider">© 2025 CLR3 Ventures</p>
        </div>
      </div>
    </div>
  );
}
