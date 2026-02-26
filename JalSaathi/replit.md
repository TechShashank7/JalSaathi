# Farm-Connect (JalMitra)

## Overview
JalMitra is a Smart Irrigation Decision Assistant mobile-style web app built with React, Vite, and an Express backend. The app helps farmers make data-driven irrigation decisions.

## Architecture
- **Frontend**: React 19 + Vite 7, TailwindCSS v4, shadcn/ui components
- **Backend**: Express 5 (TypeScript) serving both the API and the Vite dev server middleware
- **Storage**: In-memory storage by default (`MemStorage`); schema defined for PostgreSQL via Drizzle ORM
- **Routing**: `wouter` for client-side routing
- **State Management**: TanStack React Query

## Project Structure
```
Farm-Connect/
├── client/         # React frontend (Vite root)
│   ├── index.html
│   └── src/
├── server/         # Express backend
│   ├── index.ts    # Entry point, serves on port 5000
│   ├── routes.ts   # API routes (prefix /api)
│   ├── storage.ts  # Storage interface + MemStorage implementation
│   ├── vite.ts     # Vite dev middleware setup
│   └── static.ts   # Static file serving for production
├── shared/         # Shared types/schema
│   └── schema.ts   # Drizzle ORM schema + Zod types
├── vite.config.ts  # Vite config (host: 0.0.0.0, allowedHosts: true)
└── drizzle.config.ts
```

## Running the App
- **Dev**: `cd Farm-Connect && npm run dev` (port 5000)
- **Build**: `cd Farm-Connect && npm run build`
- **Production**: `cd Farm-Connect && npm run start`

## Key Configuration
- The server runs on port 5000 (`0.0.0.0`) — serves both API and frontend
- Vite is embedded as Express middleware in dev mode
- `allowedHosts: true` in Vite config ensures Replit proxy works correctly
- Database: Uses `MemStorage` by default; PostgreSQL supported via `DATABASE_URL` env var

## Deployment
- Target: autoscale
- Build: `cd Farm-Connect && npm run build`
- Run: `cd Farm-Connect && npm run start`
