# FixLedger

FixLedger is a maintenance coordination SaaS for small property managers.
It keeps each repair request, assignment, update, and completion record together.

## Getting Started

### Prerequisites
- Node.js 20+ and npm
- PostgreSQL 14+ (local or cloud)
- (Optional) Docker for local Postgres

### Setup
1. Clone the repository
2. Copy .env.example to .env and fill DATABASE_URL and DIRECT_URL
3. Install dependencies: npm install
4. Generate Prisma client: npm run generate
5. Run migrations: npm run migrate
6. Seed data: npm run db:seed (if available)
7. Start dev server: npm run dev

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `npm run typecheck` - Run TypeScript checks
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run migrate` - Run Prisma migrations
- `npm run migrate:deploy` - Deploy migrations
- `npm run db:studio` - Open Prisma Studio

## Documentation
- `docs/PRD.md` - Product requirements
- `docs/UX_FLOWS.md` - User flows
- `docs/ARCHITECTURE.md` - Technical architecture
- `docs/DATA_MODEL.md` - Data model
- `docs/SECURITY.md` - Security requirements
- `docs/TEST_PLAN.md` - Test plan
- `docs/BUILD_PLAN.md` - Build milestones
- `AGENTS.md` - Coding agent instructions
