# Prathamesh's Portfolio

Personal portfolio of [@pr4th4meshh](https://github.com/pr4th4meshh), built with [Astro](https://astro.build), Tailwind CSS and Animate.css.

The site is fully static: every section renders to HTML at build time, and only a few tiny scripts ship to the browser (intro loader, custom cursor, GitHub contribution graph, local clock).

## Development

Requires Node.js 24 (Astro needs >= 22.23).

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build -> dist/
npm run preview  # serve the build locally
```

## Structure

```
src/
  pages/index.astro      single page, section order lives here
  layouts/Layout.astro   <head>, meta tags, global styles
  components/*.astro     one component per section
  styles/global.css      Tailwind layers, Poppins font, loader state
  assets/                images, fonts, resume.pdf
```
