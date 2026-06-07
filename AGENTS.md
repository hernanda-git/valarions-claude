# Valarions Claude — Hernanda Agent

CLI coding-agent for any LLM (OpenAI, Gemini, DeepSeek, Ollama, 200+ models).
Fork of [GitLawb/oc](https://github.com/Gitlawb/oc), customized and maintained by **Hernanda**.

**Repo:** `github.com/hernanda-git/valarions-claude`
**Binary:** `bin/oc`  |  **Package:** `@gitlawb/oc`
**Branch:** `dev` (primary), `main` (stable/release)

---

## Quick Commands

| Command | Description |
|---|---|
| `bun run build` | Build dist/cli.mjs |
| `bun run dev` | Build + run CLI |
| `oc` (or `node bin/oc`) | Run the CLI (after build) |
| `bun test` | Run all tests |
| `bun run test:full` | Tests with max-concurrency=1 |
| `bun run typecheck` | TypeScript check (`tsc --noEmit`) |
| `bun run check` | smoke + typecheck + full test |
| `bun run doctor:runtime` | System diagnostics |

**Runtime:** Node >=22, Bun 1.3.13
**Build tool:** Bun (build script: `scripts/build.ts`)
**Framework:** Ink React (terminal UI) + Commander (CLI parsing)

---

## Project Structure

```
src/
├── main.tsx                        # CLI entry & Ink React root
├── components/
│   ├── StartupScreen.ts            # Pre-Ink ANSI startup banner (dual header layer 1)
│   ├── StartupScreen.palettes.ts   # Startup screen color palettes
│   ├── LogoV2/                     # Ink React header (dual header layer 2)
│   │   ├── LogoV2.tsx              # Full-size header with ASCII art & Clawd mascot
│   │   ├── CondensedLogo.tsx       # Compact header variant
│   │   ├── WelcomeV2.tsx           # Legacy welcome screen
│   │   └── Clawd.tsx               # Terminal mascot ASCII art
│   ├── ProviderManager.tsx         # Provider selection UI
│   ├── ModelPicker.tsx             # Model picker dialog
│   ├── Messages.tsx                # Message list (chat history)
│   ├── Message.tsx                 # Individual message renderer
│   ├── MessageSelector.tsx         # Message selection & management
│   ├── FullscreenLayout.tsx        # Main app layout
│   ├── StatusLine.tsx              # Bottom status bar
│   ├── Stats.tsx                   # Usage statistics
│   ├── Settings/                   # Settings dialogs
│   ├── HelpV2/                     # Help screens
│   └── ... (60+ components)
├── cli/                            # CLI argument definitions
├── commands/                       # Slash command implementations
├── services/                       # API providers, LLM integrations
├── utils/                          # Utilities (logoV2Utils, etc.)
├── tools/                          # Tool implementations
├── hooks/                          # React hooks
├── state/                          # State management
├── schemas/                        # Zod schemas & validation
├── integrations/                   # External integrations
├── migrations/                     # Config/data migrations
├── skills/                         # Skill system
├── assistant/                      # Assistant logic
├── coordinator/                    # Agent coordination
├── agent/                          # Agent loop
├── proactive/                      # Proactive behavior
├── plugins/                        # Plugin system
├── mcp/                            # MCP server/client
├── memdir/                         # Memory directory
├── vim/                            # Vim mode
├── voice/                          # Voice input
├── ui/                             # Shared UI components
├── design-system/                  # Design tokens & theme
├── test/                           # Test utilities
└── tools/                          # Tool definitions
bin/oc                              # Entry point wrapper
docs/                               # Documentation
web/                                # Web companion app
scripts/                            # Build & utility scripts
tests/                              # Integration tests
```

---

## Dual Header System ⚠️ CRITICAL

This project has **TWO independent header rendering layers**. When making branding changes, BOTH must be updated.

### Layer 1: Pre-Ink Startup Screen
- **File:** `src/components/StartupScreen.ts`
- Renders **before** React Ink loads (raw ANSI escape codes with gradient)
- Uses `LOGO_HERNANDA` array (5×5 block-letter `█` font)
- Gradient via `paintLine()` function
- Shows tagline, version, provider box

### Layer 2: Ink React Header (LogoV2)
- **Files:** `src/components/LogoV2/` (LogoV2.tsx, CondensedLogo.tsx, WelcomeV2.tsx, Clawd.tsx)
- Renders **inside** React Ink
- ASCII art banner with gold→amber→bronze color gradient
- Border title, Clawd mascot with badge, activity feed

**Both layers use different font systems** — the StartupScreen uses a 5×5 `█`-only block font, while LogoV2 uses a 6-row box-drawing font (╗╔╝╚║═). They must be updated independently.

---

## Key Conventions

- **Branch:** Work on `dev`, merge to `main` for releases
- **Remote:** `origin → github.com/hernanda-git/valarions-claude`
- **Upstream:** https://github.com/Gitlawb/oc (sync periodically)
- **Build output:** `dist/cli.mjs`
- **No secrets in repo** — API keys stored via provider profiles
- **TypeScript** — typecheck with `bun run typecheck`
- **React Ink** — terminal UI uses `ink` (React renderer for terminals)
- **`react-compiler-runtime` memoization** — `_c` import pattern used throughout JSX
- **Bun** — build, test, and runtime toolchain

---

## Common Pitfalls

- **patch() fails on escaped quotes in .tsx files** — JSX uses `\"` for double-quoted attributes, which triggers the patch tool's escape-drift detection. Use Python `str.replace()` via terminal instead.
- **Spaces in identifiers after rebranding** — after find-and-replace "OpenClaude" → "Valarions Claude", spaces can land inside function names. Grep for `[a-z] [A-Z]` in identifiers.
- **Ink output can't be piped** — React Ink renders to a virtual terminal. Use `script` or `timeout` + visual launch for testing.
- **StartupScreen banner width** — 80+ column ASCII art may wrap on narrow terminals.
