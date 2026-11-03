# NextBites

NextBites is a responsive recipe discovery page built with Next.js, React, and
TypeScript. It features shared site navigation, typed recipe data, and reusable
recipe cards.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project structure

- `app/components/SiteHeader.tsx` contains the shared navigation.
- `app/components/RecipeCard.tsx` renders a recipe from its TypeScript type.
- `app/data/recipes.ts` contains the typed recipe collection.
- `app/globals.css` defines the responsive layout and visual styling.

## Checks

```bash
npm run lint
npm run build
```

Recipes are supplied locally in `app/data/recipes.ts`; no external API or
environment variables are required.
