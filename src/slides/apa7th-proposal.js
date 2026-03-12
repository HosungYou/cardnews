/**
 * Card News #1: "APA 7th Research Proposal — Scenario Story"
 * v5 — 2x font sizes, tighter content per slide
 * Scenario C: grad student rushing to finish a proposal discovers Claude Code
 */

const { seriesTag, footer, terminal, accentBlock, card, numberBadge, slideWrapper, DESIGN } = require('../slide-renderer');
const D = DESIGN.colors;
const F = DESIGN.fonts;
const S = DESIGN.spacing;
const FS = DESIGN.fontSize;

function generateSlides(lang = 'en') {
  const isKR = lang === 'kr';
  const slides = [];

  // ============================================================
  // SLIDE 1 [ACCENT] — Hook: "3 Hours Before Deadline" (위기감)
  // ============================================================
  slides.push(slideWrapper('accent', `
    ${seriesTag('accent')}

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <div style="font-size: 140px; margin-bottom: 16px; line-height: 1;">⏰</div>

      <h1 style="
        font-size: ${FS.hero}; font-weight: 900; color: ${D.accentText};
        line-height: 1.05; margin-bottom: 20px;
        font-family: ${F.heading};
        letter-spacing: -3px;
      ">
        ${isKR
          ? '마감<br>3시간 전.'
          : 'Deadline<br>in 3hrs.'
        }
      </h1>

      <p style="
        font-size: ${FS.subtitle}; color: ${D.accentTextSoft};
        line-height: 1.4;
        font-family: ${F.body};
      ">${isKR
        ? '제안서는 아직 Word 파일도 안 열었다.'
        : 'The proposal isn\'t even in Word yet.'
      }</p>
    </div>

    <div style="
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 8px;
    ">
      <span style="font-size: 72px;">${DESIGN.mascot}</span>
      <div style="height: 2px; flex: 1; background: rgba(255,255,255,0.15);"></div>
      <span style="
        font-size: ${FS.small}; color: rgba(255,255,255,0.4);
        font-family: ${F.heading}; font-weight: 500;
      ">Swipe →</span>
    </div>

    ${footer('accent', 1, 10)}
  `));

  // ============================================================
  // SLIDE 2 [WARM] — Empathy: formatting hell (좌절)
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 100px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.08; margin-bottom: 28px;
      font-family: ${F.heading};
      letter-spacing: -2px;
    ">${isKR ? '서식 지옥' : 'Formatting<br>hell.'}</h2>

    <div style="display: flex; flex-direction: column; gap: 16px; flex: 1;">
      ${[
        isKR ? ['😩', '연구는 다 했는데\n서식이 문제'] : ['😩', 'Research done.\nFormatting isn\'t.'],
        isKR ? ['📐', '여백, 간격, 내어쓰기\n다 수동으로?'] : ['📐', 'Margins, spacing,\nhanging indent — by hand?'],
        isKR ? ['🔄', 'Word 서식 또 깨짐\n세 번째 수정 중'] : ['🔄', 'Word broke again.\nThird time fixing.'],
      ].map(([emoji, text]) => `
        <div style="
          display: flex; align-items: center; gap: 28px;
          background: rgba(192,57,43,0.04);
          border-left: 6px solid ${D.error};
          padding: 32px 36px;
          border-radius: 0 ${S.borderRadiusSmall} ${S.borderRadiusSmall} 0;
          flex: 1;
        ">
          <span style="font-size: 64px; flex-shrink: 0;">${emoji}</span>
          <span style="font-size: ${FS.body}; color: ${D.textPrimary}; font-weight: 600; font-family: ${F.heading}; line-height: 1.3;">${text.replace('\n', '<br>')}</span>
        </div>
      `).join('')}
    </div>

    ${footer('warm', 2, 10)}
  `));

  // ============================================================
  // SLIDE 3 [WARM] — Discovery: /docx Skill (호기심)
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 100px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.05; margin-bottom: 20px;
      font-family: ${F.heading};
      letter-spacing: -2px;
    ">${isKR
      ? '명령어\n하나면?'
      : 'One<br>command.'
    }</h2>

    <div style="
      flex: 1; display: flex; flex-direction: column;
      background: ${D.accentSoft};
      border-radius: ${S.borderRadius};
      padding: 36px 40px;
      border: 3px solid ${D.accentBorder};
    ">
      <div style="
        display: flex; align-items: center; gap: 20px;
        margin-bottom: 28px;
      ">
        <div style="
          background: ${D.accent}; color: white;
          padding: 12px 28px; border-radius: 24px;
          font-size: ${FS.body}; font-weight: 800;
          font-family: ${F.code};
        ">/docx</div>
        <span style="
          font-size: ${FS.caption}; color: ${D.textSecondary};
          font-family: ${F.heading}; font-weight: 600;
        ">Skill</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px; flex: 1;">
        ${[
          isKR ? ['📝', '자연어 → .docx 생성'] : ['📝', 'Prompt → .docx'],
          isKR ? ['🎓', 'APA 7th 자동 적용'] : ['🎓', 'Auto APA 7th'],
          isKR ? ['⚡', '수정도 자연어로'] : ['⚡', 'Revise in plain language'],
        ].map(([emoji, text]) => `
          <div style="
            display: flex; align-items: center; gap: 24px;
            flex: 1;
          ">
            <span style="font-size: 56px; flex-shrink: 0;">${emoji}</span>
            <span style="font-size: ${FS.body}; color: ${D.textPrimary}; font-weight: 700; font-family: ${F.heading}; line-height: 1.2;">${text}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="
      margin-top: 16px; padding: 20px 32px;
      background: ${D.accentMedium};
      border-radius: ${S.borderRadiusSmall};
      display: flex; align-items: center; gap: 16px;
    ">
      <span style="font-size: ${FS.caption}; color: ${D.accent}; font-weight: 700; font-family: ${F.heading};">
        Anthropic Official Skill
      </span>
    </div>

    ${footer('warm', 3, 10)}
  `));

  // ============================================================
  // SLIDE 4 [WARM] — The Prompt (기대감)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 20px;
      margin-bottom: 16px;
    ">
      ${numberBadge('1')}
      <span style="
        font-size: ${FS.subtitle}; font-weight: 800; color: ${D.textPrimary};
        font-family: ${F.heading};
      ">${isKR ? '이렇게 입력하세요' : 'Type this'}</span>
    </div>

    ${terminal('Claude Code', [
      { type: 'prompt', text: 'claude' },
      { type: 'blank' },
      { type: 'input', text: isKR
        ? '"지도교수가 내일까지'
        : '"Write my pilot study'
      },
      { type: 'input', text: isKR
        ? ' 보내라고 한 pilot study'
        : ' proposal. LLM-based peer'
      },
      { type: 'input', text: isKR
        ? ' 제안서. LLM 기반 peer'
        : ' review → critical thinking'
      },
      { type: 'input', text: isKR
        ? ' review → 비판적 사고.'
        : ' in grad students (n=40).'
      },
      { type: 'input', text: isKR
        ? ' 대학원생 40명.'
        : ' APA 7th. 15 pages.'
      },
      { type: 'input', text: isKR
        ? ' APA 7th. 15페이지."'
        : ' 15+ references."'
      },
      { type: 'blank' },
      { type: 'comment', text: isKR
        ? '/docx Skill 자동 활성화...'
        : '/docx Skill activates...'
      },
    ], { fullHeight: true, height: '1020px', fontSize: '44px', lineHeight: '2.0' })}

    ${footer('warm', 4, 10)}
  `));

  // ============================================================
  // SLIDE 5 [WARM] — Claude generating (놀라움)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 20px;
      margin-bottom: 16px;
    ">
      ${numberBadge('2')}
      <span style="
        font-size: ${FS.subtitle}; font-weight: 800; color: ${D.textPrimary};
        font-family: ${F.heading};
      ">${isKR ? '자동 생성' : 'Auto-generated'}</span>
    </div>

    ${terminal('generating proposal.docx', [
      { type: 'progress', text: isKR ? 'proposal.docx 생성 중...' : 'Creating proposal.docx...' },
      { type: 'blank' },
      { type: 'output', highlight: isKR ? '표지' : 'Title page', text: isKR ? '— Running head, 소속' : '— Running head' },
      { type: 'output', highlight: isKR ? '초록' : 'Abstract', text: isKR ? '— 250단어 + 키워드' : '— 250 words' },
      { type: 'output', highlight: isKR ? '서론' : 'Intro', text: isKR ? '— 연구 배경 및 목적' : '— Background' },
      { type: 'output', highlight: isKR ? '문헌검토' : 'Lit Review', text: isKR ? '— 선행연구 분석' : '— Prior research' },
      { type: 'output', highlight: isKR ? '방법론' : 'Method', text: isKR ? '— 설계, 참여자, 절차' : '— Design, N=40' },
      { type: 'output', highlight: isKR ? '참고문헌' : 'References', text: isKR ? '— 내어쓰기, DOI' : '— Hanging indent' },
      { type: 'output', highlight: isKR ? '서식' : 'Format', text: '— 12pt TNR, 1"' },
      { type: 'blank' },
      { type: 'output', highlight: '✅ Done', text: 'proposal.docx' },
    ], { fullHeight: true, height: '1060px', fontSize: '40px', lineHeight: '2.0' })}

    ${footer('warm', 5, 10)}
  `));

  // ============================================================
  // SLIDE 6 [WARM] — Result: .docx preview (감탄)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 20px;
      margin-bottom: 16px;
    ">
      ${numberBadge('3')}
      <span style="
        font-size: ${FS.subtitle}; font-weight: 800; color: ${D.textPrimary};
        font-family: ${F.heading};
      ">${isKR
        ? '<span style="color:' + D.accent + ';">바로 제출</span> 가능'
        : '<span style="color:' + D.accent + ';">Submit</span>-ready'
      }</span>
    </div>

    <div style="height: 1060px; display: flex; align-items: stretch;">
      <div style="
        flex: 1;
        background: white;
        border: 1px solid rgba(0,0,0,0.06);
        border-radius: 8px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        padding: 44px 48px;
        font-family: 'Source Serif 4', 'Noto Serif KR', 'Times New Roman', serif;
        display: flex; flex-direction: column;
      ">
        <div style="font-size: 22px; color: #999; margin-bottom: 24px; text-align: right;">Running head: LLM PEER REVIEW</div>

        <div style="text-align: center; margin-bottom: 28px;">
          <div style="font-size: 32px; font-weight: 700; line-height: 1.4; color: #111; margin-bottom: 16px;">
            ${isKR
              ? 'LLM 기반 Peer Review 자동화가<br>대학원생의 비판적 사고 능력에<br>미치는 영향: Pilot Study'
              : 'Effects of LLM-Based Automated<br>Peer Review on Graduate Students\'<br>Critical Thinking: A Pilot Study'
            }
          </div>
          <div style="font-size: 22px; color: #444; margin-top: 16px;">Author Name</div>
          <div style="font-size: 20px; color: #888;">Pennsylvania State University</div>
        </div>

        <div style="border-top: 1px solid #ddd; padding-top: 20px; flex: 1; display: flex; flex-direction: column;">
          <div style="font-size: 22px; font-weight: 700; text-align: center; margin-bottom: 16px;">Abstract</div>
          <div style="font-size: 20px; color: #333; line-height: 2.0; flex: 1;">
            ${isKR
              ? '본 연구는 대규모 언어 모델(LLM) 기반 자동 peer review 시스템이 대학원생의 비판적 사고 능력에 미치는 영향을 탐구하는 pilot study이다. 40명의 교육학 대학원생을 대상으로 한 학기 동안 LLM 기반 피드백 개입의 효과를 분석한다. 사전-사후 비판적 사고 검사와 반구조화 면담을 통해 변화를 측정한다...'
              : 'This pilot study examines the effects of large language model (LLM)-based automated peer review on graduate students\' critical thinking abilities. Forty education graduate students participate in a one-semester intervention comparing LLM-generated feedback with traditional peer review. Pre-post critical thinking assessments and semi-structured interviews measure changes...'
            }
          </div>
          <div style="font-size: 18px; color: #888; margin-top: 12px; font-style: italic;">
            Keywords: LLM, peer review, critical thinking, graduate education
          </div>
        </div>
      </div>
    </div>

    ${footer('warm', 6, 10)}
  `));

  // ============================================================
  // SLIDE 7 [WARM] — Zoom-in verification (확신)
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 88px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.08; margin-bottom: 20px;
      font-family: ${F.heading};
      letter-spacing: -2px;
    ">${isKR ? '세부 확인' : 'Closer look'}</h2>

    <div style="display: flex; flex-direction: column; gap: 14px; flex: 1;">
      ${[
        isKR ? ['📄', '표지', 'Running head · 소속'] : ['📄', 'Title page', 'Running head · affiliation'],
        isKR ? ['📝', '본문', 'Level 1-3 제목 · 서론 · 방법론'] : ['📝', 'Body', 'Level 1-3 · intro · method'],
        isKR ? ['🔗', '인용', '(Author, Year) 자동'] : ['🔗', 'Citations', '(Author, Year) auto'],
        isKR ? ['📚', '참고문헌', '내어쓰기 · DOI 링크'] : ['📚', 'References', 'Hanging indent · DOI'],
        isKR ? ['⚙️', '서식', '12pt TNR · 1" · 이중 간격'] : ['⚙️', 'Format', '12pt TNR · 1" · double'],
      ].map(([emoji, title, desc]) => `
        <div style="
          flex: 1;
          background: white;
          border-radius: ${S.borderRadiusSmall};
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          padding: 24px 32px;
          display: flex; align-items: center; gap: 24px;
        ">
          <span style="font-size: 48px; flex-shrink: 0;">${emoji}</span>
          <div style="flex: 1;">
            <div style="font-size: ${FS.caption}; font-weight: 700; color: ${D.textPrimary}; font-family: ${F.heading};">${title}</div>
            <div style="font-size: ${FS.small}; color: ${D.textTertiary}; font-family: ${F.body};">${desc}</div>
          </div>
          <span style="color: ${D.success}; font-size: 40px; font-weight: 800;">✓</span>
        </div>
      `).join('')}
    </div>

    ${footer('warm', 7, 10)}
  `));

  // ============================================================
  // SLIDE 8 [WARM] — Before vs After (비교)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <h2 style="
      font-size: 88px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.08; margin-bottom: 20px;
      font-family: ${F.heading};
      letter-spacing: -1px;
    ">Before vs After</h2>

    <div style="display: flex; gap: 20px; flex: 1;">
      <div style="
        flex: 1;
        background: rgba(192,57,43,0.04);
        border-top: 6px solid ${D.error};
        border-radius: 0 0 ${S.borderRadius} ${S.borderRadius};
        padding: 28px 24px;
        display: flex; flex-direction: column;
      ">
        <div style="
          font-size: ${FS.caption}; font-weight: 800; color: ${D.error};
          margin-bottom: 16px; font-family: ${F.heading};
        ">✕ Before</div>
        ${[
          isKR ? ['⏰', '2-3시간\n서식'] : ['⏰', '2-3hrs\nformatting'],
          isKR ? ['📖', '매뉴얼\n수시 확인'] : ['📖', 'Checking\nmanual'],
          isKR ? ['😤', '서식 깨짐\n밤새 수정'] : ['😤', 'Formatting\nbreaks'],
          isKR ? ['🔄', '주제 변경\n= 처음부터'] : ['🔄', 'Topic change\n= restart'],
        ].map(([emoji, text]) => `
          <div style="display:flex;align-items:center;gap:16px;flex:1;">
            <span style="font-size:44px;flex-shrink:0;">${emoji}</span>
            <span style="color:${D.textSecondary};font-size:${FS.caption};line-height:1.25;font-family:${F.heading};font-weight:600;">${text.replace('\n', '<br>')}</span>
          </div>
        `).join('')}
      </div>

      <div style="
        flex: 1;
        background: rgba(45,122,79,0.04);
        border-top: 6px solid ${D.success};
        border-radius: 0 0 ${S.borderRadius} ${S.borderRadius};
        padding: 28px 24px;
        display: flex; flex-direction: column;
      ">
        <div style="
          font-size: ${FS.caption}; font-weight: 800; color: ${D.success};
          margin-bottom: 16px; font-family: ${F.heading};
        ">✓ After</div>
        ${[
          isKR ? ['⚡', '30초\n프롬프트'] : ['⚡', '30 seconds\none prompt'],
          isKR ? ['🎯', 'APA 7th\n자동'] : ['🎯', 'APA 7th\nauto'],
          isKR ? ['📄', '.docx\n즉시 생성'] : ['📄', 'Instant\n.docx'],
          isKR ? ['♻️', '주제 변경?\n다시 말하면 끝'] : ['♻️', 'New topic?\nJust ask'],
        ].map(([emoji, text]) => `
          <div style="display:flex;align-items:center;gap:16px;flex:1;">
            <span style="font-size:44px;flex-shrink:0;">${emoji}</span>
            <span style="color:${D.textSecondary};font-size:${FS.caption};line-height:1.25;font-family:${F.heading};font-weight:600;">${text.replace('\n', '<br>')}</span>
          </div>
        `).join('')}
      </div>
    </div>

    ${footer('warm', 8, 10)}
  `));

  // ============================================================
  // SLIDE 9 [ACCENT] — Key message + feature teaser (동기부여)
  // ============================================================
  slides.push(slideWrapper('accent', `
    ${seriesTag('accent')}

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <span style="font-size: 100px; margin-bottom: 16px;">${DESIGN.mascot}</span>

      <h2 style="
        font-size: ${FS.hero}; font-weight: 900; color: ${D.accentText};
        line-height: 1.05; margin-bottom: 24px;
        font-family: ${F.heading};
        letter-spacing: -3px;
      ">${isKR
        ? '서식은\nClaude에게.'
        : 'Let Claude<br>format it.'
      }</h2>

      <p style="
        font-size: ${FS.subtitle}; color: ${D.accentTextSoft};
        font-family: ${F.body}; font-style: italic;
      ">${isKR ? '당신의 시간은 연구에.' : 'Your time belongs to research.'}</p>
    </div>

    <div style="
      background: rgba(255,255,255,0.1);
      border-radius: ${S.borderRadius};
      padding: 28px 32px;
      margin-bottom: 8px;
    ">
      <div style="
        font-size: ${FS.small}; color: rgba(255,255,255,0.5);
        font-family: ${F.heading}; font-weight: 600;
        margin-bottom: 16px; letter-spacing: 2px; text-transform: uppercase;
      ">${isKR ? '다음 편' : 'Coming next'}</div>
      <div style="display: flex; gap: 14px;">
        ${[
          isKR ? ['/pptx', '발표자료'] : ['/pptx', 'Slides'],
          isKR ? ['/memory', '맥락 기억'] : ['/memory', 'Context'],
          isKR ? ['CLAUDE.md', '규칙 설정'] : ['CLAUDE.md', 'Rules'],
        ].map(([cmd, desc]) => `
          <div style="
            flex: 1;
            background: rgba(255,255,255,0.08);
            padding: 16px 20px;
            border-radius: ${S.borderRadiusSmall};
          ">
            <div style="
              color: rgba(255,255,255,0.95); font-size: ${FS.small}; font-weight: 800;
              font-family: ${F.code}; margin-bottom: 4px;
            ">${cmd}</div>
            <div style="
              color: rgba(255,255,255,0.5); font-size: 26px;
              font-family: ${F.heading};
            ">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    ${footer('accent', 9, 10)}
  `));

  // ============================================================
  // SLIDE 10 [WARM] — CTA (행동)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">

      <span style="font-size: 120px; margin-bottom: 24px;">${DESIGN.mascot}</span>

      <h2 style="
        font-size: 100px; font-weight: 900; color: ${D.textPrimary};
        line-height: 1.08; margin-bottom: 16px;
        font-family: ${F.heading};
        letter-spacing: -2px;
      ">${isKR
        ? '매주 새로운<br>연구 도구'
        : 'New tools<br>every week'
      }</h2>

      <p style="
        font-size: ${FS.body}; color: ${D.textSecondary};
        margin-bottom: 40px; line-height: 1.4;
        font-family: ${F.body};
      ">${isKR
        ? 'Claude Code × 연구 생산성'
        : 'Claude Code × research productivity'
      }</p>

      <div style="
        background: ${D.accent};
        padding: 28px 80px; border-radius: ${S.borderRadiusSmall};
        margin-bottom: 28px;
      ">
        <span style="color: white; font-size: ${FS.body}; font-weight: 700; font-family: ${F.heading};">
          ${isKR ? '팔로우' : 'Follow'}
        </span>
      </div>

      <div style="display: flex; gap: 32px;">
        <span style="color:${D.textTertiary};font-size:${FS.caption};font-weight:600;font-family:${F.heading};">🧵 Threads</span>
        <span style="color:rgba(20,20,19,0.15);font-size:${FS.caption};">|</span>
        <span style="color:${D.textTertiary};font-size:${FS.caption};font-weight:600;font-family:${F.heading};">💼 LinkedIn</span>
      </div>
    </div>

    <div style="
      border-top: 2px solid rgba(0,0,0,0.06);
      padding-top: 16px;
      display: flex; justify-content: center; align-items: center; gap: 16px;
    ">
      <span style="font-size: 44px;">${DESIGN.mascot}</span>
      <div style="display: flex; flex-direction: column;">
        <span style="color: ${D.textPrimary}; font-size: ${FS.small}; font-weight: 700; font-family: ${F.heading};">
          ${DESIGN.brand.author}
        </span>
        <span style="color:${D.textTertiary}; font-size: 26px; font-family: ${F.heading};">
          ${DESIGN.brand.affiliation}
        </span>
      </div>
    </div>
  `));

  return slides;
}

module.exports = { generateSlides };
