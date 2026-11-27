import Link from "next/link";
import { getAllArticles } from "../lib/articles";

// Lesson: this is a Server Component. It reads the Markdown files
// on the server and renders HTML. No client JavaScript is needed
// for the list, which keeps the page fast for Google.
export default function Home() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;
  return (
    <>
      <section className="hero">
        <span className="badge">Cybersecurity for remote workers</span>
        <h1>Cybersecurity for remote workers, made simple.</h1>
        <p>
          Practical guides on VPNs, password managers and public Wi-Fi
          safety — written for remote workers and freelancers in the UK
          and US.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <b>{articles.length} guides</b>
            <span>Research-based, no hype</span>
          </div>
          <div className="hero-stat">
            <b>VPNs &amp; passwords</b>
            <span>Compared side by side</span>
          </div>
          <div className="hero-stat">
            <b>Free to read</b>
            <span>No sign-up needed</span>
          </div>
        </div>
      </section>

      <div className="chips">
        <span className="chip">VPNs</span>
        <span className="chip">Password managers</span>
        <span className="chip">Public Wi-Fi</span>
        <span className="chip">Home office</span>
      </div>

      <h2 className="section-title">Start here</h2>
      <p className="section-sub">Our most useful guide first.</p>
      {featured && (
        <article className="featured">
          <p className="meta">Featured guide &middot; {featured.date}</p>
          <h2>
            <Link href={`/articles/${featured.slug}`}>{featured.title}</Link>
          </h2>
          <p>{featured.description}</p>
          <Link className="read-more" href={`/articles/${featured.slug}`}>
            Read the guide &rarr;
          </Link>
        </article>
      )}

      <h2 className="section-title">All guides</h2>
      <p className="section-sub">
        Every guide is research-based and clearly labelled as such.
      </p>
      <div className="grid">
        {rest.map((a) => (
          <article className="card" key={a.slug}>
            <p className="meta">Guide &middot; {a.date}</p>
            <h2>
              <Link href={`/articles/${a.slug}`}>{a.title}</Link>
            </h2>
            <p>{a.description}</p>
            <Link className="read-more" href={`/articles/${a.slug}`}>
              Read the guide &rarr;
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
