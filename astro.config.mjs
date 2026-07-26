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
			filter: (page) => {
				const url = new URL(page);
				const path = url.pathname.replace(/\/$/, "") || "/";
				// Only include pages intended for search indexing (EN + FR trees)
				return (
					path === "/" ||
					path === "/fr" ||
					path.startsWith("/projects") ||
					path.startsWith("/fr/projects")
				);
			},
		}),
	],
});
