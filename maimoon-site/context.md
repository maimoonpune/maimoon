# Maimoon Website — Project Context

## What this is
Website for Maimoon Industrial Hardware & Plywood, a hardware/plywood
shop in Kondhwa, Pune, run by the user's father. Live at https://maimoon.in

## Stack
- React + Vite
- **vite-react-ssg** for prerendering (migrated from plain client-side
  SPA — see "SEO work" below for why). Build command is now
  `vite-react-ssg build`, not plain `vite build`.
- **react-router-dom v6** — deliberately pinned here, do not upgrade to
  v7. vite-react-ssg's SSR renderer depends on `react-router-dom/server`,
  which v7 removed. This caused a real build failure once already.
- `vite-react-ssg`'s own `<Head>` component for per-page title/meta
  (replaced `react-helmet-async`, which was removed).
- Plain CSS per-component (no Tailwind, no CSS framework)
- No backend — fully static site, prerendered to HTML at build time

## Hosting & deployment
- GitHub: `maimoonpune/maimoon` — repo root contains a `maimoon-site/`
  subfolder that IS the actual project (Vercel Root Directory setting
  is set to `maimoon-site` — if a fresh deploy ever fails with
  `vite: command not found` or similar, check this setting first).
- Vercel: auto-deploys on push to `main`. `vercel.json` sets
  `cleanUrls: true` so prerendered files like `about.html` serve at
  `/about`.
- Domain: `maimoon.in` is live and DNS-configured (GoDaddy → Vercel).
  `siteUrl` in `shop.js` and the generated `sitemap.xml`/`robots.txt`
  all correctly point at `https://maimoon.in`.
- **Domain routing (fixed 2026-08-15):** `maimoon.in` is the Production
  domain on Vercel; `www.maimoon.in` redirects to it via 308. This was
  previously backwards (`www` was Production with `maimoon.in`
  redirecting), which caused a redirect chain flagged in Google Search
  Console. Do not reverse this — all sitemap URLs, canonical tags, and
  JSON-LD structured data use the non-www form. This is a Vercel
  dashboard setting, not in the repo.

## Working folder — IMPORTANT
There was previously a folder-duplication issue (a temp git clone got
created separately from the main working folder to handle a push). This
has been resolved: **`Downloads\maimoon-site\maimoon-site\` is now the
single, sole working folder**, confirmed as a clean, properly connected
git clone (origin = maimoonpune/maimoon, verified via `git status` and
`git log`). The temporary duplicate folder was deleted. Do not recreate
a second clone/copy — work directly in this folder and push from it
normally.

## Repo structure
```
maimoon-site/
  src/
    data/
      shop.js              <- ALL business data: phones, address, hours,
                               geo coordinates, map URLs, brands array,
                               categories (with products arrays),
                               reviewUrls, placeholderReviews (array
                               still present but not rendered — ready
                               for real quotes). Edit here first for
                               any content change.
      categoryContent.js   <- 300-600 word unique prose per category,
                               used on the category detail pages.
    components/
      Header.jsx/css        sticky nav + working search + theme toggle
      Footer.jsx/css        footer grid + Privacy Policy link
      BrandStrip.jsx/css    marquee of brand names
      FAQ.jsx/css           accordion (<details>/<summary>), used on
                             Home and Contact pages
      CopyButton.jsx/css    clipboard copy for phone/address fields
      ScrollProgress.jsx/css  scroll progress bar (fixed, top of page)
      ScrollToTop.jsx/css   scroll-to-top button (fixed, bottom right)
    pages/
      Home.jsx/css          hero, category grid (links to detail pages),
                             about strip, contact CTA, FAQ section
      Products.jsx/css      category grid, search/filter, links to
                             CategoryDetail pages
      CategoryDetail.jsx/css  /products/:categoryId route, unique
                             prose + product photos + related categories
      Brands.jsx/css         brand tiles, each with 1-2 sentence
                             description (not just logos)
      About.jsx/css
      Reviews.jsx/css        real aggregate score cards (Google 5.0★/4,
                             JustDial 4.9★/14) + outbound Google Maps
                             link; placeholder cards and banner removed
      Contact.jsx/css        expanded: hyperlocal + citywide framing,
                             FAQ section
      Privacy.jsx/css        /privacy — privacy policy page (noindex)
    assets/
      photos/               shop exterior/interior photos (hero, signage,
                             storefront); maimoon-logo.jpg kept for
                             potential future use (not used by header)
      products/             ~30 real product photos across 9 categories,
                             sourced from JustDial gallery
    analytics.js             trackEvent() utility — SSG-safe (typeof
                             window guard), no-ops if gtag not loaded
    App.jsx                 routes array (not JSX tree — required by
                             vite-react-ssg) + Layout component with
                             <Outlet> + floating WhatsApp + call buttons
    main.jsx                ViteReactSSG({ routes }) entry point
    index.css               global styles + CSS vars + all dark mode
                             [data-theme="dark"] overrides in one block
  CLAUDE.md                  auto-loaded instructions for Claude Code;
                             references this file
  .env.example               documents VITE_GA_MEASUREMENT_ID
  vercel.json                cleanUrls config
  vite.config.js              ssgOptions for vite-react-ssg
                             (NO script: 'async' — see gotcha #8)
  context.md                  this file
```

## Design system
CSS variables in `src/index.css`:
- `--ink: #1C1E1B`, `--paper: #F5F2EA`, `--paper-dim: #EDE8DB`
- `--rust: #C4501F` / `--rust-dark: #9E3D16` (accent — CTAs, signage stripe)
- `--green: #3D5C4C`, `--steel: #8A8578` / `--steel-light: #B7B2A2`
- Fonts: Archivo Black (display), Archivo (body), JetBrains Mono (data —
  phone numbers, addresses, category counts)
- Signature element: diagonal red/white `.signage-rule` stripe, echoing
  the shop's actual signboard
- **Dark mode:** toggled via `[data-theme="dark"]` on `<html>`,
  persisted in localStorage, FOUC-guarded by inline script in `<body>`
  before `#root`. All overrides live in one block at the bottom of
  `src/index.css`. See gotcha #7 before adding new components.

## Current data state — all VERIFIED ACCURATE as of last deploy
- Business name, address: real, confirmed.
- **Phones: 9823016058 (primary/WhatsApp), 9595169520, 9657019021** —
  corrected recently, was previously wrong (old JustDial-sourced numbers).
  Verify these are still what's showing if picking up mid-task.
- **Hours: Mon-Sat 9:30 AM–7:30 PM, Sun 9:30 AM–1:00 PM** — restructured
  from a previous "open all days same hours" error. Reflected in
  `business.hours` object shape, JSON-LD `openingHoursSpecification`
  (two separate specs), and prose strings on Home/Contact/category pages.
- **Geo: 18.452371816489133, 73.88991349484694** — exact coordinate from
  Google Maps. `mapEmbedUrl`/`mapDirectionsUrl` in shop.js use this
  coordinate directly (not an address-text geocode) so the map pin lands
  precisely on the shop, not a nearby intersection.
- Brands array (18 brands): real, from shop signage.
- Categories: 9 total (original 8 + "Pipes & Plumbing" added when real
  product photos revealed PVC pipe/rod items that didn't fit elsewhere).
  Product photo counts per category — verify current state, but as of
  last check: Power Tools (2), Hand Tools (3), Adhesives & Sealants (2),
  Waterproofing & Paints (1), Fasteners & Fittings (8), Safety & General
  Hardware (8), Pipes & Plumbing (6) all have real photos.
  **Plywood & Boards and Electricals have ZERO real product photos.**
  (4 Pexels placeholder photos were attempted via Cowork — files were
  never actually saved. Approach dropped; no placeholder photos exist in
  the repo. Closed.)
- `placeholderReviews` in shop.js: array still present and structured
  (name/text/rating/isPlaceholder), but **no longer rendered** on the
  Reviews page. Ready to be replaced with 3–5 real customer quotes from
  Google/JustDial listings when the owner pulls them. The
  `.reviews-grid`/`.review-card` CSS is still in Reviews.css for reuse.
- `reviewUrls.google` in shop.js: Google Maps search URL (used as
  outbound link on Reviews page). `reviewUrls.justdial` is currently
  empty string — **open todo**: paste real JustDial listing URL here.

## SEO work — status

Based on a deep research pass on local pack ranking factors (Whitespark
2026, BrightLocal), work was split into phases:

**Done:**
- Phase 0: Diagnosed SPA crawlability — confirmed real problem (empty
  HTML shell, no rendered content/meta/schema in raw response).
- Phase 1: Built 9 category detail pages with unique prose, expanded
  Contact page (hyperlocal + citywide framing), expanded Brands page
  with descriptions, added `areaServed` to JSON-LD schema
  (["Pune", "Kondhwa", "NIBM Road", "Katraj"]), updated sitemap.xml.
- Phase 2: Migrated to vite-react-ssg for real prerendering. Verified
  via before/after curl comparison — all 15 routes now serve full
  rendered HTML, page-specific title/meta/canonical, and JSON-LD on the
  first byte, not just after JS executes. This was the single highest-
  risk change made so far; it's deployed and confirmed working.
- Phase 3: FAQPage JSON-LD schema added to Home, Contact, and all 9
  category detail pages. FAQ content also rendered as visible accordions
  (`<details>/<summary>`) pulling from the same data arrays in shop.js
  (`homeFAQs`, `contactFAQs`, per-category FAQs in categoryContent.js).
  Keep schema and visible content in sync if either changes.
- Phase 4: Sitewide NAP consistency audit completed — all phone, address,
  and hours instances audited and corrected to match byte-for-byte.
- GSC: Sitemap submitted. All 15 URLs individually submitted via Request
  Indexing in Google Search Console after the soft-404 fix shipped.
  **Check the Pages report periodically** for regressions ("Soft 404"
  or "Crawled - currently not indexed" reappearing).

**Not yet done:**
- Phase 5: Lighthouse/Core Web Vitals audit + mobile usability check.
  Product image file sizes flagged early on as large (370KB–1MB
  unoptimised) — address here.

**Off-site work (not code — the business owner's responsibility):**
- Claim and fully complete the Google Business Profile — primary
  category "Hardware store" + 2-4 accurate additional categories. This
  is the single highest-impact item in the entire research (32% of the
  local pack ranking formula) and hasn't been confirmed as done.
- Start asking every customer for a Google review at point of sale —
  recency/velocity now matter more than raw count.
- Build citations on IndiaMART, TradeIndia, Bing Places, Facebook
  Business Page, matching GBP NAP exactly.
- Full detail on all of this is in a research document already reviewed
  in a prior session — don't re-research from scratch if this comes up
  again, ask the user whether they still have that document.

## SSG soft-404 bug — resolved, mechanics recorded

`vite.config.js`'s `ssgOptions` previously had `script: 'async'`, which
created a hydration race: the module bundle could execute before the
inline `window.__VITE_REACT_SSG_HASH__` / `__staticRouterHydrationData`
scripts ran, causing a malformed manifest URL fetch, a 404, and a
`JSON.parse` crash baked into every prerendered page. Google saw a React
Router error boundary in the static HTML on every URL → Soft 404 on all
routes. Fixed by removing `script: 'async'` from ssgOptions.

**Standing rule:** any future data loading during SSG must not depend on
runtime fetches that can fail at build time. Prefer static imports for
build-time-known data. Any fetch must be guarded (`res.ok` and
content-type check before `.json()`). Do not add `script: 'async'`
back to ssgOptions — see gotcha #8.

## Header logo

Went through image logo attempts (JPG import, favicon generation) and
landed on a **CSS-only badge**: red background using `--rust`, white
"MAIMOON" text in Archivo Black, rounded corners — deliberate choice for
crispness and scalability over the JPG.

The favicon set (favicon.svg, favicon-32x32.png, favicon-16x16.png,
apple-touch-icon.png) was derived from the same logo design.
`src/assets/photos/maimoon-logo.jpg` remains in the repo, unused by the
header — kept for potential future use.

## Features shipped

UX / accessibility:
- Skip-to-content link
- Scroll-to-top button + scroll progress bar
- Mobile hamburger menu (was pre-existing)
- FAQ accordions on Home and Contact (same data arrays as FAQPage JSON-LD
  — keep in sync if either changes)
- Copy-to-clipboard on phone numbers and address (`navigator.clipboard`
  guarded — silently no-ops rather than throws if unavailable)
- Dark mode toggle (localStorage-persisted, FOUC-guarded)
- Print stylesheet
- Floating WhatsApp + call buttons (tracked with analytics events)

Analytics (GA4):
- Snippet in `index.html` using `VITE_GA_MEASUREMENT_ID` env var.
  Guard: `id.charAt(0) !== 'G'` exits if var unset or contains Vite's
  literal placeholder fallback (`%VITE_GA_MEASUREMENT_ID%`). Fully safe
  during SSG build.
- `src/analytics.js`: `trackEvent(name, params)` — `typeof window` and
  `typeof gtag` guards make it SSG-safe and failure-tolerant.
- Tracked events: `phone_call` (header, hero, call float),
  `whatsapp_click` (float, contact page), `maps_directions` (home, contact).
- **To activate on a new property:** create GA4 property → copy
  Measurement ID (G-XXXXXXX) → add as `VITE_GA_MEASUREMENT_ID` in Vercel
  project env vars for Production → redeploy.

Privacy Policy:
- `/privacy` page: noindex, changefreq yearly, priority 0.3 in sitemap,
  linked in footer. Covers GA4 data collected, no personal data, no data
  selling, contact info.
- **NOTE:** not reviewed for India DPDP Act 2023 compliance — worth a
  legal read before treating as complete.

## Known gotchas (do not repeat these mistakes)
1. Vercel Root Directory must be `maimoon-site` — repo has a nested
   folder structure.
2. react-router-dom must stay on v6 — v7 breaks vite-react-ssg's SSR
   renderer.
3. Build command is `vite-react-ssg build`, not plain `vite build`.
4. Only ONE working folder should ever exist locally — do not create
   a second clone/copy for any reason without explicitly telling the
   user why and getting confirmation.
5. When Cowork or any tool reports a file-download task as "done,"
   verify with an actual directory listing showing non-zero file sizes
   before trusting it — this has failed silently once already.
6. Don't overclaim delivery as a guaranteed service anywhere in copy —
   it's occasional/on-request only, per the business owner directly.
7. **Dark mode:** never use `color: var(--ink)` on body text in a new
   component without a `[data-theme="dark"]` override — `--ink` is
   always dark and text will be invisible on the dark background. The
   fix is to remove the explicit color and let the element inherit from
   `body`, which flips correctly in dark mode. All dark mode overrides
   live in the `[data-theme="dark"]` block at the bottom of
   `src/index.css`. This bug class has recurred once already.
8. **SSG / vite.config.js:** do not add `script: 'async'` back to
   ssgOptions — caused the soft-404 bug. Any fetch during SSG must be
   guarded; prefer static imports for build-time-known data.
9. **Domain routing:** `maimoon.in` must remain the Production domain on
   Vercel with `www` as the redirect. Do not swap. All canonical tags,
   sitemap entries, and JSON-LD use the non-www form.

## Open todos (code)
- `reviewUrls.justdial` in `src/data/shop.js` is an empty string —
  owner needs to paste the real JustDial listing URL. Once set, the
  "or JustDial" link on the Reviews page appears automatically.
- `placeholderReviews` in shop.js is structured and ready — replace with
  3–5 real customer quotes (name/text/rating). When adding, update
  Reviews.jsx to render the `.reviews-grid` section (CSS already in
  place in Reviews.css).
- Phase 5: Lighthouse/CWV audit + image optimisation (product images
  are 370KB–1MB unoptimised).
- Privacy policy: get a legal read for India DPDP Act 2023 compliance.
- **Unconfirmed mobile bug:** a user reported "things not loading" on
  mobile. Not yet reproduced or diagnosed — get specifics from the
  reporter or do a targeted mobile audit before making changes.

## Off-code tasks completed (owner's account, outside the repo)
- GA4 property created; Measurement ID added to Vercel env vars for
  Production.
- UptimeRobot monitor set up on https://maimoon.in — email alerts,
  5-minute check interval.
- Google Search Console: domain property verified, sitemap submitted,
  all 15 URLs individually submitted via Request Indexing.

## Immediate next steps for a fresh session
1. Ask whether the owner has the JustDial listing URL to fill in
   `reviewUrls.justdial` in shop.js.
2. Ask whether the owner has real customer quotes ready to replace
   `placeholderReviews`.
3. Investigate the unconfirmed mobile bug — get specifics before
   touching anything.
4. Phase 5: Lighthouse/CWV audit + image optimisation is the next
   queued SEO task.
5. Remind the user that off-site GBP work (Google Business Profile
   completion, review solicitation, citation building) remains the
   single highest-impact action and should not be skipped in favour of
   more code work.
