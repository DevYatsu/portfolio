import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://yanis.adysen.fr",
	output: "static",
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
