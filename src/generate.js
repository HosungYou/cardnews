#!/usr/bin/env node
/**
 * Card News Generator Pipeline
 * HTML → PNG (Puppeteer) → PDF (pdf-lib for LinkedIn)
 *
 * Usage:
 *   node src/generate.js --slide=slides/apa7th-proposal --lang=en --out=output/apa7th-en
 *   node src/generate.js --slide=slides/apa7th-proposal --lang=kr --out=output/apa7th-kr
 */

const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const DESIGN = require('./design-system');

// Parse CLI args
function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach(arg => {
    const [key, val] = arg.replace('--', '').split('=');
    args[key] = val;
  });
  return {
    slidePath: args.slide || 'slides/apa7th-proposal',
    lang: args.lang || 'en',
    outDir: args.out || `output/${args.slide?.split('/').pop() || 'default'}-${args.lang || 'en'}`,
  };
}

async function generate() {
  const { slidePath, lang, outDir } = parseArgs();

  // Load slide module
  const slideModule = require(`./${slidePath}`);
  const slides = slideModule.generateSlides(lang);

  console.log(`\n🦊🎓 Diverga Card News Generator`);
  console.log(`   Slides: ${slides.length}`);
  console.log(`   Language: ${lang.toUpperCase()}`);
  console.log(`   Output: ${outDir}\n`);

  // Ensure output directory
  const absOutDir = path.resolve(__dirname, '..', outDir);
  fs.mkdirSync(absOutDir, { recursive: true });

  // Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: DESIGN.width,
    height: DESIGN.height,
    deviceScaleFactor: 2, // 2x for retina quality
  });

  const pngPaths = [];

  for (let i = 0; i < slides.length; i++) {
    const slideNum = String(i + 1).padStart(2, '0');
    const html = slides[i];

    // Set HTML content (use domcontentloaded to avoid font timeout, then wait separately)
    await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Wait for fonts to load (with timeout fallback)
    try {
      await Promise.race([
        page.evaluateHandle('document.fonts.ready'),
        new Promise(r => setTimeout(r, 5000)),
      ]);
    } catch (e) { /* font load timeout is ok, continue */ }
    await new Promise(r => setTimeout(r, 800)); // Extra settle time

    // Screenshot
    const pngPath = path.join(absOutDir, `slide-${slideNum}.png`);
    await page.screenshot({
      path: pngPath,
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: DESIGN.width,
        height: DESIGN.height,
      },
    });

    pngPaths.push(pngPath);
    console.log(`   ✓ Slide ${slideNum}/${slides.length} → ${path.basename(pngPath)}`);
  }

  await browser.close();

  // Generate LinkedIn PDF
  console.log(`\n   📄 Assembling LinkedIn PDF...`);
  const pdfDoc = await PDFDocument.create();

  for (const pngPath of pngPaths) {
    const pngBytes = fs.readFileSync(pngPath);
    const pngImage = await pdfDoc.embedPng(pngBytes);

    // PDF page at 1080x1350 points (same as pixels for consistent display)
    const page = pdfDoc.addPage([DESIGN.width, DESIGN.height]);
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: DESIGN.width,
      height: DESIGN.height,
    });
  }

  const pdfPath = path.join(absOutDir, `linkedin-carousel.pdf`);
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(pdfPath, pdfBytes);

  console.log(`   ✓ PDF → ${path.basename(pdfPath)}`);
  console.log(`\n   🎉 Done! ${slides.length} PNGs + 1 PDF generated.`);
  console.log(`   📁 ${absOutDir}\n`);
}

generate().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
