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
export const TAGLINE = '✦ Lebih pintar dari asisten, lebih tangguh dari tim IT. ✦'

/** Sub tagline */
export const SUB_TAGLINE = '// Dari Sabang sampai Merauke — satu agen untuk semua pekerjaan.'

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
    [179, 229, 252], // c1 very light blue
    [129, 212, 250], // c2 light blue
    [79, 195, 247],  // c3 medium light blue
    [41, 182, 246],  // c4 blue
    [3, 155, 229],   // c5 darker blue
    [2, 119, 189],   // c6 dark blue
  ],
  accent: [179, 229, 252],
  cream: [79, 195, 247],
  dim: [30, 77, 122],
  border: [14, 42, 71],
} as const

/**
 * Ink hex gradient for LogoV2 banner
 * One color per banner row (6 rows per word block × N words)
 * The gradient cycles: 2 rows color-1, 2 rows color-2, 2 rows color-3
 */
export const INK_GRADIENT = [
  '#b3e5fc', // c1 very light blue (row 1)
  '#81d4fa', // c2 light blue (row 2)
  '#4fc3f7', // c3 medium light blue (row 3)
  '#29b6f6', // c4 blue (row 4)
  '#039be5', // c5 darker blue (row 5)
  '#0277bd', // c6 dark blue (row 6)
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
 * Hardcoded banner text lines for LogoV2 Ink React.
 * Letters use the exact design from the HTML reference.
 * Each word block gets its own gradient cycle.
 */

// HERNANDA — 6 rows (c1 → c2 → c3 → c4 → c5 → c6)
const HERNANDA_LINES: string[] = [
  '██╗  ██╗ ███████╗ ██████╗  ███╗  ██╗  █████╗  ███╗  ██╗ ██████╗   █████╗',
  '██║  ██║ ██╔════╝ ██╔══██╗ ████╗ ██║ ██╔══██╗ ████╗ ██║ ██╔══██╗ ██╔══██╗',
  '███████║ █████╗   ██████╔╝ ██╔██╗██║ ███████║ ██╔██╗██║ ██║  ██║ ███████║',
  '██╔══██║ ██╔══╝   ██╔══██╗ ██║╚████║ ██╔══██║ ██║╚████║ ██║  ██║ ██╔══██║',
  '██║  ██║ ███████╗ ██║  ██║ ██║ ╚███║ ██║  ██║ ██║ ╚███║ ██████╔╝ ██║  ██║',
  '╚═╝  ╚═╝ ╚══════╝ ╚═╝  ╚═╝ ╚═╝  ╚══╝ ╚═╝  ╚═╝ ╚═╝  ╚══╝ ╚═════╝  ╚═╝  ╚═╝',
]

// AGENT — 6 rows (c2 → c3 → c4 → c5 → c6 → c6)
const AGENT_LINES: string[] = [
  '█████╗   ██████╗  ███████╗ ███╗  ██╗ ████████╗',
  '██╔══██╗ ██╔════╝  ██╔════╝ ████╗ ██║ ╚══██╔══╝',
  '███████║ ██║  ███╗  █████╗   ██╔██╗██║    ██║',
  '██╔══██║ ██║   ██║  ██╔══╝   ██║╚████║    ██║',
  '██║  ██║  ╚██████╔╝ ███████╗ ██║ ╚███║    ██║',
  '╚═╝  ╚═╝   ╚═════╝  ╚══════╝ ╚═╝  ╚══╝   ╚═╝',
]

// Gradient per row (HERNANDA: c1-c6, AGENT: shifted: c2-c6,c6)
const HERNANDA_GRADIENT = ['#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#039be5', '#0277bd']
const AGENT_GRADIENT =   ['#81d4fa', '#4fc3f7', '#29b6f6', '#039be5', '#0277bd', '#0277bd']

export const INK_BANNER_LINES: { text: string; color: string }[] = [
  ...HERNANDA_LINES.map((text, i) => ({ text, color: HERNANDA_GRADIENT[i] })),
  ...AGENT_LINES.map((text, i) => ({ text, color: AGENT_GRADIENT[i] })),
]

export const INK_BANNER_BY_WORD = [
  HERNANDA_LINES.map((text, i) => ({ text, color: HERNANDA_GRADIENT[i] })),
  AGENT_LINES.map((text, i) => ({ text, color: AGENT_GRADIENT[i] })),
]


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
