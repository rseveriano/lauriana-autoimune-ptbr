---
target: src/components/ai/
total_score: 29
p0_count: 4
p1_count: 4
timestamp: 2026-06-04T15-32-00Z
slug: src-components-ai
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover/click feedback present; no reduced-motion guardrails visible |
| 2 | Match System / Real World | 3 | Warm, terrain-rooted language; generic gray backgrounds break the metaphor |
| 3 | User Control and Freedom | 3 | FAQ toggles work; mobile menu lacks "click outside to close" |
| 4 | Consistency and Standards | 2 | Border radii chaos (lg, xl, 2xl, 3xl, 4xl, full) and mixed CTA shapes |
| 5 | Error Prevention | 4 | Static site; no forms to error |
| 6 | Recognition Rather Than Recall | 4 | Nav visible, FAQ questions exposed |
| 7 | Flexibility and Efficiency | 2 | Single linear conversion path; no accelerators |
| 8 | Aesthetic and Minimalist Design | 2 | Multiple absolute bans (side-stripe, identical card grid, eyebrow spam) |
| 9 | Error Recovery | 4 | N/A |
| 10 | Help and Documentation | 3 | FAQ section serves this role |
| **Total** | | **29/40** | **Acceptable / Good borderline** |

## Anti-Patterns Verdict

**LLM assessment**: The AI landing reads as partially generic. The absolute bans are the loudest signals: a side-stripe border on the hero quote card, an identical 4-up icon+heading+text grid in Pain Points, and uppercase tracked eyebrow labels on nearly every section. The radii are inconsistent across the page, which undermines the "sharper, campaign-weight" intent. The glass cards in the Lead Magnet section and the header blur extend beyond the one permitted glass moment in the offer section. Color-wise, `bg-gray-50` appears in two sections where `bg-mist` should live, breaking the Surface Separation Rule.

**Deterministic scan**:
- `side-tab` in `Hero.astro:46` — `border-l-4 border-brand-green` on the floating quote card.
- `overused-font` in `AILayout.astro:41` — Lato flagged as overused.
- `single-font` in `AILayout.astro:41` — detector sees only Lato applied via `font-lato` body class; Playfair is declared but not globally applied, so the detector reads a monoculture.

**False positives**: The `single-font` hit is partially false — Playfair IS used on headings via `font-playfair`, but the weak global typographic signal (body hardcoded to `font-lato`) means the hierarchy is not loud enough. Treat as a typographic-hierarchy warning, not a literal single-font bug.

## Overall Impression
The page has strong conversion architecture (clear CTA flow, price anchoring, social proof) but the visual execution leaks generic signals. Removing the absolute bans and tightening the radius/color discipline would lift the page from "acceptable" to "distinctive."

## What's Working
1. **Conversion rhythm** — Hero → Pain → Method → Offer → Price → Lead Magnet → Bio → Testimonials → FAQ is a textbook pain-to-solution scroll with multiple WhatsApp touchpoints.
2. **Price anchoring block** — The two-column summary / final-price card is effective: strikethrough total, savings callout, and a bold CTA.
3. **Playfair + Lato pairing** — When the hierarchy is clear (hero headline, section titles), the editorial-meets-human tone lands well.

## Priority Issues

**[P0] Side-stripe border in Hero**
- **Why it matters**: The absolute ban on side-stripe borders exists because it is the most recognizable AI-generated UI tell. It immediately signals "template."
- **Fix**: Remove `border-l-4 border-brand-green` from the quote card. Replace with a full subtle border or a background tint.
- **Suggested command**: `/impeccable polish`

**[P0] Header CTA uses pill shape instead of 8px radius**
- **Why it matters**: DESIGN.md specifies 8px radius for AI landing CTAs to signal campaign urgency. The `rounded-full` pill belongs to the main site.
- **Fix**: Change `rounded-full` to `rounded-lg` (8px) on the header CTA.
- **Suggested command**: `/impeccable polish`

**[P0] Hardcoded `hover:bg-yellow-700` on CTAs**
- **Why it matters**: DESIGN.md specifies Coral Clay darkening to burnt terracotta. `yellow-700` is a generic Tailwind default that drifts from the palette.
- **Fix**: Replace `hover:bg-yellow-700` with a darker Coral Clay hex or a Tailwind arbitrary value matching the brand.
- **Suggested command**: `/impeccable polish`

**[P0] `bg-gray-50` used instead of Mist**
- **Why it matters**: The Surface Separation Rule says AI landing ground is Mist. Generic gray-50 reads as undifferentiated and breaks the terrain metaphor.
- **Fix**: Replace `bg-gray-50` with `bg-brand-light` (Mist) in Offer price section and PainPoints section.
- **Suggested command**: `/impeccable polish`

**[P1] Identical icon+heading+text card grid in PainPoints**
- **Why it matters**: Another absolute ban. Four identical cards with circular icon containers, bold headings, and gray body text is a saturated AI pattern.
- **Fix**: Vary the layout rhythm. Use a 2×2 grid with larger icons left-aligned, or merge into a single narrative block with icons as inline accents.
- **Suggested command**: `/impeccable layout`

**[P1] Glassmorphism beyond the permitted offer section**
- **Why it matters**: The No Glass Rule allows blur ONLY in the offer section as a deliberate brand moment. Header `backdrop-blur-sm` and LeadMagnet `backdrop-blur-md` dilute that intent.
- **Fix**: Remove `backdrop-blur-sm` from header (use solid white or Mist). Remove `backdrop-blur-md` from LeadMagnet CTA card (use solid white/10 or a flat tint).
- **Suggested command**: `/impeccable polish`

**[P1] Uppercase tracked eyebrow labels on every section**
- **Why it matters**: One kicker is voice; four is AI grammar. Hero tag, Lead tag, Price tag, and Offer badges all use `uppercase tracking-wide/wider`.
- **Fix**: Remove the hero span tag entirely or make it sentence-case. Keep the offer badges (they are functional labels), but drop the lead and price tags.
- **Suggested command**: `/impeccable typeset`

**[P1] Inconsistent border radii**
- **Why it matters**: The AI landing spec uses 8px (`rounded-lg`). Current code uses `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl`, and `rounded-full` across different components. This signals uncommitted craft.
- **Fix**: Standardize AI landing cards and CTAs to 8px (`rounded-lg`). Reserve `rounded-full` for avatars and badge pills only.
- **Suggested command**: `/impeccable polish`

## Persona Red Flags

**Jordan (Confused First-Timer)**: The four identical pain-point cards give no visual priority to the most common complaint. Jordan won't know which symptom to identify with first. The uppercase labels feel institutional, not welcoming.

**Casey (Distracted Mobile User)**: The hero image is eager-loaded and large. The floating quote card overlaps the image on mobile and may obscure the thumb zone. The price card's two-column flex layout may squeeze text on narrow screens.

**Riley (Stress Tester)**: No `prefers-reduced-motion` guardrail. If `fade-in-up` is ever added, users with vestibular disorders will have no escape hatch. The mobile menu does not close on outside clicks, trapping focus visually.

**Fatigued Autoimmune Patient (Project-specific)**: Needs to feel "seen" immediately. The pain points are accurate but generic ("tired," "inflammation," "confusion," "isolation"). Without variation in card size or layout, the section feels like a checklist, not a conversation.

## Minor Observations
- Hero image uses `rounded-4xl` (2rem), a main-site radius, on the AI landing.
- Price card wrapper uses `rounded-3xl`, not in the AI spec.
- PainPoint cards use `shadow-md` / `hover:shadow-lg` when DESIGN.md says "no shadow."
- Testimonial cards use `rounded-2xl` (1rem), not the 8px spec.
- Mobile menu uses `rounded-2xl`.
- Bio section uses `border-l` on the CRN callout (side-stripe, though 1px gray — still a weak pattern).

## Questions to Consider
- What if the pain points were presented as a single scrolling sentence with inline icons, rather than four equal cards?
- Could the hero quote card become a subtle text block without a white box floating over the image?
- If the uppercase labels were removed, would the page feel quieter and more human?
