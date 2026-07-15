# Design — Yanis Amani portfolio

A locked design system for this portfolio. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal — developer-portfolio register. Polished, technical, restrained.
The canonical Stripe / Linear school: confident sans displays, generous whitespace,
pill CTAs, monochrome with a single restrained blue accent.

## Macrostructure family

- **Marketing / landing pages**: Marquee Hero — project-cards as the primary
  structural unit, lean hero, skill tags, contact as a footer-ish strip. Varies
  on hero archetype (salutation·role·tagline vs. statement·proof·CTA) and
  enrichment tier.
- **Content / project detail pages**: Long Document — content-forward with
  sidebar tech stack, pull quotes for notable challenges, footnotes.
- **Utility / error pages**: Minimal single-column card.

## Theme — custom (Hyperlane-inspired)

- `--color-paper`      oklch(97% 0.005 270)   — cool near-white (light)
                        oklch(14% 0.012 260)   — deep navy (dark)
- `--color-paper-2`    oklch(94% 0.006 270)   — elevation +1
                        oklch(18% 0.012 260)
- `--color-ink`        oklch(18% 0.012 260)   — navy-ink (light)
                        oklch(93% 0.008 270)   — near-white (dark)
- `--color-ink-2`      oklch(38% 0.010 260)   — secondary text
                        oklch(68% 0.010 260)
- `--color-rule`       oklch(86% 0.006 270)   — hairline (light)
                        oklch(24% 0.012 260)
- `--color-muted`      oklch(54% 0.008 260)   — de-emphasised text
                        oklch(52% 0.010 260)
- `--color-accent`     oklch(55% 0.18 255)    — technical blue (light)
                        oklch(65% 0.18 255)   — lighter blue (dark)
- `--color-focus`      oklch(50% 0.20 255)    — focus ring
                        oklch(60% 0.20 255)

## Typography

- Display: Geist, weight 600, style normal
- Body: Inter Variable, weight 400
- Wordmark: Geist, weight 700 (same family, weight does the differentiation)
- Mono: JetBrains Mono, weight 400 (code contexts only)
- Display tracking: -0.025em
- Type scale anchor: --text-display = clamp(2.75rem, 5vw + 1rem, 5.25rem)
- Ratio: 1.25 (major third)

## Spacing

4-point named scale. Pages must use named tokens (var(--space-md)), never raw values.

## Motion

- Easings: --ease-out = cubic-bezier(0.16, 1, 0.3, 1)
- Reveal pattern: fade + slide (16px → 0, 600ms)
- Reduced-motion fallback: opacity-only, ≤ 150 ms
- Microinteractions: silent success, hover delay 800ms / focus delay 0ms

## CTA voice

- Primary CTA: filled pill, accent background, "ink" text, 6px radius
- Secondary CTA: ghost (transparent, rule border, muted text → accent on hover)

## Per-page allowances

- Main portfolio page MAY use enrichment (Tier-A CSS art for hero).
- Project pages MUST NOT use enrichment — content carries the page.
- Utility pages: typography only.

## What pages MUST share

- The accent colour and its placement (≤ 5 % per viewport).
- The display + body fonts.
- The CTA voice (pill shape, 6px radius, same padding rhythm).
- Section heading rhythm (display head + sub text).

## What pages MAY differ on

- Macrostructure within the page-type family (main page = Marquee Hero, project = Long Document).
- Hero archetype (within the family's allowance).
- Enrichment — only on marketing pages, only Tier-A or Tier-B.
- Nav archetype (N1b, N5) and footer archetype (Ft5, Ft2)

## Exports

### tokens.css

```css
:root {
  --color-paper:      oklch(97% 0.005 270);
  --color-paper-2:    oklch(94% 0.006 270);
  --color-ink:        oklch(18% 0.012 260);
  --color-ink-2:      oklch(38% 0.010 260);
  --color-rule:       oklch(86% 0.006 270);
  --color-rule-2:     oklch(91% 0.005 270);
  --color-muted:      oklch(54% 0.008 260);
  --color-accent:     oklch(55% 0.18 255);
  --color-accent-ink: oklch(97% 0.005 270);
  --color-focus:      oklch(50% 0.20 255);

  --font-display: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-body:    "Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, "SF Mono", monospace;

  --space-3xs: 0.25rem;  --space-2xs: 0.5rem;  --space-xs: 0.75rem;
  --space-sm:  1rem;     --space-md:  1.5rem;  --space-lg: 2rem;
  --space-xl:  3rem;     --space-2xl: 4.5rem;  --space-3xl: 7rem;

  --text-xs: 0.75rem;    --text-sm: 0.875rem;  --text-base: 1rem;
  --text-md: 1.125rem;   --text-lg: 1.375rem;  --text-xl: 1.75rem;
  --text-2xl: 2.25rem;

  --text-display:   clamp(2.75rem, 5vw + 1rem, 5.25rem);
  --text-display-s: clamp(2rem, 3.5vw + 0.5rem, 3.5rem);

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-short: 220ms;
  --dur-reveal: 600ms;

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-pill: 999px;
}
```

### Dark overrides

```css
[data-theme="dark"] {
  --color-paper:      oklch(14% 0.012 260);
  --color-paper-2:    oklch(18% 0.012 260);
  --color-ink:        oklch(93% 0.008 270);
  --color-ink-2:      oklch(68% 0.010 260);
  --color-rule:       oklch(24% 0.012 260);
  --color-rule-2:     oklch(26% 0.012 260);
  --color-muted:      oklch(52% 0.010 260);
  --color-accent:     oklch(65% 0.18 255);
  --color-accent-ink: oklch(14% 0.012 260);
  --color-focus:      oklch(60% 0.20 255);
}
```
