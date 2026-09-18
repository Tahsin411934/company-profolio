import type { MetadataRoute } from "next";
import { saasProductList } from "../lib/saas-products";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aftsoftandlimited.com";

const productUrls = saasProductList.map((product) => ({
  url: `${siteUrl}/products/${product.slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/career`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...productUrls,
    {
      url: `${siteUrl}/store-register`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
