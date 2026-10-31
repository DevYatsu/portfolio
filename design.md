# Design: Yanis Amani portfolio

A locked design system for this portfolio. Every page redesign reads this file before
emitting code. Do not regenerate per page: extend or amend this file when the
system needs to grow.

## Genre
modern-minimal: developer-portfolio register. Polished, technical, restrained.
The canonical Stripe / Linear school: confident sans displays, generous whitespace,
pill CTAs, monochrome with a single restrained blue accent.

## Macrostructure family

- **Marketing / landing pages**: Descent: the home page is one stack read top to
  bottom, "from the pixel to the register". Hero pairs the name with the Stair
  (Tier-A CSS art and navigation: one row per layer, shifted right as it goes
  down). Then About and Stack, then the five layers in fixed order: 05 Surface,
  04 Product, 03 Language, 02 Runtime, 01 Machine. Each layer has its own stepped
  surface (`--layer-5` to `--layer-1`). The two deepest invert via `.surface-deep`
  in both themes. A fixed Depth Gauge under the nav tracks the current layer.
  Contact closes at depth 00 with a display-sized email.
  Proof rule: a stat, count or claim appears only if it traces to a repository,
  with its measurement date when it can go stale. Credit collaborators.
- **Content / project detail pages**: Long Document: content-forward with a
  sticky sidebar meta rail (links + tech stack, hairline left rule) at ≥1024px,
  one pull quote per page lifted from the page's own copy (display voice
  between hairlines), hairline top-rules on section headings.
- **Utility / error pages**: Minimal single-column card.

## Theme: custom (Hyperlane-inspired)

- `--color-paper`      oklch(97% 0.014 265)   : cool blue-tinted near-white (light)
                        oklch(16% 0.014 265)   : navy (dark, never near-black)
- `--color-paper-2`    oklch(94% 0.015 265)   : elevation +1
                        oklch(20% 0.015 265)
- `--color-ink`        oklch(18% 0.012 260)   : navy-ink (light)
                        oklch(93% 0.008 270)   : near-white (dark)
- `--color-ink-2`      oklch(38% 0.010 260)   : secondary text
                        oklch(68% 0.010 260)
- `--color-rule`       oklch(86% 0.014 265)   : hairline (light)
                        oklch(26% 0.014 265)
- `--color-muted`      oklch(48% 0.010 260)   : de-emphasised text (≥4.5:1 on paper & paper-2)
                        oklch(65% 0.012 260)
- `--color-accent`     oklch(55% 0.18 255)    : technical blue (light)
                        oklch(65% 0.18 255)   : lighter blue (dark)
- `--color-focus`      oklch(50% 0.20 255)    : focus ring
                        oklch(60% 0.20 255)

Hue note (de-slop 2026-08): every surface sits at hue 255–265, blue to navy.
The previous 260/270 pair with a 14%-lightness dark paper read as purple-on-black;
the paper hues were unified at 265 and the dark paper raised to 16% so the theme
is unambiguously blue-on-navy. Accent hue stays 255.

## Typography

- Display: system-ui stack, weight 600, style normal (no webfonts: deliberately on-system, rule D1)
- Body: system-ui stack, weight 400
- Wordmark: system-ui stack, weight 700 (same family, weight does the differentiation)
- Mono: JetBrains Mono, weight 400 (code contexts only; self-hosted via @fontsource-variable/jetbrains-mono)
- Display tracking: -0.025em
- Type scale anchor: --text-display = clamp(2.75rem, 5vw + 1rem, 5.25rem)
- Ratio: 1.25 (major third)

## Spacing

4-point named scale. Pages must use named tokens (var(--space-md)), never raw values.

## Motion

- Easings: --ease-out = cubic-bezier(0.16, 1, 0.3, 1)
- Reveal pattern: fade + slide (16px → 0, 600ms)
- Depth Gauge: state change only (colour + underline), no scroll-driven animation
- Reduced-motion fallback: opacity-only, ≤ 150 ms

## De-slop constraints (locked 2026-08)

Hard rules. A page violates the system if it contains any of these:

- **D1 Typography.** No webfonts for display/body. Inter, Geist, and Space Grotesk are banned. System stack only; JetBrains Mono may be self-hosted for code/mono contexts.
- **D2 Surfaces.** No drop shadows, no backdrop-filter / glass translucency, no gradients (linear or radial), no radial orbs, no dot grids, no sparkle/star decorations. Elevation comes from paper-2 fills and rule hairlines.
- **D3 Radii.** Card/surface radius ≤ 8px (`--radius-lg`). Only pills, chips, and CTAs use `--radius-pill`.
- **D4 Grids.** No three-up feature-card rows. The static-sites grid caps at 2 columns; with an odd item count the trailing card spans both columns so no empty grid cell shows through.
- **D5 Hover.** Hovers change color, border, or background only. No translate/scale/rotate, no shadow-on-hover.
- **D6 Copy.** No em dashes in user-visible copy (EN or FR); use colons, commas, parentheses, or sentence breaks. No emoji glyphs in UI; inline SVG icons only. No testimonial, pricing-tier, terminal-window, or legal boilerplate sections or pages.
- **D7 Colour.** Monochrome navy/ink with the single blue accent. No rainbow, neon, or pastel additions.
- **D8 Motion.** Scroll reveal (`[data-animate]`) stays fade+slide 600ms with the reduced-motion opacity-only fallback.

## CTA voice

- Primary CTA: filled pill, accent background, accent-ink text
- Secondary CTA: ghost (transparent, rule border, muted text → accent on hover)

## Per-page allowances

- Main portfolio page MAY use enrichment (Tier-A CSS art for hero).
- Project pages MUST NOT use enrichment: content carries the page.
- Utility pages: typography only.

## What pages MUST share

- The accent colour and its placement (≤ 5 % per viewport).
- The display + body fonts.
- The CTA voice (pill shape, same padding rhythm).
- Section heading rhythm (display head + sub text).

## What pages MAY differ on

- Macrostructure within the page-type family (main page = Marquee Hero, project = Long Document).
- Hero archetype (within the family's allowance).
- Enrichment: only on marketing pages, only Tier-A or Tier-B.
- Nav archetype (N1b, N5) and footer archetype (Ft5, Ft2)

## Exports

### tokens.css

```css
:root {
  --color-paper:      oklch(97% 0.014 265);
  --color-paper-2:    oklch(94% 0.015 265);
  --color-ink:        oklch(18% 0.012 260);
  --color-ink-2:      oklch(38% 0.010 260);
  --color-rule:       oklch(86% 0.014 265);
  --color-rule-2:     oklch(91% 0.012 265);
  --color-muted:      oklch(48% 0.010 260);
  --color-accent:     oklch(55% 0.18 255);
  --color-accent-ink: oklch(97% 0.005 270);
  --color-focus:      oklch(50% 0.20 255);

  --font-display: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-body:    ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono:    "JetBrains Mono Variable", "JetBrains Mono", ui-monospace, "SF Mono", monospace;

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
  --radius-lg: 8px;
  --radius-pill: 999px;

  --layer-5: oklch(97% 0.014 265);
  --layer-4: oklch(94% 0.015 265);
  --layer-3: oklch(91% 0.016 265);
  --layer-2: oklch(26% 0.030 262);
  --layer-1: oklch(19% 0.026 262);
}
```

### Dark overrides

```css
[data-theme="dark"] {
  --color-paper:      oklch(16% 0.014 265);
  --color-paper-2:    oklch(20% 0.015 265);
  --color-ink:        oklch(93% 0.008 270);
  --color-ink-2:      oklch(68% 0.010 260);
  --color-rule:       oklch(26% 0.014 265);
  --color-rule-2:     oklch(28% 0.013 265);
  --color-muted:      oklch(65% 0.012 260);
  --color-accent:     oklch(65% 0.18 255);
  --color-accent-ink: oklch(14% 0.012 260);
  --color-focus:      oklch(60% 0.20 255);

  --layer-5: oklch(25% 0.016 265);
  --layer-4: oklch(22% 0.016 265);
  --layer-3: oklch(19% 0.016 265);
  --layer-2: oklch(16% 0.018 262);
  --layer-1: oklch(14% 0.020 262);
}
```
