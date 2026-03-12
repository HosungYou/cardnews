# 2026-03-12: "Warm Scholar" Theme — v2 Design System

## Direction
- **VS Design Diverge Direction B** (T=0.4): "Warm Scholar"
- Claude's warm color system + editorial magazine feel
- Serif/sans pairing for academic credibility
- Singular accent color, no gradients

## Color Palette (Claude Brand)

| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | `#D97757` | Primary accent (terracotta) |
| `darkBg` | `#262624` | Dark slide background |
| `brightBg` | `#FAF9F5` | Bright slide background |
| `darkText` | `#FAF9F5` | Text on dark slides |
| `brightText` | `#141413` | Text on bright slides |
| `kraft` | `#D4A27F` | Extended palette |
| `manilla` | `#EBDBBC` | Extended palette |
| `oat` | `#E3DACC` | Extended palette/dividers |
| `success` | `#5B8C6A` | Warm green |
| `warning` | `#C4923D` | Warm amber |
| `error` | `#C45B4A` | Warm red |
| `info` | `#5B7FA6` | Warm blue |

## Typography
- **Headings**: Inter + Noto Sans KR (sans-serif, UI)
- **Body**: Georgia + Noto Serif KR (serif, editorial)
- **Code**: SF Mono / Fira Code (monospace)

## Font Sizes (Mobile-Optimized)
| Element | v1 | v2 |
|---------|----|----|
| Title | 66px | 52px |
| Subtitle | 28px | 26px |
| Body | 22px | 20px |
| Code | 20px | 18px |
| Tag | 20px | 17px |

## Spacing
| Element | v1 | v2 |
|---------|----|----|
| Padding | 60px | 40px |
| Border radius | 16px | 12px |
| Gap | 16px | 14px |

## Mascot
- **v1**: Emoji `🦊🎓` (lazy)
- **v2**: Custom SVG fox with graduation cap (`src/fox-mascot.js`)
  - `foxMascot(size)`: Full face with cap and tassel
  - `foxIcon(size)`: Compact version for footer/tags
  - Primary color: Terracotta #D97757
  - Face markings: Ivory #FAF9F5
  - Cap: Dark #262624
  - Tassel: Kraft #C4923D

## Terminal Palette
| Element | Color |
|---------|-------|
| Background | `#1D1D1B` |
| Prompt | `#D97757` (terracotta) |
| Command | `#FAF9F5` (ivory) |
| Output | `#5B8C6A` (warm green) |
| Comment | `rgba(250,249,245,0.35)` |
| File highlight | `#C4923D` (warm amber) |
| Dots | Red/Yellow/Green warm-shifted |

## Key Differences from v1
1. **No gradients** — Claude doesn't use them
2. **Warm neutrals** — No cold blue-black or pure white
3. **Singular accent** — Only terracotta, not purple+pink+orange rainbow
4. **Serif body text** — Georgia for editorial gravitas
5. **Tighter spacing** — Mobile-first density
6. **SVG mascot** — Proper illustration, not emoji
7. **Clean backgrounds** — No noise texture, no gradient orbs
8. **Template literal fix** — Accent text uses string concat, not nested template literals

## Files Modified
- `src/design-system.js` — Complete rewrite with Claude palette
- `src/fox-mascot.js` — NEW: Custom SVG mascot module
- `src/slide-renderer.js` — Updated all components, removed noise/orbs
- `src/slides/apa7th-proposal.js` — Fixed rendering bugs, applied new theme
