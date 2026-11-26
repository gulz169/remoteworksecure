import Link from "next/link";
import { getAllArticles } from "../lib/articles";

// Lesson: this is a Server Component. It reads the Markdown files
// on the server and renders HTML. No client JavaScript is needed
// for the list, which keeps the page fast for Google.
export default function Home() {
  const articles = getAllArticles();
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
      </section>

      <h2 className="section-title">Latest guides</h2>
      {articles.map((a) => (
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
    </>
  );
}
