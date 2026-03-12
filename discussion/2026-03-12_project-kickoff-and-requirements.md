# 2026-03-12: Project Kickoff & Requirements

## Context

Diverga is a 24-agent Claude Code plugin for social science researchers, but researchers show little interest. To attract attention, we are building an automated card news generation pipeline inspired by:

- **마케터 임지은 (@imjieun.mkt)**: Creates card news entirely with Claude Code (HTML→PNG), no Photoshop/Canva/Figma. 536-991 likes per post. Series: `claude-code-recipe`.
- **DBpia (@dbpia_insta)**: 87.4K followers. Bridges academic papers + pop culture memes. Carousel-heavy format.

## Decisions Made

### Target Audience
- **Global researchers** (English primary, Korean secondary)
- Graduate students, early-career researchers, senior researchers

### Content Series (3 series planned)
1. **Series 1: "Things You Didn't Know Claude Code Could Do"**
   - PPT/Word/PDF generation skills
   - Basic Claude Code features researchers are unaware of
   - Entry-point content to lower barriers
2. **Series 2: "Transplant Your Research Intuition to Claude"**
   - Diverga agents introduction (24 agents across 9 categories)
   - How to encode your methodology expertise into Claude
   - CLAUDE.md for researchers
3. **Series 3: "AI × Research: Bridging the Gap"**
   - AI-related hot topic research introductions
   - DBpia-style: relatable academic content + real paper citations
   - Connecting trending AI topics to actual research tools

### Distribution Channels
- **Threads** (Meta): Native image carousel (up to 20 images)
- **LinkedIn**: PDF document carousel (swipeable)
- Both platforms support **1080 x 1350 px (4:5 portrait)** as optimal cross-platform size

### Platform Specs

| Platform | Format | Dimensions | Max Items | Upload Type |
|----------|--------|-----------|-----------|-------------|
| Threads | JPG/PNG | 1080x1350 (4:5) | 20 per post | Individual images |
| LinkedIn | PDF | 1080x1350 (4:5) | 300 pages (rec: 6-10) | Single multi-page PDF |

### Design Direction
- **Academic yet practical** — not pure meme, not dry academic
- Inspired by 임지은's pattern but adapted for researcher audience
- Need to propose specific design system (colors, typography, layout)

### Generation Method
- **Claude Code HTML→Image automation** (임지은 proven method)
- HTML/CSS → Puppeteer/Playwright → PNG export
- PDF assembly for LinkedIn
- Full automation pipeline as a Claude Code skill

### PPT/Word Skills (Research Results)
Existing tools for card news Series 1 content:
- **Official Anthropic skills** (`github.com/anthropics/skills`): pptx, docx skills
- **MCP servers**: Office-PowerPoint-MCP-Server (42K+ PyPI downloads), Office-Word-MCP-Server
- **Community**: claude-office-skills, pptx-from-layouts-skill
- **Libraries**: PptxGenJS (551K weekly npm downloads), python-pptx, docx

### Project Location
- Local: `/Volumes/External SSD/Projects/Cardnews`
- Remote: `https://github.com/HosungYou/cardnews`

## Open Questions (Pending)

See `2026-03-12_open-questions.md` for detailed list.
