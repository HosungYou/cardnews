/**
 * Card News #1: "APA 7th Research Proposal — Scenario Story"
 * v4 — Scenario C: grad student rushing to finish a proposal discovers Claude Code
 * Emotional flow: crisis → frustration → curiosity → anticipation → amazement → admiration → confirmation → comparison → motivation → action
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
      <div style="
        font-size: 120px; margin-bottom: 20px;
        line-height: 1;
      ">⏰</div>

      <h1 style="
        font-size: ${FS.hero}; font-weight: 900; color: ${D.accentText};
        line-height: 1.08; margin-bottom: 24px;
        font-family: ${F.heading};
        letter-spacing: -2px;
      ">
        ${isKR
          ? '논문 마감<br>3시간 전.'
          : '3 Hours<br>Before the<br>Deadline.'
        }
      </h1>

      <p style="
        font-size: ${FS.subtitle}; color: ${D.accentTextSoft};
        line-height: 1.5;
        font-family: ${F.body};
        max-width: 700px;
      ">${isKR
        ? '제안서는 아직 Word 파일도 안 열었다.'
        : 'The proposal isn\'t even in Word yet.'
      }</p>
    </div>

    <div style="
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 8px;
    ">
      <span style="font-size: 56px;">${DESIGN.mascot}</span>
      <div style="
        height: 1px; flex: 1;
        background: rgba(255,255,255,0.15);
      "></div>
      <span style="
        font-size: ${FS.small}; color: rgba(255,255,255,0.4);
        font-family: ${F.heading}; font-weight: 500;
      ">Swipe →</span>
    </div>

    ${footer('accent', 1, 10)}
  `));

  // ============================================================
  // SLIDE 2 [WARM] — Empathy: formatting hell reality (좌절)
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 64px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.12; margin-bottom: 32px;
      font-family: ${F.heading};
      letter-spacing: -1px;
    ">${isKR ? '서식 지옥의<br>현실' : 'The formatting<br>nightmare'}</h2>

    <div style="display: flex; flex-direction: column; gap: 14px; flex: 1;">
      ${[
        isKR ? ['😩', '연구 내용은 다 있는데', '서식이 문제다'] : ['😩', 'The research is done —', 'formatting isn\'t'],
        isKR ? ['📐', 'Running head? 1인치 여백?', '이중 간격? 내어쓰기?'] : ['📐', 'Running head? 1" margins?', 'Double-spacing? Hanging indent?'],
        isKR ? ['🔄', 'Word 서식이 또 깨졌다', '세 번째 수정 중...'] : ['🔄', 'Word formatting broke again', 'Third time fixing it...'],
        isKR ? ['⏰', '시간은 가는데', '서식만 붙잡고 있다'] : ['⏰', 'Time is running out', 'Still stuck on formatting'],
      ].map(([emoji, line1, line2]) => `
        <div style="
          display: flex; align-items: center; gap: 24px;
          background: rgba(192,57,43,0.04);
          border-left: 5px solid ${D.error};
          padding: 28px 32px;
          border-radius: 0 ${S.borderRadiusSmall} ${S.borderRadiusSmall} 0;
          flex: 1;
        ">
          <span style="font-size: 44px; flex-shrink: 0;">${emoji}</span>
          <div>
            <div style="font-size: 30px; color: ${D.textPrimary}; font-weight: 700; font-family: ${F.heading}; line-height: 1.3;">${line1}</div>
            <div style="font-size: 26px; color: ${D.textTertiary}; font-family: ${F.body}; line-height: 1.3; margin-top: 4px;">${line2}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <p style="
      color: ${D.textTertiary}; font-size: ${FS.caption};
      text-align: center; margin-top: 16px;
      font-family: ${F.body}; font-style: italic;
    ">${isKR ? '이 시간을 연구에 쓸 수 있다면?' : 'What if this time went to actual research?'}</p>

    ${footer('warm', 2, 10)}
  `));

  // ============================================================
  // SLIDE 3 [WARM] — Discovery: "이 명령어 하나면?" (호기심)
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 64px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.12; margin-bottom: 16px;
      font-family: ${F.heading};
      letter-spacing: -1px;
    ">${isKR
      ? '이 명령어<br>하나면?'
      : 'What if one<br>command did it?'
    }</h2>

    <p style="
      font-size: ${FS.body}; color: ${D.textSecondary};
      line-height: 1.5; margin-bottom: 28px;
      font-family: ${F.body};
    ">${isKR
      ? 'Claude Code에 내장된 공식 Skill — 설치 없이 바로 사용 가능'
      : 'A built-in Claude Code Skill — no setup needed'
    }</p>

    <div style="
      flex: 1; display: flex; flex-direction: column;
      background: ${D.accentSoft};
      border-radius: ${S.borderRadius};
      padding: 36px 40px;
      border: 2px solid ${D.accentBorder};
    ">
      <div style="
        display: flex; align-items: center; gap: 16px;
        margin-bottom: 28px;
      ">
        <div style="
          background: ${D.accent}; color: white;
          padding: 8px 20px; border-radius: 20px;
          font-size: 28px; font-weight: 800;
          font-family: ${F.code};
        ">/docx</div>
        <span style="
          font-size: 26px; color: ${D.textSecondary};
          font-family: ${F.heading}; font-weight: 600;
        ">Skill</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px; flex: 1;">
        ${[
          isKR ? ['📝', '자연어 하나로 .docx 생성'] : ['📝', 'One prompt → perfect .docx'],
          isKR ? ['🎓', 'APA 7th 서식 자동 적용'] : ['🎓', 'Auto APA 7th formatting'],
          isKR ? ['📄', '표지 · 초록 · 참고문헌 완벽 포함'] : ['📄', 'Title page · abstract · references included'],
          isKR ? ['⚡', '수정도 자연어로 — "초록을 200단어로 줄여줘"'] : ['⚡', 'Revisions in plain language — "shorten the abstract"'],
        ].map(([emoji, text]) => `
          <div style="
            display: flex; align-items: center; gap: 20px;
            flex: 1;
          ">
            <span style="font-size: 40px; flex-shrink: 0;">${emoji}</span>
            <span style="font-size: 28px; color: ${D.textPrimary}; font-weight: 600; font-family: ${F.heading}; line-height: 1.3;">${text}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="
      margin-top: 16px; padding: 16px 28px;
      background: ${D.accentMedium};
      border-radius: ${S.borderRadiusSmall};
      display: flex; align-items: center; gap: 12px;
    ">
      <span style="font-size: ${FS.caption}; color: ${D.accent}; font-weight: 700; font-family: ${F.heading};">
        Anthropic Official Skill
      </span>
      <span style="font-size: ${FS.small}; color: ${D.textTertiary};">·</span>
      <span style="font-size: ${FS.caption}; color: ${D.textTertiary}; font-family: ${F.heading};">
        ${isKR ? 'Claude Code에 기본 내장' : 'Built into Claude Code'}
      </span>
    </div>

    ${footer('warm', 3, 10)}
  `));

  // ============================================================
  // SLIDE 4 [WARM] — The Prompt: show it BIG (기대감)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 20px;
    ">
      ${numberBadge('1')}
      <span style="
        font-size: ${FS.subtitle}; font-weight: 800; color: ${D.textPrimary};
        font-family: ${F.heading};
      ">${isKR ? '이렇게 입력하세요' : 'Type this prompt'}</span>
    </div>

    ${terminal('Claude Code', [
      { type: 'prompt', text: 'claude' },
      { type: 'blank' },
      { type: 'input', text: isKR
        ? '"AI 기반 피드백이 고등교육에서'
        : '"Write a research proposal on'
      },
      { type: 'input', text: isKR
        ? ' 학생 성과에 미치는 영향에 대한'
        : ' AI-assisted feedback in higher'
      },
      { type: 'input', text: isKR
        ? ' 연구 제안서를 작성해줘.'
        : ' education.'
      },
      { type: 'input', text: isKR
        ? ' APA 7th 형식으로.'
        : ' APA 7th format.'
      },
      { type: 'input', text: isKR
        ? ' 표지, 초록, 참고문헌 포함."'
        : ' Include title page, abstract,'
      },
      ...(isKR ? [] : [
        { type: 'input', text: ' and references."' },
      ]),
      { type: 'blank' },
      { type: 'divider' },
      { type: 'blank' },
      { type: 'comment', text: isKR
        ? 'Claude가 docx Skill을 자동 활성화...'
        : 'Claude activates docx Skill automatically...'
      },
      { type: 'comment', text: isKR
        ? '/docx → Word 문서 생성 시작'
        : '/docx → Word document generation begins'
      },
    ], { fullHeight: true, height: '1060px', fontSize: '30px', lineHeight: '2.6' })}

    <p style="
      font-size: ${FS.caption}; color: ${D.textTertiary};
      font-family: ${F.body}; font-style: italic;
      margin-top: 12px; flex-shrink: 0;
    ">${isKR
      ? '💡 복사해서 바로 쓸 수 있는 프롬프트입니다'
      : '💡 Copy this prompt and use it right away'
    }</p>

    ${footer('warm', 4, 10)}
  `));

  // ============================================================
  // SLIDE 5 [WARM] — Process: Claude generating (놀라움)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 20px;
    ">
      ${numberBadge('2')}
      <span style="
        font-size: ${FS.subtitle}; font-weight: 800; color: ${D.textPrimary};
        font-family: ${F.heading};
      ">${isKR ? 'Claude가 자동으로 생성' : 'Claude builds it all'}</span>
    </div>

    ${terminal('Claude Code — generating proposal.docx', [
      { type: 'progress', text: isKR ? 'proposal.docx 생성 중...' : 'Creating proposal.docx...' },
      { type: 'blank' },
      { type: 'output', highlight: isKR ? '표지' : 'Title page', text: isKR ? '— Running head, 소속, 저자 메모' : '— Running head, affiliations, author note' },
      { type: 'output', highlight: isKR ? '초록' : 'Abstract', text: isKR ? '— 250단어 + 키워드 5개' : '— 250 words + 5 keywords' },
      { type: 'output', highlight: isKR ? '제목 체계' : 'Headings', text: isKR ? '— Level 1-3 APA 7th 형식' : '— Level 1-3 APA 7th format' },
      { type: 'output', highlight: isKR ? '서론' : 'Introduction', text: isKR ? '— 연구 배경 및 목적' : '— Background and purpose' },
      { type: 'output', highlight: isKR ? '문헌검토' : 'Lit Review', text: isKR ? '— 선행연구 분석' : '— Prior research analysis' },
      { type: 'output', highlight: isKR ? '방법론' : 'Method', text: isKR ? '— 연구 설계, 참여자, 절차' : '— Design, participants, procedures' },
      { type: 'output', highlight: isKR ? '예상 결과' : 'Expected Results', text: isKR ? '— 가설 기반 분석 계획' : '— Hypothesis-driven analysis plan' },
      { type: 'output', highlight: isKR ? '참고문헌' : 'References', text: isKR ? '— 내어쓰기, DOI 하이퍼링크' : '— Hanging indent, DOI hyperlinks' },
      { type: 'output', highlight: isKR ? '서식' : 'Format', text: '— 12pt Times New Roman, 1" margins, double-spaced' },
      { type: 'blank' },
      { type: 'output', highlight: '✅ Done', text: isKR ? '— proposal.docx 저장 완료 (~/research/)' : '— proposal.docx saved (~/research/)' },
    ], { fullHeight: true, height: '1100px', fontSize: '26px', lineHeight: '2.2' })}

    ${footer('warm', 5, 10)}
  `));

  // ============================================================
  // SLIDE 6 [WARM] — Result: generated .docx full view (감탄)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 16px;
    ">
      ${numberBadge('3')}
      <span style="
        font-size: ${FS.subtitle}; font-weight: 800; color: ${D.textPrimary};
        font-family: ${F.heading};
      ">${isKR
        ? '결과: <span style="color:' + D.accent + ';">바로 제출 가능</span>'
        : 'Result: <span style="color:' + D.accent + ';">submission-ready</span>'
      }</span>
    </div>

    <div style="height: 1060px; display: flex; align-items: stretch;">
      <div style="
        flex: 1;
        background: white;
        border: 1px solid rgba(0,0,0,0.06);
        border-radius: 4px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
        padding: 48px 52px;
        font-family: 'Times New Roman', 'Noto Serif KR', serif;
        display: flex; flex-direction: column;
      ">
        <div style="font-size: 16px; color: #999; margin-bottom: 28px; text-align: right;">Running head: AI-ASSISTED FEEDBACK</div>

        <div style="text-align: center; margin-bottom: 36px;">
          <div style="font-size: 28px; font-weight: bold; line-height: 1.4; color: #111; margin-bottom: 20px;">
            ${isKR
              ? 'AI 기반 피드백이 고등교육에서<br>학생의 학업 성과에 미치는 영향'
              : 'The Impact of AI-Assisted<br>Feedback on Student Academic<br>Performance in Higher Education'
            }
          </div>
          <div style="font-size: 20px; color: #444; margin-top: 16px;">Author Name</div>
          <div style="font-size: 18px; color: #666;">Department of Education</div>
          <div style="font-size: 18px; color: #888;">Pennsylvania State University</div>
          <div style="font-size: 16px; color: #999; margin-top: 16px;">Author Note</div>
        </div>

        <div style="border-top: 1px solid #ddd; padding-top: 24px; flex: 1; display: flex; flex-direction: column;">
          <div style="font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 18px;">Abstract</div>
          <div style="font-size: 18px; color: #333; line-height: 2.0; flex: 1;">
            ${isKR
              ? '본 연구는 AI 기반 피드백 시스템이 고등교육 환경에서 학생의 학업 성과와 자기조절 학습에 미치는 영향을 탐구한다. 혼합연구 방법론을 통해 200명의 대학원생을 대상으로 한 학기 동안 AI 피드백 개입의 효과를 분석한다. 사전-사후 검사와 반구조화 면담을 통해 학업 성취도, 자기효능감, 학습 전략의 변화를 측정한다. 본 연구는 Vygotsky의 근접발달영역(ZPD) 이론과 Hattie & Timperley(2007)의 피드백 모델을 이론적 토대로 삼아, AI가 제공하는 즉각적이고 개인화된 피드백이 학습자의 메타인지 능력과 학업 자기효능감을 향상시키는 메커니즘을 규명하고자 한다.'
              : 'This study investigates the impact of AI-assisted feedback systems on student academic performance and self-regulated learning in higher education. Using a mixed-methods approach, 200 graduate students are examined over one semester to evaluate AI feedback intervention effectiveness. Pre-post assessments and semi-structured interviews measure changes in academic achievement, self-efficacy, and learning strategies. Grounded in Vygotsky\'s Zone of Proximal Development (ZPD) theory and Hattie & Timperley\'s (2007) feedback model, this study aims to elucidate the mechanisms through which AI-generated immediate and personalized feedback enhances learners\' metacognitive abilities and academic self-efficacy.'
            }
          </div>
          <div style="font-size: 16px; color: #888; margin-top: 16px; font-style: italic;">
            ${isKR
              ? '키워드: AI 피드백, 고등교육, 학업 성과, 자기조절 학습, 혼합연구'
              : 'Keywords: AI feedback, higher education, academic performance, self-regulated learning, mixed methods'
            }
          </div>
        </div>
      </div>
    </div>

    <p style="
      font-size: ${FS.caption}; color: ${D.textTertiary};
      text-align: center; margin-top: 10px;
      font-family: ${F.body}; font-style: italic;
    ">${isKR
      ? '✨ 12pt TNR · 이중 간격 · 1" 여백 · APA 7th 완벽 준수'
      : '✨ 12pt TNR · double-spaced · 1" margins · full APA 7th'
    }</p>

    ${footer('warm', 6, 10)}
  `));

  // ============================================================
  // SLIDE 7 [WARM] — Zoom-in: .docx close-ups (확신)
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 56px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.12; margin-bottom: 24px;
      font-family: ${F.heading};
      letter-spacing: -0.5px;
    ">${isKR ? '세부 확인' : 'Look closer'}</h2>

    <div style="display: flex; flex-direction: column; gap: 14px; flex: 1;">
      <!-- Title Page zoom -->
      <div style="
        flex: 1;
        background: white;
        border-radius: ${S.borderRadiusSmall};
        border: 1px solid rgba(0,0,0,0.06);
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        padding: 24px 32px;
        display: flex; align-items: center; gap: 24px;
      ">
        <div style="
          width: 52px; height: 52px; border-radius: ${S.borderRadiusSmall};
          background: ${D.accentSoft};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        "><span style="font-size: 28px;">📄</span></div>
        <div style="flex: 1;">
          <div style="font-size: 26px; font-weight: 700; color: ${D.textPrimary}; font-family: ${F.heading}; margin-bottom: 6px;">
            ${isKR ? '표지' : 'Title Page'}
          </div>
          <div style="font-size: 22px; color: ${D.textTertiary}; font-family: ${F.body}; line-height: 1.4;">
            ${isKR ? 'Running head · 소속 · 저자 메모 · 교수 정보' : 'Running head · affiliation · author note · instructor info'}
          </div>
        </div>
        <div style="
          color: ${D.success}; font-size: 28px; font-weight: 800;
        ">✓</div>
      </div>

      <!-- Body / Headings zoom -->
      <div style="
        flex: 1;
        background: white;
        border-radius: ${S.borderRadiusSmall};
        border: 1px solid rgba(0,0,0,0.06);
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        padding: 24px 32px;
        display: flex; align-items: center; gap: 24px;
      ">
        <div style="
          width: 52px; height: 52px; border-radius: ${S.borderRadiusSmall};
          background: ${D.accentSoft};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        "><span style="font-size: 28px;">📝</span></div>
        <div style="flex: 1;">
          <div style="font-size: 26px; font-weight: 700; color: ${D.textPrimary}; font-family: ${F.heading}; margin-bottom: 6px;">
            ${isKR ? '본문 구조' : 'Body Structure'}
          </div>
          <div style="font-size: 22px; color: ${D.textTertiary}; font-family: ${F.body}; line-height: 1.4;">
            ${isKR ? 'Level 1-3 제목 · 서론 · 문헌검토 · 방법론' : 'Level 1-3 headings · intro · lit review · method'}
          </div>
        </div>
        <div style="
          color: ${D.success}; font-size: 28px; font-weight: 800;
        ">✓</div>
      </div>

      <!-- In-text citations zoom -->
      <div style="
        flex: 1;
        background: white;
        border-radius: ${S.borderRadiusSmall};
        border: 1px solid rgba(0,0,0,0.06);
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        padding: 24px 32px;
        display: flex; align-items: center; gap: 24px;
      ">
        <div style="
          width: 52px; height: 52px; border-radius: ${S.borderRadiusSmall};
          background: ${D.accentSoft};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        "><span style="font-size: 28px;">🔗</span></div>
        <div style="flex: 1;">
          <div style="font-size: 26px; font-weight: 700; color: ${D.textPrimary}; font-family: ${F.heading}; margin-bottom: 6px;">
            ${isKR ? '본문 인용' : 'In-Text Citations'}
          </div>
          <div style="font-size: 22px; color: ${D.textTertiary}; font-family: ${F.body}; line-height: 1.4;">
            ${isKR ? '(Author, Year) · et al. 자동 처리' : '(Author, Year) · et al. auto-formatted'}
          </div>
        </div>
        <div style="
          color: ${D.success}; font-size: 28px; font-weight: 800;
        ">✓</div>
      </div>

      <!-- References zoom -->
      <div style="
        flex: 1;
        background: white;
        border-radius: ${S.borderRadiusSmall};
        border: 1px solid rgba(0,0,0,0.06);
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        padding: 24px 32px;
        display: flex; align-items: center; gap: 24px;
      ">
        <div style="
          width: 52px; height: 52px; border-radius: ${S.borderRadiusSmall};
          background: ${D.accentSoft};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        "><span style="font-size: 28px;">📚</span></div>
        <div style="flex: 1;">
          <div style="font-size: 26px; font-weight: 700; color: ${D.textPrimary}; font-family: ${F.heading}; margin-bottom: 6px;">
            ${isKR ? '참고문헌' : 'References'}
          </div>
          <div style="font-size: 22px; color: ${D.textTertiary}; font-family: ${F.body}; line-height: 1.4;">
            ${isKR ? '내어쓰기 · DOI 하이퍼링크 · 알파벳순' : 'Hanging indent · DOI hyperlinks · alphabetical'}
          </div>
        </div>
        <div style="
          color: ${D.success}; font-size: 28px; font-weight: 800;
        ">✓</div>
      </div>

      <!-- Format zoom -->
      <div style="
        flex: 1;
        background: white;
        border-radius: ${S.borderRadiusSmall};
        border: 1px solid rgba(0,0,0,0.06);
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        padding: 24px 32px;
        display: flex; align-items: center; gap: 24px;
      ">
        <div style="
          width: 52px; height: 52px; border-radius: ${S.borderRadiusSmall};
          background: ${D.accentSoft};
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        "><span style="font-size: 28px;">⚙️</span></div>
        <div style="flex: 1;">
          <div style="font-size: 26px; font-weight: 700; color: ${D.textPrimary}; font-family: ${F.heading}; margin-bottom: 6px;">
            ${isKR ? '문서 서식' : 'Document Format'}
          </div>
          <div style="font-size: 22px; color: ${D.textTertiary}; font-family: ${F.body}; line-height: 1.4;">
            ${isKR ? '12pt TNR · 이중 간격 · 1" 여백 · 페이지 번호' : '12pt TNR · double-spaced · 1" margins · page numbers'}
          </div>
        </div>
        <div style="
          color: ${D.success}; font-size: 28px; font-weight: 800;
        ">✓</div>
      </div>
    </div>

    ${footer('warm', 7, 10)}
  `));

  // ============================================================
  // SLIDE 8 [WARM] — Before vs After (비교)
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 56px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.15; margin-bottom: 24px;
      font-family: ${F.heading};
    ">Before vs After</h2>

    <div style="display: flex; gap: 20px; flex: 1;">
      <div style="
        flex: 1;
        background: rgba(192,57,43,0.04);
        border-top: 5px solid ${D.error};
        border-radius: 0 0 ${S.borderRadius} ${S.borderRadius};
        padding: 28px 24px;
        display: flex; flex-direction: column;
      ">
        <div style="
          font-size: 30px; font-weight: 800; color: ${D.error};
          margin-bottom: 16px; font-family: ${F.heading};
        ">✕ Before</div>
        ${[
          isKR ? ['⏰', '2-3시간\n서식 작업'] : ['⏰', '2-3 hours\nformatting'],
          isKR ? ['📖', 'APA 매뉴얼\n수시 확인'] : ['📖', 'Checking\nAPA manual'],
          isKR ? ['🔍', '템플릿\n찾아다니기'] : ['🔍', 'Hunting for\ntemplates'],
          isKR ? ['😤', '서식 깨짐\n밤새 수정'] : ['😤', 'Formatting\nbreaks overnight'],
          isKR ? ['🔄', '주제 변경\n= 처음부터'] : ['🔄', 'Topic change\n= restart'],
        ].map(([emoji, text]) => `
          <div style="display:flex;align-items:center;gap:16px;flex:1;">
            <span style="font-size:36px;flex-shrink:0;">${emoji}</span>
            <span style="color:${D.textSecondary};font-size:24px;line-height:1.25;font-family:${F.heading};font-weight:500;">${text.replace('\n', '<br>')}</span>
          </div>
        `).join('')}
      </div>

      <div style="
        flex: 1;
        background: rgba(45,122,79,0.04);
        border-top: 5px solid ${D.success};
        border-radius: 0 0 ${S.borderRadius} ${S.borderRadius};
        padding: 28px 24px;
        display: flex; flex-direction: column;
      ">
        <div style="
          font-size: 30px; font-weight: 800; color: ${D.success};
          margin-bottom: 16px; font-family: ${F.heading};
        ">✓ After</div>
        ${[
          isKR ? ['⚡', '30초\n프롬프트 하나'] : ['⚡', '30 seconds\none prompt'],
          isKR ? ['🎯', 'APA 7th\n자동 적용'] : ['🎯', 'APA 7th\nauto-applied'],
          isKR ? ['📄', '.docx\n즉시 생성'] : ['📄', 'Instant\n.docx output'],
          isKR ? ['✏️', '수정도\n자연어로'] : ['✏️', 'Revisions in\nplain language'],
          isKR ? ['♻️', '주제 변경?\n다시 말하면 끝'] : ['♻️', 'New topic?\nJust ask again'],
        ].map(([emoji, text]) => `
          <div style="display:flex;align-items:center;gap:16px;flex:1;">
            <span style="font-size:36px;flex-shrink:0;">${emoji}</span>
            <span style="color:${D.textSecondary};font-size:24px;line-height:1.25;font-family:${F.heading};font-weight:500;">${text.replace('\n', '<br>')}</span>
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
      <span style="font-size: 80px; margin-bottom: 20px;">${DESIGN.mascot}</span>

      <h2 style="
        font-size: ${FS.hero}; font-weight: 900; color: ${D.accentText};
        line-height: 1.08; margin-bottom: 28px;
        font-family: ${F.heading};
        letter-spacing: -2px;
      ">${isKR
        ? '서식은<br>Claude에게.'
        : 'Let Claude<br>handle the<br>formatting.'
      }</h2>

      <p style="
        font-size: ${FS.subtitle}; color: ${D.accentTextSoft};
        font-family: ${F.body}; font-style: italic;
        margin-bottom: 36px;
      ">${isKR ? '당신의 시간은 연구에 쓰세요.' : 'Your time belongs to research.'}</p>
    </div>

    <div style="
      background: rgba(255,255,255,0.1);
      border-radius: ${S.borderRadius};
      padding: 28px 32px;
      margin-bottom: 12px;
    ">
      <div style="
        font-size: 22px; color: rgba(255,255,255,0.6);
        font-family: ${F.heading}; font-weight: 600;
        margin-bottom: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
      ">${isKR ? '다음 편 미리보기' : 'Coming next'}</div>
      <div style="display: flex; gap: 14px;">
        ${[
          isKR ? ['/pptx', '학회 발표자료'] : ['/pptx', 'Conference slides'],
          isKR ? ['/memory', '연구 맥락 기억'] : ['/memory', 'Research context'],
          isKR ? ['CLAUDE.md', '연구실 규칙 설정'] : ['CLAUDE.md', 'Lab-wide rules'],
        ].map(([cmd, desc]) => `
          <div style="
            flex: 1;
            background: rgba(255,255,255,0.08);
            padding: 16px 18px;
            border-radius: ${S.borderRadiusSmall};
          ">
            <div style="
              color: rgba(255,255,255,0.95); font-size: 22px; font-weight: 800;
              font-family: ${F.code}; margin-bottom: 6px;
            ">${cmd}</div>
            <div style="
              color: rgba(255,255,255,0.55); font-size: 18px;
              font-family: ${F.heading};
            ">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    ${footer('accent', 9, 10)}
  `));

  // ============================================================
  // SLIDE 10 [WARM] — CTA: follow (행동)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">

      <span style="font-size: 100px; margin-bottom: 28px;">${DESIGN.mascot}</span>

      <h2 style="
        font-size: 64px; font-weight: 900; color: ${D.textPrimary};
        line-height: 1.12; margin-bottom: 16px;
        font-family: ${F.heading};
        letter-spacing: -1px;
      ">${isKR
        ? '매주 새로운<br>연구 도구 소개'
        : 'New research<br>tools every week'
      }</h2>

      <p style="
        font-size: ${FS.body}; color: ${D.textSecondary};
        margin-bottom: 44px; line-height: 1.5;
        font-family: ${F.body};
      ">${isKR
        ? 'Claude Code로 연구 생산성을 높이는 방법'
        : 'Boost your research productivity with Claude Code'
      }</p>

      <div style="
        background: ${D.accent};
        padding: 24px 64px; border-radius: ${S.borderRadiusSmall};
        margin-bottom: 28px;
      ">
        <span style="color: white; font-size: 32px; font-weight: 700; font-family: ${F.heading};">
          ${isKR ? '팔로우하기' : 'Follow Now'}
        </span>
      </div>

      <div style="display: flex; gap: 28px;">
        <span style="color:${D.textTertiary};font-size:${FS.caption};font-weight:600;font-family:${F.heading};">🧵 Threads</span>
        <span style="color:rgba(20,20,19,0.15);font-size:${FS.caption};">|</span>
        <span style="color:${D.textTertiary};font-size:${FS.caption};font-weight:600;font-family:${F.heading};">💼 LinkedIn</span>
      </div>
    </div>

    <div style="
      border-top: 1px solid rgba(0,0,0,0.06);
      padding-top: 16px;
      display: flex; justify-content: center; align-items: center; gap: 14px;
    ">
      <span style="font-size: 32px;">${DESIGN.mascot}</span>
      <div style="display: flex; flex-direction: column;">
        <span style="color: ${D.textPrimary}; font-size: 22px; font-weight: 700; font-family: ${F.heading};">
          ${DESIGN.brand.author}
        </span>
        <span style="color:${D.textTertiary}; font-size: ${FS.small}; font-family: ${F.heading};">
          ${DESIGN.brand.affiliation}
        </span>
      </div>
    </div>
  `));

  return slides;
}

module.exports = { generateSlides };
