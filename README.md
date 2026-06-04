# Aryan Choudhary — Portfolio

Minimal-dark full-stack developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4 + shadcn/ui
- Framer Motion
- Zod-validated JSON content

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

Edit files in `content/`:

- `site.json` — name, bio, social links, email
- `projects.json` — featured projects
- `experience.json` — timeline
- `skills.json` — skill groups

Add project screenshots to `public/projects/` and place your resume at `public/resume.pdf`.

## Deploy to Vercel

1. Push this repo to GitHub (`Aryanxx4/portfolio` or similar).
2. Import the project on [Vercel](https://vercel.com).
3. Set your custom domain in Vercel project settings.
4. Update `metadataBase` in `app/layout.tsx` and `app/sitemap.ts` with your production URL.
5. Add the live URL to your [GitHub profile README](https://github.com/Aryanxx4/Aryanxx4) and LinkedIn.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint
