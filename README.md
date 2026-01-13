# Slide Decks

A monorepo for generating programmatic slide decks with ReactSlides, organized by date for easy ordering.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server for a specific slide deck
pnpm dev --filter @slide-decks/2026-01-pdp-hidden-parts

# Format code
pnpm format

# Run verification (lint, check, test, build)
pnpm verify
```

## Structure

```
slide-decks/
├── apps/                           # Individual slide decks (named yyyy-mm-*)
│   └── 2026-01-pdp-hidden-parts/  # Example: PDP presentation
├── packages/
│   └── core/                       # Shared dependencies (React, ReactSlides)
└── .github/instructions/           # Development guidelines
```

## Tech Stack

- **Node.js 20+** with pnpm workspaces
- **TypeScript** (strict mode)
- **ReactSlides** for slide generation
- **React 19+** with functional components
- **Biome.js** for linting and formatting
- **Turbo** for monorepo build orchestration

## Available Slide Decks

### 2026-01 - PDP: The Hidden Parts
A 15-minute presentation about the Product Development Pipeline automation system.
- **Duration**: ~15 minutes
- **Aspect Ratio**: 16:9 (1920x1080)
- **Style**: Cyberpunk theme with neon colors
- **Topics**: BPMN Process, PDP Commands, Agentic AI Integration, Best Practices, Demos

## Development

### Creating a New Slide Deck

1. Create a new app directory with date prefix:
   ```bash
   mkdir -p apps/yyyy-mm-my-presentation/src
   ```

2. Copy structure from an existing deck:
   - `package.json`
   - `tsconfig.json`
   - `src/index.tsx`
   - `src/Composition.tsx`

3. Customize your slides using ReactSlides components.

### Component Library

ReactSlides provides:
- **Slide**: Container for individual slides
- **TitleSlide**: Title slides with subtitle, author, date
- **ContentSlide**: Content slides with titles and children
- **TwoColumn**: Two-column layout component
- **Motion**: Animation components for smooth transitions

### Running Slide Decks

```bash
# Development mode (opens ReactSlides Studio)
pnpm dev --filter @slide-decks/yyyy-mm-my-presentation

# Render to video
pnpm --filter @slide-decks/yyyy-mm-my-presentation render
```

## Verification

Before committing, always run:

```bash
pnpm verify
```

This runs:
1. **Lint** - Code quality checks (Biome)
2. **Check** - Type checking (TypeScript)
3. **Test** - All tests (Vitest)
4. **Build** - Production build

## Code Style

- **Formatting**: 2 spaces, double quotes, semicolons
- **Imports**: Organized (external → internal → relative)
- **TypeScript**: Strict mode, no `null` (use `undefined`)
- **React**: Functional components with hooks only
- **No `^` or `~`**: Always use exact versions

## Dependencies

### Adding Runtime Dependencies
Add to `packages/core`:
```bash
pnpm add <package>@<version> --filter @slide-decks/core
```

### Adding Dev Dependencies
Add to root:
```bash
pnpm add -D <package>@<version> -w
```

## Naming Convention

Apps must start with `yyyy-mm` for chronological ordering:
- ✅ `2026-01-pdp-hidden-parts`
- ✅ `2026-02-quarterly-review`
- ❌ `pdp-presentation`

## License

MIT
