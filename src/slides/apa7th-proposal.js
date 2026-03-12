/**
 * Card News #1: "Generate an APA 7th Research Proposal in 30 Seconds"
 * v3 — Academic Editorial design, warm-only, big typography
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
  // SLIDE 1 [ACCENT] — Hook (terracotta background)
  // ============================================================
  slides.push(slideWrapper('accent', `
    ${seriesTag('accent')}

    <div style="
      display: inline-block;
      background: rgba(255,255,255,0.15);
      padding: 8px 20px; border-radius: ${S.borderRadiusSmall};
      font-size: ${FS.tag}; font-weight: 700;
      color: rgba(255,255,255,0.9);
      font-family: ${F.heading};
      margin-bottom: 32px;
    ">SERIES 1 · Researcher Toolkit</div>

    <h1 style="
      font-size: ${FS.hero}; font-weight: 900; color: ${D.accentText};
      line-height: 1.1; margin-bottom: 28px;
      font-family: ${F.heading};
      letter-spacing: -1px;
    ">
      ${isKR ? 'APA 7th<br>연구 제안서,' : 'Your APA 7th<br>Proposal.'}
      <br>
      <span style="color: rgba(255,255,255,0.6);">${isKR ? '30초면 끝.' : '30 Seconds.'}</span>
    </h1>

    <p style="
      font-size: ${FS.body}; color: ${D.accentTextSoft};
      line-height: 1.5;
      font-family: ${F.body};
      max-width: 700px;
    ">${isKR
      ? '템플릿 필요 없음. 수동 서식 필요 없음.\nClaude Code 하나면 끝.'
      : 'No templates. No manual formatting.\nJust one prompt in Claude Code.'
    }</p>

    <div style="flex: 1;"></div>

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
  // SLIDE 2 [WARM] — Problem
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: ${FS.title}; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.15; margin-bottom: 40px;
      font-family: ${F.heading};
      letter-spacing: -0.5px;
    ">${isKR ? '아직도 이렇게<br>하고 계신가요?' : 'Still formatting<br>by hand?'}</h2>

    <div style="display: flex; flex-direction: column; gap: 16px; flex: 1;">
      ${[
        isKR ? ['⏰', '여백, 폰트, 제목 수준 맞추느라 몇 시간씩'] : ['⏰', 'Hours adjusting margins, fonts, heading levels'],
        isKR ? ['📖', 'APA 매뉴얼 펼쳐놓고 인용 형식 하나하나 확인'] : ['📖', 'Flipping through the APA manual for every citation'],
        isKR ? ['😤', 'Word 서식이 깨져서 밤새 고치기'] : ['😤', 'Word formatting breaks overnight — again'],
        isKR ? ['🔄', '지도교수가 주제 바꾸면 처음부터 다시'] : ['🔄', 'Advisor changes topic → start from scratch'],
      ].map(([emoji, text]) => `
        <div style="
          display: flex; align-items: center; gap: 20px;
          background: rgba(192,57,43,0.04);
          border-left: 4px solid ${D.error};
          padding: 24px 28px;
          border-radius: 0 ${S.borderRadiusSmall} ${S.borderRadiusSmall} 0;
        ">
          <span style="font-size: 32px; flex-shrink: 0;">${emoji}</span>
          <span style="font-size: ${FS.body}; color: ${D.textSecondary}; line-height: 1.4; font-family: ${F.body};">${text}</span>
        </div>
      `).join('')}
    </div>

    <p style="
      color: ${D.textTertiary}; font-size: ${FS.caption};
      text-align: center; margin-top: 20px;
      font-family: ${F.body}; font-style: italic;
    ">${isKR ? '이 시간, 연구에 쓸 수 있다면?' : 'What if this time could go to actual research?'}</p>

    ${footer('warm', 2, 10)}
  `));

  // ============================================================
  // SLIDE 3 [WARM] — Solution intro
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: ${FS.title}; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.15; margin-bottom: 20px;
      font-family: ${F.heading};
      letter-spacing: -0.5px;
    ">${isKR
      ? 'Claude Code의<br><span style="color:' + D.accent + ';">docx Skill</span>'
      : 'Meet<br><span style="color:' + D.accent + ';">docx Skill</span>'
    }</h2>

    <p style="
      font-size: ${FS.body}; color: ${D.textSecondary};
      line-height: 1.6; margin-bottom: 36px;
      font-family: ${F.body};
    ">${isKR
      ? 'Claude Code에 내장된 공식 Skill.\n완벽한 APA 7th 형식의 Word 문서를 자동으로 생성합니다.'
      : 'An official built-in Claude Code Skill.\nGenerates perfectly formatted APA 7th Word documents — automatically.'
    }</p>

    <div style="flex: 1; display: flex; flex-direction: column; gap: 16px;">
      ${[
        isKR ? ['📝', 'Word 문서 생성 · 편집 · 분석'] : ['📝', 'Create · Edit · Analyze Word documents'],
        isKR ? ['🎓', 'APA 7th, MLA, Chicago 스타일 지원'] : ['🎓', 'APA 7th, MLA, Chicago styles supported'],
        isKR ? ['⚡', '자연어 프롬프트 하나로 완성'] : ['⚡', 'One natural language prompt — done'],
      ].map(([emoji, text]) => `
        <div style="
          display: flex; align-items: center; gap: 20px;
          padding: 24px 28px;
          background: ${D.accentSoft};
          border-radius: ${S.borderRadiusSmall};
        ">
          <span style="font-size: 36px; flex-shrink: 0;">${emoji}</span>
          <span style="font-size: ${FS.body}; color: ${D.textPrimary}; font-weight: 600; font-family: ${F.heading};">${text}</span>
        </div>
      `).join('')}
    </div>

    <div style="
      margin-top: 24px; padding: 20px 28px;
      background: ${D.accentMedium};
      border-radius: ${S.borderRadiusSmall};
      display: flex; align-items: center; gap: 12px;
    ">
      <span style="font-size: ${FS.caption}; color: ${D.accent}; font-weight: 700; font-family: ${F.heading};">
        Anthropic Official Skill
      </span>
      <span style="font-size: ${FS.small}; color: ${D.textTertiary};">·</span>
      <span style="font-size: ${FS.caption}; color: ${D.textTertiary}; font-family: ${F.heading};">
        ${isKR ? '설치 없이 바로 사용' : 'Built-in, no setup needed'}
      </span>
    </div>

    ${footer('warm', 3, 10)}
  `));

  // ============================================================
  // SLIDE 4 [WARM] — Demo: The Prompt
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 24px;
    ">
      ${numberBadge('1')}
      <span style="
        font-size: ${FS.subtitle}; font-weight: 800; color: ${D.textPrimary};
        font-family: ${F.heading};
      ">${isKR ? '프롬프트 하나면 됩니다' : 'One prompt is all you need'}</span>
    </div>

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
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
          ? ' 연구 제안서를 APA 7th로 작성해줘.'
          : ' education. APA 7th format.'
        },
        { type: 'input', text: isKR
          ? ' 표지, 초록, 참고문헌 포함."'
          : ' Include title page, abstract,"'
        },
        ...(isKR ? [] : [
          { type: 'input', text: ' and references."' },
        ]),
        { type: 'blank' },
        { type: 'comment', text: isKR
          ? 'Claude가 docx Skill을 자동으로 활성화합니다...'
          : 'Claude activates docx Skill automatically...'
        },
      ])}
    </div>

    <p style="
      font-size: ${FS.caption}; color: ${D.textTertiary};
      font-family: ${F.body}; font-style: italic;
      margin-top: 20px;
    ">${isKR
      ? '💡 자연어로 요청하세요. 명령어를 외울 필요가 없습니다.'
      : '💡 Just describe what you need — no commands to memorize.'
    }</p>

    ${footer('warm', 4, 10)}
  `));

  // ============================================================
  // SLIDE 5 [WARM] — Demo: Claude generates
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 24px;
    ">
      ${numberBadge('2')}
      <span style="
        font-size: ${FS.subtitle}; font-weight: 800; color: ${D.textPrimary};
        font-family: ${F.heading};
      ">${isKR ? 'Claude가 자동으로 생성' : 'Claude builds it all'}</span>
    </div>

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      ${terminal('Claude Code — generating proposal.docx', [
        { type: 'progress', text: isKR ? 'proposal.docx 생성 중...' : 'Creating proposal.docx...' },
        { type: 'blank' },
        { type: 'output', highlight: isKR ? '표지' : 'Title page', text: isKR ? '— Running head, 소속, 저자' : '— Running head, affiliations' },
        { type: 'output', highlight: isKR ? '초록' : 'Abstract', text: isKR ? '— 250단어 + 키워드' : '— 250 words + keywords' },
        { type: 'output', highlight: isKR ? '제목 체계' : 'Headings', text: isKR ? '— Level 1-3 APA 형식' : '— Level 1-3 APA format' },
        { type: 'output', highlight: isKR ? '본문' : 'Body', text: isKR ? '— 서론, 문헌검토, 방법론' : '— Intro, lit review, method' },
        { type: 'output', highlight: isKR ? '참고문헌' : 'References', text: isKR ? '— 내어쓰기, DOI 링크' : '— Hanging indent, DOI links' },
        { type: 'output', highlight: isKR ? '서식' : 'Format', text: '— 12pt TNR, 1" margins, 2x' },
        { type: 'blank' },
        { type: 'output', highlight: '✅ Done', text: isKR ? '— proposal.docx 저장 완료' : '— proposal.docx saved' },
      ])}
    </div>

    ${footer('warm', 5, 10)}
  `));

  // ============================================================
  // SLIDE 6 [WARM] — The Output (document preview)
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 20px;
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

    <div style="flex: 1; display: flex; align-items: flex-start; justify-content: center; padding-top: 8px;">
      <div style="
        width: 640px;
        background: white;
        border: 1px solid rgba(0,0,0,0.06);
        border-radius: 4px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
        padding: 56px 64px;
        font-family: 'Times New Roman', 'Noto Serif KR', serif;
      ">
        <div style="font-size: 13px; color: #999; margin-bottom: 28px; text-align: right;">Running head: AI-ASSISTED FEEDBACK</div>
        <div style="text-align: center; margin-bottom: 36px;">
          <div style="font-size: 24px; font-weight: bold; line-height: 1.4; color: #111; margin-bottom: 16px;">
            ${isKR
              ? 'AI 기반 피드백이 고등교육에서<br>학생의 학업 성과에 미치는 영향'
              : 'The Impact of AI-Assisted<br>Feedback on Student Academic<br>Performance in Higher Education'
            }
          </div>
          <div style="font-size: 16px; color: #444; margin-top: 20px;">Author Name</div>
          <div style="font-size: 14px; color: #888;">Department of Education, University</div>
        </div>
        <div style="border-top: 1px solid #ddd; padding-top: 20px;">
          <div style="font-size: 16px; font-weight: bold; text-align: center; margin-bottom: 12px;">Abstract</div>
          <div style="font-size: 14px; color: #555; line-height: 2;">
            ${isKR
              ? '본 연구는 AI 기반 피드백 시스템이 고등교육 환경에서 학생의 학업 성과와 자기조절 학습에 미치는 영향을 탐구한다...'
              : 'This study explores the impact of AI-assisted feedback systems on student academic performance and self-regulated learning in higher education...'
            }
          </div>
          <div style="font-size: 13px; color: #aaa; margin-top: 10px; font-style: italic;">
            Keywords: AI feedback, higher education, academic performance, self-regulated learning
          </div>
        </div>
      </div>
    </div>

    <p style="
      font-size: ${FS.caption}; color: ${D.textTertiary};
      text-align: center; margin-top: 12px;
      font-family: ${F.body}; font-style: italic;
    ">${isKR
      ? '✨ 12pt Times New Roman · 이중 간격 · APA 7th 완벽 준수'
      : '✨ 12pt Times New Roman · double-spaced · full APA 7th compliance'
    }</p>

    ${footer('warm', 6, 10)}
  `));

  // ============================================================
  // SLIDE 7 [WARM] — What's included (checklist)
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 56px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.15; margin-bottom: 32px;
      font-family: ${F.heading};
      letter-spacing: -0.5px;
    ">${isKR ? '포함되는 APA 7th<br>요소들' : 'APA 7th elements<br>included'}</h2>

    <div style="display: flex; flex-direction: column; gap: 12px; flex: 1;">
      ${[
        isKR ? ['표지', 'Running head · 소속 · 저자 메모'] : ['Title page', 'Running head · affiliations · author note'],
        isKR ? ['초록 + 키워드', '250단어 요약 + 키워드 목록'] : ['Abstract + Keywords', '250-word summary + keyword list'],
        isKR ? ['제목 체계', 'Level 1-5 완벽한 APA 형식'] : ['Heading levels', 'Level 1-5 perfect APA formatting'],
        isKR ? ['본문 인용', '(Author, Year) 자동 형식'] : ['In-text citations', '(Author, Year) auto-formatted'],
        isKR ? ['참고문헌', '내어쓰기 · DOI 하이퍼링크'] : ['Reference list', 'Hanging indent · DOI hyperlinks'],
        isKR ? ['문서 서식', '12pt TNR · 이중 간격 · 1" 여백'] : ['Document format', '12pt TNR · double-spaced · 1" margins'],
      ].map(([title, desc]) => `
        <div style="
          display: flex; align-items: center; gap: 16px;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        ">
          <div style="
            width: 28px; height: 28px; border-radius: 50%;
            background: ${D.accent};
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
          ">
            <span style="color: white; font-size: 14px; font-weight: 800;">✓</span>
          </div>
          <div>
            <span style="color: ${D.textPrimary}; font-size: 26px; font-weight: 700; font-family: ${F.heading};">${title}</span>
            <span style="color: ${D.textTertiary}; font-size: 22px; font-family: ${F.body}; margin-left: 12px;">${desc}</span>
          </div>
        </div>
      `).join('')}
    </div>

    ${footer('warm', 7, 10)}
  `));

  // ============================================================
  // SLIDE 8 [WARM] — Before vs After
  // ============================================================
  slides.push(slideWrapper('warm', `
    ${seriesTag('warm')}

    <h2 style="
      font-size: 56px; font-weight: 900; color: ${D.textPrimary};
      line-height: 1.15; margin-bottom: 32px;
      font-family: ${F.heading};
    ">Before vs After</h2>

    <div style="display: flex; gap: 20px; flex: 1;">
      <div style="
        flex: 1;
        background: rgba(192,57,43,0.04);
        border-top: 4px solid ${D.error};
        border-radius: 0 0 ${S.borderRadius} ${S.borderRadius};
        padding: 32px 28px;
        display: flex; flex-direction: column;
        justify-content: space-between;
      ">
        <div style="
          font-size: 28px; font-weight: 800; color: ${D.error};
          margin-bottom: 20px; font-family: ${F.heading};
        ">✕ Before</div>
        ${[
          isKR ? ['⏰', '2-3시간 서식 작업'] : ['⏰', '2-3 hours formatting'],
          isKR ? ['📖', 'APA 매뉴얼 수시 확인'] : ['📖', 'Checking APA manual'],
          isKR ? ['🔍', '템플릿 찾아다니기'] : ['🔍', 'Hunting for templates'],
          isKR ? ['😤', '서식 깨짐 밤새 수정'] : ['😤', 'Fixing broken formatting'],
          isKR ? ['🔄', '주제 변경 = 처음부터'] : ['🔄', 'Topic change = restart'],
        ].map(([emoji, text]) => `
          <div style="display:flex;align-items:center;gap:16px;flex:1;">
            <span style="font-size:36px;">${emoji}</span>
            <span style="color:${D.textSecondary};font-size:${FS.body};line-height:1.3;font-family:${F.heading};font-weight:500;">${text}</span>
          </div>
        `).join('')}
      </div>

      <div style="
        flex: 1;
        background: rgba(45,122,79,0.04);
        border-top: 4px solid ${D.success};
        border-radius: 0 0 ${S.borderRadius} ${S.borderRadius};
        padding: 32px 28px;
        display: flex; flex-direction: column;
        justify-content: space-between;
      ">
        <div style="
          font-size: 28px; font-weight: 800; color: ${D.success};
          margin-bottom: 20px; font-family: ${F.heading};
        ">✓ After</div>
        ${[
          isKR ? ['⚡', '30초 프롬프트 하나'] : ['⚡', '30 seconds, one prompt'],
          isKR ? ['🎯', '완벽한 APA 7th 자동 적용'] : ['🎯', 'Perfect APA 7th auto'],
          isKR ? ['📄', '.docx 즉시 생성'] : ['📄', 'Instant .docx generation'],
          isKR ? ['✏️', '수정도 자연어로'] : ['✏️', 'Revisions in plain language'],
          isKR ? ['♻️', '주제 변경? 다시 말하면 끝'] : ['♻️', 'New topic? Just ask again'],
        ].map(([emoji, text]) => `
          <div style="display:flex;align-items:center;gap:16px;flex:1;">
            <span style="font-size:36px;">${emoji}</span>
            <span style="color:${D.textSecondary};font-size:${FS.body};line-height:1.3;font-family:${F.heading};font-weight:500;">${text}</span>
          </div>
        `).join('')}
      </div>
    </div>

    ${footer('warm', 8, 10)}
  `));

  // ============================================================
  // SLIDE 9 [ACCENT] — Key takeaway (terracotta background)
  // ============================================================
  slides.push(slideWrapper('accent', `
    ${seriesTag('accent')}

    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <span style="font-size: 72px; margin-bottom: 24px;">${DESIGN.mascot}</span>

      <h2 style="
        font-size: ${FS.hero}; font-weight: 900; color: ${D.accentText};
        line-height: 1.1; margin-bottom: 32px;
        font-family: ${F.heading};
        letter-spacing: -1px;
      ">${isKR
        ? '당신의 전문성은<br>연구에 쓰여야<br>합니다.'
        : 'Your expertise<br>belongs in<br>research.'
      }</h2>

      <p style="
        font-size: ${FS.subtitle}; color: ${D.accentTextSoft};
        font-family: ${F.body}; font-style: italic;
      ">${isKR ? '서식이 아니라.' : 'Not formatting.'}</p>
    </div>

    <div style="
      display: flex; gap: 16px; margin-bottom: 8px;
    ">
      ${[
        isKR ? ['1', 'Claude Code\n실행'] : ['1', 'Open\nClaude Code'],
        isKR ? ['2', '제안서\n설명'] : ['2', 'Describe\nyour proposal'],
        isKR ? ['3', '제출'] : ['3', 'Submit'],
      ].map(([num, text]) => `
        <div style="
          flex: 1; display: flex; align-items: center; gap: 14px;
          background: rgba(255,255,255,0.1);
          padding: 20px 24px;
          border-radius: ${S.borderRadiusSmall};
        ">
          <div style="
            width: 40px; height: 40px; border-radius: 50%;
            background: rgba(255,255,255,0.2);
            display: flex; align-items: center; justify-content: center;
            color: white; font-weight: 800; font-size: 20px;
            font-family: ${F.heading}; flex-shrink: 0;
          ">${num}</div>
          <span style="color: rgba(255,255,255,0.85); font-size: 22px; font-weight: 600; font-family: ${F.heading}; line-height: 1.3;">${text.replace('\n', '<br>')}</span>
        </div>
      `).join('')}
    </div>

    ${footer('accent', 9, 10)}
  `));

  // ============================================================
  // SLIDE 10 [WARM] — CTA
  // ============================================================
  slides.push(slideWrapper('warm', `
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">

      <span style="font-size: 96px; margin-bottom: 28px;">${DESIGN.mascot}</span>

      <h2 style="
        font-size: 64px; font-weight: 900; color: ${D.textPrimary};
        line-height: 1.15; margin-bottom: 16px;
        font-family: ${F.heading};
        letter-spacing: -0.5px;
      ">${isKR
        ? '더 많은 연구 도구를<br>만나보세요'
        : 'More research<br>tools coming'
      }</h2>

      <p style="
        font-size: ${FS.body}; color: ${D.textSecondary};
        margin-bottom: 40px; line-height: 1.5;
        font-family: ${F.body};
      ">${isKR
        ? '매주 새로운 연구자 도구 & 팁을 소개합니다'
        : 'New researcher tools & tips every week'
      }</p>

      <div style="
        background: ${D.accent};
        padding: 20px 56px; border-radius: ${S.borderRadiusSmall};
        margin-bottom: 24px;
      ">
        <span style="color: white; font-size: ${FS.body}; font-weight: 700; font-family: ${F.heading};">
          ${isKR ? '팔로우하기' : 'Follow Now'}
        </span>
      </div>

      <div style="display: flex; gap: 24px;">
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
