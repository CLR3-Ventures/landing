import { approach, careersEmail, jobs, principles, products, services, site } from "@/lib/site";

const bullets = (items: string[]) => items.map((i) => `- ${i}`).join("\n");

/** Short index file, per the llms.txt convention: a summary plus links. */
export function llmsIndex(): string {
  return `# ${site.legalName}

> ${site.description}

${site.name} (${site.url}) is based in Toronto, Canada. Contact: ${site.email}. Careers: ${careersEmail}.

## Services

${services.map((s) => `- ${s.title}: ${s.lead}`).join("\n")}

## Products

Products designed, built and operated by ${site.name}:

${products
  .map(
    (p) =>
      `- [${p.name}](${site.url}/products/${p.slug}): ${p.summary} ${p.detail} Live at ${p.url}.`
  )
  .join("\n")}

## Careers

${jobs.map((j) => `- [${j.title}, ${j.location}](${site.url}/careers/${j.slug}): ${j.summary}`).join("\n")}

## Pages

- [Home](${site.url}): overview of services, products and how an engagement runs
- [Products](${site.url}/products): index of all products
- [Careers](${site.url}/careers): open roles
- [Full content](${site.url}/llms-full.txt): every page in one file
- [Sitemap](${site.url}/sitemap.xml)
`;
}

/** Full-content file: everything on the site in plain markdown. */
export function llmsFull(): string {
  const out: string[] = [];

  out.push(`# ${site.legalName}\n\n> ${site.description}\n`);
  out.push(`Website: ${site.url}\nContact: ${site.email}\nCareers: ${careersEmail}\nLocation: Toronto, Canada\n`);

  out.push(`## Services\n`);
  for (const s of services) {
    out.push(`### ${s.title}\n\n${s.lead}\n\n${s.body}\n\nEngagements:\n${bullets(s.engagements)}\n`);
  }

  out.push(`## How an engagement runs\n`);
  approach.forEach((a, i) => {
    out.push(`${i + 1}. ${a.step}: ${a.title}. ${a.body}`);
  });
  out.push("");

  out.push(`## What you can expect\n`);
  for (const p of principles) out.push(`- ${p.title}: ${p.body}`);
  out.push("");

  out.push(`## Products\n\nAll products below are designed, built and operated by ${site.name}. Figures and claims are from each product's own published material.\n`);
  for (const p of products) {
    out.push(`### ${p.name} (${p.domain})\n`);
    out.push(`URL: ${p.url}${p.docsUrl ? `\nDocs: ${p.docsUrl}` : ""}\nCLR3 page: ${site.url}/products/${p.slug}\nCategory: ${p.category}\nTags: ${p.tags.join(", ")}\n`);
    out.push(`${p.headline}\n\n${p.intro.join("\n\n")}\n`);
    out.push(`Key numbers:\n${bullets(p.stats.map((s) => `${s.value}: ${s.label}`))}\n`);
    out.push(`At a glance:\n${bullets(p.facts.map((f) => `${f.label}: ${f.value}`))}\n`);
    out.push(`What it does:\n${bullets(p.features.map((f) => `${f.title}: ${f.body}`))}\n`);
    out.push(`Who it is for:\n${bullets(p.audience)}\n`);
    out.push(`${p.included.title}:\n${p.included.items.map((it, i) => `${i + 1}. ${it}`).join("\n")}\n`);
    if (p.note) out.push(`Note: ${p.note}\n`);
  }

  out.push(`## Careers\n\nApply by email to ${careersEmail}.\n`);
  for (const j of jobs) {
    out.push(`### ${j.title}\n`);
    out.push(`Location: ${j.location}\nType: ${j.type}\nTeam: ${j.team}\nPage: ${site.url}/careers/${j.slug}\n`);
    out.push(`${j.summary}\n\n${j.about.join("\n\n")}\n`);
    out.push(`What you will do:\n${bullets(j.responsibilities)}\n`);
    out.push(`What we are looking for:\n${bullets(j.required)}\n`);
    out.push(`Nice to have:\n${bullets(j.preferred)}\n`);
    out.push(`Who you are:\n${bullets(j.whoYouAre)}\n`);
    out.push(`How we hire:\n${j.process.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n`);
  }

  return out.join("\n");
}
