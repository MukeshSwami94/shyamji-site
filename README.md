# Shyam Ji Pede Wale — Website

Mobile-first website for **Shyam Ji Pede Wale (श्याम जी पेड़े वाले)**, Khachariawas, Sikar, Rajasthan. Frontend only — no backend, database or login. Orders happen on WhatsApp.

## Install & run
```bash
npm install
npm run dev      # local preview
npm run build    # production build
```

## Change business details
All shop details live in **`src/config/business.ts`**:
- `WHATSAPP_NUMBER` — digits with country code, e.g. `919876543210`
- `PHONE_NUMBER` — e.g. `+919876543210`
- `address` — street, locality, district, PIN
- `GOOGLE_MAPS_URL` — paste your Google Business Profile link
- `GOOGLE_MAPS_EMBED_URL` — the map shown on the page
- `openingHours` — add entries like `{ days: "Mon–Sun", time: "8 AM – 9 PM" }`
- `SITE_URL` — your live domain (also update `public/robots.txt` and `public/sitemap.xml`)

## Replace images
- **Products:** replace files in `src/assets/` keeping the names (`peda.jpg`, `besan-barfi.jpg`, `milk-cake.jpg`, `laddu.jpg`, `gulab-jamun.jpg`, `namkeen.jpg`). Product names/descriptions are in `src/data/products.ts`.
- **Gallery:** `src/data/gallery.ts` — add/replace imports (`shop-front.jpg`, `shop-interior.jpg`, …) and set alt text and category.
- **Hero:** `src/assets/hero-sweets.jpg`.

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository (the `main` branch).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` now builds the site and publishes it at
   `https://<your-username>.github.io/<repo-name>/`.

The workflow file `.github/workflows/deploy.yml` does the building and
publishing; it reads the repository name automatically so all page links and
photos keep working under the `/repo-name/` address.

Or publish directly from Lovable.

## Structure
`src/config` business info · `src/data` products & gallery · `src/sections` page sections · `src/components` shared UI · `src/lib` link helpers.
