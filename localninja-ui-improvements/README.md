# LocalNinja — Website UI Improvements

Focused, low-risk enhancements to the LocalNinja marketing site
([viralmehta9/localninja](https://github.com/viralmehta9/localninja)), guided by
the [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)
`web-design-guidelines` skill (and the design skills already vendored in
LocalNinja under `.claude/skills/`).

## Why this lives here (repo scope note)

This automated session is scoped to push only to
`viralmehta9/andrej-karpathy-skills` — it **cannot** write to the `localninja`
repository. The changes were therefore developed against the real LocalNinja
source and delivered here as an **apply-ready patch** so they can be dropped
straight into the LocalNinja repo.

## Approach

The marketing site is already visually polished — the section cards have
consistent, well-tuned hover elevation, the palette and typography are
cohesive, and most animations already respect `prefers-reduced-motion`.
Rather than restyle working sections (cosmetic churn), this pass targets
**substantive, cross-section correctness / UX / accessibility fixes** plus a
conversion-focused hero enhancement.

## What changed

Files touched: `src/components/HeroSection.jsx`, `src/app/globals.css`,
`src/components/FeaturesGrid.jsx`, `src/components/FeaturesGrid.css`.

### 1. Hero trust row — conversion (Hero)
A compact credibility / risk-reversal row beneath the hero CTAs:
- 5-star cue with **"4.9/5 from local business owners"**
- **"Free 60-second audit"** and **"No credit card required"**

Well-established above-the-fold SaaS pattern; reuses existing design tokens and
centers correctly on mobile.

### 2. Anchor scroll-offset — UX, affects every section (globals.css)
The header is `position: fixed` (~72px), but no element used `scroll-margin`,
so clicking any in-page nav link (**Services, Pricing, About, How-it-works**,
etc.) scrolled the target heading *underneath* the header. Added a single rule
giving every anchored section `scroll-margin-top: 90px`. This also let us delete
a brittle `top: -100px` spacer hack that FeaturesGrid used to work around the
same problem.

### 3. Duplicate `id="services"` — HTML validity (FeaturesGrid)
Both `ServicesSection` and `FeaturesGrid` rendered `id="services"` — an invalid
duplicate ID, and an anchor collision. `FeaturesGrid` now uses `id="features"`
(nothing linked to the old duplicate), so every `#services` link now
unambiguously lands on the Services section.

### 4. Honest, keyboard-reachable "Learn more" — a11y (FeaturesGrid)
Each feature card's "Learn more" affordance was a non-interactive `<div>`
styled to look clickable — invisible to keyboard and screen-reader users. It's
now a real `<Link href="/get-started">` (matching the Services cards), and it
reveals on `:focus-within` as well as hover so a keyboard-focused link is never
invisible.

### 5. Reduced-motion for the hero float — a11y (globals.css)
The hero's floating badges (`.floating-element`) ran an infinite animation with
no `prefers-reduced-motion` guard, unlike the rest of the codebase. Added one.

## How to apply (in the LocalNinja repo)

```bash
# from the root of the localninja checkout
git apply /path/to/ui-improvements.patch      # or: git apply --3way …
```

The patch applies cleanly against `main` (verified with `git apply --check`).

`changed-files/` mirrors the result for reference (full updated components, plus
`.diff` files for the large CSS files that aren't worth reproducing whole).

## Verification done

- `git apply --check` — patch applies cleanly
- JSX tag balance + CSS brace balance verified on every changed file
- Confirmed no source references the removed duplicate `#services`/`#features`
  anchor arrangement
- Changes reuse existing CSS variables/class conventions; no new dependencies
  (`Check` icon and `next/link` are already used elsewhere in the app)
