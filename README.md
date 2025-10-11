# CLR3 Ventures Landing Page

> Official landing page for CLR3 Ventures - Technology Holding & Consulting

[![Deploy to GitHub Pages](https://github.com/CLR3-Ventures/landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/CLR3-Ventures/landing/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

## 🌐 Live Site

**[https://clr3.org](https://clr3.org)**

## 🚀 About

CLR3 Ventures is a technology holding company focused on strategic consulting and venture building. This landing page showcases our services, portfolio companies, and provides a contact point for potential collaborations.

## ✨ Features

- **Modern Design** - Clean, professional bento grid layout
- **Responsive** - Optimized for all screen sizes
- **Dark Theme** - Sophisticated dark mode interface
- **Contact Integration** - NeetoForm popup for inquiries
- **Portfolio Showcase** - Extensible company portfolio section
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
│   ├── layout.tsx        # Root layout with NeetoForm scripts
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # shadcn/ui components
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Pages deployment workflow
```

## 🎨 Customization

### Adding Portfolio Companies

Edit the `portfolioCompanies` array in `app/page.tsx`:

```typescript
const portfolioCompanies = [
  {
    name: "Company Name",
    description: "Company Description",
    url: "https://company.com"
  },
  // Add more companies here
];
```

### Updating Contact Information

The contact email and form configuration can be updated in:
- Email link: `app/page.tsx`
- NeetoForm config: `app/layout.tsx`

## 📄 License

Copyright © 2025 CLR3 Ventures. All rights reserved.

## 📧 Contact

For inquiries, reach out at [hello@clr3.org](mailto:hello@clr3.org)

---

**CLR3 Ventures** - Building the future of technology
