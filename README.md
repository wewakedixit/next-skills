# NextSkills Course Platform

A course platform prototype with assigned courses, timed tests, progress tracking, certificates, and an admin panel.

It currently includes:

- Learn Google Search Console
- Google Search Ads
- Plain-English SEO terms
- Practical examples
- Timed lesson tests
- Student dashboard and profile
- Admin course assignment and reports

## Persistent Progress

The app includes a Vercel serverless API at `api/platform-state.js` that can save platform state to a Postgres/Neon database. Add a Postgres database to the Vercel project and set either `POSTGRES_URL` or `DATABASE_URL` in the Vercel environment variables.

When the database is configured, student progress follows the user across devices, browsers, cleared cache, and incognito sessions. Without the database variable, the app falls back to browser `localStorage`.

## Local Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.
