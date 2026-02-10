<div align="center">
  <img width="600" alt="Clusta" src="https://i.ibb.co/nqSPczRm/newclustalogobg.png" />
</div>

# Clusta Genomics — Local Development

This repository contains the Clusta Genomics website (React + Vite). The project uses Tailwind CSS, React Router, and a few utility libraries. The app is configured for local development and production builds using Vite.

## Quick Start

Prerequisites: Node.js (16+ recommended) and npm

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

## Project Notes
- Entry: `index.tsx` mounts the app; routing is defined in `App.tsx`.
- Pages: `pages/*` contains route components (Home, About, Innovation, Products, Contact).
- The site uses a small set of local images found in `public/images/` for product cards.
- A favicon was added to `index.html` to match the navbar logo.

## Recent Changes (short)
- Diagnostic tests section on the About page was simplified to three cards and an "Explore All Tests" CTA that links to the external diagnostics site.
- Image `onError` fallbacks were removed and unused images and Windows Zone.Identifier artifacts were cleaned from the repo.

## Troubleshooting
- If you see missing images, confirm files under `public/images/` exist.
- For routing issues ensure your dev server supports SPA fallback (Vite does by default).

## Contributing
- Make changes on a branch, test locally, and open a PR. Keep changes scoped and run the dev server to verify.

---

If you'd like, I can also add a short developer checklist or automated scripts (lint/format/test) next.
