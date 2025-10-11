"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface PortfolioCompany {
  name: string;
  description: string;
  url: string;
}

interface PortfolioCubeProps {
  companies: PortfolioCompany[];
}

export function PortfolioCube({ companies }: PortfolioCubeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [companies.length]);

  const direction = 1; // 1 for forward, -1 for backward

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
    }),
  };

  const company = companies[currentIndex];

  return (
    <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            rotateY: { type: "spring", stiffness: 100, damping: 20 },
            opacity: { duration: 0.3 },
          }}
          style={{
            position: "absolute",
            width: "100%",
            transformStyle: "preserve-3d",
          }}
        >
          <Card className="border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
                  Portfolio
                </div>
                <div className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {company.name}
              </h3>
              <p className="text-xs text-zinc-400 mb-4 min-h-[60px]">
                {company.description}
              </p>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-white/80 hover:text-white transition-colors border border-white/[0.08] hover:border-white/[0.15] px-3 py-1.5 rounded-md"
              >
                Visit
                <svg
                  className="w-2.5 h-2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Indicator Dots */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5">
        {companies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-4"
                : "bg-zinc-700 hover:bg-zinc-600"
            }`}
            aria-label={`Go to ${companies[index].name}`}
          />
        ))}
      </div>
    </div>
  );
}
