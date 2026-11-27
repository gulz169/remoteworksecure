import { getAllArticles } from "../lib/articles";

export default function sitemap() {
  const base = "https://remoteworksecure.vercel.app";
  const pages = ["", "/about", "/contact", "/privacy", "/disclosure"].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1 : 0.7,
    })
  );
  const articles = getAllArticles().map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...pages, ...articles];
}
