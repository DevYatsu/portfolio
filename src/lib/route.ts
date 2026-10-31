// `build.format: "file"` puts .html in Astro.url during the build; served URLs have none.
export const routePath = (pathname: string) =>
	pathname.replace(/(\/index)?\.html$/, "").replace(/\/$/, "") || "/";
