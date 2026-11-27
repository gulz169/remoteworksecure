import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

// Lesson: remark-html alone does NOT render Markdown tables.
// remark-gfm adds GitHub-Flavoured Markdown support (tables, etc.).
// Without it, a table shows as raw text with | characters.

// Lesson: articles live as Markdown files in /content.
// Adding a new article = adding one new .md file. No database needed.
const contentDir = path.join(process.cwd(), "content");

// Featured article first, then the rest in a stable order.
const FEATURED_FIRST = "best-vpn-for-remote-workers";

export function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllArticles() {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const articles = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data, content } = matter(raw);
    return { slug, ...data, readingTime: readingTime(content) };
  });
  articles.sort((a, b) => {
    if (a.slug === FEATURED_FIRST) return -1;
    if (b.slug === FEATURED_FIRST) return 1;
    return a.title.localeCompare(b.title);
  });
  return articles;
}

export async function getArticle(slug) {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkGfm).use(html).process(content);
  const related = getAllArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 3);
  return {
    slug,
    ...data,
    contentHtml: processed.toString(),
    readingTime: readingTime(content),
    related,
  };
}
