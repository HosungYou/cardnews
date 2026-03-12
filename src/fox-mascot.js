/**
 * Custom Fox Mascot SVG — Terracotta fox with graduation cap
 * Designed for Diverga card news in Claude's warm palette
 */

/**
 * Generate fox mascot SVG at specified size
 * @param {number} size - Width/height in pixels
 * @returns {string} Inline SVG HTML
 */
function foxMascot(size = 64) {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Fox face (warm terracotta) -->
      <ellipse cx="60" cy="68" rx="32" ry="30" fill="#D97757"/>

      <!-- Left ear -->
      <path d="M28 52 L38 20 L52 48 Z" fill="#D97757"/>
      <path d="M33 46 L39 26 L48 44 Z" fill="#EBDBBC"/>

      <!-- Right ear -->
      <path d="M92 52 L82 20 L68 48 Z" fill="#D97757"/>
      <path d="M87 46 L81 26 L72 44 Z" fill="#EBDBBC"/>

      <!-- Face markings (cream/ivory) -->
      <ellipse cx="60" cy="76" rx="20" ry="18" fill="#FAF9F5"/>

      <!-- Eyes -->
      <ellipse cx="48" cy="64" rx="4.5" ry="5" fill="#141413"/>
      <ellipse cx="72" cy="64" rx="4.5" ry="5" fill="#141413"/>
      <!-- Eye highlights -->
      <circle cx="49.5" cy="62.5" r="1.8" fill="white"/>
      <circle cx="73.5" cy="62.5" r="1.8" fill="white"/>

      <!-- Nose -->
      <ellipse cx="60" cy="74" rx="4" ry="3" fill="#141413"/>

      <!-- Mouth -->
      <path d="M56 77 Q60 81 64 77" stroke="#141413" stroke-width="1.5" fill="none" stroke-linecap="round"/>

      <!-- Graduation cap -->
      <!-- Cap board (dark) -->
      <polygon points="26,34 60,18 94,34 60,44" fill="#141413"/>
      <!-- Cap top surface -->
      <polygon points="30,33 60,20 90,33 60,42" fill="#262624"/>

      <!-- Tassel string -->
      <line x1="76" y1="33" x2="92" y2="48" stroke="#C4923D" stroke-width="2" stroke-linecap="round"/>
      <!-- Tassel end -->
      <circle cx="92" cy="50" r="3.5" fill="#C4923D"/>
      <rect x="90" y="50" width="4" height="6" rx="1" fill="#C4923D"/>
    </svg>
  `;
}

/**
 * Small fox icon (for footer/tags)
 */
function foxIcon(size = 36) {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="18" cy="21" rx="10" ry="9.5" fill="#D97757"/>
      <path d="M8 17 L11 6 L16 15 Z" fill="#D97757"/>
      <path d="M28 17 L25 6 L20 15 Z" fill="#D97757"/>
      <ellipse cx="18" cy="24" rx="6.5" ry="6" fill="#FAF9F5"/>
      <circle cx="14.5" cy="20" r="1.5" fill="#141413"/>
      <circle cx="21.5" cy="20" r="1.5" fill="#141413"/>
      <ellipse cx="18" cy="23.5" rx="1.3" ry="1" fill="#141413"/>
      <polygon points="7,11 18,5 29,11 18,14.5" fill="#262624"/>
    </svg>
  `;
}

module.exports = { foxMascot, foxIcon };
