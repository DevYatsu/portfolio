# Portfolio SEO Strategy

## Technical SEO: Already Implemented

| Feature | Status | Detail |
|---------|--------|--------|
| Canonical URLs | ✅ | Self-referencing on all pages |
| Hreflang | ✅ | en + fr + x-default |
| JSON-LD ProfilePage | ✅ | Homepages wrap Person: name, job title, school, location, skills, social links |
| JSON-LD WebSite | ✅ | Site metadata with author reference |
| Open Graph | ✅ | 1200×630 image, proper locale, site name |
| Twitter Cards | ✅ | summary_large_image |
| Sitemap | ✅ | Homepages only (`/` and `/fr`), with hreflang alternates |
| Domain redirect | ⚠️ | Infomaniak only: `server.js` 301s `yanis.adysen.fr` and `www.yanis-amani.ch` to `https://yanis-amani.ch`. Recreate this on Cloudflare (see below) |
| robots.txt | ✅ | Allows all, sitemap declared |
| Index policy | ✅ | `index, follow` on `/` and `/fr` only; `noindex, follow` elsewhere (default-deny in `Layout.astro`) |
| Core Web Vitals | ✅ | Vanilla CSS, optimized fonts, no JS bloat |
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

## To Rank #1 for "Yanis Amani"

The portfolio is the single strongest asset for ranking your own name. Here's the strategy:

### 1. Backlinks (most important factor)
Google needs signals that your portfolio is authoritative. Get links from:

- **HE-Arc website**: ask your school to link to your portfolio from their student/alumni directory
- **LinkedIn profile**: add `yanis-amani.ch` to your LinkedIn profile URL field
- **GitHub profile**: pin your portfolio repo and add the link in your GitHub bio
- **Open source projects**: add your portfolio link to your README files (express_rs, YatsuScript, mangaread, axto)
- **Stack Overflow / dev.to**: add the link in your profile
- **Classmates / peers**: ask fellow students to link to you from their sites

### 2. Content that ranks for your brand
- Your name is already in every page title (`// Yanis Amani`)
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

| Tactic | Difficulty | Impact |
|--------|-----------|--------|
| Add "Neuchâtel, Switzerland" naturally in content | Easy | Medium |
| Write blog posts about your projects | Medium | High |
| Get listed on HE-Arc student directory | Easy | High |
| Get linked from GitHub project pages | Easy | Medium |
| Create a LinkedIn article mentioning your portfolio | Medium | Medium |

## Quick Wins (Do This Week)

1. **Add portfolio link to all your README files** (express_rs, YatsuScript, mangaread, axto)
2. **Update LinkedIn profile URL** → Add yanis-amani.ch
3. **Update GitHub profile bio** → Add the link
4. **Submit to Google Search Console** after deploy
5. **Ask HE-Arc** if they have a student portfolio directory

## Monitoring

- Check Google Search Console weekly for first month
- Search `site:yanis-amani.ch` on Google to confirm only `/` and `/fr` are indexed
- If a project or utility page was indexed before this policy, request removal via the URL Removal tool; `noindex, follow` de-indexes it on the next crawl
- Search `"Yanis Amani"` on Google to track your brand ranking
