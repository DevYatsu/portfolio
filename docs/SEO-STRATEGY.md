# Portfolio SEO Strategy

## Technical SEO — Already Implemented

| Feature | Status | Detail |
|---------|--------|--------|
| Canonical URLs | ✅ | Self-referencing on all pages |
| Hreflang | ✅ | en + fr + x-default |
| JSON-LD Person | ✅ | Name, job title, education, social links |
| JSON-LD WebSite | ✅ | Site metadata with author reference |
| Open Graph | ✅ | 1200×630 image, proper locale, site name |
| Twitter Cards | ✅ | summary_large_image |
| Sitemap | ✅ | i18n-aware with hreflang alternates |
| robots.txt | ✅ | Allows all, sitemap declared |
| Core Web Vitals | ✅ | Vanilla CSS, optimized fonts, no JS bloat |
| Mobile-friendly | ✅ | Responsive design |
| compressHTML | ✅ | On |

## To Rank #1 for "Yanis Amani"

The portfolio is the single strongest asset for ranking your own name. Here's the strategy:

### 1. Backlinks (most important factor)
Google needs signals that your portfolio is authoritative. Get links from:

- **HE-Arc website** — ask your school to link to your portfolio from their student/alumni directory
- **LinkedIn profile** — add `yanis.adysen.fr` to your LinkedIn profile URL field
- **GitHub profile** — pin your portfolio repo and add the link in your GitHub bio
- **Open source projects** — add your portfolio link to your README files (express_rs, YatsuScript, mangaread, axto)
- **Stack Overflow / dev.to** — add the link in your profile
- **Classmates / peers** — ask fellow students to link to you from their sites

### 2. Content that ranks for your brand
- Your name is already in every page title (`// Yanis Amani`)
- Your name appears naturally in the hero, about, and footer
- The JSON-LD structured data explicitly tells Google who you are

### 3. Google Search Console
Once deployed on Infomaniak:
1. Go to https://search.google.com/search-console
2. Add `https://yanis.adysen.fr` as a property
3. Submit the sitemap: `https://yanis.adysen.fr/sitemap-index.xml`
4. Check for any coverage issues after indexing

## Beyond Brand Search — Finding You for Skills

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
2. **Update LinkedIn profile URL** → Add yanis.adysen.fr
3. **Update GitHub profile bio** → Add the link
4. **Submit to Google Search Console** after deploy
5. **Ask HE-Arc** if they have a student portfolio directory

## Monitoring

- Check Google Search Console weekly for first month
- Search `site:yanis.adysen.fr` on Google to verify all pages are indexed
- Search `"Yanis Amani"` on Google to track your brand ranking
