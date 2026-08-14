# Maimoon — Industrial Hardware & Plywood

Placeholder website. React + Vite, single sticky header, search-driven product filtering.

## Structure
- `src/data/shop.js` — all business data (phone, address, brands, categories, reviews). Edit this file to update content site-wide.
- `src/pages/` — Home, Products, Brands, About, Reviews, Contact
- `src/components/` — Header (search + nav), Footer, BrandStrip (marquee)
- `src/assets/photos/` — uploaded shop photos

## Local development
```
npm install
npm run dev
```

## Deploy: GitHub → Vercel
1. Push this folder to a new GitHub repo:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In Vercel: New Project → Import the GitHub repo.
3. Framework preset: Vite. Build command `npm run build`, output directory `dist` (Vercel auto-detects both).
4. Deploy. Every push to `main` auto-redeploys.

## Next steps (real content)
- Replace `placeholderCount` and category descriptions in `shop.js` with real product data once the 700+ JustDial images are exported.
- Replace `placeholderReviews` in `shop.js` with restored real reviews.
- Swap/add more shop photos in `src/assets/photos/`.
