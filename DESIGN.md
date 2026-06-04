---
name: Lauriana Nutrição
description: Marketing surfaces for integrative nutrition practice in neurodevelopment and autoimmunity.
colors:
  deep-sage: "#5D7556"
  warm-sand: "#F2EBE3"
  fired-clay: "#D97757"
  deep-grove: "#2C3E2E"
  verdant: "#3B755F"
  ink: "#1F2937"
  harvest-gold: "#C5A065"
  coral-clay: "#E07A5F"
  pale-leaf: "#A7F3D0"
  mist: "#F8FAF9"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  full: "9999px"
  "4xl": "2rem"
  lg: "0.5rem"
  md: "0.375rem"
spacing:
  section: "5rem"
  container: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.deep-sage}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.verdant}"
  button-secondary:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  card-default:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.4xl}"
    padding: "32px"
---

# Design System: Lauriana Nutrição

## 1. Overview

**Creative North Star: "The Living Terrain"**

The Lauriana visual system grows out of a single metaphor: the body as a garden. Soil can be nourished or depleted; symptoms are weeds that return if the terrain stays inflamed. Every design choice — color, type, shadow, corner — serves that story. The palette is pulled from the natural world: sage leaves after rain, terracotta pots in afternoon sun, warm sand underfoot. Nothing is clinical or mechanical.

This repo builds **two independent brand surfaces** that share a palette but speak at different volumes. They do not share components, layouts, or typographic pairings.

### The Main Site (Portfolio)
Routes: `/`, `/pt/`, `/en/`, `/es/`
Purpose: Long-term credibility. A nutritionist portfolio for families of neurodivergent children (TEA, TDAH, T21).
Design job: build trust slowly. The visitor is evaluating expertise before committing. Density is generous, rhythm varies, and the emotional register is calm reassurance.
Color strategy: **Restrained**. Warm Sand body background, Deep Sage as punctuation on ≤10% of the screen, white cards with organic 2rem corners.
Type voice: Outfit (display) + Inter (body). Clean, open, reassuring.

### The AI Landing (Campaign)
Routes: `/ai`, `/ai/pt`, `/ai/en`, `/ai/es`
Purpose: Conversion. A 120-day autoimmune treatment program.
Design job: move the visitor from pain to action in a single scroll. The visitor is exhausted and needs to feel understood before they feel sold. The page carries more color weight and sharper corners to signal urgency without aggression.
Color strategy: **Committed**. Verdant carries 30–60% of the surface. Coral Clay CTAs. Mist body background for a cleaner, more clinical-campaign feel.
Type voice: Playfair Display (display) + Lato (body). Editorial authority paired with human warmth.

**Key Characteristics (shared):**
- Organic, not geometric: rounded corners feel like river stones, not pixels.
- Shadows are ambient, not structural. They create depth of field, not hierarchy.
- The system explicitly rejects institutional coldness, generic wellness beige, and SaaS landing-page scaffolding.

## 2. Colors

The palette is rooted in Brazilian terrain: dense greens, fired earth, sun-warmed sand. Every hue appears in nature, not in a corporate brand book. Colors are assigned to surfaces, not to abstract roles.

### Main Site Palette (Restrained)
- **Deep Sage** (#5D7556 / oklch(0.55 0.08 145)): The main site's anchor. Used for primary CTAs, active nav states, and the hero accent. It reads as calm competence — neither aggressive nor timid. Used on ≤10% of any screen.
- **Warm Sand** (#F2EBE3 / oklch(0.94 0.015 75)): The main site's body background. It is the literal sand of the terrain metaphor. Cards and sections sit on white or Mist against this ground.
- **Deep Grove** (#2C3E2E / oklch(0.25 0.05 145)): The main site's text ink. Dark green-tinted charcoal. It keeps the warmth of the palette in the typography rather than defaulting to pure black.

### AI Landing Palette (Committed)
- **Verdant** (#3B755F / oklch(0.52 0.10 165)): The AI landing's dominant color. Carries 30–60% of the surface across sections (hero background tints, offer section, footer). It is the "therapist/calm" role at campaign volume.
- **Coral Clay** (#E07A5F / oklch(0.66 0.14 40)): The AI landing's action color. Used for high-conversion CTAs, bonus-card borders, and urgency moments. It is warmer and more saturated than Deep Sage.
- **Ink** (#1F2937 / oklch(0.20 0.02 260)): The AI landing's text ink. Near-neutral dark slate. Chosen for higher contrast against Verdant backgrounds where Deep Grove would muddy.
- **Mist** (#F8FAF9 / oklch(0.98 0.005 145)): The AI landing's body background. Cleaner and less saturated than Warm Sand. Creates a cooler, more clinical-campaign base that lets Verdant and Coral Clay read as intentional, not decorative.

### Shared Accent Colors
- **Fired Clay** (#D97757 / oklch(0.65 0.13 45)): Shared warmth layer. Used for focus rings, secondary accents, and hover states on both surfaces. On the main site it is the only warm accent; on the AI landing it backs up Coral Clay.
- **Harvest Gold** (#C5A065 / oklch(0.68 0.11 75)): Shared reward/status color — star ratings, bonus badges, accent borders. Never for body text or large fills.
- **Pale Leaf** (#A7F3D0 / oklch(0.90 0.10 160)): Shared subtle tint. Used for success states and background accents. It must never be used as text on white.

### Named Rules
**The One Voice Rule (Main Site).** The primary accent (Deep Sage) is used on ≤10% of any given screen. Its rarity is the point. Most surface area is neutral (Warm Sand, white, Mist); color appears as punctuation, not wallpaper.

**The Campaign Volume Rule (AI Landing).** Verdant and Coral Clay are permitted to carry large surfaces because the page's job is conversion, not quiet evaluation. But they must alternate with Mist and white breathing room. A wall of uninterrupted green reads as aggressive, not healing.

**The Warm Sand Doctrine.** Warm Sand is the main site's body background because the terrain metaphor demands it. It is not a generic "warm and inviting" default. The AI landing does not use Warm Sand; it uses Mist. If a new surface cannot articulate why its ground should be sand-colored, use Mist or pure white instead.

**The Surface Separation Rule.** Never place Warm Sand and Mist on the same page. Each surface has its own ground. Cross-pollinating them breaks the architectural boundary between portfolio and campaign.

## 3. Typography

The two surfaces do not share type pairings. Each has its own voice, scale, and hierarchy.

### Main Site (Outfit + Inter)
**Display:** Outfit (with system-ui, sans-serif fallback)
**Body:** Inter (with system-ui, sans-serif fallback)

**Character:** Clean, open, and reassuring. A geometric sans display with generous spacing that avoids the corporate stiffness of Inter alone. The weight contrast between 700 headings and 400 body creates hierarchy without ornament.

#### Main Site Hierarchy
- **Display** (Outfit 700, clamp(2.5rem, 5vw, 4rem), line-height 1.1): Hero headlines, section mastheads. Used sparingly; one or two per page.
- **Headline** (Outfit 700, clamp(1.75rem, 3vw, 2.5rem), line-height 1.2): Section titles (About, Services, Blog). The workhorse heading.
- **Title** (Inter 600, 1.25rem, line-height 1.3): Card titles, feature names, recipe names.
- **Body** (Inter 400, 1rem, line-height 1.65): Prose, descriptions, testimonials. Capped at 65–75ch for comfortable reading.
- **Label** (Inter 500, 0.875rem, letter-spacing 0.01em): Navigation, tags, metadata, button labels. No uppercase by default; reserve uppercase for short CTAs (≤4 words) only.

### AI Landing (Playfair Display + Lato)
**Display:** Playfair Display (with Georgia, serif fallback)
**Body:** Lato (with system-ui, sans-serif fallback)

**Character:** Editorial authority paired with human warmth. Playfair's classical stems and high contrast signal expertise; Lato's open, humanist forms keep the page approachable. The pairing is deliberately campaign-weight: it reads as a considered magazine feature, not a clinical brochure.

#### AI Landing Hierarchy
- **Display** (Playfair 700, clamp(2.5rem, 6vw, 5rem), line-height 1.05): Hero headline. One per page. The scale is slightly larger than the main site to command immediate attention.
- **Headline** (Playfair 700, clamp(1.75rem, 3.5vw, 3rem), line-height 1.15): Section titles (O Método, O Tratamento, Depoimentos). Often uses an italic span for emphasis.
- **Title** (Lato 700, 1.25rem, line-height 1.3): Offer card titles, FAQ questions, pain-point headings.
- **Body** (Lato 400, 1.125rem, line-height 1.7): Prose, descriptions, testimonials. Slightly larger and more open than the main site to match the campaign's emotional weight.
- **Label** (Lato 700, 0.875rem, letter-spacing 0.05em): Navigation, tags, badges, button labels. Uppercase permitted for short CTAs and badges only.

### Named Rules
**The No Shouting Rule.** Hero heading max is 5rem on the AI landing, 4rem on the main site. Above that, the page is shouting, not designing. Display text uses -0.02em letter-spacing floor; anything tighter and letters touch.

**The Two-Font Max Rule.** Each surface uses at most two font families: one display, one body. The AI landing's Playfair + Lato pair is distinct from the main site's Outfit + Inter pair. Do not mix them on the same surface. Do not use Playfair on the main site or Outfit on the AI landing.

**The Italic Emphasis Rule (AI Landing only).** Playfair italic is reserved for the hero headline's emphasized phrase (e.g., "seu corpo"). It is not used for body emphasis, nav items, or labels. One italic moment per page is voice; scattered italics are decoration.

## 4. Elevation

The system uses soft, diffuse shadows to create ambient depth — the sense that elements rest on layers of breathable air, not that they are levitating above a flat plane. Depth is felt, not seen. Where possible, tonal layering (shifting background colors from Warm Sand → Mist → White) carries the structural hierarchy before shadows are introduced.

### Shadow Vocabulary
- **Ambient Low** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`): Default card shadow. Barely perceptible; creates separation without drawing attention.
- **Ambient Medium** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`): Elevated cards, image containers. The standard resting shadow for interactive cards.
- **Ambient High** (`box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`): Hover state for cards. Shadow intensifies on interaction, not at rest.
- **Hero Glow** (`box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15)`): Video containers, featured images. A single, soft pool of darkness that anchors the composition.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, elevation, focus) or to anchor large media elements. Do not shadow every container.

**The No Glass Rule.** Backdrop-filter blur is used only on the AI landing's offer section as a deliberate brand moment ("the mist over the terrain"). It is not a default card treatment. Do not introduce glassmorphism on new components without explicit intent.

## 5. Components

Components are grouped by surface. Do not share component styles across the main site and the AI landing.

---

### Main Site Components

#### Buttons
- **Shape:** Fully rounded (9999px radius). Pill-shaped, not rectangular.
- **Primary:** Deep Sage background, white text, 16px 32px padding. Inter 700. Hover: shifts to Verdant, subtle -2px translateY lift, shadow intensifies.
- **Secondary:** Mist background, Deep Grove text, 2px border in Deep Sage at 20% opacity. Hover: border opacity increases to 40%, background fills with 5% Deep Sage tint.
- **Focus:** 2px Fired Clay outline, 2px offset. Visible and warm.

#### Service Card
- **Corner Style:** 2rem (32px) radius. Soft, organic, like a river stone.
- **Background:** White.
- **Shadow Strategy:** Ambient Medium at rest, Ambient High on hover.
- **Border:** None.
- **Internal Padding:** 32px.
- **Structure:** Icon container (64×64, Warm Sand background, Deep Sage icon) + Title (Outfit 700) + Body (Inter 400). On hover, icon container inverts to Deep Sage background with white icon.
- **CTA link:** The autoimmune card links to `/ai/{lang}` with a hover arrow reveal.

#### About Section
- **Layout:** Two-column grid. Image side (large portrait with a -3deg rotated Deep Sage/10 backdrop behind it) + text side (qualifications list with checkmark pills).
- **Qualification item:** Deep Sage circular checkmark pill (24px) + Inter 400 text. Hover: pill inverts to white-on-Deep-Sage.

#### Navigation
- **Style:** Sticky top bar, transparent or Warm Sand background. Minimal logo + text links.
- **Typography:** Inter 500, Label size. No uppercase.
- **Default:** Deep Grove text.
- **Hover:** Deep Sage text, 8% Deep Sage background tint, rounded-full pill container.
- **Active:** Deep Sage text, 12% Deep Sage background tint.
- **Mobile:** Hamburger menu (Phosphor icon), full-screen overlay in Warm Sand with large centered links.

---

### AI Landing Components

#### Campaign CTA Button
- **Shape:** 8px (0.5rem) radius. Sharper than the main site to signal urgency.
- **Primary:** Coral Clay background, white text, 16px 32px padding. Lato 700, 1.125rem. Hover: darkens to burnt terracotta, lift + warm glow shadow.
- **Secondary:** White background, Ink text, 2px Coral Clay border. Hover: Coral Clay background tint at 5%.
- **Focus:** 2px Harvest Gold outline, 2px offset.

#### Offer Card (Stacking Value)
- **Diagnostic / Monitoring variant:** Verdant background, white text, subtle white/10 backdrop blur (the intentional glass moment). 8px radius. No border.
- **Bonus / Gift variant:** White background, Coral Clay 2px border, 8px radius, Harvest Gold badge pill. Shadow: Ambient Medium.
- **Badge:** Harvest Gold background, white text, rounded-full, uppercase, Lato 700 0.75rem, letter-spacing 0.05em.
- **Value text:** Monospace (system-ui mono fallback) for prices. It creates an anchor of precision amid the warmth.

#### Price Anchor Block
- **Layout:** Two-column card. Left column: plan summary (Ink text, flex justify-between rows). Right column: final price on Mist/Verdant-5 background, Coral Clay price figure, campaign CTA.
- **Strikethrough:** Gray 400 with red strike line for the "if hired separately" total.
- **Savings callout:** Coral Clay text, bold.

#### Pain Point Grid
- **Layout:** 2×2 grid on desktop, stacked on mobile.
- **Card:** White background, no border, no shadow. Each card has a large Phosphor icon (48px, Verdant), a Lato 700 title, and a Lato 400 body.
- **Hover:** None. These cards are informational, not interactive.

#### Testimonial Block
- **Layout:** Single-column stack, centered.
- **Quote:** Playfair Display italic, Ink, 1.25rem. Large quotation mark in Pale Leaf as a decorative background element.
- **Attribution:** Lato 700, Coral Clay condition label below the name.

#### Lead Magnet Section
- **Layout:** Two-column. Left: e-book mockup image. Right: checklist (icon + title + description) + WhatsApp CTA.
- **Checklist item:** Phosphor icon (Verdant, 24px) + Lato 700 title + Lato 400 description.
- **Disclaimer:** Small Lato 400, muted gray, centered below CTA.

#### Navigation
- **Style:** Sticky top bar, transparent or Mist background. Minimal logo + text links.
- **Typography:** Lato 700, Label size. No uppercase.
- **Default:** Ink text.
- **Hover:** Verdant text, 8% Verdant background tint, rounded-full pill container.
- **Active:** Verdant text, 12% Verdant background tint.
- **Mobile:** Hamburger menu (Phosphor icon), full-screen overlay in Mist with large centered links.

---

### Inputs / Fields (if added to either surface)
- **Style:** 1px stroke in Deep Sage at 20% opacity, Mist background, 8px radius.
- **Focus:** Stroke shifts to Deep Sage at full opacity, 2px Fired Clay glow (box-shadow: 0 0 0 3px rgba(217, 119, 87, 0.2)).
- **Error:** Stroke becomes Fired Clay, helper text in Fired Clay.

## 6. Do's and Don'ts

### Do:
- **Do** use Deep Sage as a punctuation color on ≤10% of any screen on the main site.
- **Do** use Verdant as a dominant surface color on the AI landing, but alternate it with Mist and white breathing room.
- **Do** maintain 65–75ch line lengths for all body prose on both surfaces.
- **Do** use Outfit + Inter on the main site and Playfair Display + Lato on the AI landing. Never mix the pairs.
- **Do** reserve uppercase for short CTAs (≤4 words) and badges only.
- **Do** use text-wrap: balance on h1–h3 for even line breaks.
- **Do** respect prefers-reduced-motion: replace fade-in-up with instant visibility.
- **Do** use Phosphor Icons (outlined style) for all interface icons. Inline as SVG where possible.
- **Do** use pill-shaped buttons (9999px radius) on the main site and 8px-radius buttons on the AI landing. The shape signals the surface's emotional register.

### Don't:
- **Don't** place main site components on the AI landing, or vice versa. The Service Card's 2rem radius and Deep Sage hover belong to the portfolio; the AI Offer Card's 8px radius and Coral Clay border belong to the campaign.
- **Don't** use Warm Sand on the AI landing or Mist on the main site. Each surface has its own ground.
- **Don't** use side-stripe borders (border-left > 1px as a colored accent on cards or callouts). The AI landing's hero quote currently uses this; it is a known deviation to be removed.
- **Don't** use gradient text (background-clip: text with gradients).
- **Don't** use glassmorphism as a default card treatment. It is permitted only in the AI offer section as a deliberate brand moment.
- **Don't** use the hero-metric template (big number + small label + gradient accent).
- **Don't** repeat identical icon + heading + text card grids without variation in size, imagery, or layout rhythm.
- **Don't** place tiny uppercase tracked eyebrows above every section heading. One deliberate kicker per page is voice; on every section it is AI grammar.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding. Numbers earn their place only when the section is a real sequence.
- **Don't** use Warm Sand as a body background for new surfaces without the terrain metaphor justification. When in doubt, use Mist or white.
- **Don't** let text overflow its container at any breakpoint. Test headings with the longest word in every language (pt/en/es).
- **Don't** use marketing buzzwords: streamline, empower, supercharge, leverage, unleash, transform, seamless, world-class, enterprise-grade, next-generation, cutting-edge, game-changer, mission-critical.
