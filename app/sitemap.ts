import type { MetadataRoute } from "next";
import { jobs, products, site } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/products`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...products.map((p) => ({
      url: `${site.url}/products/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/careers`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...jobs.map((j) => ({
      url: `${site.url}/careers/${j.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
