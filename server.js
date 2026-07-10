import { readFileSync, existsSync } from "fs";
import { createServer } from "http";
import { extname, join } from "path";

const PORT = process.env.PORT || 3000;
const DIST = new URL("./dist", import.meta.url).pathname;

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

const server = createServer((req, res) => {
	let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);

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
		res.writeHead(status, { "Content-Type": MIME[ext] || "application/octet-stream" });
		res.end(content);
	} catch {
		res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
		res.end("Not Found");
	}
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
