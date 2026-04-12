# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML/CSS frontend** for a B2B industrial manufacturing platform (CAD/3D printing services). There is no build system, no package manager, and no backend — files run directly in the browser.

## Running the Project

Open any HTML file directly in a browser. No build step required.

For a local dev server (optional):
```bash
python3 -m http.server 8080
# or
npx serve .
```

## Architecture

### Pages

| File | Purpose |
|------|---------|
| `home - V3.html` | Main landing page with CAD file drag-and-drop upload |
| `login.html` | Auth page with flip animation (login + registration), Google OAuth |
| `quote-manage.html` | Quote management dashboard |
| `model-configuration.html` | 3D model configuration workflow |
| `order-confirmation.html` | Checkout/order confirmation |

Each page is **fully self-contained** — its own Tailwind config, styles, and scripts are all inline.

### Tech Stack

- **Tailwind CSS** via CDN (`cdn.tailwindcss.com`) — each page has its own `tailwind.config` block in a `<script type="text/javascript">` tag at the top
- **Material Symbols Outlined** via Google Fonts for icons
- **Google Fonts**: Inter, Manrope, Space Grotefu
- **Vanilla JS** — minimal interactivity inline in `<script>` tags at bottom of each file

### Design System

Each page defines its own Tailwind theme with:
- Primary blue variants (~`#0049db`–`#1978e5` range, varies per page)
- Custom border radius tokens, shadow utilities, and font families
- Glass morphism panels: `backdrop-blur`, semi-transparent backgrounds
- 12-column grid layouts, mobile-first responsive breakpoints (`md:`, `lg:`)

### Branding Note

Pages use different brand names (Foundry3D, PrecisionForge, Digital Foundry, PRECISION CORE) — this appears intentional per-page, not a consistency error.

## Working in This Codebase

- When editing styles, use **Tailwind utility classes** already present on the page. Avoid adding `<style>` blocks unless for animations or pseudo-elements that Tailwind can't handle.
- To add a new icon, use a `<span class="material-symbols-outlined">icon_name</span>` — icon names come from Google's Material Symbols library.
- The Tailwind config at the top of each file defines custom theme tokens (colors, fonts, radii). Reference these token names (e.g., `text-primary`, `bg-surface`) rather than raw hex values.
- JS is minimal and inline — keep it that way unless complexity justifies a separate script file.
