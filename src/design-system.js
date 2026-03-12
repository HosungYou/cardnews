/**
 * Diverga Card News Design System v3 — "Academic Editorial"
 * Warm-only mode with terracotta accent blocks
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
    body: "Georgia, 'Noto Serif KR', 'Apple SD Gothic Neo', serif",
    code: "'SF Mono', 'Fira Code', 'Menlo', monospace",
  },

  // Font sizes — BIG for mobile feed visibility
  fontSize: {
    hero: '84px',       // Hook slides, key messages
    title: '72px',      // Section titles
    subtitle: '36px',   // Subtitles
    body: '28px',       // Body text
    bodyLarge: '32px',  // Emphasized body
    caption: '22px',    // Captions, tags
    code: '22px',       // Code blocks
    small: '18px',      // Footer, meta
    tag: '20px',        // Series tag
  },

  // Spacing
  spacing: {
    padding: '48px',
    paddingLarge: '56px',
    gap: '16px',
    gapLarge: '24px',
    borderRadius: '16px',
    borderRadiusSmall: '8px',
    borderRadiusLarge: '24px',
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
