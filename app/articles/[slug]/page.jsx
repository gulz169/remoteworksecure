import Image from "next/image";
import Link from "next/link";
import { getAllArticles, getArticle } from "../../../lib/articles";

// Lesson: generateStaticParams tells Next.js to build one static
// HTML page per article at build time. That is fast and SEO-friendly.
export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

// Lesson: generateMetadata sets the <title> and <meta description>
// for each article from its Markdown frontmatter, plus Open Graph
// tags so the link looks right when shared on social media.
export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  const url = `https://remoteworksecure.vercel.app/articles/${article.slug}`;
  return {
    title: `${article.title} — RemoteWorkSecure`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "RemoteWorkSecure",
      type: "article",
      images: article.image
        ? [{ url: `https://remoteworksecure.vercel.app${article.image}` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);
  const base = "https://remoteworksecure.vercel.app";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: "RemoteWorkSecure" },
    publisher: { "@type": "Organization", name: "RemoteWorkSecure" },
    image: article.image ? `${base}${article.image}` : undefined,
    mainEntityOfPage: `${base}/articles/${article.slug}`,
  };
  return (
    <div className="article-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link className="back-link" href="/">
        &larr; All guides
      </Link>
      <article>
        <p className="meta">
          Guide &middot; {article.date} &middot; {article.readingTime} min
          read
        </p>
        <h1>{article.title}</h1>
        {article.image && (
          <figure className="hero-figure">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={800}
              priority
              sizes="(max-width: 800px) 100vw, 760px"
              className="hero-img"
            />
            <figcaption>Photo: illustration for this guide</figcaption>
          </figure>
        )}
        <p className="disclaimer">
          Based on published information, not a hands-on review. We have
          not tested these products ourselves.
        </p>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>

      <div className="author-box">
        <h3>Written by the RemoteWorkSecure team</h3>
        <p>
          We publish research-based cybersecurity guides for remote workers
          and freelancers. Where we have not tested a product ourselves, we
          say so clearly. Read more on our{" "}
          <Link href="/about">About page</Link>.
        </p>
      </div>

      <section className="related">
        <h2 className="section-title">Keep reading</h2>
        <hr className="section-rule" />
        <div className="grid related-grid">
          {article.related.map((a) => (
            <article className="card" key={a.slug}>
              {a.image && (
                <Image
                  src={a.image}
                  alt={a.title}
                  width={400}
                  height={260}
                  sizes="(max-width: 800px) 100vw, 180px"
                  className="card-img"
                />
              )}
              <div>
                <h2>
                  <Link href={`/articles/${a.slug}`}>{a.title}</Link>
                </h2>
                <p>{a.description}</p>
                <p className="meta">
                  {a.date} &middot; {a.readingTime} min read
                </p>
                <Link className="read-more" href={`/articles/${a.slug}`}>
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
