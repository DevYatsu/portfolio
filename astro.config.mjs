import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://yanis-amani.ch",
	output: "static",
	// Canonicals use no trailing slash; the sitemap must emit the same URLs.
	trailingSlash: "never",
	// Cloudflare Pages redirects /fr to /fr/ for fr/index.html, but serves fr.html at /fr.
	build: {
		format: "file",
	},
	compressHTML: true,
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			// Emits the en/fr hreflang pairs next to each sitemap entry.
			i18n: {
				defaultLocale: "en",
				locales: { en: "en", fr: "fr" },
			},
			// Only the two homepages are meant to rank: / (EN) and /fr (FR).
			// Project case studies and utility pages stay crawlable but unlisted,
			// and they carry `noindex` in Layout.astro.
			filter: (page) => {
				const url = new URL(page);
				const path = url.pathname.replace(/\/$/, "") || "/";
				return path === "/" || path === "/fr";
			},
		}),
	],
});
