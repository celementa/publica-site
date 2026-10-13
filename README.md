# publica website — where things live

- **All meta data (titles, descriptions, canonical URLs/slugs, share images, noindex):** `_data/seo.yml`
- **Site-wide settings (domain, GTM container ID, default share image):** `_config.yml`
- **Organization schema (JSON-LD, homepage only):** `_includes/schema-organization.html`
- **Head template (title/description/canonical/Open Graph/GTM):** `_includes/seo-head.html`
- **sitemap.xml** is generated automatically from `_data/seo.yml`; **robots.txt** points to it.

Edit any of these in GitHub (pencil icon → Commit). GitHub Pages rebuilds the site in 1–2 minutes.
If a change breaks the build, the previous version stays live — check the Actions tab for the error.

## Brand
- Logo: `assets/logo-full.svg`, `assets/logo-mark.svg` (traced from the brand PNGs, colour follows the text colour). Favicon/schema logo: `assets/favicon.png`, `assets/logo.png`.
- Fonts: Glametrix (SIL OFL) self-hosted in `assets/fonts/` for headings. Body text uses the system font stack, so Apple devices show SF Pro; others fall back to Inter. SF Pro can't be self-hosted (Apple licence).
- Colours: #030933 navy, #3f4f7d steel, #363c43 graphite, #e7edf4 ice, #e0ebee mist, #ffffff (tokens at the top of `site.css`).

## Contact form
Submissions go to Web3Forms (access key in `contact.html`) and are emailed to the address registered there. On success the page pushes `form_submit_success` to the dataLayer for GTM.
