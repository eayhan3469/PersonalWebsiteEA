# egemenayhan.net

Personal portfolio site for Egemen Ayhan — Game Developer.
Pure static HTML/CSS/JS, no build step.

## Structure

```
index.html            Single-page site (all sections)
assets/
  css/styles.css      Design system + layout
  js/i18n.js          TR / EN translations + language toggle
  js/content.js       Work / Prototypes / Experience / Education data + render
  js/main.js          Nav, scroll reveal, theme toggle
  img/                favicons (svg + png), posters, og-image
  video/              web-ready preview loops (work/ and prototypes/)
scripts/
  serve.py            local dev server (threaded + Range-aware)
  transcode.sh        regenerate the preview loops from _media-source/
_headers              Cloudflare Pages caching + security headers (incl. CSP)
404.html              branded not-found page
robots.txt            crawler policy + sitemap pointer
sitemap.xml           single-URL sitemap
site.webmanifest      icon set + theme colour
```

## Features

- Bilingual TR/EN (toggle), dark/light theme (toggle), both persisted. Theme
  is applied by a tiny inline `<head>` script before first paint (no flash);
  its sha256 is pinned in the `_headers` CSP.
- Scroll progress bar, scrollspy nav, staggered reveal, back-to-top.
- **Lightbox** — clicking a Work card or Prototype tile opens a modal with a
  full-size player, description and links (ESC / backdrop / × to close).
- **Work cards** show a platform badge (Steam / Google Play) derived from
  `work[].links[0].label`.
- **Prototype filter** chips with live counts (`All 20 · Hypercasual 6 …`),
  driven by `PROTOTYPES[].group` in `content.js`.
- **Testimonials** section (`#testimonials`) — hidden until the `TESTIMONIALS`
  array in `content.js` has entries. `quote` / `title` take a string or
  `{ en, tr }`.
- **Contact form** — Ad / E-posta / Mesaj, posts to Web3Forms. Disabled and
  hidden unless `WEB3FORMS_KEY` is set in `main.js`; the mailto button is the
  fallback path.
- **CV button** in the hero — hidden unless `assets/Egemen-Ayhan-CV.pdf`
  exists (drop a web-safe PDF there to enable it).
- `assets/img/og-image.png` (1200×630) for social sharing; regenerate with
  the ffmpeg command in `scripts/` history if the copy changes.

## Local preview

```bash
python scripts/serve.py 8000     # then open http://localhost:8000
```

Use this, **not** `python -m http.server` — the stdlib one is single-threaded
and ignores Range requests, so the video previews stall. (Cloudflare Pages
handles both fine in production.)

## Editing content

- **Static text / translations** (nav, hero, about, section headings): edit
  `assets/js/i18n.js`. Every string has a key present in **both** the `en` and
  `tr` maps; the element in `index.html` carries `data-i18n="<key>"`.
- **Work, Prototypes, Experience, Education:** edit `assets/js/content.js`
  (`CONTENT` bilingual arrays + the `PROTOTYPES` list). Rendered by JS into
  `#workGrid`, `#prototypeGrid`, `#experienceList`, `#educationList`.
- **Previews:** `content.js` shows a poster `<img>`; on hover (or tap) it
  creates a muted looping `<video>` for that card/tile and plays it, pausing
  on mouse-out. Elements are reused, max 8 live. Slugs map to
  `assets/{img,video}/{work,prototypes}/<slug>.{jpg,mp4}`.

## Deploy — Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Build settings: **Framework preset: None**, **Build command: (empty)**,
   **Build output directory: `/`**.
4. After the first deploy, add the custom domain `egemenayhan.net` under
   the project's *Custom domains* tab and update the nameservers / DNS.

## Structure (single page, top → bottom)

Hero → **Work** (featured projects) → **Prototypes** (20-tile gallery) →
About → Skills → Testimonials (hidden until populated) →
Experience (compact) + Education → Contact

Projects are up front; Experience is a de-emphasised compact list near the end.

## Media

Originals dropped by Egemen live in `_media-source/` (~1.1 GB, git-ignored,
never deployed — keep as backup or delete).

Web-ready previews are generated with ffmpeg and **are** committed:

| Where | Format | Source of truth |
|---|---|---|
| `assets/video/work/<slug>.mp4` | 1280×720, ~16 s, silent, loop | `CONTENT.*.work[].video` |
| `assets/video/prototypes/<slug>.mp4` | 480×640 (3:4), ~12 s, silent, loop | `PROTOTYPES[].slug` |
| `assets/img/{work,prototypes}/<slug>.jpg` | poster frame | auto |

Tiles/cards show the poster and play the loop on hover (desktop). Total
deployed media ≈ 17 MB.

Regenerate with `scripts/transcode.sh` (adjust the slug lists inside).
Some clips needed a `crop=` to strip baked-in letterbox/pillarbox
(pixelblock, freecastle) — see that script.

## TODO before launch

- [x] Experience + Education from CV
- [x] Prototype gallery with poster images + MP4 previews
- [x] City set to İstanbul, Türkiye
- [x] Work project videos + Steam / Google Play links in `content.js`
- [x] `assets/img/og-image.png` (1200×630) + favicons (svg + png)
- [x] Contact form (Web3Forms key wired in `main.js`)
- [x] 404 page, robots.txt, sitemap.xml, CSP header
- [ ] 2–3 testimonial quotes → `TESTIMONIALS` in `content.js`
- [ ] Web-safe CV PDF at `assets/Egemen-Ayhan-CV.pdf` (no personal phone /
      third-party reference numbers) to reveal the hero CV button
- [ ] Verify each Work card's video shows the right game; confirm the
      "Topac Battle" role wording
- [ ] Verify the CSP on the Cloudflare **preview** URL (DevTools → Console /
      Network) before pointing the domain
- [ ] `git init`, push to GitHub, connect Cloudflare Pages (see above)
