# publica website — where things live

- **All meta data (titles, descriptions, canonical URLs/slugs, share images, noindex):** `_data/seo.yml`
- **Site-wide settings (domain, GTM container ID, default share image):** `_config.yml`
- **Organization schema (JSON-LD, homepage only):** `_includes/schema-organization.html`
- **Head template (title/description/canonical/Open Graph/GTM):** `_includes/seo-head.html`
- **sitemap.xml** is generated automatically from `_data/seo.yml`; **robots.txt** points to it.

Edit any of these in GitHub (pencil icon → Commit). GitHub Pages rebuilds the site in 1–2 minutes.
If a change breaks the build, the previous version stays live — check the Actions tab for the error.
