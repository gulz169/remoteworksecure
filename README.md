# RemoteWorkSecure — Next.js blog

A fast, SEO-friendly blog for remote workers about cybersecurity.
All content is in English. Articles are Markdown files in `/content`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add a new article

1. Create a new file in `/content`, for example `best-password-manager.md`.
2. Start it with frontmatter:

```markdown
---
title: "Your title here"
description: "One sentence for Google and social sharing."
date: "2026-11-27"
---

Your article in Markdown.
```

3. The homepage list and the article page are created automatically.
No database is needed.

## Deploy free on Vercel

1. Create a free account at github.com and a free account at vercel.com.
2. Upload this folder to a new GitHub repository.
3. In Vercel, click Add New > Project, import that GitHub repository.
4. Leave the build settings as they are. Click Deploy.
5. You will get a free link like `https://remoteworksecure.vercel.app`.

## Connect a custom domain later

1. Buy a domain, for example `remoteworksecure.com`.
2. In Vercel, go to your project > Settings > Domains > Add.
3. Follow the DNS instructions Vercel shows. No rebuild is needed.
4. Update the `metadataBase` URL in `app/layout.jsx` and the
   sitemap URL in `app/sitemap.js` and `app/robots.js` to your new domain.

## Files to learn from

- `app/layout.jsx` — site-wide title, description and header/footer.
- `app/page.jsx` — homepage, lists all articles.
- `app/articles/[slug]/page.jsx` — one page per article, with SEO metadata.
- `lib/articles.js` — reads Markdown files and converts them to HTML.
- `app/sitemap.js` and `app/robots.js` — help Google find your articles.
