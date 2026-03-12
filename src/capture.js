#!/usr/bin/env node
/**
 * Screenshot Capture Pipeline
 * Uses Playwright to capture real screenshots for card news content
 *
 * Usage:
 *   node src/capture.js --config=captures/apa7th.json
 *   node src/capture.js --url="https://example.com" --name="example" --selector="main"
 *   node src/capture.js --html=assets/terminal-mock.html --name="terminal" --viewport=800x600
 *
 * Capture modes:
 *   1. URL capture: Navigate to a URL, optionally select an element, screenshot
 *   2. HTML capture: Render local HTML file, screenshot
 *   3. Config-based: Read a JSON config file with multiple capture targets
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.resolve(__dirname, '..', 'assets', 'captures');

function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach(arg => {
    const match = arg.match(/^--(\w+)=(.+)$/);
    if (match) args[match[1]] = match[2];
  });
  return args;
}

/**
 * Capture a single screenshot
 */
async function captureOne(browser, target) {
  const {
    name,
    url,
    html,
    selector,
    viewport = '1080x810',
    waitFor,
    delay = 1000,
    deviceScaleFactor = 2,
    clip,
  } = target;

  const [width, height] = viewport.split('x').map(Number);

  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor,
    colorScheme: target.colorScheme || 'light',
  });

  const page = await context.newPage();

  try {
    if (html) {
      // Local HTML file
      const htmlPath = path.resolve(__dirname, '..', html);
      const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
      await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });
    } else if (url) {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    }

    // Wait for specific selector if specified
    if (waitFor) {
      await page.waitForSelector(waitFor, { timeout: 10000 }).catch(() => {});
    }

    // Additional settle time
    await page.waitForTimeout(delay);

    // Screenshot options
    const screenshotOpts = {
      path: path.join(ASSETS_DIR, `${name}.png`),
      type: 'png',
    };

    if (selector) {
      // Capture specific element
      const element = await page.$(selector);
      if (element) {
        await element.screenshot(screenshotOpts);
      } else {
        console.warn(`  ⚠ Selector "${selector}" not found, capturing full page`);
        await page.screenshot(screenshotOpts);
      }
    } else if (clip) {
      // Capture specific region
      screenshotOpts.clip = clip;
      await page.screenshot(screenshotOpts);
    } else {
      await page.screenshot(screenshotOpts);
    }

    console.log(`  ✓ ${name}.png (${width}x${height} @${deviceScaleFactor}x)`);
  } catch (err) {
    console.error(`  ✕ ${name}: ${err.message}`);
  } finally {
    await context.close();
  }
}

/**
 * Capture terminal-style output by rendering HTML
 */
async function captureTerminal(browser, target) {
  const { name, prompt, output, viewport = '920x600' } = target;

  const lines = [];
  if (prompt) lines.push(...prompt.map(p => `<div><span style="color:#D97757;font-weight:500;">❯</span> <span style="color:#FCFCFA;">${p}</span></div>`));
  if (output) lines.push(...output.map(o => {
    if (o.startsWith('✓')) return `<div><span style="color:#A9DC76;">${o}</span></div>`;
    if (o.startsWith('#')) return `<div style="color:#727072;">${o}</div>`;
    return `<div style="color:#FCFCFA;">${o}</div>`;
  }));

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
    <style>
      * { margin:0; padding:0; box-sizing:border-box; }
      body { background:#2D2A2E; font-family:'Fira Code','SF Mono',monospace; font-size:16px; line-height:1.8; }
      .header { background:#383539; padding:12px 18px; display:flex; align-items:center; gap:7px; }
      .dot { width:11px; height:11px; border-radius:50%; }
      .content { padding:20px 24px; }
    </style>
  </head><body>
    <div class="header">
      <div class="dot" style="background:#FF6188;"></div>
      <div class="dot" style="background:#FFD866;"></div>
      <div class="dot" style="background:#A9DC76;"></div>
      <span style="color:#727072;font-size:13px;margin-left:8px;">Claude Code</span>
    </div>
    <div class="content">${lines.join('\n')}</div>
  </body></html>`;

  const [width, height] = viewport.split('x').map(Number);
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);

  await page.screenshot({
    path: path.join(ASSETS_DIR, `${name}.png`),
    type: 'png',
  });

  console.log(`  ✓ ${name}.png (terminal, ${width}x${height})`);
  await context.close();
}

async function main() {
  const args = parseArgs();

  // Ensure assets directory
  fs.mkdirSync(ASSETS_DIR, { recursive: true });

  console.log(`\n📸 Cardnews Screenshot Capture Pipeline`);
  console.log(`   Output: ${ASSETS_DIR}\n`);

  const browser = await chromium.launch({ headless: true });

  if (args.config) {
    // Config-based capture
    const configPath = path.resolve(__dirname, '..', args.config);
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

    for (const target of config.captures) {
      if (target.type === 'terminal') {
        await captureTerminal(browser, target);
      } else {
        await captureOne(browser, target);
      }
    }
  } else if (args.url || args.html) {
    // Single capture
    await captureOne(browser, {
      name: args.name || 'capture',
      url: args.url,
      html: args.html,
      selector: args.selector,
      viewport: args.viewport || '1080x810',
    });
  } else {
    console.log('Usage:');
    console.log('  node src/capture.js --config=captures/apa7th.json');
    console.log('  node src/capture.js --url="https://..." --name="screenshot"');
    console.log('  node src/capture.js --html=file.html --name="local"');
  }

  await browser.close();
  console.log(`\n   ✅ Capture complete.\n`);
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
