# Changes Made to Slide Decks Repository

## Migrated from Remotion to ReactSlides (2026-01-13)

### Major Changes
- **Replaced Remotion with ReactSlides**: Switched from Remotion to ReactSlides (@reactslides/core, @reactslides/shared-ui, @reactslides/cli) as requested
- **Updated Dependencies**:
  - Removed: `remotion`, `@remotion/cli`, `@remotion/player`
  - Added: `@reactslides/core@0.0.11`, `@reactslides/shared-ui@0.0.11`, `@reactslides/cli@0.0.11`
  - Kept: `react@19.2.3`, `react-dom@19.2.3`

### Code Changes
- **Slide Components**: Rewrote all slide components to use ReactSlides' declarative Slide API instead of Remotion's frame-based Sequence API
- **Entry Point**: Changed from `index.ts` to `index.tsx` and updated to use ReactSlides Presentation component
- **Removed Files**:
  - `Root.tsx` (no longer needed)
  - `remotion.config.ts` (no longer needed)
  - `src/components/` directory (using shared-ui components instead)
- **Updated Scripts**: Changed `dev` and `render` scripts to use `reactslides` CLI instead of `remotion`

### Architecture
- ReactSlides uses a simpler, slide-based approach without frame timing
- Each slide is a declarative `<Slide>` component with an ID
- Navigation is handled automatically by ReactSlides
- Cyberpunk theme colors preserved throughout the presentation

### Benefits of ReactSlides
- More developer-friendly API without frame calculations
- Built-in presenter mode and overview grid
- Better keyboard/touch/mouse navigation out of the box
- Includes shared UI components (TitleSlide, ContentSlide, etc.)

---

## Initial Setup (2026-01-13)

### Monorepo Structure
- Created pnpm workspace configuration
- Setup root `package.json` with all dev dependencies (Biome, TypeScript, Turbo, Vitest)
- Created `packages/core` with runtime dependencies (React, ReactSlides)
- Created `apps/2026-01-pdp-hidden-parts` as the first slide deck application

### Development Tools
- **Biome.js**: Configured for linting and formatting (replaces ESLint + Prettier)
- **TypeScript**: Strict mode enabled with latest ES2022 features
- **Turbo**: Configured for efficient monorepo build orchestration
- **pnpm**: Package manager with workspace support

### First Slide Deck: PDP - The Hidden Parts
Created a 15-minute presentation about the Product Development Pipeline with:
- **Aspect Ratio**: 16:9 (1920x1080)
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

### Key Features
- ReactSlides-based presentation generation
- Cyberpunk-inspired visual design
- Modular, reusable component structure
- Type-safe with strict TypeScript
- Keyboard, touch, and mouse navigation support

### Project Structure
```
slide-decks/
├── apps/
│   └── 2026-01-pdp-hidden-parts/    # First slide deck
│       ├── src/
│       │   ├── Composition.tsx      # Main presentation slides
│       │   └── index.tsx            # Entry point with Presentation wrapper
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   └── core/                        # Shared dependencies
│       ├── src/
│       │   └── index.ts             # Re-exports ReactSlides
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
  - @reactslides/cli: 0.0.11
  - @reactslides/core: 0.0.11
  - @reactslides/shared-ui: 0.0.11
  - react: 19.2.3
  - react-dom: 19.2.3
