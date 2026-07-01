# LocalNinja — Website UI Improvements

Focused, low-risk enhancements to the LocalNinja marketing site
([viralmehta9/localninja](https://github.com/viralmehta9/localninja)), guided by
the [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)
`web-design-guidelines` skill (and the design skills already vendored in
LocalNinja under `.claude/skills/`).

## Why this lives here (repo scope note)

This automated session is scoped to push only to
`viralmehta9/andrej-karpathy-skills` — it cannot write to the `localninja`
repository. The changes were therefore developed against the real LocalNinja
source and delivered here as an **apply-ready patch** so they can be dropped
straight into the LocalNinja repo.

## What changed

Two files, both above-the-fold on the landing page:

- `src/components/HeroSection.jsx`
- `src/app/globals.css`

### 1. Hero trust row (conversion)
Added a compact credibility/risk-reversal row beneath the hero CTAs:

- A 5-star rating cue with **"4.9/5 from local business owners"**
- Two reassurance points: **"Free 60-second audit"** and **"No credit card required"**

This is a well-established SaaS above-the-fold pattern: it raises perceived
trust and lowers the friction of clicking *Get Started*, without adding visual
clutter. It reuses existing design tokens (`--color-success`,
`--color-text-secondary`, `--color-text-dark`) and centers correctly on mobile.

### 2. Reduced-motion accessibility fix (a11y)
The hero's floating badges (`.floating-element`) ran an infinite `float`
animation with **no** `prefers-reduced-motion` guard — unlike the site's other
animations. Added:

```css
@media (prefers-reduced-motion: reduce) {
  .floating-element { animation: none; }
}
```

This brings the hero in line with the Web Interface Guidelines (respect the
user's motion preference) and the rest of the codebase's motion handling.

## How to apply (in the LocalNinja repo)

```bash
# from the root of the localninja checkout
git apply /path/to/hero-improvements.patch
```

The patch applies cleanly against `main` (verified with `git apply --check`).
Prefer `git apply --3way` if your `main` has moved on.

Alternatively, `changed-files/` mirrors the final result for reference:
- `changed-files/src/components/HeroSection.jsx` — full updated component
- `changed-files/src/app/globals.css.diff` — the CSS additions only (the real
  file is ~5.7k lines, so only the diff is included here)

## Verification done

- `git apply --check` — patch applies cleanly
- JSX tag balance and CSS brace balance verified
- Changes reuse existing CSS variables and class conventions; no new
  dependencies (`Check` icon comes from `lucide-react`, already a dependency)
