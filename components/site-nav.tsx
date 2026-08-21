"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/#approach", label: "Approach" },
  { href: "/careers", label: "Careers" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <Link href="/" aria-label="CLR3 home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <Link
            href="/#contact"
            className="inline-flex h-10 items-center bg-signal px-5 text-sm font-medium text-white transition-colors hover:bg-signal-strong"
          >
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center text-ink md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div id="mobile-menu" className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="container-x flex flex-col border-t border-line py-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 text-base font-medium text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 inline-flex h-12 items-center justify-center bg-signal px-4 text-base font-medium text-white"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </header>
  );
}
