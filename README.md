# diegobarrioh-dev

Personal CV and portfolio site built with Astro. Includes bilingual (ES/EN) content, light/dark themes, and a deployment pipeline to a Raspberry Pi.

## Sections

- Home: summary, highlights, quick facts, and contact.
- About: profile, focus areas, and working style.
- CV: experience timeline, skills, education, and languages.
- Projects: selected work and stack tags.

## Tech Stack

- Astro
- Vanilla CSS (custom design system + theme toggles)
- JavaScript for theme/language persistence
- Static assets in `public/` (logos, PDF CV, background image)

## Pipelines

- Build: `npm run build` outputs to `dist/`.
- Deploy: `./deploy.sh` builds, rsyncs to staging on the server, then promotes to `/var/www/html`.

## Commands

| Command         | Action                                     |
| :-------------- | :----------------------------------------- |
| `npm install`   | Install dependencies                        |
| `npm run dev`   | Local dev server at `localhost:4321`       |
| `npm run build` | Production build to `./dist/`              |
| `npm run preview` | Preview production build locally         |
| `./deploy.sh`   | Build and deploy to the Raspberry Pi server |
