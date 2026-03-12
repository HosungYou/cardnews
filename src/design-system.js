/**
 * Diverga Card News Design System v4 — "Academic Editorial Bold"
 * Warm-only mode with terracotta accent blocks
 * 2x font sizes for mobile feed impact
 * 60% academic journal + 30% 임지은 marketer bold + 10% DBpia accessibility
 */

const DESIGN = {
  // Dimensions (4:5 portrait, cross-platform)
  width: 1080,
  height: 1350,

  // Color Palette — Warm only
  colors: {
    // Backgrounds
    warmBg: '#FAF9F5',           // Primary background (ivory)
    accentBg: '#D97757',          // Accent slide background (terracotta)
    cardBg: '#FFFFFF',            // Card/block background
    codeBlockBg: '#2D2A2E',      // Code/terminal background (Monokai warm)

    // Text on warm background
    textPrimary: '#141413',       // Main headings
    textSecondary: '#4A4845',     // Body text
    textTertiary: '#8A8680',      // Captions, meta

    // Text on accent (terracotta) background
    accentText: '#FFFFFF',
    accentTextSoft: 'rgba(255,255,255,0.85)',

    // Accent
    accent: '#D97757',            // Terracotta
    accentSoft: 'rgba(217,119,87,0.08)',
    accentMedium: 'rgba(217,119,87,0.15)',
    accentBorder: 'rgba(217,119,87,0.2)',

    // Extended Claude palette
    kraft: '#D4A27F',
    manilla: '#EBDBBC',
    oat: '#E3DACC',

    // Semantic
    success: '#2D7A4F',
    error: '#C0392B',
    highlight: '#D97757',

    // Terminal (warm monokai)
    termBg: '#2D2A2E',
    termHeader: '#383539',
    termPrompt: '#D97757',
    termText: '#FCFCFA',
    termGreen: '#A9DC76',
    termYellow: '#FFD866',
    termComment: '#727072',
    termDotRed: '#FF6188',
    termDotYellow: '#FFD866',
    termDotGreen: '#A9DC76',
  },

  // Typography
  fonts: {
    heading: "'Inter', 'Noto Sans KR', -apple-system, sans-serif",
    body: "'Source Serif 4', 'Noto Serif KR', Georgia, serif",
    code: "'SF Mono', 'Fira Code', 'Menlo', monospace",
  },

  // Font sizes — 2x for mobile feed impact
  fontSize: {
    hero: '140px',      // Hook slides, key messages
    title: '120px',     // Section titles
    subtitle: '64px',   // Subtitles
    body: '48px',       // Body text
    bodyLarge: '56px',  // Emphasized body
    caption: '40px',    // Captions, tags
    code: '44px',       // Code blocks
    small: '32px',      // Footer, meta
    tag: '36px',        // Series tag
  },

  // Spacing
  spacing: {
    padding: '52px',
    paddingLarge: '60px',
    gap: '20px',
    gapLarge: '28px',
    borderRadius: '20px',
    borderRadiusSmall: '12px',
    borderRadiusLarge: '28px',
  },

  // Mascot
  mascot: '🦊🎓',

  // Brand
  brand: {
    tag: 'diverga-research',
    author: 'Diverga by Hosung You',
    affiliation: 'Penn State · College of Education',
  },
};

module.exports = DESIGN;
