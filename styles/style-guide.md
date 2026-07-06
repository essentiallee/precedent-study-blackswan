# Black Swan Style Guide

Reference site: https://blackswan.support/

This guide translates the visual system of the Black Swan website into rules for the precedent study. The design should feel like a sparse research interface: technical, direct, collective, and slightly raw. Avoid polished portfolio styling, soft gradients, decorative cards, and overly smooth brand language.

## 1. Design Character

- Treat the page as a research archive or digital noticeboard rather than a promotional site.
- Use a monospaced typographic voice throughout.
- Prefer hard edges, thin rules, visible structure, and simple divisions.
- Let the design feel low-tech and intentional: black, white, grid, text, image, border.
- Keep interaction states blunt and legible rather than animated or ornamental.

## 2. Typeface

Use one primary typeface:

- Primary: `Space Mono`
- Source: Google Fonts
- Weights: `400` regular and `700` bold
- Fallback stack: `Space Mono, monospace`

Recommended import:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
```

Do not use Roboto, Helvetica, Arial, or a serif face for this project. The reference site’s identity depends on the mechanical rhythm of `Space Mono`.

## 3. Typography Rules

- Body text: `16px`, `400`, line-height around `1.3`.
- Main byline or large intro text: `36px`, `400`, line-height `1.1`.
- Mobile large text: reduce to about `26px`.
- Small metadata, footer text, form notes: `12px`.
- Headings: `16px`, `700`, no oversized hierarchy.
- Use uppercase sparingly for labels such as section headers.
- Letter spacing should stay normal. The reference uses monospaced density, not spaced-out luxury typography.
- Word spacing may be slightly tightened for large text, around `-0.1em` to `-0.2em`, if it helps match the reference.

## 4. Core Color Palette

Use a strict black-and-white palette with one orange reference accent.

```css
:root {
  --black: #000000;
  --white: #ffffff;
  --signal-orange: #ff3d00;
  --white-hover-30: rgba(255, 255, 255, 0.3);
  --white-hover-20: rgba(255, 255, 255, 0.2);
  --white-field-70: rgba(255, 255, 255, 0.7);
}
```

Primary colors:

- Page/background black: `#000000`
- Light text on dark sections: `#ffffff`
- Dark text on light sections: `#000000`
- Browser/theme accent from reference site: `#ff3d00`

Interaction colors:

- Hover on dark/light bordered blocks: `rgba(255, 255, 255, 0.3)`
- Secondary hover: `rgba(255, 255, 255, 0.2)`
- Form field fill: `rgba(255, 255, 255, 0.7)`

Avoid the current red background palette. Do not use `#C73A2F`, charcoal gray text, muted gray body text, olive accents, gradients, or soft neutral palettes.

## 5. Backgrounds

- Use `#000000` as the primary page background.
- The reference site layers a subtle dust texture over black. If a texture is available, apply it lightly as a repeating background image.
- White or light panels may be used inside the page, but they should be divided with black borders and remain visually plain.
- Do not use drop shadows, blurred color fields, rounded background panels, or decorative gradients.

Reference pattern:

```css
body {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Space Mono', monospace;
}
```

## 6. Layout

- Use a centered content width around `900px`.
- Cap the layout at `95vw` so it nearly fills narrow screens.
- Use simple vertical stacking.
- Divide major sections with `1px solid` borders.
- Use `20px` as the base padding unit.
- Use `40px` for larger desktop section padding.
- On mobile, collapse larger padding back to `20px`.

Recommended layout constants:

```css
--content-width: 900px;
--content-max: 95vw;
--space-sm: 20px;
--space-md: 40px;
--rule: 1px solid currentColor;
```

## 7. Borders and Structure

The reference site relies on rules instead of cards.

- Use `1px solid #000000` on light sections.
- Use `1px solid #ffffff` on dark sections.
- Place borders between rows, calls to action, footer areas, and feed items.
- Avoid rounded corners. Border radius should be `0`.
- Avoid nested card layouts.

## 8. Links and Buttons

Links and buttons should look structural, not decorative.

- Links inherit the surrounding text color.
- Default links may have no underline.
- Hover states can use underline or a pale white overlay.
- Buttons should be rectangular, full-width when placed in columns, and `50px` tall when used as form or CTA controls.
- Button typography should remain `Space Mono`, `16px`.
- Button border: `1px solid #000000` on light sections or `1px solid #ffffff` on dark sections.
- Button background: transparent by default.
- Button hover: `rgba(255, 255, 255, 0.3)`.

Do not use pill buttons, rounded CTAs, gradients, or colored button fills.

## 9. Research Feed Pattern

For source lists, bibliography sections, or archive entries, use the reference site’s research feed logic:

- Dark background: `#000000`
- Text: `#ffffff`
- Each row has `border-bottom: 1px solid #ffffff`
- Row padding: `20px`
- Row layout: title on the left, metadata/date/source on the right
- Hover: `background: rgba(255, 255, 255, 0.3)`
- Metadata can be `12px`
- Hide secondary metadata on small screens if space is tight

This pattern is a strong fit for the precedent study’s source lists.

## 10. Forms and Inputs

If a subscription, contact, or filter form appears:

- Input height: `50px`
- Input font: `Space Mono`, `16px`
- Input background: `rgba(255, 255, 255, 0.7)`
- Input border: `none` or `1px solid currentColor`, depending on context
- Submit button: transparent background, `1px solid #000000`, square corners
- Placeholder and helper text: `12px`

## 11. Images

- Use images plainly, centered, and without decorative frames.
- Header images can be constrained to `max-height: 50vh`.
- Do not crop images aggressively unless the crop serves the archive layout.
- Avoid soft overlays, dark blur effects, and image cards.

## 12. Responsive Behavior

- At widths below `800px`, stack two-column sections into one column.
- Reduce large intro/byline text from `36px` to about `26px`.
- Reduce desktop padding from `40px` to `20px`.
- Keep borders intact so the site still feels gridded on mobile.
- Hide nonessential right-side metadata in feed rows when needed.

## 13. Application to This Precedent Study

For this repository, the current visual system should be adjusted as follows:

- Replace `Roboto` with `Space Mono`.
- Replace the red background `#C73A2F` with black `#000000`.
- Use white text on the main dark background.
- Remove muted gray body text. Use white, black, and opacity-based hover fills instead.
- Treat source sections as research-feed rows with white borders.
- Keep headings small, bold, and monospaced rather than large and editorial.
- Use square, bordered controls and links if new navigation or CTAs are added.

## 14. Summary

The Black Swan reference style is not minimal in the polished Swiss sense. It is minimal in an infrastructural sense: monospaced type, black-and-white contrast, visible borders, hard divisions, archival rows, and direct interaction states. The precedent study should adopt that structure closely.
