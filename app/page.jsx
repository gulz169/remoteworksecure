import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "../lib/articles";
import Search from "./search";
import Newsletter from "./newsletter";

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

      <section className="trust">
        <h2 className="section-title">Why readers trust us</h2>
        <hr className="section-rule" />
        <div className="trust-grid">
          <div>
            <h3>Research-based</h3>
            <p>
              Every comparison starts from the provider's own pricing and
              features — not a copy of another blog.
            </p>
          </div>
          <div>
            <h3>Honest about testing</h3>
            <p>
              Where we have not tested a product ourselves, the article
              says so clearly at the top.
            </p>
          </div>
          <div>
            <h3>Free to read</h3>
            <p>
              No paywall, no account, no sign-up. Every guide is free,
              and always will be.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
