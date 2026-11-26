import { getAllArticles } from "../lib/articles";

export default function sitemap() {
  const base = "https://remoteworksecure.vercel.app";
  const articles = getAllArticles().map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: a.date,
  }));
  return [{ url: base, lastModified: new Date() }, ...articles];
}
