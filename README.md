# Portfolio Website

Personal portfolio for **Karan Kardam** — a dark, minimalist site with a black + cyan theme, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive dark/light theme toggle (defaults to dark, remembers your choice)
- `⌘K` / `Ctrl+K` command palette for quick navigation
- Scroll-triggered fade-in animations
- Sections: Experience, Education, Projects, Publications, Skills
- Résumé available at `/resume.pdf`

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Google Fonts (Inter + Fraunces)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Editing Content

All content lives in [`lib/data.ts`](lib/data.ts) — profile, experience, education,
projects, publications, and skills. Update that file to change what the site displays.
Replace `public/resume.pdf` to update the downloadable résumé.

## Deployment

The site is a static-friendly Next.js app and can be deployed to
[Vercel](https://vercel.com/) (recommended) with zero configuration, or exported
for GitHub Pages.
