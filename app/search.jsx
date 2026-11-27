"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="chips">
        {["VPN", "Password", "Wi-Fi", "Router", "Free"].map((t) => (
          <button
            key={t}
            type="button"
            className={q === t.toLowerCase() ? "chip active" : "chip"}
            onClick={() => setQuery(q === t.toLowerCase() ? "" : t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid">
        {filtered.map((a) => (
          <article className="card" key={a.slug}>
            {a.image && (
              <Image
                src={a.image}
                alt={a.title}
                width={1200}
                height={800}
                sizes="(max-width: 800px) 100vw, 33vw"
                className="card-img"
              />
            )}
            <span className="card-num">Guide</span>
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
