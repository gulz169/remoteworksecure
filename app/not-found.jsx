import Link from "next/link";

export default function NotFound() {
  return (
    <div className="article-wrap" style={{ textAlign: "center", padding: "64px 0" }}>
      <p className="kicker">404 — Page not found</p>
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.4rem" }}>
        This page does not exist.
      </h1>
      <p style={{ color: "#6b7280" }}>
        The link may be old, or the guide may have moved. Start again from
        the homepage.
      </p>
      <Link className="read-more" href="/">
        &larr; Back to all guides
      </Link>
    </div>
  );
}
