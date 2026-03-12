# 2026-03-12: Final Decisions Summary

## All Decisions Made

| Item | Decision |
|------|----------|
| **Design** | Dark/Bright alternation, Diverga brand colors (purple/pink gradient), premium academic feel |
| **Mascot** | 🦊🎓 Fox with graduation cap |
| **Unified tag** | `diverga-research` |
| **Author brand** | Diverga by Hosung You (Penn State · College of Education) |
| **Language** | Threads = Korean, LinkedIn = English (auto dual generation) |
| **Slides** | 8-10 per post |
| **Dimensions** | 1080x1350px (4:5 portrait, cross-platform) |
| **Channels** | Threads (PNG carousel) + LinkedIn (PDF carousel) |
| **First topic** | APA 7th research proposal with docx Skill (actual demo) |
| **Generation** | HTML → Puppeteer PNG (2x retina) → pdf-lib PDF |

## Pipeline Status

✅ Design system created (`src/design-system.js`)
✅ Slide renderer with components (`src/slide-renderer.js`)
✅ First card news content — EN & KR (`src/slides/apa7th-proposal.js`)
✅ Generator pipeline (`src/generate.js`)
✅ English output: 10 PNGs + 1 LinkedIn PDF (`output/apa7th-en/`)
✅ Korean output: 10 PNGs + 1 LinkedIn PDF (`output/apa7th-kr/`)

## Known Issues to Refine
1. Slide 6 & 9: Gradient text in `<span>` with template literals needs escaping fix
2. Fox mascot: Currently emoji (🦊🎓), could upgrade to custom SVG illustration later
3. Series tag area on bright slides could use more contrast
4. Some slides have excess whitespace that could be tightened

## File Structure
```
/Volumes/External SSD/Projects/Cardnews/
├── discussion/
│   ├── 2026-03-12_project-kickoff-and-requirements.md
│   ├── 2026-03-12_design-analysis-imjieun.md
│   ├── 2026-03-12_design-strategy.md
│   ├── 2026-03-12_mvp-content-plan.md
│   ├── 2026-03-12_open-questions.md
│   └── 2026-03-12_decisions-final.md
├── src/
│   ├── design-system.js
│   ├── slide-renderer.js
│   ├── generate.js
│   └── slides/
│       └── apa7th-proposal.js
├── templates/
│   ├── demo-option-a.html
│   ├── demo-option-b.html
│   └── demo-option-c.html
├── output/
│   ├── apa7th-en/  (10 PNGs + PDF)
│   └── apa7th-kr/  (10 PNGs + PDF)
├── package.json
└── node_modules/
```

## Next Steps
- [ ] Fix gradient text rendering issues
- [ ] Design refinement based on feedback
- [ ] Create custom fox mascot SVG
- [ ] Add npm scripts for convenience
- [ ] Create more card news content (Series 2 & 3)
- [ ] Set up Threads/LinkedIn accounts
- [ ] Content calendar for first month
