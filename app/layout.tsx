import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}

        {/* NeetoForm contact popup */}
        <Script id="neetoform-init" strategy="afterInteractive">
          {`window.neetoForm = window.neetoForm || { embed: function(){(neetoForm.q=neetoForm.q||[]).push(arguments)} };`}
        </Script>
        <Script
          src="https://hello.clr3.org/javascript/embed.js"
          strategy="afterInteractive"
        />
        <Script id="neetoform-embed" strategy="afterInteractive">
          {`
            neetoForm.embed({
              type: "elementClick",
              id: "efc306cf-8ea3-469e-b8a2-7c7ee2043fe0",
              organization: "clr3",
              elementSelector: "#open-popup-button",
            });
          `}
        </Script>
      </body>
    </html>
  );
}
