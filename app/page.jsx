import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "../lib/articles";
import Search from "./search";

// Lesson: this is a Server Component. It reads the Markdown files
// on the server and renders HTML. No client JavaScript is needed
// for the list, which keeps the page fast for Google.
export default function Home() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;
  return (
    <>
      <section className="cover">
        <span className="kicker">The Remote Work Security Magazine</span>
        <h1>Cybersecurity for remote workers, made simple.</h1>
        <p>
          Practical guides on VPNs, password managers and public Wi-Fi
          safety — written for remote workers and freelancers in the UK
          and US.
        </p>
        <p className="cover-meta">
          {articles.length} guides &middot; Research-based &middot; Free to
          read
        </p>
      </section>

      {featured && (
        <article className="featured">
          <div className="featured-visual">
            {featured.image && (
              <Image
                src={featured.image}
                alt={featured.title}
                width={1200}
                height={800}
                priority
                sizes="(max-width: 800px) 100vw, 55vw"
                className="featured-img"
              />
            )}
          </div>
          <div className="featured-body">
            <p className="meta">
              Cover story &middot; {featured.date} &middot;{" "}
              {featured.readingTime} min read
            </p>
            <h2>
              <Link href={`/articles/${featured.slug}`}>
                {featured.title}
              </Link>
            </h2>
            <p>{featured.description}</p>
            <Link className="read-more" href={`/articles/${featured.slug}`}>
              Read the cover story &rarr;
            </Link>
          </div>
        </article>
      )}

      <h2 className="section-title">Latest stories</h2>
      <hr className="section-rule" />
      <Search articles={rest} />
    </>
  );
}
