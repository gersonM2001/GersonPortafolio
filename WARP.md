# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Gerson Lorenzo built with **Astro 5.2**, **Tailwind CSS 4.0**, and **MDX**. The site showcases projects, skills, and technical expertise in a clean, navigable interface.

## Development Commands

Run from the project root:

- `npm install` - Install dependencies
- `npm run dev` - Start dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro check`)

## Architecture

### Content Management Pattern

This project uses a **static content architecture** without Astro Content Collections. Content is managed through TypeScript files that export typed data structures:

- `src/content/acerca.ts` - User profile information (name, title, description, image)
- `src/content/habilidades.ts` - Skills and capabilities array
- `src/content/tecnologias/tecnologias.ts` - Technologies organized by category (languages, databases, frameworks) with proficiency percentages
- `src/content/ProyectosCartas.ts` - Project card data (title, description, tools, image, slug)
- `src/content/proyectos.ts` - Navigation structure for projects including the sidebar menu hierarchy

### Project Detail Pages (MDX-based)

Project detail pages use **MDX files** in `src/content/projects/` with dynamic routing:

- Each project has an MDX file (e.g., `sharkcat.mdx`, `inteligencia.mdx`)
- Frontmatter structure:
  ```yaml
  slug: "project-slug"
  title: "Project Title"
  description: "Brief description"
  ```
- Dynamic route handler: `src/pages/projects/[slug].astro`
- Uses `getCollection('projects')` to fetch MDX files
- Auto-generates table of contents from MDX headings
- **Important**: When adding new projects, create both:
  1. An entry in `ProyectosCartas.ts` (for the projects listing page)
  2. A corresponding MDX file in `src/content/projects/` with matching slug

### Layout System

- **Base Layout**: `src/layouts/Layout.astro` - Contains shared structure with Header, SideBar, and Footer
- **Components**:
  - `header.astro` - Top navigation bar
  - `sideBar.astro` - Left sidebar navigation (receives `links` prop for dynamic menu)
  - `InformacionGeneral.astro` - Profile/hero section
  - `habilidadesComponente.astro` - Skills display
  - `TecnologiasManejadas.astro` - Technologies with progress bars
  - `proyectos.astro` - Project cards grid

### Interfaces

Type definitions in `src/interfaces/interfaces.ts`:
- `ItemsProps` - Navigation items with optional nested sub-items
- `Proyecto` - Project card structure

Additional interfaces are co-located in their respective content files (`Habilidad`, `Tecnologia`, `Acerca`).

### Styling

- **Tailwind CSS 4.0** integrated via Vite plugin (`@tailwindcss/vite`)
- Global styles: `src/styles/global.css` (imports Tailwind)
- Slug-specific styles: `src/styles/styleslug.css` (for project detail pages)
- Content configured for all component file types in `tailwind.config.mjs`

## Key Patterns

### Adding New Content

**To add a new project:**
1. Create MDX file in `src/content/projects/` with proper frontmatter
2. Add project card entry to `src/content/ProyectosCartas.ts`
3. Add navigation link to `NavProyectos` array in `src/content/proyectos.ts`
4. Ensure slug matches across all three locations

**To modify user info or skills:**
- Edit corresponding TypeScript file in `src/content/`
- Changes propagate automatically to components consuming the data

### Image Assets

- Static images stored in `public/imagenes/`
- Referenced with absolute paths: `/imagenes/filename.png`
- Subdirectories: `ImagenesPrincipales/` for project thumbnails

### Navigation Structure

The sidebar navigation accepts hierarchical data via the `ItemsProps` interface, supporting nested sub-items. The `NavProyectos` constant in `proyectos.ts` defines the site's navigation tree.

## TypeScript Configuration

- Extends Astro's strict TypeScript config (`astro/tsconfigs/strict`)
- Type checking available via `npm run astro check`

## Build Output

Production builds output to `./dist/` directory, which should be excluded from version control (configured in `.gitignore`).
