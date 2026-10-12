# FixLedger

FixLedger is a maintenance coordination SaaS for small property managers.
It keeps each repair request, assignment, update, and completion record together.

## Getting Started

### Prerequisites
- Node.js 20+ and npm
- PostgreSQL 14+ (local or cloud)

### Setup
1. Clone the repository
2. Copy `.env.example` to `.env` and fill `DATABASE_URL` and `DIRECT_URL`
3. Install dependencies: `npm install`
4. Generate Prisma client: `npx prisma generate`
5. Run migrations: `npm run migrate:deploy` (or `npm run migrate` for dev)
6. Seed data: `npm run db:seed` (optional)
7. Start dev server: `npm run dev`

Open http://localhost:3000 to view the app.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run migrate` - Run Prisma migrations (development)
- `npm run migrate:deploy` - Deploy Prisma migrations (production)
- `npm run db:studio` - Open Prisma Studio

## Documentation
- [Product Requirements](docs/PRD.md)
- [User Flows](docs/UX_FLOWS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Data Model](docs/DATA_MODEL.md)
- [Security](docs/SECURITY.md)
- [Test Plan](docs/TEST_PLAN.md)
- [Build Plan](docs/BUILD_PLAN.md)
- [Agent Instructions](AGENTS.md)

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM with PostgreSQL
- Vitest for unit tests
- Playwright for E2E tests
