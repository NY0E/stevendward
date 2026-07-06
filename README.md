# stevendward.com

Personal portfolio site. Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Deploy (the usual stack)

1. Push this repo to GitHub (suggested: a new private or public repo, e.g. `NY0E/stevendward`)
2. Import the repo in Vercel; framework preset auto-detects Next.js, no config needed
3. In Vercel project Settings → Domains, add `stevendward.com` and `www.stevendward.com`
4. On Namecheap DNS for stevendward.com:
   - A Record, host `@`, value `76.76.21.21`, TTL 30 min
   - CNAME Record, host `www`, value `cname.vercel-dns.com`, TTL 30 min

## Where things live

- `lib/projects.ts` — the catalog data. Add or edit projects here; rows and case study stubs update everywhere automatically.
- `app/work/[slug]/page.tsx` — case study template. Currently renders a stub; full case studies get written here (or refactor to MDX later if preferred).
- `app/globals.css` — design tokens in `tailwind.config.ts`, the highlighter mark (`.mark-hilite`), eyebrow, and link styles.

## Design tokens

- Paper `#FAF9F6`, Ink `#16202B`, Graphite `#55606C`, Ballpoint `#1F4FA3`, Highlighter `#F7E8B0`, Rule `#E4E1D8`
- Display: Bitter · Body: Public Sans · Mono: Red Hat Mono (all via next/font, self-hosted at build)

## Still to do (chunks 2–4 of the site plan)

- Write the four full case studies (template sections: problem, learners, design decisions, build, what happened)
- Add one hero screenshot per case study
- OG images per page
- sitemap.xml + robots.txt
