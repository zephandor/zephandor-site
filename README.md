# Zephandor Next.js Website

Premium, production-ready marketing site for Zephandor built with Next.js 14, TypeScript, App Router, and Tailwind CSS.

## Run locally

1. Install Node.js 20 LTS or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the local development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

The project uses `output: "standalone"` in [`next.config.mjs`](/C:/Users/burak/OneDrive/Desktop/zephandor-site/next.config.mjs), which makes it suitable for VPS deployment behind Nginx.

## VPS + Nginx deployment notes

1. Install Node.js 20 LTS on the server.
2. Copy the project to the VPS.
3. Run `npm install` and `npm run build`.
4. Start the app with a process manager like PM2:

```bash
npx pm2 start npm --name zephandor -- start
```

5. Point Nginx to the Next.js app running on port `3000`.

Example Nginx server block:

```nginx
server {
    listen 80;
    server_name zephandor.com www.zephandor.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Files to edit most often

- Logo / brand wordmark:
  - [`components/logo.tsx`](/C:/Users/burak/OneDrive/Desktop/zephandor-site/components/logo.tsx)
- Amazon, Etsy, and product details:
  - [`data/products.ts`](/C:/Users/burak/OneDrive/Desktop/zephandor-site/data/products.ts)
- FAQ content:
  - [`data/faqs.ts`](/C:/Users/burak/OneDrive/Desktop/zephandor-site/data/faqs.ts)
- Core site-wide brand info, contact details, footer links:
  - [`lib/site.ts`](/C:/Users/burak/OneDrive/Desktop/zephandor-site/lib/site.ts)
- Home page marketing copy and section order:
  - [`app/page.tsx`](/C:/Users/burak/OneDrive/Desktop/zephandor-site/app/page.tsx)

## Notes

- Placeholder image areas are intentionally included so branded product photography can be dropped in later.
- This environment did not have Node.js or npm installed, so the site structure was prepared manually and could not be built here.
