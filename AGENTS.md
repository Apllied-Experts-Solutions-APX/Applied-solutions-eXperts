<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# APX Website — Project Rules

## Project identity

- Fresh build for **APPLIED SOLUTIONS eXPERTS (APX)**. Do **not** copy, refactor, or import architecture from any old APX website.
- Tagline: "Guiding you through the digital frontier."
- Core idea: "APX helps institutions, businesses and the next generation use technology to learn, build, solve and grow."
- Kenyan technology and innovation company serving schools, TVET / educational institutions, businesses, learners, and young people.
- Three divisions are **one ecosystem** (never present them as separate companies):
  - **APX Labs** — STEM • Robotics • Innovation
  - **APX Digital** — Digital Skills • Mentorship • Learning
  - **APX Solutions** — Technology • Software • Infrastructure
- Do **not** invent company claims, statistics, certifications, awards, clients, locations, products, capabilities, social URLs, addresses, or registration numbers.

## Tech stack (locked)

- Next.js App Router, React, TypeScript, ESLint
- CSS / CSS Modules only — **no Tailwind**
- No unnecessary UI libraries, animation libraries, analytics, CMS, database, or auth
- Do not install packages without a clear requirement
- Keep the marketing site lightweight and fast; architecture may later support CMS, programs, courses, auth, payments, portals — **do not build those systems now**

## Brand

- Official colours only: `--color-navy: #081F4F`, `--color-blue: #1565C0`, `--color-gold: #D89B15`
- Do not modify brand colours; use neutrals for supporting surfaces/text without inventing extra brand colours
- Centralize brand tokens in `src/styles/variables.css`
- Light/dark systems must be able to use supplied light and dark APX logos (when assets arrive)
- Professional modern sans-serif only — no novelty/flashy fonts
- Official logo assets are supplied separately; do not add stock imagery

## Architecture

- Prefer the `src/` layout: `app/`, `components/{layout,navigation,sections,ui,media}/`, `config/`, `data/`, `lib/`, `styles/`, `types/`, `public/{images,videos,icons,logos}/`
- Reusable components ≠ page-specific components
- Navigation data lives in `src/data/navigation.ts`; division data in `src/data/divisions.ts`
- Site metadata / constants in `src/config/site.ts`
- Semantic HTML, accessible markup, mobile-first responsive layout, reusable page container
- Avoid premature abstraction and unused placeholder files
- Pages may export their own metadata; root layout owns the metadata architecture — do not fabricate SEO claims

## Content & design phase discipline

- Do not invent marketing copy beyond supplied facts
- Do not redesign pages beyond the current phase brief
- Do not add elaborate animations or animation libraries unless explicitly required
- Primary nav destinations: Home, About APX, APX Labs, APX Digital, APX Solutions, Our Work, Insights, Contact; primary CTA: "Let's Talk"
