# GEMINI.md - Project Context

## Project Overview

`aboutme` is a lightweight, data-driven personal portfolio and resume website. It is designed to be easily forkable and customizable by simply editing a data file. The project emphasizes a clean, responsive design that works across mobile, desktop, and print (PDF).

### Main Technologies

- **Vanilla JavaScript:** Core logic and UI interactions.
- **Mustache.js:** Logic-less templating for rendering resume data.
- **Vanilla CSS:** Custom styling with dedicated print media queries.
- **Node.js & Puppeteer:** Used for automation tasks like updating metadata and generating a PDF version of the resume.

## Architecture and Structure

The project follows a simple data-driven architecture:

- **`data.js`**: The single source of truth for all resume content (name, contact, experience, education, skills).
- **`index.html`**: Contains the base structure and a Mustache template for the resume content.
- **`script.js`**: Orchestrates the rendering process and manages simple UI interactions (e.g., orientation-based "shine" effects).
- **`me.css`**: Manages the visual layout, including a specialized `@media print` section to ensure the resume looks professional when saved as a PDF.
- **`metaadder.js`**: A Node.js utility that syncs metadata from `data.js` to `index.html` and appends timestamps to assets for cache-busting.
- **`screenshot.js`**: Uses Puppeteer to generate `aboutme.pdf` by capturing a screenshot of the hosted site.

## Key Workflows

### 1. Updating Resume Content

All professional information is managed in `data.js`. To update your resume:

- Edit the `resumeData` object in `data.js`.

### 2. Updating Meta Tags & Assets

After making changes to `data.js` or assets, run the metadata update script:

```bash
node metaadder.js
```

This script will:

- Inject meta tags from `data.js` into `index.html`.
- Update asset URLs with a new timestamp (e.g., `me.css?v=123...`) to prevent browser caching issues.

### 3. Generating the PDF

The project can generate a PDF version of the resume. **Note:** This script reads from the live GitHub Pages URL.

```bash
node screenshot.js <your-github-username>
```

This generates `aboutme.pdf` in the root directory.

### 4. Deployment

The project is designed to be hosted via **GitHub Pages**.

- Ensure your changes are on the `gh-pages` branch (or the branch configured for GitHub Pages).
- Push your changes to GitHub to trigger the live site update.

## Development Conventions

- **Keep it Simple:** Avoid introducing heavy frameworks. Stick to Vanilla JS and CSS.
- **Data-Driven:** All content changes should be made in `data.js`, never hardcoded in `index.html`.
- **Print Optimization:** When modifying styles in `me.css`, always verify the impact on the print view.
- **Cache Busting:** Always run `metaadder.js` before deploying to ensure users receive the latest assets.
