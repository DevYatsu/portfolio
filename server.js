import { readFileSync, existsSync } from "fs";
import { createServer } from "http";
import { extname, join } from "path";

const PORT = process.env.PORT || 3000;
const DIST = new URL("./dist", import.meta.url).pathname;
const CANONICAL_ORIGIN = "https://yanis-amani.ch";
// Hosts that must 301 to the canonical origin to transfer their ranking signals
const LEGACY_HOSTS = new Set(["yanis.adysen.fr", "www.yanis-amani.ch"]);

const MIME = {
	".html": "text/html; charset=utf-8",
	".css": "text/css",
	".js": "application/javascript",
	".json": "application/json",
	".svg": "image/svg+xml",
	".png": "image/png",
	".jpg": "image/jpeg",
	".webp": "image/webp",
	".woff2": "font/woff2",
	".woff": "font/woff",
	".pdf": "application/pdf",
	".xml": "application/xml",
	".txt": "text/plain",
};

function cacheControl(url) {
	// Fingerprinted assets (content hash in filename): cache forever
	if (url.includes("/_astro/")) {
		return "public, max-age=31536000, immutable";
	}
	const ext = extname(url);
	// Fonts: also immutable
	if (ext === ".woff2" || ext === ".woff") {
		return "public, max-age=31536000, immutable";
	}
	// Images: cache for a week
	if ([".png", ".jpg", ".jpeg", ".webp", ".svg", ".ico"].includes(ext)) {
		return "public, max-age=604800";
	}
	// HTML: always revalidate
	if (ext === ".html" || !ext) {
		return "no-cache";
	}
	// Everything else: 1 day
	return "public, max-age=86400";
}

// Renamed-path redirects (preserve old bookmarks / backlinks)
const REDIRECTS = {
	"/impressum": "/legal",
	"/impressum/": "/legal",
	"/mentions-legales": "/legal",
	"/mentions-legales/": "/legal",
	"/merci": "/thanks",
	"/merci/": "/thanks",
};

const server = createServer((req, res) => {
	// A reverse proxy may rewrite Host, so prefer the forwarded value
	const host = (req.headers["x-forwarded-host"] || req.headers.host || "")
		.split(",")[0]
		.trim()
		.split(":")[0]
		.toLowerCase();
	if (LEGACY_HOSTS.has(host)) {
		res.writeHead(301, { Location: CANONICAL_ORIGIN + req.url });
		res.end();
		return;
	}

	// Files resolve from the path alone: tracking params must not cause a 404
	// Concatenating (not a base URL) stops //host parsing as an authority
	let pathname, search;
	try {
		({ pathname, search } = new URL(CANONICAL_ORIGIN + req.url));
	} catch {
		res.writeHead(400);
		res.end();
		return;
	}

	const redirect = REDIRECTS[pathname];
	if (redirect) {
		res.writeHead(301, { Location: redirect });
		res.end();
		return;
	}

	// One URL per page: /fr/ collapses onto the canonical /fr
	if (pathname.length > 1 && pathname.endsWith("/")) {
		// Collapsing leading slashes keeps //host from becoming an off-site redirect
		res.writeHead(301, { Location: "/" + pathname.replace(/^\/+|\/+$/g, "") + search });
		res.end();
		return;
	}

	let filePath = join(DIST, pathname === "/" ? "index.html" : pathname);

	// SPA-style fallback: if no extension, try .html
	if (!extname(filePath)) {
		const htmlPath = join(filePath, "index.html");
		if (existsSync(htmlPath)) {
			filePath = htmlPath;
		} else if (existsSync(filePath + ".html")) {
			filePath = filePath + ".html";
		} else {
			filePath = join(DIST, "404.html");
		}
	}

	try {
		const content = readFileSync(filePath);
		const status = filePath.endsWith("404.html") ? 404 : 200;
		const ext = extname(filePath);
		res.writeHead(status, {
			"Content-Type": MIME[ext] || "application/octet-stream",
			"Cache-Control": cacheControl(pathname),
		});
		res.end(content);
	} catch {
		res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
		res.end("Not Found");
	}
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
