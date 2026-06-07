/**
 * ═══════════════════════════════════════════════
 *   HEADER BANNER — Single Source of Truth
 * ═══════════════════════════════════════════════
 *
 * Edit the CONFIG section below to customize the Hernanda Agent header.
 * Everything else auto-generates from your settings.
 *
 * Both header layers derive from this file:
 *   Layer 1 — StartupScreen.ts  (pre-Ink ANSI banner)
 *   Layer 2 — LogoV2.tsx        (Ink React header)
 *
 * ─── How to rebrand ────────────────────────────
 * 1. Change BANNER_WORDS (e.g. ['Poseidon', 'CLI'])
 * 2. Change the colors
 * 3. Run `bun run build` — done
 * ───────────────────────────────────────────────
 */

// ═══════════════════════════════════════════════
//  CONFIG — Edit these values to customize
// ═══════════════════════════════════════════════

/** Words displayed as stacked banner blocks (top → bottom) */
export const BANNER_WORDS = ['HERNANDA', 'AGENT']

/** Tagline shown below logo in StartupScreen */
export const TAGLINE = 'Any model. Every tool. Zero limits.'

/** Border title in LogoV2 */
export const BORDER_TITLE = 'Hernanda Agent'

/** LogoV2 compact border title */
export const COMPACT_BORDER_TITLE = ' Hernanda Agent '

/** CLI version prefix */
export const VERSION_PREFIX = 'oc'

/**
 * ANSI RGB palette for StartupScreen (sunset palette)
 * gradient: 6 RGB stops painted top→bottom across the logo rows
 * accent:   tagline ✦ marker, version label
 * cream:    soft body text
 * dim:      dim label names
 * border:   box-drawing border
 */
export const STARTUP_PALETTE = {
  gradient: [
    [180, 230, 255], // very light blue
    [140, 210, 250], // light blue
    [100, 190, 245], // sky blue
    [70, 165, 235],  // medium light blue
    [50, 140, 220],  // blue
    [35, 115, 200],  // darker blue
  ],
  accent: [100, 190, 245],
  cream: [210, 230, 250],
  dim: [100, 140, 180],
  border: [70, 110, 150],
} as const

/**
 * Ink hex gradient for LogoV2 banner
 * One color per banner row (6 rows per word block × N words)
 * The gradient cycles: 2 rows color-1, 2 rows color-2, 2 rows color-3
 */
export const INK_GRADIENT = [
  '#81D4FA', '#81D4FA',   // light blue (rows 1-2)
  '#4FC3F7', '#4FC3F7',   // medium light blue (rows 3-4)
  '#29B6F6', '#29B6F6',   // blue (rows 5-6)
] as const


// ═══════════════════════════════════════════════
//  5×5 Block Font — StartupScreen (█ chars)
// ═══════════════════════════════════════════════

const FONT_5x5: Record<string, string[]> = {
  H: ['█   █', '█   █', '█████', '█   █', '█   █'],
  E: ['█████', '█    ', '█████', '█    ', '█████'],
  R: ['█████', '█   █', '█████', '█ █  ', '█   █'],
  N: ['█   █', '██  █', '█ █ █', '█  ██', '█   █'],
  D: ['████ ', '█   █', '█   █', '█   █', '████ '],
  A: [' ███ ', '█   █', '█████', '█   █', '█   █'],
  G: [' ████', '█    ', '█  ██', '█   █', ' ███ '],
  T: ['█████', '  █  ', '  █  ', '  █  ', '  █  '],
}


// ═══════════════════════════════════════════════
//  6-Row Box-Drawing Font — LogoV2 (██╗╔╝╚║═ chars)
// ═══════════════════════════════════════════════

const FONT_6ROW: Record<string, string[]> = {
  A: [' █████╗ ', '██╔══██╗', '███████║', '██╔══██║', '██║  ██║', '╚═╝  ╚═╝'],
  B: ['██████╗ ', '╚══██╔╝ ', '  ██║   ', '  ██║   ', '  ██║   ', '  ╚═╝   '],
  C: [' ██████╗', '██╔════╝', '██║     ', '██║     ', '╚██████╔╝', ' ╚═════╝'],
  D: ['██████╗ ', '╚══██╔╝ ', '  ██║   ', '  ██║   ', '  ██║   ', '  ╚═╝   '],
  E: ['██████╗ ', '╚════██╗', ' █████╔╝', ' ╚═══██╗', '██████╔╝', '╚═════╝ '],
  F: ['██████╗ ', '╚════██╗', ' █████╔╝', ' ╚═══██╗', '██║     ', '╚═╝     '],
  G: [' ██████╗', '██╔════╝', '██║  ███╗', '██║   ██║', '╚██████╔╝', ' ╚═════╝'],
  H: ['██╗  ██╗', '██║  ██║', '███████║', '██╔══██║', '██║  ██║', '╚═╝  ╚═╝'],
  I: ['██████╗ ', ' ╚═██╔═╝', '   ██║  ', '   ██║  ', '   ██║  ', '   ╚═╝  '],
  J: [' ██████╗', '     ██║', '     ██║', '██   ██║', '╚█████╔╝', ' ╚════╝ '],
  K: ['██╗  ██╗', '██║ ██╔╝', '█████╔╝ ', '██╔═██╗ ', '██║  ██╗', '╚═╝  ╚═╝'],
  L: ['██║     ', '██║     ', '██║     ', '██║     ', '██████╔╝', '╚═════╝ '],
  M: ['██╗    ██╗', '███╗   ██║', '████╗  ██║', '██╔██╗ ██║', '██║╚██╗██║', '╚═╝ ╚═══╝'],
  N: ['██╗   ██╗', '╚██╗ ██╔╝', ' ╚████╔╝ ', '  ╚██╔╝  ', '   ██║   ', '   ╚═╝   '],
  O: [' █████╗ ', '██╔══██╗', '██║  ██║', '██║  ██║', '╚██████╔╝', ' ╚═════╝'],
  P: ['██████╗ ', '╚════██╗', ' █████╔╝', '██╔═══╝ ', '██║     ', '╚═╝     '],
  Q: [' █████╗ ', '██╔══██╗', '██║  ██║', '██║  ██║', '╚██████╔╝', ' ╚════██╗'],
  R: ['██████╗ ', '╚════██╗', ' █████╔╝', '██╔══██╗', '██║  ██║', '╚═╝  ╚═╝'],
  S: [' ██████╗', '██╔════╝', '╚█████╗ ', ' ╚═══██╗', '██████╔╝', '╚═════╝ '],
  T: ['████████╗', '╚══██╔══╝', '   ██║   ', '   ██║   ', '   ██║   ', '   ╚═╝   '],
  U: ['██╗  ██╗', '██║  ██║', '██║  ██║', '██║  ██║', '╚██████╔╝', ' ╚═════╝'],
  V: ['██╗  ██╗', '██║  ██║', '██║  ██║', '╚██╗██╔╝', ' ╚███╔╝ ', '  ╚══╝  '],
  W: ['██╗  ██╗', '██║  ██║', '██║  ██║', '██║  ██║', '██████╔╝', '╚═════╝ '],
  X: ['██╗  ██╗', '╚██╗██╔╝', ' ╚███╔╝ ', ' ██╔██╗ ', '██╔╝ ██╗', '╚═╝  ╚═╝'],
  Y: ['██╗  ██╗', '╚██╗██╔╝', ' ╚███╔╝ ', '  ██║   ', '  ██║   ', '  ╚═╝   '],
  Z: ['██████╗ ', ' ╚═██╔═╝', '   ██║  ', '  ██║   ', ' ██║    ', '██████╔╝'],
}


// ═══════════════════════════════════════════════
//  Helpers
// ═══════════════════════════════════════════════

function padEnd(s: string, w: number): string {
  while (s.length < w) s += ' '
  return s
}


// ═══════════════════════════════════════════════
//  Generator: StartupScreen LOGO_HERNANDA
// ═══════════════════════════════════════════════

/**
 * Generate the LOGO_HERNANDA array for StartupScreen.ts.
 * Each word is rendered as 5 rows of █ block art, separated by a blank line.
 */
function generateStartupLogoArray(): string[] {
  const rows: string[] = []
  for (const word of BANNER_WORDS) {
    const letters = [...word].map(ch => FONT_5x5[ch] ?? ['     ', '     ', '     ', '     ', '     '])
    for (let r = 0; r < 5; r++) {
      const line = '  ' + letters.map(l => padEnd(l[r], 6)).join('')
      rows.push(line)
    }
    rows.push('') // blank line between words
  }
  // Remove trailing blank line
  if (rows.length > 0 && rows[rows.length - 1] === '') rows.pop()
  return rows
}

/**
 * Pre-built LOGO_HERNANDA array.
 * Import this in StartupScreen.ts.
 */
export const LOGO_HERNANDA = generateStartupLogoArray()


// ═══════════════════════════════════════════════
//  Generator: LogoV2 Ink Banner Lines
// ═══════════════════════════════════════════════

/**
 * Generate individual banner text lines for LogoV2 Ink React.
 * Returns arrays of { text, color } objects for each word.
 * Each word gets a fresh gradient cycle.
 */
function generateInkBannerData(): { text: string; color: string }[][] {
  const wordData: { text: string; color: string }[][] = []

  for (const word of BANNER_WORDS) {
    const letters = [...word].map(ch => FONT_6ROW[ch] ?? Array(6).fill(' '.repeat(8)))
    const lines: { text: string; color: string }[] = []

    // Pad all letters to uniform width (find max width first)
    const maxW = Math.max(...letters.flat().map(l => l.length))
    const padded = letters.map(l => l.map(s => padEnd(s, maxW)))

    for (let r = 0; r < 6; r++) {
      const text = padded.map(l => l[r] + '  ').join('').replace(/\s+$/, '')
      const color = INK_GRADIENT[r] ?? '#81D4FA'
      lines.push({ text, color })
    }
    wordData.push(lines)
  }
  return wordData
}

/** Pre-built Ink banner lines for all words combined */
const INK_BANNER_DATA = generateInkBannerData()

/** Individual text lines with their colors (flat array, all words sequential) */
export const INK_BANNER_LINES: { text: string; color: string }[] =
  INK_BANNER_DATA.flat()

/**
 * Individual text lines by word index.
 * INK_BANNER_BY_WORD[0] = HERNANDA lines
 * INK_BANNER_BY_WORD[1] = AGENT lines
 */
export const INK_BANNER_BY_WORD = INK_BANNER_DATA


// ═══════════════════════════════════════════════
//  Utility: Print Ink TSX for copy-paste
// ═══════════════════════════════════════════════

/**
 * Generate the full Ink JSX snippet as a multi-line string.
 * Useful for manual copy-paste into LogoV2.tsx
 */
export function generateInkTSX(): string {
  let result = ''
  for (const word of INK_BANNER_DATA) {
    for (const { text, color } of word) {
      result += `        <Text color="${color}">${text}</Text>\n`
    }
  }
  return result
}

/**
 * Get the palette object for StartupScreen.palettes.ts
 */
export function getStartupPaletteConfig() {
  return {
    gradient: [...STARTUP_PALETTE.gradient],
    accent: [...STARTUP_PALETTE.accent],
    cream: [...STARTUP_PALETTE.cream],
    dim: [...STARTUP_PALETTE.dim],
    border: [...STARTUP_PALETTE.border],
  }
}
