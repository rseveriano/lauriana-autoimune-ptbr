# AGENTS.md

## Project
Astro 5 static site + Tailwind CSS 3. Target: Cloudflare Pages (`site: https://atypicalbrains.win`).

## Architecture — Two Sites in One Repo
Do not assume a single design system. The repo builds two independent sites with separate layouts, components, and content files:

1. **Main site** (`/`, `/en/`, `/es/`, `/pt/`): Nutritionist portfolio (TEA, TDAH, T21).  
   - Layout: `src/layouts/Layout.astro`  
   - Components: `src/components/*.astro`  
   - Content: `src/i18n/ui.ts` (UI strings) + `src/i18n/content.ts` (recipes, blog posts, testimonials, qualifications)
2. **AI landing** (`/ai`, `/ai/en`, `/ai/es`): Autoimmune treatment marketing page.  
   - Layout: `src/layouts/AILayout.astro`  
   - Components: `src/components/ai/*.astro`  
   - Content: `src/i18n/ai.ts`

No CMS, no database, no API routes. All content is hardcoded in TypeScript objects.

## i18n
Manual file-based routing; no Astro i18n integration.
- `src/i18n/utils.ts` provides `getLangFromUrl`, `useTranslations`, `getRouteFromUrl`.
- Adding content requires updating **all three languages** (pt/en/es) in the relevant content file.
- Blog and recipe detail pages are duplicated per language under `src/pages/{pt,en,es}/`. Each set imports from the same `content` object but uses its language key. There are 6 nearly identical files; layout fixes may need to be applied in all 6.

## Cloudflare Function
`functions/_middleware.ts` is a **Cloudflare Pages Function**, not Astro middleware. It intercepts only `/` and redirects based on `Accept-Language` (en → `/en/`, es → `/es/`, pt stays at `/`).

## Commands
- `npm run dev` — dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — preview production build
- `npm run clean` — remove `dist/` and `.astro/` (uses `node -e` with `require`; works despite `"type": "module"` because `node -e` defaults to CommonJS)

No test suite, linter, or formatter is configured.

## Styling & Assets
- Tailwind custom theme is in `tailwind.config.mjs`: brand palette (`brand.light`, `brand.green`, `brand.accent`, etc.), custom fonts (`font-sans: Inter`, `font-heading: Outfit`, `font-lato: Lato`, `font-playfair: Playfair Display`), `rounded-4xl`, and `fade-in-up` animation.
- **Main site** loads Inter/Outfit via `@fontsource/inter` and `@fontsource/outfit` (npm dependencies).
- **AI landing** loads Lato and Playfair Display via Google Fonts CDN inside `AILayout.astro`.
- Phosphor Icons are loaded from unpkg CDN in both layouts.
- OG image: `/ogimage.png`.

## Entrypoints
- Main home: `src/pages/index.astro` → `LandingPage.astro`
- AI landing: `src/pages/ai/index.astro` (and `en.astro`, `es.astro`)
- Blog detail: `src/pages/{lang}/blog/[slug].astro` (3 files)
- Recipe detail: `src/pages/{lang}/receitas|[recipes|[recetas]/[slug].astro` (3 files)
