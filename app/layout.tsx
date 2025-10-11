import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "CLR3 Ventures - Technology Holding & Consulting",
  description: "Building Tomorrow's Technology Giants. Strategic consulting and technology holdings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        {children}

        {/* NeetoForm Scripts */}
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
