# Aesthetics Platform Base

This repository contains the shared foundation code used by both:
- **Lea Aesthetics Clinical Academy (LACA)** - Educational platform for aesthetics training
- **MaeRose Platform** - Multi-tenant SaaS solution for aesthetics practices

## Architecture

This shared base provides:
- **Database schema and migrations** (`packages/db`)
- **Shared UI components** (`packages/ui`) 
- **Common utilities and types** (`packages/shared`)
- **Development infrastructure** (Docker, configs)
- **AI services** (`packages/ai`)
- **SDK packages** (`packages/sdk`)

## Usage

This repository is designed to be used as a git submodule in the main project repositories:

```bash
# In LACA project
git submodule add https://github.com/your-org/aesthetics-platform-base.git base

# In MaeRose project  
git submodule add https://github.com/your-org/aesthetics-platform-base.git base
```

## Development

```bash
# Install dependencies
pnpm install

# Start development infrastructure
pnpm stack:up

# Run database migrations
pnpm db:migrate

# Generate Prisma client
pnpm db:generate
```

## Package Structure

- `packages/db` - Database schema, migrations, and Prisma client
- `packages/ui` - Shared React components and design system
- `packages/shared` - Common utilities, types, and business logic
- `packages/ai` - AI services and utilities
- `packages/sdk` - API client SDKs
- `packages/tsconfig` - Shared TypeScript configurations
- `packages/documents` - Document templates and generation

## Contributing

Changes to the shared base should be carefully considered as they affect both projects.
