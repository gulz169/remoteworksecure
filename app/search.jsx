"use client";

import { useState } from "react";
import Link from "next/link";

const VISUALS = [
  "linear-gradient(135deg,#0f172a,#0f766e)",
  "linear-gradient(135deg,#7f1d1d,#dc2626)",
  "linear-gradient(135deg,#1e3a8a,#3b82f6)",
  "linear-gradient(135deg,#134e4a,#14b8a6)",
  "linear-gradient(135deg,#581c87,#a855f7)",
  "linear-gradient(135deg,#78350f,#f59e0b)",
];

export default function Search({ articles }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      )
    : articles;
  return (
    <>
      <input
        className="search-box"
        type="search"
        placeholder="Search guides — try “VPN” or “password”..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search guides"
      />
      {q && filtered.length === 0 && (
        <p style={{ color: "#6b7280" }}>
          No guides match “{query}”. Try “VPN”, “Wi-Fi” or “router”.
        </p>
      )}
      <div className="grid">
        {filtered.map((a, i) => (
          <article className="card" key={a.slug}>
            <div
              className="card-visual"
              style={{ background: VISUALS[i % VISUALS.length] }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <span className="card-num">
              {String(i + 1).padStart(2, "0")} &middot; Guide
            </span>
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
          </article>
        ))}
      </div>
    </>
  );
}
