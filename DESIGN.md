# Design Brief

## Tone & Aesthetic
Health-first, community-driven. Modern medical credibility with human warmth. Refined utility, not clinical sterility.

## Color Palette
| Token | Light OKLCH | Dark OKLCH | Purpose |
|-------|------------|-----------|---------|
| Primary | 0.55 0.22 25 (red) | 0.68 0.21 23 | Blood donation, vitality, action CTA |
| Accent | 0.55 0.15 140 (emerald) | 0.65 0.14 138 | Success, confirmation, secondary actions |
| Background | 0.98 0 0 (off-white) | 0.12 0 0 | Page base |
| Card | 1.0 0 0 (white) | 0.15 0 0 | Content containers |
| Muted | 0.93 0 0 (light grey) | 0.2 0 0 | Disabled, tertiary elements |
| Foreground | 0.12 0 0 (dark) | 0.96 0 0 | Body text |

## Typography
| Family | Usage | Files |
|--------|-------|-------|
| Satoshi | Display + Body | /assets/fonts/Satoshi.woff2 |
| JetBrains Mono | Data, phone numbers, blood groups | /assets/fonts/JetBrainsMono.woff2 |

## Structural Zones
| Zone | Treatment | Purpose |
|------|-----------|---------|
| Header | `bg-card` + `border-b-2 border-primary` + red left accent stripe | Branding, sticky navigation |
| Main Content | `bg-background` + card-based grid | Registration forms, search interface |
| Donor Cards | `bg-card` + `donor-card-accent` left stripe + mono phone data | Result listings, visual hierarchy |
| Search Bar | Large input with `search-bar-focus` ring on click | Primary CTA |
| Footer | `bg-muted/20` + `border-t` | Legal, minimal |

## Component Patterns
- **Donor Card**: Left red border accent (4px) + donor name (body), blood group (red badge), phone (mono font), age (muted text)
- **Blood Group Badge**: Inline red background with white text, pill-shaped border-radius
- **Phone Display**: Always monospace font for data credibility
- **Primary CTA**: Red background, white text, subtle shadow, hover state lifts

## Motion & Interaction
- Button hover: subtle scale (1.02) + shadow elevation
- Form focus: ring-primary with offset, not color-only
- Search results fade-in on load
- Donor card appears via stagger animation (100ms intervals)

## Spacing & Density
Medium breathing room. `gap-4` between cards, `p-6` inside cards, `space-y-4` in forms. Mobile-first responsive: `sm:`, `md:`, `lg:` breakpoints.

## Signature Detail
Red accent stripe on donor cards doubles as visual phone affordance—immediately signals "contact data here." Monospace phone numbers reinforce data integrity.

## Constraints
- No gradients, no transparency blending on primary color
- Avoid shadows beyond `shadow-md`
- High contrast text (AA+ minimum)
- Form inputs always show red ring focus state
- Dark mode: shift primary to `0.68 0.21 23` (lighter, maintains vibrancy)
