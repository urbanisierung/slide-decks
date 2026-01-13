---
description: "Dependency management policy"
applyTo: "**/package.json"
---

# Dependency Management

## Monorepo Structure

This monorepo follows a centralized dependency management approach:

- **Root `package.json`**: All dev dependencies (TypeScript, Biome, Turbo, type definitions, testing tools, CLI tools)
- **`packages/core/package.json`**: All runtime dependencies (React, Remotion, etc.)
- **App `package.json`**: Only reference to `@animations/core` workspace package

This approach:
- Centralizes dependency updates in one place
- Ensures version consistency across the monorepo
- Simplifies dependency management
- Reduces duplication

## Version Policy

**Always use exact versions** (no `^`, `~`, `>=`):

```json
// ✅ Good
"react": "19.2.0"

// ❌ Bad
"react": "^19.2.0"
```

## Adding Dependencies

### Runtime Dependencies
Add to `packages/core/package.json`:

```bash
pnpm add <package>@<version> --filter @animations/core
```

### Dev Dependencies
Add to root `package.json`:

```bash
pnpm add -D <package>@<version> -w
```

### App Dependencies
Apps should only depend on `@animations/core`:

```json
{
  "dependencies": {
    "@animations/core": "workspace:*"
  }
}
```

## Updating Dependencies

```bash
# Check outdated packages
pnpm outdated --recursive

# Update specific package in core
pnpm update <package> --latest --filter @animations/core

# Update dev dependency in root
pnpm update <package> --latest -w

# Security check
pnpm audit
```

## Core Dependencies

Keep these updated to latest stable:
- **Runtime** (in `packages/core`): React 19+, Remotion (latest)
- **Dev Tools** (in root): TypeScript 5.9+, Biome (latest), Turbo (latest), Vitest (latest)

## Example: Adding a New Dependency

```bash
# Adding a runtime library (e.g., framer-motion)
npm view framer-motion version  # Check latest version
pnpm add framer-motion@<version> --filter @animations/core

# Adding a dev tool (e.g., prettier)
npm view prettier version  # Check latest version
pnpm add -D prettier@<version> -w
```
