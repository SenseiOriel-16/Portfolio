# Personal portfolio (Next.js)

Modern, responsive single-page portfolio: **Next.js 15**, **React 19**, **Tailwind CSS**, **Framer Motion**, dark/light mode, and optional GitHub project sync (off by default).

## Run locally

Prerequisites: **Node.js 18.18+** (or 20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Development server       |
| `npm run build` | Production build       |
| `npm run start` | Serve production build   |
| `npm run lint`  | ESLint                   |

## Customize content

Edit **`src/data/site.ts`** — name, bio, projects, timeline, skills, and social URLs.

### After you deploy (Vercel, Netlify, etc.)

This site is **code-based**, not a click-to-edit CMS. When something is live:

1. Edit files in your repo (locally or on **GitHub** with the pencil “Edit” button).
2. **Commit** and **push** to the branch your host watches (usually `main`).
3. The host **rebuilds** automatically (about one minute).

So: deploy once, then every update is **push → redeploy**. Environment variables (e.g. `GITHUB_USERNAME`) are set in the host’s dashboard, not only on your PC.

### Add a project

In **`src/data/site.ts`**, copy an existing object inside the **`projects`** array and change:

- `id` — unique string (e.g. `"4"`).
- `title`, `description`, `tech` (tags).
- `githubUrl` — primary link (overview, PDF, etc.).
- `liveUrl` — second link (or same URL twice if you only have one).
- **`image`** (optional) — path under **`public/`**, e.g. `image: "/images/projects/my-photo.jpg"` (see below).

### Add or change skills

Still in **`site.ts`**, edit **`skillCategories`**. Each category is a name with an array of `{ name, value }` (value = `0`–`100` for the bar). You can:

- Add rows inside an existing category, or
- Add a whole new category (copy the pattern of `Communication:` / `Research:` / …).

The Skills section lists every category automatically.

### Add pictures

1. Put files in **`public/images/`** (e.g. **`public/images/projects/`** for project covers).
2. Reference them with a path that **starts at the site root**: `/images/portrait.jpg`, not `public/images/...`.
3. **Portrait (About):** set `about.portrait` in **`site.ts`** to that path, or `""` to hide the photo.
4. **Project cover:** set `image: "/images/projects/your-file.jpg"` on that project (optional).

Supported formats: **JPG, PNG, WebP, GIF**. Use reasonably sized images (e.g. under ~1–2 MB) so the site stays fast.

## Optional GitHub projects

To show a **From GitHub** row under projects, set `site.githubUsername` in `site.ts` or set **`GITHUB_USERNAME`** in the project root **`.env`** file (see that file). Leave empty to hide that block.

## Project structure

- `src/app` — App Router layout, page, global styles, API routes
- `src/components` — Layout, hero, sections, UI, effects, providers
- `src/data` — Site copy and structured data
- `src/hooks` — Reusable hooks (e.g. typing effect)
