import Link from "next/link";
import { getAllArticles, getArticle } from "../../../lib/articles";

// Lesson: generateStaticParams tells Next.js to build one static
// HTML page per article at build time. That is fast and SEO-friendly.
export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

// Lesson: generateMetadata sets the <title> and <meta description>
// for each article from its Markdown frontmatter.
export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  return { title: article.title, description: article.description };
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);
  return (
    <div className="article-wrap">
      <Link className="back-link" href="/">
        &larr; All guides
      </Link>
      <article>
        <h1>{article.title}</h1>
        <p className="meta">{article.date}</p>
        <p className="disclaimer">
          Based on published information, not a hands-on review. We have
          not tested these products ourselves.
        </p>
        <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </article>
    </div>
  );
}
