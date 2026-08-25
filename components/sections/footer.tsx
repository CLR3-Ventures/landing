import Link from "next/link";
import { Logo } from "@/components/logo";
import { products, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-12">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.tagline}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3" aria-label="Footer">
            <div>
              <h3 className="text-sm font-semibold text-ink">Company</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li><Link href="/#services" className="transition-colors hover:text-ink">Services</Link></li>
                <li><Link href="/#approach" className="transition-colors hover:text-ink">Approach</Link></li>
                <li><Link href="/careers" className="transition-colors hover:text-ink">Careers</Link></li>
                <li><Link href="/#contact" className="transition-colors hover:text-ink">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">Products</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                {products.map((p) => (
                  <li key={p.domain}>
                    <Link href={`/products/${p.slug}`} className="transition-colors hover:text-ink">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">Reach us</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li>
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>{site.url.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
