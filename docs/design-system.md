# Design System

This portfolio uses a shared dark-glass visual language centered on clean section layouts, responsive bento grids, and glass only on interactive or content-bearing child items. New sections should reuse the primitives in `app/_components/design-system.tsx` instead of redefining wrappers or hover states inline.

## Core Principles

- Keep section wrappers visually quiet and apply glass styling to cards, tiles, and interactive child items instead.
- Keep content width readable with `max-w-6xl` style containers and consistent internal padding.
- Maintain a clear hierarchy: eyebrow, optional section index, title, then supporting body copy.
- Prefer cards and media frames over raw images floating on the page.
- Use restrained hover motion: slight lift, border emphasis, and gentle media scaling.

## Shared Primitives

- `SectionPanel`: structural section wrapper with no decorative surface styling by default.
- `SectionPanelContent`: standard internal grid and spacing wrapper.
- `SectionGlow`: optional decorative radial glow for leading sections.
- `SectionIntro`: standard eyebrow, index, heading, and description block.
- `SurfaceCard`: default glass-card surface and hover behavior.
- `EyebrowPill`: compact category or metadata pill.
- `MediaFrame`: standard framed media treatment for images and previews.
- `IconTile`: square tool or logo tile with shared hover treatment.

## Typography

- Section eyebrow: uppercase, tracked, small, `text-primary/80`.
- Section number: `text-2xl`.
- Section title: `text-3xl` on mobile, scales to `sm:text-5xl`.
- Body copy: `text-sm leading-6` on mobile and `sm:text-base`.
- Card title: `text-lg` to `text-2xl` depending on density and importance.

## Color and Surface Rules

- Base page uses `bg-background` with subtle radial gradients from `app/globals.css`.
- Section wrappers stay visually minimal while tiles and cards use semi-transparent white overlays on top of `card` and `primary` tints.
- Interactive borders shift toward `primary` on hover.
- Supporting copy should use `text-foreground/72` to `text-foreground/75` for legibility and hierarchy.

## Spacing

- Section padding should come from `SectionPanelContent`.
- Card interiors should generally use `p-4` to `p-6`.
- Grid gaps should stay within `gap-4`, `gap-5`, `gap-6`, or `gap-8`.
- Avoid arbitrary one-off margins unless the layout requires a clear exception.

## Motion

- Lift cards by a small amount on hover, typically `hover:-translate-y-1` or `hover:-translate-y-1.5`.
- Scale media subtly, usually between `1.02` and `1.05`.
- Keep transitions between `duration-300` and `duration-500`.

## Responsive Guidelines

- Default to single-column stacks on mobile.
- Expand to two columns on medium screens where content naturally splits.
- Use three-column and bento spans only when the content benefits from scanning density.
- Ensure images use `object-contain` unless cropping is intentional.

## Accessibility Guidance

- Keep image `alt` text descriptive and non-empty unless the image is purely decorative.
- Preserve semantic lists for grouped items and semantic headings for section titles.
- Maintain visible contrast between text and glass surfaces.
- Avoid hover-only meaning; content should remain understandable without interaction.

## Implementation Pattern

1. Wrap the section content with `PageSection`.
2. Add `SectionPanel` as a structural wrapper only.
3. Place content inside `SectionPanelContent`.
4. Use `SectionIntro` for the section heading block.
5. Apply `SurfaceCard`, `MediaFrame`, and `IconTile` only to the actual content tiles, cards, or controls.

Following this structure keeps new sections aligned with `Design Playground`, `Design Experience`, `Certifications`, `Trustworthy Partner`, `More from My Desk`, and `Testimonials`.
