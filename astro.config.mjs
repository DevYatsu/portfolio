import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://yanis-amani.netlify.app",
	output: "static",
	compressHTML: true,
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssCodeSplit: false,
			minify: "terser",
			terserOptions: {
				compress: {
					drop_console: true,
					drop_debugger: true,
				},
			},
		},
	},
	integrations: [sitemap()],
});
