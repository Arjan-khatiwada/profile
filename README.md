# Arjan Khatiwada — Portfolio (React)

A React + Vite rebuild of the original static HTML portfolio, deployed to Cloudflare Pages
and connected to the custom domain `www.arjankhatiwada.com.np`.

## Stack

- **Vite + React 19** — build tooling and UI
- **react-router-dom** — client-side routing (`/`, `/about`, `/experience`, `/contact`)
- **react-helmet-async** — per-page `<title>` / meta tags for SEO
- Bootstrap 5 + Font Awesome (loaded via CDN, same as the original site) for layout/icons
- Formspree — contact form backend (same endpoint as before, now submitted via `fetch` instead of a full page POST)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploying to Cloudflare Pages

1. Push this repo to GitHub (see steps below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select this repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Under **Custom domains**, add `www.arjankhatiwada.com.np` (and `arjankhatiwada.com.np` if you
   want the apex to work too — set up a redirect from apex to www, or vice versa).
5. Cloudflare will auto-deploy on every push to `main`. No GitHub Actions workflow is needed —
   remove `.github/workflows/jekyll-gh-pages.yml` from the old repo since it built a Jekyll site,
   which no longer applies here.
6. `public/_redirects` already contains the SPA fallback rule
   (`/* /index.html 200`) so client-side routes like `/about` work on direct load/refresh.

### DNS

Point the domain's DNS in Cloudflare to the Pages project (Cloudflare will show you the exact
CNAME target once the Pages project is created — usually `<project-name>.pages.dev`).

## Contact form

Still uses the original Formspree endpoint (`https://formspree.io/f/xgvwvzzw`), submitted via
`fetch` from `src/pages/Contact.jsx` so the page doesn't reload. `contact.php` from the old repo
is not used — Cloudflare Pages (like GitHub Pages) serves static files only and cannot run PHP.

## Future: backend / API / database

Notes for when you're ready to add a shared backend for this profile and your other projects:

- **Cloudflare Workers** can host your API routes in the same Cloudflare account as this Pages site.
- **Cloudflare D1** (SQLite-based) or another hosted DB can back it.
- Cloudflare Pages Functions (a thin wrapper around Workers, living in a `functions/` directory
  in this repo) is the easiest on-ramp if you want the API to live alongside this frontend rather
  than as a fully separate service.

## Project structure

```
src/
  components/   Header, Footer, Layout, SEO, ProjectsSlider
  pages/        Home, AboutMe, Experience, Contact
  global.css    CSS custom properties (design tokens) + resets
  header.css    Nav/sidebar/timeline styles (ported from original)
  index-page.css  Project cards, slider, form styling (ported from original)
public/
  images/       All original images
  CNAME         Custom domain for Cloudflare/GitHub Pages
  _redirects    Cloudflare Pages SPA fallback rule
  robots.txt, sitemap.xml
```
