# Lea's Aesthetics Clinical Academy (LACA)

A comprehensive educational platform for aesthetics training, combining practice management with learning management system capabilities.

## Vision

LACA provides a complete educational ecosystem for aesthetics professionals, offering:
- **Course Management** - Create, deliver, and manage aesthetics training programs
- **Student Progress Tracking** - Monitor learning outcomes and certification progress
- **Practice Integration** - Seamlessly blend education with hands-on practice management
- **Assessment & Certification** - Comprehensive testing and credential issuing

## Project Status

**Current Phase:** Foundation & Critical Fixes (45-50% Complete)

### ✅ Completed
- Monorepo structure with proper workspace management
- Comprehensive database schema for both LMS and practice management
- Basic authentication and user management
- Docker development environment
- Core API structure with NestJS

### 🔄 In Progress
- Multi-tenant architecture implementation
- Authentication system overhaul
- Core business logic completion
- Frontend application development

## Architecture

This project uses a shared base repository for common components:
- **Shared Base**: `base/` (git submodule) - Database, UI components, utilities
- **Academy Apps**: `apps/` - LACA-specific applications
- **Academy Packages**: `packages/` - LACA-specific functionality

## Quick Start

```bash
# Clone with submodules
git clone --recurse-submodules [repository-url]

# Install dependencies
pnpm install

# Start development infrastructure
pnpm stack:up

# Run database migrations
pnpm db:migrate

# Start development servers
pnpm dev
```

## Applications

- **`apps/academy`** - Main academy frontend (Next.js)
- **`apps/admin`** - Academy administration panel
- **`apps/api`** - Backend API server (NestJS)
- **`apps/student-portal`** - Student learning interface

## Key Features

### Learning Management System
- **Course Builder** - Create multimedia courses with assessments
- **Progress Tracking** - Monitor student advancement and engagement
- **Assessment Engine** - Quizzes, practicals, and certification tests
- **Certificate Management** - Digital credentials and verification

### Practice Management
- **Appointment Booking** - Schedule practical sessions and assessments
- **Client Management** - Student and client record keeping
- **Document Management** - Consent forms, certificates, and compliance
- **Payment Processing** - Course fees and service payments

### Educational Content
- **Anatomy & Physiology** - Comprehensive A&P curriculum
- **Safety Protocols** - CPR, anaphylaxis, and medical safety
- **Treatment Modules** - Dermal fillers, botulinum toxin, and more
- **Regulatory Compliance** - UK healthcare standards and guidelines

## Development

### Commands
```bash
pnpm dev              # Start all development servers
pnpm build            # Build all applications
pnpm test             # Run test suites
pnpm lint             # Code linting and formatting
pnpm db:migrate       # Run database migrations
pnpm db:seed          # Seed development data
```

### Contributing
1. Follow the master implementation plan
2. Use conventional commit messages
3. Test changes thoroughly
4. Update documentation

## Documentation

- **Master Plan**: `MASTER_IMPLEMENTATION_PLAN.md`
- **Development Tracker**: `DEVELOPMENT_TRACKER.md`
- **Foundation Content**: `FondationAesthetics/`

---

**Building the future of aesthetics education** 🎓✨
