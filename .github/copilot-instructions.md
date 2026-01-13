# ReactSlides Monorepo

A modern presentation library built with React, TypeScript, and pnpm workspaces.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run tests, linting, type checking, and build (required before commits)
pnpm verify

# Development
pnpm dev --filter <package-name>

# Format code
pnpm format
```

## Project Structure

```
monorepo/
├── packages/
│
├── apps/
└── .github/instructions/    # Domain-specific instructions
```

## Development Workflow

### Making Changes

1. **Make your changes** in the appropriate package
2. **Format code**: `pnpm format` (uses Biome.js)
3. **Verify all checks pass**: `pnpm verify`
4. **Commit and push** your changes

### Testing

```bash
# Run all tests
pnpm test

# Test specific package
pnpm test --filter <package-name>

# Focus on one test
pnpm vitest run -t "<test name>"
```

### Building

```bash
# Build all packages
pnpm build

# Build specific package
pnpm build --filter <package-name>
```

## Key Conventions

### Code Style

- **Linting & Formatting**: Biome.js (replaces ESLint + Prettier)
- **TypeScript**: Strict mode, prefer `const` and functions over classes
- **React**: Functional components with hooks (React 19+)
- **Styling**: Tailwind CSS v4 with utility classes
- **Never use `null`**: Use `undefined` for optional values

### Imports Organization

```typescript
// 1. External dependencies
import React from "react";
import { useState } from "react";

// 2. Internal packages
import { Slide } from "@reactslides/shared-ui";

// 3. Relative imports
import { MyComponent } from "./components/MyComponent";
```

### Dependencies

- Always use **exact versions** (no `^` or `~`)
- Check latest version: `npm view <package> version`
- Add with exact version: `pnpm add <package>@<version>`

### Monorepo Commands

```bash
# Add dependency to specific package
pnpm add <package> --filter <package-name>

# Run command in all packages
pnpm -r <command>

# Find package location
pnpm dlx turbo run where <package-name>
```

## Pre-Commit Checklist

Before finishing any PR, ensure:

```bash
# This command MUST succeed:
pnpm verify
```

This runs in order:

1. **Lint** - Code quality checks (Biome)
2. **Check** - Type checking (TypeScript)
3. **Test** - All tests pass (Vitest)
4. **Build** - Production build succeeds

## Common Tasks

## Debugging

### Common Issues

- **"workspace not found"**: Check `pnpm-workspace.yaml`
- **Type errors after changes**: Run `pnpm check`
- **Format issues**: Run `pnpm format`
- **Build failures**: Check dependency versions are exact

### Useful Commands

```bash
# Check for outdated packages
pnpm outdated --recursive

# Clear build artifacts
pnpm clean

# View turbo cache
turbo info
```

## CI/CD

The CI workflow runs:

1. `pnpm lint`
2. `pnpm check`
3. `pnpm build`
4. `pnpm test`

Match this locally with: **`pnpm verify`**

## Need Help?

- Check domain-specific instructions in `.github/instructions/`
- Review existing tests for patterns
- Ask questions if requirements are unclear
- Always format code before committing: `pnpm format`
