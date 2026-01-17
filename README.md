# ShopHub – Next.js Shopping Application

A full-stack shopping demo built with **Next.js 16 (App Router)** using JavaScript. Includes landing page with 7 sections, mock authentication via cookies, public items list & detail pages, and a protected "Add Item" page with toast notifications.

**✅ Vercel-Ready**: All API routes are serverless Next.js API routes - no separate Express server needed!

---

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Visit `http://localhost:3000`

---

## Login Credentials (Mock Authentication)

- **Email:** `admin@example.com`
- **Password:** `admin123`

Authentication is cookie-based. Protected routes automatically redirect to `/login` when unauthenticated.

---

## Routes

### Public Routes
- `/` – Landing page with 7 sections (Hero, Features, Categories, How It Works, Testimonials, Stats, CTA) + Navbar/Footer
- `/login` – Login page with:
  - Mock login form (email/password)
  - Google OAuth login button (if configured)
  - Sets cookie/session on success and redirects to items page
- `/items` – Public items list page (fetches from Next.js API)
- `/items/[id]` – Public item details page

### Protected Routes
- `/add-item` – Protected form to create new items (requires authentication)
  - Shows toast notification on successful item creation
  - Redirects to the newly created item's detail page

---

## API Routes (Next.js Serverless)

All API routes are built into Next.js and work seamlessly with Vercel:

- `GET /api/items` – List all items
- `GET /api/items/[id]` – Get item by ID
- `POST /api/items` – Create new item (validates name, description, and price)
- `POST /api/auth/login` – Authenticate user
- `POST /api/auth/logout` – Logout user

Data is stored in `lib/data/items.json` (auto-initialized with sample items if file doesn't exist).

---

## Features Implemented

✅ **Landing Page**
- 7 relevant sections: Hero, Features, Categories, How It Works, Testimonials, Stats, CTA
- Navbar with navigation links (Home, Items, Login, Add Item)
- Footer component

✅ **Authentication**
- **Primary:** Mock login using hardcoded email & password
- **Optional (Highly Recommended):** NextAuth.js with Google OAuth login
- Credentials stored in HTTP-only cookies (mock login) or NextAuth sessions
- Route protection via Next.js middleware
- Automatic redirect to login for protected routes
- Support for both credential and social (Google) authentication

✅ **Item List Page**
- Publicly accessible
- Fetches items from Next.js API routes
- Displays item cards with name, description, price, image, category, and stock

✅ **Item Details Page**
- Publicly accessible
- Shows full details of a single item
- Displays all item properties

✅ **Protected Add Item Page**
- Only accessible when logged in
- Form to add new items
- Stores item data via Next.js API routes
- Toast notification on successful creation
- Redirects unauthenticated users to login

---

## Tech Stack

- **Next.js 16** (App Router) ✅
- **API for fetching and managing product data** (Next.js API routes with JSON storage) ✅
- **Tailwind CSS v4** (styling solution) ✅
- **NextAuth.js v4** (authentication with Google OAuth support)
- **React 19**
- **JavaScript** (JSX)
- **react-hot-toast** (for notifications)
- **js-cookie** (for client-side cookie management)

---

## Deployment to Vercel

This project is fully compatible with Vercel deployment:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy" (no configuration needed!)

3. **That's it!** Your app will be live with:
   - Serverless API routes
   - Automatic HTTPS
   - Global CDN
   - Zero server configuration

**Note:** The `server/` directory is no longer needed and can be removed. All functionality has been migrated to Next.js API routes.

---

## Project Structure

```
├── app/
│   ├── api/              # Next.js API routes (serverless)
│   │   ├── items/        # Items API endpoints
│   │   └── auth/         # Authentication endpoints
│   ├── items/            # Items pages
│   ├── login/            # Login page
│   ├── add-item/         # Protected add item page
│   ├── layout.jsx        # Root layout
│   └── page.jsx          # Landing page
├── components/           # React components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── lib/                  # Utility functions
│   ├── auth.js          # Authentication helpers
│   ├── data.js          # Data management
│   └── data/            # JSON data storage
│       └── items.json
└── middleware.js        # Route protection middleware
```

---

## Testing Checklist

- ✅ Visit `/` - Landing page loads with all 7 sections
- ✅ Visit `/items` - Items list displays correctly
- ✅ Visit `/items/[id]` - Item details page works
- ✅ Visit `/login` - Login form appears
- ✅ Login with credentials - Redirects to `/items`
- ✅ Visit `/add-item` without login - Redirects to `/login`
- ✅ Visit `/add-item` after login - Form appears
- ✅ Create new item - Toast notification shows, redirects to item detail
- ✅ Logout - Cookie cleared, redirected to home

---

## Environment Variables

For basic functionality, no environment variables are required. However, to use **Google Login** (NextAuth.js), create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-change-this-in-production

# Google OAuth Credentials (Optional - for Google Login)
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

**To get Google OAuth credentials:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to **Credentials** > **Create Credentials** > **OAuth 2.0 Client ID**
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to your `.env.local` file

**Note:** See `env.example.txt` for a detailed setup guide.

**For Vercel deployment:**
- Add these environment variables in your Vercel project settings
- Update `NEXTAUTH_URL` to your production URL (e.g., `https://your-app.vercel.app`)

---

## License

This project is created for educational purposes as part of a job task assignment.
