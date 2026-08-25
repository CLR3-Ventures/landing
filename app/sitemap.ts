import type { MetadataRoute } from "next";
import { jobs, products, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/products`, priority: 0.9 },
    ...products.map((p) => ({ url: `${site.url}/products/${p.slug}`, priority: 0.8 })),
    { url: `${site.url}/careers`, priority: 0.6 },
    ...jobs.map((j) => ({ url: `${site.url}/careers/${j.slug}`, priority: 0.5 })),
  ];
}
