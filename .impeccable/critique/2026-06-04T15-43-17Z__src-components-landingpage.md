---
target: src/components/LandingPage.astro
total_score: 28
p0_count: 3
p1_count: 2
timestamp: 2026-06-04T15-43-17Z
slug: src-components-landingpage
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover states present; no reduced-motion guardrails |
| 2 | Match System / Real World | 3 | Warm terrain language; gradient hero background slightly generic |
| 3 | User Control and Freedom | 3 | Mobile menu lacks click-outside-to-close |
| 4 | Consistency and Standards | 2 | Glass header, eyebrow repetition, identical service cards |
| 5 | Error Prevention | 4 | Static site; no forms |
| 6 | Recognition Rather Than Recall | 4 | Nav visible, clear section labels |
| 7 | Flexibility and Efficiency | 2 | Single linear path; no accelerators |
| 8 | Aesthetic and Minimalist Design | 2 | Multiple absolute bans (eyebrows, identical grid, glass header) |
| 9 | Error Recovery | 4 | N/A |
| 10 | Help and Documentation | 3 | Contact info clear; no FAQ |
| **Total** | | **28/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment**: The main site leaks generic signals. Two uppercase tracked eyebrow labels (About, Services), a 4-up identical icon+heading+text service grid, and a glassmorphic header (`backdrop-blur-md`) are all absolute-ban violations. The Inter + Outfit pairing is on the reflex-reject list and reads as training-data default. The About section image uses `rounded-3xl` instead of the spec's `rounded-4xl`. Service cards themselves follow the DESIGN.md spec closely, but their identical rhythm is the problem.

**Deterministic scan**:
- `overused-font` in `Layout.astro` — Inter flagged.

**False positives**: None.

## Overall Impression
The main site has a calm, trustworthy structure and follows the terrain metaphor in color. But the template signals (eyebrows, identical grid, glass header, overused fonts) undermine the "distinctive, human" brand goal. Removing the absolute bans and refreshing the type pairing would transform the surface.

## What's Working
1. **Color discipline** — Warm Sand body, Deep Sage accents, white cards. The palette is restrained and follows the One Voice Rule.
2. **Service Card micro-interaction** — The icon container inverts on hover (Deep Sage bg + white icon) exactly per DESIGN.md. This is craft.
3. **Qualification list** — The checkmark pills in About are a clear, scannable pattern.

## Priority Issues

**[P0] Identical icon+heading+text card grid in Services**
- **Why it matters**: Absolute ban. Four identical cards with stacked icon / title / description is the most saturated AI landing-page pattern.
- **Fix**: Vary the layout rhythm. Make the autoimmune card span more columns or use a horizontal layout. Or introduce size variation.
- **Suggested command**: `/impeccable layout`

**[P0] Glassmorphism in Header**
- **Why it matters**: The No Glass Rule permits blur only in the AI landing's offer section. A blurred nav on the main site is a default, not a decision.
- **Fix**: Remove `backdrop-blur-md` from the header. Use solid `bg-secondary` (Warm Sand) or transparent.
- **Suggested command**: `/impeccable polish`

**[P0] Uppercase tracked eyebrows on About and Services**
- **Why it matters**: Two instances of `tracking-wider uppercase` above section headings. One deliberate kicker is voice; on every section it is AI grammar.
- **Fix**: Remove `uppercase tracking-wider` from the About and Services eyebrow spans. Keep the text but drop the all-caps tracking.
- **Suggested command**: `/impeccable typeset`

**[P1] Inter overused**
- **Why it matters**: Inter is on the reflex-reject list. It reads as a training-data default and feels corporate/cold for a "Grounded, Human" brand.
- **Fix**: Replace Inter + Outfit with a warmer, more distinctive pair (e.g., Merriweather Sans + Merriweather, or another humanist sans + distinctive serif).
- **Suggested command**: `/impeccable typeset`

**[P1] About image uses `rounded-3xl` instead of `rounded-4xl`**
- **Why it matters**: DESIGN.md specifies 2rem (`rounded-4xl`) for the main site's organic corners. `rounded-3xl` (1.5rem) is close but inconsistent.
- **Fix**: Change `rounded-3xl` to `rounded-4xl` on the About image and its rotated backdrop.
- **Suggested command**: `/impeccable polish`

## Persona Red Flags

**Jordan (Confused First-Timer)**: The four identical service cards give no hint which service is most relevant. Jordan will read all four and feel overwhelmed rather than guided.

**Casey (Distracted Mobile User)**: The glass header may cause text readability issues on scroll when it overlaps content. The mobile menu uses a dropdown that doesn't close on outside tap.

**Riley (Stress Tester)**: No `prefers-reduced-motion` guardrail. The `animate-fade-in-up` class is present in Hero but no reduced-motion fallback is visible.

**Parent of Neurodivergent Child (Project-specific)**: Needs calm and reassurance. Uppercase tracked labels feel institutional, not nurturing. The identical grid feels clinical rather than personalized.

## Minor Observations
- Hero background uses a gradient overlay on an Unsplash image. Gradients are not banned for backgrounds, but the design system prefers tonal layering.
- Service cards use Tailwind default `shadow-lg` / `hover:shadow-xl` instead of the design system's Ambient Medium / Ambient High shadows.
- Mobile menu in Header uses `rounded-2xl`; main site spec favors `rounded-4xl` (2rem) for organic corners.
- Header CTA correctly uses `rounded-full` (pill) per main site button spec.

## Questions to Consider
- What if the autoimmune card were a full-width horizontal CTA instead of a fourth identical card?
- Would the page feel calmer if all uppercase labels were removed?
- Could the hero video container use a softer, non-gradient background treatment?
