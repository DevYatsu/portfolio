import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://yanis.adysen.fr",
	output: "static",
	compressHTML: true,
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
					fr: "fr",
				},
			},
		}),
	],
});
