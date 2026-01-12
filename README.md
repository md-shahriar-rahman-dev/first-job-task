## ShopHub – Next.js + Express Assignment

A full-stack shopping demo built with **Next.js 16 (App Router)** and an **Express API**. Includes landing page with 7 sections, mock authentication via cookies, public items list & detail pages, and a protected “Add Item” page with toast notifications.

---

## Quick Start

1) Install deps (root + server):
```bash
npm install
cd server && npm install
```

2) Run both servers locally:
```bash
# in one terminal
npm run dev          # Next.js on http://localhost:3001

# in another terminal
cd server
npm start            # Express API on http://localhost:3001
```

3) Environment (optional):
Create `.env.local` in the root if you deploy the API elsewhere:
```
NEXT_PUBLIC_API_URL=https://your-express-host.com
```
Defaults to `http://localhost:3001`.

---

## Login Credentials (mock)
- Email: `admin@example.com`
- Password: `admin123`

Auth is cookie-based. Protected routes redirect to `/login` when unauthenticated.

---

## Routes (Next.js)
- `/` – Landing page with 7 sections + Navbar/Footer.
- `/login` – Mock login form; sets cookie on success.
- `/items` – Public items list (from Express API).
- `/items/[id]` – Public item details.
- `/add-item` – Protected form to create items (POSTs to Express).

## API (Express)
- `GET /api/items` – List items.
- `GET /api/items/:id` – Get item by id.
- `POST /api/items` – Create item (validates name/description/price).
- `GET /api/health` – Health check.

Data is stored in `server/data/items.json` (auto-seeded with sample items).

---

## Features Implemented
- Next.js 16 App Router with Tailwind v4 styles.
- Navbar links to Home, Items, Login, Add Item (conditional).
- Mock auth with cookie storage and middleware route protection.
- Public list & detail pages consuming Express API.
- Protected “Add Item” page with `react-hot-toast` success/error toasts.
- Responsive UI with cards, sections, and gradients.

---

## Tech Stack
- Next.js 16, React 19, TypeScript
- Tailwind CSS v4
- Express.js (API), CORS, body-parser
- react-hot-toast, js-cookie

---

## Deployment Notes
- Frontend: deploy to Vercel (set `NEXT_PUBLIC_API_URL` to your API).
- Backend: deploy Express separately (e.g., Render/Fly/Heroku). Ensure CORS allows the frontend origin.

---

## Testing Checklist
- Start Express: `cd server && npm start` → visit `http://localhost:3001/api/health`.
- Visit `http://localhost:3001` for landing.
- Login with provided credentials → redirected to `/items`.
- Add Item (while logged in) → toast success → redirects to item detail.
