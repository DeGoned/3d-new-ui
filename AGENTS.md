# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

The primary app is a Vite + React + TypeScript dashboard for a B2B manufacturing / digital-curation workflow. Static HTML pages also live in `public/` and are served by the same Vite dev server. There is no backend.

## Running the Project

Prerequisites: Node.js 22.

```bash
npm ci
npm run dev
```

The dev server listens on `0.0.0.0:3000`. Typecheck with `npm run lint` (`tsc --noEmit`). Production build with `npm run build`.

## Cursor Cloud specific instructions

- Install is `npm ci` from `package-lock.json`. Node 22 is already on the default image; do not install a second Node toolchain.
- `start` should run `npm run dev` and stay in the foreground. Skip startup when `http://127.0.0.1:3000/` already responds.
- `GEMINI_API_KEY` is injected by `vite.config.ts`, but no application code calls Gemini. The dashboard and static pages run without it.
- Sidebar navigation (Orders, Address, and the add-address modal) is the core in-app flow. `public/cart.html`, `public/login.html`, `public/home-v3.html`, `public/quote-manage.html`, `public/model-configuration.html`, and `public/order-confirmation.html` are separate static pages on the same origin.

## Architecture

### Pages

| File | Purpose |
|------|---------|
| `src/App.tsx` | React dashboard (overview, orders, coupons, address, settings) |
| `public/home-v3.html` | Landing page with CAD file drag-and-drop upload |
| `public/login.html` | Auth page with flip animation (login + registration), Google OAuth |
| `public/quote-manage.html` | Quote management dashboard |
| `public/model-configuration.html` | 3D model configuration workflow |
| `public/order-confirmation.html` | Checkout/order confirmation |
| `public/cart.html` | Cart page linked from the dashboard |

The React app uses Tailwind 4 through `@tailwindcss/vite`. Each static HTML page is self-contained, with its own Tailwind CDN config and inline scripts.

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
