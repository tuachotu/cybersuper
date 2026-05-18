# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

"HowToBeCyberSuper" contains educational apps for teaching children cybersecurity concepts.

### Cyber Super App (cyber-super-app/)

A React TypeScript application teaching kids (ages 7-11) safe browsing practices through:
- 3 training protocols (The NO Force, 3 Always, Neverland)
- Interactive practice mode with shuffled questions
- Kid-friendly UI with TailwindCSS v4

## Architecture

### cyber-super-app/
- **Tech Stack**: React 19 + TypeScript + Vite + TailwindCSS v4
- **State Machine**: The app uses a stage-based navigation system controlled by `App.tsx`:
  - `welcome` → Initial landing screen
  - `tiles` → Main menu (4 superpowers: Captain Browsing, Calm Commander, App Hero, Parents)
  - `captain-browsing` → Protocol selection hub (tracks visited protocols)
  - `training` → Individual protocol training content (shared by captain-browsing protocols, app-hero, calm-commander)
  - `practice` → Practice questions with intro screen (tracks correct count, shuffles questions)
  - `practice-complete` → Practice completion screen
  - `flick-feed` → App Hero sub-screen for traps or missions (mode set by `flickFeedMode`)
  - `calm-commander-oath` → Calm Commander sub-flow: oath screen
  - `calm-commander-situation-1` → Calm Commander sub-flow: first scenario
  - `calm-commander-situation-2` → Calm Commander sub-flow: second scenario
  - `printables` → Printable resources screen
  - `parents` → Parent information screen
  - `work-in-progress` → Placeholder for incomplete features

- **State Management**: App.tsx manages:
  - `stage`: Current screen/stage in the flow
  - `currentProtocol`: ID of the active protocol (`"app-hero"`, `"calm-commander"`, or a captain-browsing protocol ID)
  - `visitedProtocols`: Array tracking which protocols the user has completed
  - `flickFeedMode`: `'traps' | 'missions'` — controls what FlickFeedScreen renders
  - `practiceQuestionIndex`: Current question in practice mode
  - `correctCount`: Number of correct answers in practice mode (win condition: ≥10)
  - `showPracticeIntro`: Boolean to toggle the BraveModeIntro screen before questions
  - `shuffledQuestions`: Randomized practice question array

- **Components**: Screen-based components in `src/components/` with PageTransition wrapper
- **Data**:
  - `src/data/practiceQuestions.ts` - Practice mode questions with visual types and user actions
  - `src/data/questions.ts` - Brave mode questions (if still used)
  - `src/data/feedback.ts` - Feedback messages
- **Types**: Centralized in `src/types.ts` (Stage, BraveQuestion, PracticeQuestion types)
- **Build**: Vite configured for subpath deployment (base: './') - can be hosted at any URL path

## Development Workflow

### Working in cyber-super-app/

```bash
cd cyber-super-app

# Install dependencies
npm install

# Development server (runs on http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Lint code
npm run lint

# Preview production build locally
npm run preview
```

### Key Files
- `src/App.tsx` - Main state machine with all stage transitions and handler functions
- `src/types.ts` - `Stage` union type and `BraveQuestion` type (`BraveQuestion` is legacy)
- `src/data/practiceQuestions.ts` - Practice question bank (`PracticeQuestion` type defined here)
- `src/components/TrainingScreen.tsx` - Renders content for each protocol based on `protocolId`
- `src/components/CaptainBrowsingScreen.tsx` - Protocol selection hub with visited state
- `src/components/FlickFeedScreen.tsx` - App Hero sub-screen (traps vs missions view)
- `src/components/CalmCommanderOath.tsx`, `CalmCommanderSituation1.tsx`, `CalmCommanderSituation2.tsx` - Calm Commander multi-screen flow
- `src/components/PrintablesScreen.tsx` - Printable resources
- `vite.config.ts` - Build configuration with subpath support (`base: './'`)
- `tsconfig.app.json` - TypeScript compiler options

### TypeScript Configuration
- Uses `verbatimModuleSyntax: true` - **MUST** import types with `import type { ... }`
- Strict mode enabled with additional linting rules (noUnusedLocals, noUnusedParameters)
- Target: ES2022, Module: ESNext, JSX: react-jsx

### Linting
- Uses ESLint 9 with flat config format (eslint.config.js)
- Extends recommended configs for JS, TypeScript, React Hooks, and React Refresh
- Global ignores: `dist/` directory

### Styling
- TailwindCSS v4 (imported via `@import "tailwindcss"` in index.css)
- No tailwind.config.js needed for v4
- Responsive design with mobile-first approach
- Google Fonts: Nunito and Orbitron (loaded in index.html)
