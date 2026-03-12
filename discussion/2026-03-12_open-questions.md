# 2026-03-12: Open Questions

## Status Legend
- 🔴 Blocking — must decide before implementation
- 🟡 Important — affects quality/scope
- 🟢 Nice-to-have — can iterate later

---

## 🔴 Blocking Questions

### Q1: Design System — Color & Brand Identity
Proposed academic-yet-practical design direction. Need your choice:

**Option A: "Deep Scholar"**
- Primary: Deep navy (#1B2A4A) + Gold accent (#D4A843)
- Academic gravitas with premium feel
- Risk: might feel too traditional/corporate

**Option B: "Modern Research"**
- Primary: Dark slate (#2D3436) + Teal accent (#00B4D8)
- Clean, modern, tech-forward
- Risk: might feel generic

**Option C: "Diverga Brand"**
- Primary: Dark (#1A1A2E) + Diverga purple/violet (#7C3AED) + warm accent
- Ties directly to Diverga identity
- Risk: needs Diverga to have established brand colors

**Option D: Custom**
- You specify colors/mood

→ **Which direction? Or do you have existing Diverga brand colors?**

### Q2: Series Tag & Branding
임지은 uses `claude-code-recipe`. What should ours be?

Proposals:
- Series 1: `researcher-toolkit` or `claude-for-researchers`
- Series 2: `diverga-recipe` or `research-intuition`
- Series 3: `ai-research-pulse` or `trending-research`
- Or one umbrella tag for all?

→ **Preference?**

### Q3: Author Branding
- 임지은 uses "마케터 임지은" + avatar character
- Should we use:
  - (A) "Hosung You" personal brand
  - (B) "Diverga" product brand
  - (C) "Diverga by Hosung You" hybrid
  - (D) Other

→ **Which branding approach?**

### Q4: Language Strategy for "Global" Audience
- (A) English only
- (B) Korean only with English subtitles
- (C) Dual versions (auto-generate both from same content)
- (D) English primary + Korean terms where culturally relevant

→ **Which approach?**

---

## 🟡 Important Questions

### Q5: Card News Length
- 임지은: 10 slides per post
- DBpia: 5-7 slides
- LinkedIn optimal: 6-10 slides
- Threads: up to 20 but engagement drops

→ **Target slide count per post?** (Recommendation: 8-10)

### Q6: First MVP Card News Topic
Which specific topic for the first card news to validate the pipeline?

Proposals:
- (A) "Your Research Paper as a PPT in 30 Seconds" (Series 1 — PPT Skill)
- (B) "Transplant Your Research Methodology to Claude" (Series 2 — CLAUDE.md)
- (C) "Did You Know AI Can Review Your Literature?" (Series 2 — Diverga B1 agent)
- (D) "The Hottest AI Paper This Week, Explained" (Series 3)

→ **Which topic first?**

### Q7: Posting Cadence
- 임지은: ~2-3 posts/week
- DBpia: nearly daily

→ **Target frequency?** (Recommendation: 2x/week to start)

### Q8: Character/Mascot
- 임지은: Chef emoji character
- DBpia: "듀선생" cartoon character

→ **Want a research-themed mascot/character?** (e.g., owl with glasses, lab flask, book character)

---

## 🟢 Nice-to-Have Questions

### Q9: Auto-Posting Integration
- Threads: API available (Instagram Graph API)
- LinkedIn: API available (LinkedIn Marketing API)

→ **Auto-post directly, or just generate images and post manually?**

### Q10: Content Calendar
→ **Want a pre-planned content calendar for the first month?**

### Q11: Analytics/Tracking
→ **Want built-in tracking for which card news topics perform best?**

---

## Decisions Needed Summary

| # | Question | Priority | Default if no answer |
|---|----------|----------|---------------------|
| Q1 | Design colors | 🔴 | Option B (Modern Research) |
| Q2 | Series tags | 🔴 | `researcher-toolkit` / `diverga-recipe` / `ai-research-pulse` |
| Q3 | Author brand | 🔴 | (C) Diverga by Hosung You |
| Q4 | Language | 🔴 | (C) Dual versions |
| Q5 | Slide count | 🟡 | 8-10 slides |
| Q6 | First topic | 🟡 | (A) PPT Skill demo |
| Q7 | Cadence | 🟡 | 2x/week |
| Q8 | Mascot | 🟢 | Skip for MVP |
| Q9 | Auto-post | 🟢 | Manual for MVP |
| Q10 | Calendar | 🟢 | Skip for MVP |
| Q11 | Analytics | 🟢 | Skip for MVP |
