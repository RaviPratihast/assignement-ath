# athenaInstitute Frontend

React + Vite + Tailwind v4 frontend scaffold for the athenaInstitute landing page.
The UI is driven from centralized JSON data.

## Stack

- React 19
- Vite 8
- Tailwind CSS v4
- pnpm

## Scripts

- `pnpm dev` - start local development server
- `pnpm build` - create production build
- `pnpm preview` - preview production build locally
- `pnpm lint` - run ESLint

## Data-Driven Sections

- **Navbar** uses `src/data/pagedata.json` from `pagedata.custom_blocks["1"].data`
- **Hero** uses `src/data/pagedata.json` from `pagedata.custom_blocks["2"].data`

## Project Structure

- `src/main.jsx` - app entry point
- `src/App.jsx` - page composition (navbar + hero with controlled gap)
- `src/components/Navbar.jsx` - desktop/mobile navbar and slide-in mobile drawer
- `src/components/HeroSection.jsx` - full-viewport hero section
- `src/data/pagedata.json` - primary content/config source
- `src/data/index.js` - centralized data export
- `src/index.css` - Tailwind import (`@import "tailwindcss";`)
- `docs/design.md` - temporary design token/reference notes

## Notes

- Navbar header and hero content are both JSON-driven (not hardcoded text).
- Hero is placed directly below header with an `8px` gap as currently requested.
