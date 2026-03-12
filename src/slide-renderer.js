/**
 * Slide Renderer v4 — "Academic Editorial Bold"
 * Warm-only with terracotta accent blocks
 * 2x typography for mobile feed impact
 * Source Serif 4 for professional English body text
 */

const DESIGN = require('./design-system');
const D = DESIGN.colors;
const F = DESIGN.fonts;
const S = DESIGN.spacing;

const fontLink = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+KR:wght@400;500;600;700;800;900&family=Noto+Serif+KR:wght@400;700&family=Source+Serif+4:wght@400;600;700&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">`;

const baseCSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${DESIGN.width}px;
    height: ${DESIGN.height}px;
    overflow: hidden;
    font-family: ${F.heading};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

/**
 * Series tag — minimal editorial badge
 */
function seriesTag(mode = 'warm') {
  const isAccent = mode === 'accent';
  return `
    <div style="
      display: inline-flex; align-items: center; gap: 10px;
      border-bottom: 3px solid ${isAccent ? 'rgba(255,255,255,0.3)' : D.accent};
      padding-bottom: 10px;
      margin-bottom: 20px;
    ">
      <span style="
        font-size: ${DESIGN.fontSize.tag}; font-weight: 700;
        letter-spacing: 2px; text-transform: uppercase;
        color: ${isAccent ? 'rgba(255,255,255,0.7)' : D.accent};
        font-family: ${F.heading};
      ">${DESIGN.brand.tag}</span>
    </div>
  `;
}

/**
 * Footer — clean, larger for 2x design
 */
function footer(mode = 'warm', pageNum = 1, totalPages = 10) {
  const isAccent = mode === 'accent';
  const textColor = isAccent ? 'rgba(255,255,255,0.5)' : D.textTertiary;
  const dotActive = isAccent ? '#FFFFFF' : D.accent;
  const dotInactive = isAccent ? 'rgba(255,255,255,0.2)' : 'rgba(20,20,19,0.12)';

  const dots = Array.from({ length: totalPages }, (_, i) => {
    const isActive = i === pageNum - 1;
    return `<div style="
      width: ${isActive ? '36px' : '12px'}; height: 12px;
      border-radius: 6px;
      background: ${isActive ? dotActive : dotInactive};
    "></div>`;
  }).join('');

  return `
    <div style="
      display: flex; justify-content: space-between; align-items: center;
      margin-top: auto; padding-top: 16px;
    ">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 40px;">${DESIGN.mascot}</span>
        <span style="color: ${textColor}; font-size: ${DESIGN.fontSize.small}; font-weight: 600; font-family: ${F.heading};">
          ${DESIGN.brand.author}
        </span>
      </div>
      <div style="display: flex; gap: 6px; align-items: center;">${dots}</div>
    </div>
  `;
}

/**
 * Terminal mockup — realistic Claude Code terminal
 */
function terminal(title, lines, opts = {}) {
  const width = opts.width || '100%';
  const fullHeight = opts.fullHeight || false;
  const fontSize = opts.fontSize || DESIGN.fontSize.code;
  const lineHeight = opts.lineHeight || '1.8';
  const lineHTML = lines.map(l => {
    if (l.type === 'prompt') return `<div style="margin-bottom:8px;"><span style="color:${D.termPrompt};font-weight:600;">❯</span> <span style="color:${D.termText};font-weight:600;">${l.text}</span></div>`;
    if (l.type === 'input') return `<div style="margin-bottom:4px;"><span style="color:${D.termComment};">  </span><span style="color:${D.termText};">${l.text}</span></div>`;
    if (l.type === 'output') return `<div style="margin-bottom:4px;"><span style="color:${D.termGreen};">  ✓</span> <span style="color:${D.termYellow};font-weight:600;">${l.highlight || ''}</span> <span style="color:${D.termComment};">${l.text}</span></div>`;
    if (l.type === 'comment') return `<div style="color:${D.termComment};margin-bottom:4px;">  # ${l.text}</div>`;
    if (l.type === 'blank') return '<div style="height:16px;"></div>';
    if (l.type === 'progress') return `<div style="margin-bottom:4px;"><span style="color:${D.termGreen};">  ●</span> <span style="color:${D.termText};">${l.text}</span></div>`;
    if (l.type === 'divider') return `<div style="height:1px;background:${D.termHeader};margin:12px 0;"></div>`;
    return `<div style="color:${D.termText};margin-bottom:4px;">${l.text}</div>`;
  }).join('');

  const height = opts.height || null;
  const flexStyle = fullHeight ? 'flex:1;display:flex;flex-direction:column;' : '';
  const heightStyle = height ? `height:${height};` : '';
  const contentFlexStyle = fullHeight ? 'flex:1;' : '';

  return `
    <div style="
      background: ${D.termBg};
      border-radius: ${S.borderRadius};
      overflow: hidden;
      width: ${width};
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
      ${flexStyle}${heightStyle}
    ">
      <div style="
        background: ${D.termHeader};
        padding: 18px 24px;
        display: flex; align-items: center; gap: 10px;
        flex-shrink: 0;
      ">
        <div style="width:16px;height:16px;border-radius:50%;background:${D.termDotRed};"></div>
        <div style="width:16px;height:16px;border-radius:50%;background:${D.termDotYellow};"></div>
        <div style="width:16px;height:16px;border-radius:50%;background:${D.termDotGreen};"></div>
        <span style="color:${D.termComment};font-size:24px;margin-left:10px;font-family:${F.code};">${title}</span>
      </div>
      <div style="
        padding: 32px 36px;
        font-family: ${F.code};
        font-size: ${fontSize};
        line-height: ${lineHeight};
        ${contentFlexStyle}
      ">${lineHTML}</div>
    </div>
  `;
}

/**
 * Accent block — terracotta highlighted section
 */
function accentBlock(content, opts = {}) {
  const padding = opts.padding || '36px 40px';
  const radius = opts.radius || S.borderRadius;
  return `
    <div style="
      background: ${D.accent};
      border-radius: ${radius};
      padding: ${padding};
      color: ${D.accentText};
    ">${content}</div>
  `;
}

/**
 * Card — white elevated card
 */
function card(content, opts = {}) {
  const padding = opts.padding || '36px';
  return `
    <div style="
      background: ${D.cardBg};
      border-radius: ${S.borderRadius};
      padding: ${padding};
      box-shadow: 0 4px 16px rgba(0,0,0,0.05);
      border: 1px solid rgba(0,0,0,0.04);
    ">${content}</div>
  `;
}

/**
 * Number badge — for step indicators (larger)
 */
function numberBadge(num, mode = 'warm') {
  const isAccent = mode === 'accent';
  return `
    <div style="
      width: 72px; height: 72px; border-radius: 50%;
      background: ${isAccent ? 'rgba(255,255,255,0.2)' : D.accent};
      display: flex; align-items: center; justify-content: center;
      color: #FFFFFF;
      font-weight: 800; font-size: 36px;
      font-family: ${F.heading};
      flex-shrink: 0;
    ">${num}</div>
  `;
}

/**
 * Slide wrapper
 * mode: 'warm' (ivory bg) or 'accent' (terracotta bg)
 */
function slideWrapper(mode, content) {
  const isAccent = mode === 'accent';
  const bg = isAccent ? D.accentBg : D.warmBg;

  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${fontLink}<style>${baseCSS}
    .slide-root > * { min-height: 0; }
  </style></head><body>
    <div class="slide-root" style="
      width: ${DESIGN.width}px; height: ${DESIGN.height}px;
      background: ${bg};
      display: flex; flex-direction: column;
      padding: ${S.padding};
    ">
      ${content}
    </div>
  </body></html>`;
}

module.exports = {
  DESIGN,
  seriesTag,
  footer,
  terminal,
  accentBlock,
  card,
  numberBadge,
  slideWrapper,
};
