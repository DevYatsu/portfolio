import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://yanis.adysen.fr",
	output: "static",
	compressHTML: true,
	integrations: [
		sitemap({
			filter: (page) => {
				const url = new URL(page);
				// Only include pages intended for search indexing
				return url.pathname === "/" || url.pathname.startsWith("/projects");
			},
		}),
	],
});
