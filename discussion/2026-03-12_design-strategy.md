# 2026-03-12: Design Strategy — Final Decisions

## Core Design Philosophy
- **Claude's design language** as base (dark UI, terminal aesthetic)
- **임지은 pattern** adapted: Hook → Content → CTA funnel
- **Dark/Bright mode alternation** for visual rhythm
- **Premium academic feel** — elevated beyond casual card news

## Mascot
- **Fox with graduation cap** (학위모를 쓴 여우)
- Symbolizes: cleverness, "the fox knows many things" (Archilochus)
- Emoji shorthand: 🦊🎓
- Will appear on hook slides and CTA slides

## Branding
- **Author**: Diverga by Hosung You
- **Unified tag**: `diverga-research`
- **Affiliation**: Penn State · College of Education

## Dark/Bright Alternation Pattern

```
Slide 1  [BRIGHT] — Hook: Gradient accent bg, bold title, fox mascot
Slide 2  [DARK]   — Problem statement: "You're still formatting manually?"
Slide 3  [BRIGHT] — Solution intro: "Meet the docx Skill"
Slide 4  [DARK]   — Demo step 1: Terminal showing Claude Code command
Slide 5  [DARK]   — Demo step 2: Claude generating the document
Slide 6  [BRIGHT] — Result: APA 7th document preview
Slide 7  [DARK]   — Key features breakdown
Slide 8  [DARK]   — Before vs After comparison
Slide 9  [BRIGHT] — Summary / key takeaway
Slide 10 [BRIGHT] — CTA: Follow + fox mascot
```

Pattern: BRIGHT-DARK-BRIGHT-DARK-DARK-BRIGHT-DARK-DARK-BRIGHT-BRIGHT
Creates visual "breathing" — dark for technical content, bright for emotional/impact moments.

## Color System

### Dark Mode Slides
- Background: #0F0F1A (deep space black with blue tint)
- Card/container: rgba(255,255,255,0.04) with subtle border
- Primary text: #FFFFFF
- Secondary text: rgba(255,255,255,0.5)
- Accent: Diverga gradient (purple #7C3AED → pink #EC4899)
- Code/terminal: #1A1A2E with colored dots
- Success green: #10B981
- Warning amber: #F59E0B

### Bright Mode Slides
- Background: Diverga gradient (purple → pink, soft) OR clean white (#FAFAFA)
- Primary text: #1A1A2E (dark)
- Secondary text: rgba(26,26,46,0.6)
- Accent elements: White on gradient, or gradient on white
- Cards: White with subtle shadow

### Premium Elements
- Subtle noise/grain texture overlay (2-3% opacity)
- Glassmorphism cards (backdrop-blur + semi-transparent)
- Gradient border glow on key elements
- Smooth gradient orbs in background (very subtle)
- Consistent 60px padding, 16-20px border radius

## Typography
- **Titles**: Inter 900 (Black), 60-72px
- **Subtitles**: Inter 600 (SemiBold), 26-28px
- **Body**: Inter 400 (Regular), 20-24px
- **Code**: SF Mono / Fira Code, 18-20px
- **Korean**: Noto Sans KR (matching weights)
- **Minimum mobile readability**: 18px at 1080px width

## Slide Dimensions
- **1080 x 1350 px** (4:5 portrait)
- Cross-platform: Threads (PNG), LinkedIn (PDF)

## Language Strategy
- **Threads**: Korean version
- **LinkedIn**: English version
- Auto-generated from same content source
