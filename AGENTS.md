# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 5 portfolio deployed to GitHub Pages. Page entry points live in `src/pages/`; `src/pages/index.astro` composes UI from `src/components/` and the shell in `src/layouts/Layout.astro`. Keep icons in `src/components/Icons/`. Global styles are in `src/styles/global.css`, with theme extensions in `tailwind.config.mjs`.

Portfolio data uses Astro content collections. Add Markdown entries under `src/content/projects/` and `src/content/experiences/`; frontmatter must match `src/content/config.ts`. Images, fonts, the favicon, and CV belong in `public/` and are referenced from the site root (for example, `/images/projects/pintorrea.webp`). Do not commit `dist/`, `.astro/`, or `node_modules/`.

## Build, Test, and Development Commands

- `npm ci` installs exact dependency versions from `package-lock.json`.
- `npm run dev` starts Astro's development server at `http://localhost:4321` with live reload.
- `npm run build` creates the production site in `dist/` and validates Astro compilation and content schemas.
- `npm run preview` serves the built output locally for final browser checks.

## Coding Style & Naming Conventions

Follow the existing style: two-space indentation, semicolons in frontmatter scripts, and single quotes for imports. Use PascalCase for Astro components (`ThemeSwitchButton.astro`), camelCase for variables, and kebab-case for content files (`video-share.md`). Prefer Tailwind utilities and reserve `global.css` for shared rules. TypeScript uses Astro's strict configuration; keep schemas synchronized with Markdown frontmatter.

## Testing Guidelines

No test framework or coverage target is configured. Treat `npm run build` as required validation. For UI changes, run `npm run preview` and verify responsive layouts, both themes, navigation, images, and external links. If adding tests, colocate `*.test.ts` or `*.test.tsx` files with the feature and add a runner command to `package.json`.

## Commit & Pull Request Guidelines

Recent history follows Conventional Commit-style subjects such as `feat(): add work experience section`, `fix(): header`, and `chore(deps): bump vite...`. Use an imperative, concise subject with an appropriate type (`feat`, `fix`, `style`, `refactor`, or `chore`) and an optional meaningful scope.

Pull requests should explain the user-visible change, note validation performed, and link any related issue. Include before/after screenshots for visual changes, especially at desktop and mobile widths and in both themes. Keep PRs focused and ensure `npm run build` passes; merges to `master` trigger the GitHub Pages deployment workflow.
