# CLR3 Ventures Landing Page

> Official landing page for CLR3 — software consulting, advisory and product development

[![Deploy to GitHub Pages](https://github.com/CLR3-Ventures/landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/CLR3-Ventures/landing/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

## 🌐 Live Site

**[https://clr3.org](https://clr3.org)**

## 🚀 About

CLR3 is a software consulting, advisory and product development company. This landing page presents our services, the products we build and operate (eeze.xyz, nolimitnodes.com, datastore.sh, hyperliquidrpc.com, openinfra.sh), how an engagement runs, and a contact point.

## ✨ Features

- **Modern Design** - Enterprise dark theme with a typographic hero and structured sections
- **Responsive** - Optimized for all screen sizes
- **Dark Theme** - Sophisticated dark mode interface
- **Contact Integration** - NeetoForm popup for inquiries
- **Products** - Ledger-style list of products CLR3 builds and operates
- **Performance** - Static site generation for optimal speed

## 🛠️ Tech Stack

- **Framework** - [Next.js 15.5.4](https://nextjs.org/)
- **Language** - [TypeScript](https://www.typescriptlang.org/)
- **Styling** - [Tailwind CSS](https://tailwindcss.com/)
- **UI Components** - [shadcn/ui](https://ui.shadcn.com/)
- **Deployment** - GitHub Pages
- **Form** - NeetoForm

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/CLR3-Ventures/landing.git

# Navigate to project directory
cd landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## 🏗️ Build

```bash
# Create production build
npm run build

# The static site will be generated in the 'out' directory
```

## 🌍 Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

The workflow:
1. Builds the Next.js static export
2. Uploads the build artifacts
3. Deploys to GitHub Pages

## 📁 Project Structure

```
landing/
├── app/
│   ├── icon.tsx          # Custom CLR3 favicon
│   ├── layout.tsx        # Root layout, metadata, NeetoForm scripts
│   ├── page.tsx          # Landing page composition
│   ├── globals.css       # Design tokens and global styles
│   └── careers/          # Job postings
├── components/
│   ├── sections/         # Hero, Services, Products, Approach, Contact, Footer
│   ├── site-nav.tsx      # Sticky navigation with mobile menu
│   ├── product-mark.tsx  # Drawn glyphs for each product
│   ├── logo.tsx          # CLR3 wordmark
│   └── ui/               # shadcn/ui components
├── lib/
│   ├── site.ts           # All site copy: products, services, approach
│   └── utils.ts          # Utility functions
├── public/               # Static assets, CNAME
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Pages deployment workflow
```

## 🎨 Customization

All copy lives in `lib/site.ts`. To add or edit a product, change the `products` array:

```typescript
export const products: Product[] = [
  {
    name: "Product",
    domain: "product.com",
    url: "https://product.com",
    summary: "One-line positioning.",
    detail: "A short paragraph on what it does and for whom.",
    tags: ["Tag"],
    mark: "eeze", // one of the glyphs in components/product-mark.tsx
  },
];
```

Services, engagement phases and principles are edited in the same file. The contact form configuration is in `app/layout.tsx`.

## 📄 License

Copyright © 2026 CLR3 Ventures. All rights reserved.

## 📧 Contact

For inquiries, reach out at [hello@clr3.org](mailto:hello@clr3.org)

---

**CLR3** — Software consulting, advisory and product development
