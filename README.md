# Portfolio // Yanis Amani

Personal portfolio at [yanis-amani.ch](https://yanis-amani.ch).

## Stack

- **Astro 7**: static site generation
- **Vanilla CSS**: no frameworks, system font stack (JetBrains Mono self-hosted for code)
- **Cloudflare Pages**: static hosting of `./dist/`, configured in `wrangler.jsonc`

## Features

- Light/dark/system theme toggle with `localStorage` persistence
- English / French i18n with auto-detect on first visit
- SEO: canonical URLs, hreflang, JSON-LD (Person + WebSite), sitemap, OG image, robots.txt
- Project detail pages with architecture breakdowns
- Interactive skill filter
- No JavaScript runtime: fully static

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deploy

Cloudflare Pages builds from the Git repository on every push to `main`: build command `npm run build`, output directory `dist`.

`npm run deploy` publishes from a local machine instead, after `npx wrangler login`.

`build.format: "file"` in `astro.config.mjs` is required: it makes Pages serve `/fr` rather than redirect to `/fr/`, which keeps URLs equal to the canonicals.

`server.js` only applies to the previous Infomaniak Node.js deployment and does not run on Cloudflare Pages.
