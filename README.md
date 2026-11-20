# LivNexa website

The Next.js app serves the LivNexa marketing site at `/` and the privacy policy at `/privacy`. The homepage follows the responsive green design and content of the standalone site in the parent directory.

## Run locally

```bash
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin, for example `https://example.com`, so `sitemap.xml` uses absolute URLs.

## Validate

```bash
npm run lint
npm run build
```

## Main files

- `src/app/page.tsx`: homepage composition.
- `src/app/components/marketing/`: reusable sections, navigation, FAQ and shared UI.
- `src/app/globals.css`: Tailwind theme tokens and shared base styles.
- `src/app/layout.tsx`: shared fonts and page metadata.
- `src/app/privacy/page.tsx`: privacy policy route.
