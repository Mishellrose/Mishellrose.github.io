# Mishell Rose Mathew — Portfolio

Dark single-page portfolio built with React, Vite, TypeScript, Tailwind CSS, GSAP, Framer Motion, and hls.js.

Live site (GitHub Pages): **https://mishellrose.github.io**

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`npm run build` also copies `dist/index.html` → `dist/404.html` so React Router routes work on GitHub Pages.

## Deploy (GitHub Pages)

1. Create a **public** repo named **`Mishellrose.github.io`** under the [Mishellrose](https://github.com/Mishellrose) account.
2. Push this project to that repo on the `main` branch.
3. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

Content lives in `src/lib/data.ts` (projects, experience, skills, contact).