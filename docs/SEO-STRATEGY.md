# Portfolio SEO Strategy

## Technical SEO: Already Implemented

| Feature | Status | Detail |
|---------|--------|--------|
| Canonical URLs | ✅ | Self-referencing on all pages |
| Hreflang | ✅ | en + fr + x-default |
| JSON-LD ProfilePage | ✅ | Homepages wrap Person: name, job title, school, location, skills, social links |
| JSON-LD WebSite | ✅ | Site metadata with author reference |
| JSON-LD ItemList | ✅ | Homepages list public repositories as SoftwareSourceCode, linked to the Person entity |
| rel="me" | ✅ | GitHub and LinkedIn links identify the same person |
| Open Graph | ✅ | 1200×630 image, proper locale, site name |
| Twitter Cards | ✅ | summary_large_image |
| Sitemap | ✅ | Homepages and case studies, with hreflang alternates |
| Domain redirect | ⚠️ | Infomaniak only: `server.js` 301s `yanis.adysen.fr` and `www.yanis-amani.ch` to `https://yanis-amani.ch`. Recreate this on Cloudflare (see below) |
| robots.txt | ✅ | Allows all, sitemap declared |
| Index policy | ✅ | `index, follow` on the homepages and case studies; `noindex, follow` elsewhere (default-deny in `Layout.astro`, pages opt in with `index`) |
| Core Web Vitals | ⚠️ | Not measured: check PageSpeed Insights after launch |
| Mobile-friendly | ✅ | Responsive design |
| compressHTML | ✅ | On |

## Domain Migration: yanis.adysen.fr → yanis-amani.ch

`server.js` does not run on Cloudflare Pages. `public/_redirects` covers `/merci`, but host redirects must be recreated before the cutover.

1. Connect the Git repository to a Cloudflare Pages project (build `npm run build`, output `dist`) and attach `yanis-amani.ch` as the custom domain.
2. Add a Cloudflare redirect rule from `www.yanis-amani.ch` to `https://yanis-amani.ch`, keeping path and query.
3. Redirect `yanis.adysen.fr` the same way, at whichever provider serves the `adysen.fr` DNS.
4. Confirm that `curl -I https://yanis.adysen.fr/fr` returns a 301 to `https://yanis-amani.ch/fr`.
5. Confirm that `curl -I https://yanis-amani.ch/fr` returns 200. A redirect to `/fr/` conflicts with the canonical URL.
6. Add `yanis-amani.ch` to Google Search Console and keep the old property verified.
7. Submit `https://yanis-amani.ch/sitemap-index.xml`.
8. Run the Change of Address tool from the old property, if Search Console offers it.
9. Update the links you control: LinkedIn, GitHub, READMEs.
10. Keep the old domain and its redirect for at least one year.

## Ranking for "Yanis Amani"

These steps improve the odds. None of them guarantees a position.

### 1. Backlinks
Links from pages about you help Google connect them to this site. Get links from:

- **HE-Arc website**: ask whether the school has a student directory that can link to your portfolio
- **LinkedIn profile**: add `yanis-amani.ch` to your LinkedIn profile URL field
- **GitHub profile**: pin your portfolio repo and add the link in your GitHub bio
- **Open source projects**: add your portfolio link to your README files (express_rs, ysc, mangareader, v12)
- **Stack Overflow / dev.to**: add the link in your profile
- **Classmates / peers**: ask fellow students to link to you from their sites

### 2. Content that ranks for your brand
- Your name is in every page title
- Your name appears naturally in the hero, about, and footer
- The JSON-LD structured data explicitly tells Google who you are

### 3. Google Search Console
Once deployed on Cloudflare Pages:
1. Go to https://search.google.com/search-console
2. Add `https://yanis-amani.ch` as a property
3. Submit the sitemap: `https://yanis-amani.ch/sitemap-index.xml`
4. Check for any coverage issues after indexing

## Beyond Brand Search: Finding You for Skills

To rank for queries like "Rust developer Switzerland" or "CS student Neuchâtel":

Tactics to try, with no measured impact yet:

- Mention Neuchâtel, Switzerland naturally in content (done on the homepages)
- Write posts about your projects
- Get listed in an HE-Arc directory, if one exists
- Link the site from your GitHub project pages
- Publish a LinkedIn article that mentions the portfolio

## Quick Wins (Do This Week)

1. **Add portfolio link to all your README files** (express_rs, ysc, mangareader, v12)
2. **Update LinkedIn profile URL** → Add yanis-amani.ch
3. **Update GitHub profile bio** → Add the link
4. **Submit to Google Search Console** after deploy
5. **Ask HE-Arc** whether a student portfolio directory exists

## Monitoring

- Check Google Search Console weekly for first month
- Search `site:yanis-amani.ch` on Google to confirm the homepages and case studies are indexed
- Search `"Yanis Amani"` on Google to track your brand ranking
