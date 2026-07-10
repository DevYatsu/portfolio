# Portfolio — Yanis Amani

Personal portfolio at [yanis.adysen.fr](https://yanis.adysen.fr).

## Stack

- **Astro 7** — static site generation
- **Vanilla CSS** — no frameworks, self-hosted Inter font
- **Infomaniak** — Node.js hosting via `server.js`

## Features

- Light/dark/system theme toggle with `localStorage` persistence
- English / French i18n with auto-detect on first visit
- SEO: canonical URLs, hreflang, JSON-LD (Person + WebSite), sitemap, OG image, robots.txt
- Project detail pages with architecture breakdowns
- Interactive skill filter
- No JavaScript runtime — fully static

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deploy

The `server.js` file serves `./dist/` statically. Push to main to deploy.
