# 🛒 GG Catalogs Store - Minimal Product Catalog Web App

A lightweight, SEO-friendly product catalog built with Next.js. Designed for fast browsing, admin CRUD management, and user rating via localStorage — **no authentication required** for users.

## ⚙️ Tech Stack

| Layer          | Technology                           |
|----------------|---------------------------------------|
| **Frontend**   | [Next.js 14](https://nextjs.org) + TypeScript |
| **Styling**    | [Tailwind CSS](https://tailwindcss.com) + [Shadcn/ui](https://ui.shadcn.com) |
| **Backend API**| ExpressJS RestAPI       |
| **Database**   | MySQL |
| **Image Upload**| Server Storage for Images |
| **Ratings**    | `localStorage`? (no IP or user accounts) |
| **Deployment** | [Vercel](https://vercel.com) or Official Hosting Services          |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard routes
│   ├── products/          # Product listings and details
│   ├── api/               # API routes for products & ratings
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── lib/                   # Supabase client, helpers
├── types/                 # TypeScript interfaces
├── stores/                # (Optional) Zustand stores
└── public/                # Static assets like images
```

---

## 🧪 Database Schema (PostgreSQL via Supabase)
## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Rate Limits
- **General API**: 100 requests per 15 minutes
- **Write Operations**: 50 requests per 15 minutes
- **Admin Operations**: 10 requests per 15 minutes
- **Rating Submissions**: 5 requests per hour
- **Database Tests**: 10 requests per 5 minutes

### Main Endpoints

#### System
- `GET /api/health` - Health check
- `GET /api/test-db` - Database connection test

#### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

#### Brands
- `GET /api/brands` - Get all brands
- `GET /api/brands/:id` - Get brand by ID
- `POST /api/brands` - Create brand
- `PUT /api/brands/:id` - Update brand
- `DELETE /api/brands/:id` - Delete brand

#### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

#### Ratings
- `GET /api/products/:productId/ratings` - Get product ratings
- `POST /api/products/:productId/ratings` - Add rating

#### Web Banners
- `GET /api/banners` - Get all banners
- `GET /api/banners/active` - Get active banners
- `POST /api/banners` - Create banner
- `PUT /api/banners/:id` - Update banner
- `DELETE /api/banners/:id` - Delete banner

### Run development server
```bash
pnpm dev
```

### Open app
Visit http://localhost:3000

---

## 📦 Deployment
We recommend deploying to **Vercel** for testing the performance.

1. Connect your GitHub repo
2. Set environment variables (`.env` values)
3. Done! Vercel will auto-deploy on push

---

## 📌 Roadmap Ideas
- Add search and filter
- Admin auth (JWT-based)
- Tagging system for products
- Pagination or infinite scroll
- Soft delete for products

---

## 🙏 License
MIT License — free to use for personal and commercial projects.

and don't forget to bismillah. Praise be to the God, we shall succeed on this projects.

---

## ✨ Credits
Built by TeamDSS using modern, minimal tech for fast delivery and clean UX.