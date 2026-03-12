# 2026-03-12: VS Design Diverge Analysis

## Phase 0: Context (Already Gathered)
- Card news for global researchers (Threads KR, LinkedIn EN)
- 1080x1350px, 8-10 slides, dark/bright alternation
- Must reflect Claude's design language
- Academic yet practical, premium feel
- Mascot: Fox with graduation cap

## Phase 1: Identify the Mode (Generic AI-Slop Baseline)

The PREVIOUS design (v1) was essentially the generic baseline:
- ❌ Purple/pink gradients (#7C3AED → #EC4899) — default "AI product" palette
- ❌ No connection to Claude's actual brand identity
- ❌ Generic glassmorphism cards
- ❌ Standard rounded pill tags
- ❌ Emoji-only mascot (lazy)
- ❌ Oversized padding (60px) wasting mobile real estate
- ❌ Template literal bugs causing broken gradient text

**T-Score: 0.95** — This is exactly what any AI would generate for "tech card news."

## Phase 2: Three Directions (Probability Mapping)

### Direction A (T ≈ 0.7): "Claude Faithful"
- Direct copy of Claude's warm ivory/terracotta palette
- Clean, minimal, lots of whitespace
- Safe and on-brand but unremarkable
- Risk: Looks like Claude's marketing page, not original content
- **Why T=0.7**: Correct colors but default layout, no editorial personality

### Direction B (T ≈ 0.4): "Warm Scholar" ★ SELECTED
- Claude's warm color system as foundation
- **Editorial magazine feel** — serif/sans pairing for academic credibility
- Terracotta (#D97757) as the singular accent (like Claude itself)
- Dark slides: Claude dark mode (#262624) with warm ivory text (#FAF9F5)
- Bright slides: Claude ivory (#FAF9F5) with warm dark text (#141413)
- **Asymmetric information density** — tighter spacing for mobile
- Terminal mockups using actual Claude Code warm palette
- Custom fox SVG with Claude's terracotta as primary color
- **Why T=0.4**: Claude-rooted but with editorial layout choices and
  academic serif pairing that no AI would default to

### Direction C (T < 0.2): "Terracotta Brutalism"
- Only terracotta + black + ivory (three colors total)
- Raw, exposed typography, industrial layout
- Stark contrast, no decorative elements
- Risk: Too alienating for academic audience, hurts readability
- **Why T<0.2**: Radical simplification that breaks all card news conventions

## Phase 3: Commit to Direction B ("Warm Scholar")

Selected because:
1. ✅ Functional for mobile card news (readable, clear hierarchy)
2. ✅ Passes all Quality Guardrails
3. ✅ Authentic Claude brand connection
4. ✅ Distinctive from generic AI card news
5. ✅ Appropriate for academic audience (serif adds gravitas)
6. ✅ T=0.4 is bold enough to stand out in feed, safe enough to not alienate

## Phase 5: Surprise Check

Would this look like typical AI output? **NO**, because:
- Warm terracotta instead of cold purple/blue
- No gradients (Claude doesn't use them)
- Serif typography mixed with sans-serif
- Warm neutral palette instead of pure black/white
- Singular accent color (not rainbow)
- Magazine-editorial layout rather than tech-startup layout

## Key Upgrades from v1

| Element | v1 (AI-Slop) | v2 (Warm Scholar) |
|---------|--------------|-------------------|
| Brand color | Purple/pink gradient | Terracotta #D97757 (Claude's actual color) |
| Dark bg | #0F0F1A (cold blue-black) | #262624 (Claude warm dark) |
| Light bg | #FAFAFA (cold white) | #FAF9F5 (Claude warm ivory) |
| Text dark | #1A1A2E | #141413 (Claude near-black) |
| Text light | #FFFFFF | #FAF9F5 (Claude warm white) |
| Accent | Linear gradient | Solid #D97757 (single color, like Claude) |
| Padding | 60px (wasteful) | 40px (mobile-optimized) |
| Title size | 66px (too big for mobile) | 48-52px (readable on mobile) |
| Body size | 22px | 20px |
| Typography | Inter only | Inter (UI) + Georgia/serif (content) |
| Mascot | Emoji 🦊🎓 | Custom SVG fox in terracotta |
| Gradient text | Broken template literals | Solid colored text (no gradients, like Claude) |
| Decorative | Gradient orbs, noise texture | Subtle warm borders, clean lines |
| Terminal | Cold blue-purple | Claude's actual warm dark palette |
