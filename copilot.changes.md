# Changes Made to Slide Decks Repository

## Initial Setup (2026-01-13)

### Monorepo Structure
- Created pnpm workspace configuration
- Setup root `package.json` with all dev dependencies (Biome, TypeScript, Turbo, Vitest)
- Created `packages/core` with runtime dependencies (React, Remotion)
- Created `apps/2026-01-pdp-hidden-parts` as the first slide deck application

### Development Tools
- **Biome.js**: Configured for linting and formatting (replaces ESLint + Prettier)
- **TypeScript**: Strict mode enabled with latest ES2022 features
- **Turbo**: Configured for efficient monorepo build orchestration
- **pnpm**: Package manager with workspace support

### First Slide Deck: PDP - The Hidden Parts
Created a 15-minute presentation about the Product Development Pipeline with:
- **Aspect Ratio**: 16:9 (1920x1080)
- **Frame Rate**: 30 fps
- **Style**: Cyberpunk theme with neon colors (#ff006e pink, #00f5ff blue)
- **Slides**:
  - Title slide with animated entrance
  - Introduction to PDP
  - BPMN Process section (overview and technical details)
  - PDP Commands section
  - Agentic AI Integration section
  - Best Practices section
  - Live Demos section
  - Thank you slide

### Component Architecture
Created reusable slide components:
- `Slide.tsx`: Base container with background and styling
- `TitleSlide.tsx`: Animated title slide with gradient text
- `ContentSlide.tsx`: Bullet-point content with staggered animations
- `SectionSlide.tsx`: Section dividers with scaling animations

### Key Features
- Remotion-based video generation
- Smooth animations using spring physics
- Cyberpunk-inspired visual design
- Modular, reusable component structure
- Type-safe with strict TypeScript

### Project Structure
```
slide-decks/
├── apps/
│   └── 2026-01-pdp-hidden-parts/    # First slide deck
│       ├── src/
│       │   ├── components/          # Slide components
│       │   ├── Composition.tsx      # Main presentation
│       │   ├── Root.tsx             # Remotion root
│       │   └── index.ts             # Entry point
│       ├── package.json
│       ├── tsconfig.json
│       └── remotion.config.ts
├── packages/
│   └── core/                        # Shared dependencies
│       ├── src/
│       │   └── index.ts             # Re-exports Remotion
│       ├── package.json
│       └── tsconfig.json
├── .github/
│   └── instructions/                # Domain-specific instructions
├── biome.json                       # Linting & formatting config
├── turbo.json                       # Build orchestration
├── tsconfig.json                    # TypeScript base config
├── pnpm-workspace.yaml              # Workspace configuration
├── package.json                     # Root dependencies
└── .gitignore                       # Git ignore patterns
```

### Scripts
- `pnpm install`: Install all dependencies
- `pnpm dev --filter <package>`: Run development server
- `pnpm format`: Format code with Biome
- `pnpm lint`: Lint code with Biome
- `pnpm check`: Type check all packages
- `pnpm test`: Run tests
- `pnpm build`: Build all packages
- `pnpm verify`: Run lint, check, test, and build (pre-commit check)

### Dependencies
All packages use exact versions (no `^` or `~`):
- **Dev Dependencies** (root):
  - @biomejs/biome: 2.3.11
  - @types/node: 25.0.7
  - @types/react: 19.2.8
  - turbo: 2.7.4
  - typescript: 5.9.3
  - vitest: 4.0.17

- **Runtime Dependencies** (packages/core):
  - @remotion/cli: 4.0.405
  - @remotion/player: 4.0.405
  - react: 19.2.3
  - react-dom: 19.2.3
  - remotion: 4.0.405

### Notes on Narro
The original issue mentioned using "narro" (https://getnarro.com/get-started/), but this package was not found in the npm registry. The setup uses Remotion instead, which is the industry-standard tool for programmatic video/slide generation with React. The structure is designed to easily accommodate narro if/when it becomes available.
