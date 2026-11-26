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

export function getAllArticles() {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data } = matter(raw);
    return { slug, ...data };
  });
}

export async function getArticle(slug) {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkGfm).use(html).process(content);
  return { slug, ...data, contentHtml: processed.toString() };
}
