import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import * as opentype from "@shuding/opentype.js";

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, "public", "brand");
const FONT_DIR = "/Users/thinh/.agents/skills/dev-skills/skills/canvas-design/canvas-fonts";
const ITALIANA_PATH = path.join(FONT_DIR, "Italiana-Regular.ttf");
const WORK_SANS_PATH = path.join(FONT_DIR, "WorkSans-Regular.ttf");

const CANVAS = 1000;
const OUTLINE = "#D8586A";
const WORDMARK = "#D85D6F";
const FLAT = "#D95F70";

const M = (x, y) => ({ type: "M", x, y });
const L = (x, y) => ({ type: "L", x, y });
const C = (x1, y1, x2, y2, x, y) => ({ type: "C", x1, y1, x2, y2, x, y });
const Z = () => ({ type: "Z" });

function loadFont(fontPath) {
  const buffer = fs.readFileSync(fontPath);
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  return opentype.parse(arrayBuffer);
}

function formatNumber(value) {
  const rounded = Math.round(value * 100) / 100;
  return Object.is(rounded, -0) ? "0" : String(rounded);
}

function transformCommands(commands, {
  originX = 0,
  originY = 0,
  scaleX = 1,
  scaleY = 1,
  translateX = 0,
  translateY = 0,
} = {}) {
  const point = (x, y) => ({
    x: originX + (x - originX) * scaleX + translateX,
    y: originY + (y - originY) * scaleY + translateY,
  });

  return commands.map((command) => {
    if (command.type === "Z") return { ...command };
    const end = point(command.x, command.y);
    if (command.type === "C") {
      const control1 = point(command.x1, command.y1);
      const control2 = point(command.x2, command.y2);
      return { ...command, ...end, x1: control1.x, y1: control1.y, x2: control2.x, y2: control2.y };
    }
    if (command.type === "Q") {
      const control = point(command.x1, command.y1);
      return { ...command, ...end, x1: control.x, y1: control.y };
    }
    return { ...command, ...end };
  });
}

function mirrorCommands(commands, axisX = 500) {
  return transformCommands(commands, { originX: axisX, scaleX: -1 });
}

function commandsToSvg(commands) {
  return commands.map((command) => {
    if (command.type === "M" || command.type === "L") {
      return `${command.type}${formatNumber(command.x)} ${formatNumber(command.y)}`;
    }
    if (command.type === "C") {
      return `C${formatNumber(command.x1)} ${formatNumber(command.y1)} ${formatNumber(command.x2)} ${formatNumber(command.y2)} ${formatNumber(command.x)} ${formatNumber(command.y)}`;
    }
    if (command.type === "Q") {
      return `Q${formatNumber(command.x1)} ${formatNumber(command.y1)} ${formatNumber(command.x)} ${formatNumber(command.y)}`;
    }
    return "Z";
  }).join(" ");
}

function commandsToEps(commands) {
  const lines = ["newpath"];
  let current = null;
  let subpathStart = null;

  for (const command of commands) {
    if (command.type === "M") {
      lines.push(`${formatNumber(command.x)} ${formatNumber(command.y)} moveto`);
      current = { x: command.x, y: command.y };
      subpathStart = current;
    } else if (command.type === "L") {
      lines.push(`${formatNumber(command.x)} ${formatNumber(command.y)} lineto`);
      current = { x: command.x, y: command.y };
    } else if (command.type === "C") {
      lines.push(`${formatNumber(command.x1)} ${formatNumber(command.y1)} ${formatNumber(command.x2)} ${formatNumber(command.y2)} ${formatNumber(command.x)} ${formatNumber(command.y)} curveto`);
      current = { x: command.x, y: command.y };
    } else if (command.type === "Q") {
      if (!current) throw new Error("Quadratic curve encountered without a current point");
      const c1x = current.x + (2 / 3) * (command.x1 - current.x);
      const c1y = current.y + (2 / 3) * (command.y1 - current.y);
      const c2x = command.x + (2 / 3) * (command.x1 - command.x);
      const c2y = command.y + (2 / 3) * (command.y1 - command.y);
      lines.push(`${formatNumber(c1x)} ${formatNumber(c1y)} ${formatNumber(c2x)} ${formatNumber(c2y)} ${formatNumber(command.x)} ${formatNumber(command.y)} curveto`);
      current = { x: command.x, y: command.y };
    } else if (command.type === "Z") {
      lines.push("closepath");
      current = subpathStart;
    }
  }

  return lines.join("\n");
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  return [0, 2, 4].map((index) => parseInt(normalized.slice(index, index + 2), 16) / 255);
}

function epsColor(hex) {
  return hexToRgb(hex).map((value) => formatNumber(value)).join(" ");
}

function textCommands(font, text, {
  fontSize,
  baseline,
  tracking = 0,
  wordSpacing = 0,
  centerX = 500,
}) {
  const characters = [...text];
  const glyphs = characters.map((character) => font.charToGlyph(character));
  const scale = fontSize / font.unitsPerEm;
  let width = 0;

  for (let index = 0; index < glyphs.length; index += 1) {
    const glyph = glyphs[index];
    width += (glyph.advanceWidth || 0) * scale;
    if (characters[index] === " ") width += wordSpacing;
    if (index < glyphs.length - 1) {
      width += font.getKerningValue(glyph, glyphs[index + 1]) * scale + tracking;
    }
  }

  let cursor = centerX - width / 2;
  const commands = [];

  for (let index = 0; index < glyphs.length; index += 1) {
    const glyph = glyphs[index];
    commands.push(...glyph.getPath(cursor, baseline, fontSize).commands);
    cursor += (glyph.advanceWidth || 0) * scale;
    if (characters[index] === " ") cursor += wordSpacing;
    if (index < glyphs.length - 1) {
      cursor += font.getKerningValue(glyph, glyphs[index + 1]) * scale + tracking;
    }
  }

  return { commands, width };
}

const symbolTransform = { originX: 500, originY: 0, scaleX: 0.86, scaleY: 0.96, translateY: -20 };

const hand = transformCommands([
  M(455, 630),
  C(452, 590, 445, 550, 442, 512),
  C(439, 470, 442, 438, 432, 405),
  C(422, 375, 404, 349, 386, 326),
  L(345, 274),
  C(337, 263, 338, 249, 347, 241),
  C(356, 233, 369, 237, 377, 248),
  L(427, 313),
  C(435, 324, 446, 327, 454, 319),
  C(460, 312, 459, 301, 454, 289),
  L(404, 193),
  C(397, 178, 403, 162, 416, 156),
  C(429, 150, 441, 158, 447, 173),
  L(491, 281),
  C(496, 293, 505, 296, 512, 289),
  C(518, 283, 518, 274, 515, 263),
  L(487, 120),
  C(483, 101, 493, 84, 507, 82),
  C(522, 79, 534, 92, 535, 111),
  L(551, 264),
  C(553, 278, 561, 283, 569, 277),
  C(577, 270, 578, 258, 576, 246),
  L(558, 160),
  C(554, 141, 564, 125, 578, 123),
  C(592, 121, 605, 133, 607, 151),
  L(625, 291),
  C(629, 317, 627, 340, 617, 359),
  C(628, 348, 638, 334, 646, 319),
  L(674, 281),
  C(684, 267, 700, 266, 711, 276),
  C(721, 286, 720, 301, 710, 313),
  L(638, 395),
  C(620, 416, 600, 431, 584, 452),
  C(562, 482, 554, 516, 558, 548),
  C(562, 580, 572, 605, 580, 630),
  C(540, 642, 495, 642, 455, 630),
  Z(),
], symbolTransform);

const outerLeft = transformCommands([
  M(489, 716),
  C(380, 742, 246, 690, 163, 578),
  C(276, 540, 399, 568, 477, 647),
  C(491, 662, 497, 694, 489, 716),
  Z(),
], { originY: 0, scaleY: 0.85 });

const middleLeft = transformCommands([
  M(470, 654),
  C(378, 633, 302, 565, 265, 468),
  C(361, 473, 444, 519, 488, 590),
  C(500, 610, 491, 640, 470, 654),
  Z(),
], { originY: 0, scaleY: 0.85 });

const upperLeft = transformCommands([
  M(456, 577),
  C(392, 550, 350, 491, 348, 416),
  C(417, 428, 471, 467, 497, 523),
  C(507, 545, 491, 568, 470, 578),
  Z(),
], { originY: 0, scaleY: 0.85 });

const nailShapes = [
  [M(347, 265), C(344, 252, 349, 243, 357, 242), C(366, 243, 373, 253, 377, 267), C(368, 260, 358, 259, 347, 265), Z()],
  [M(407, 190), C(403, 176, 408, 164, 417, 162), C(427, 161, 436, 172, 441, 187), C(430, 181, 418, 181, 407, 190), Z()],
  [M(494, 121), C(490, 101, 497, 89, 508, 87), C(519, 87, 528, 98, 530, 117), C(519, 110, 506, 111, 494, 121), Z()],
  [M(565, 159), C(562, 144, 568, 132, 578, 130), C(589, 130, 598, 141, 601, 156), C(591, 151, 578, 152, 565, 159), Z()],
  [M(680, 289), C(686, 276, 698, 273, 706, 280), C(713, 287, 711, 299, 703, 309), C(698, 300, 690, 293, 680, 289), Z()],
].map((nail) => transformCommands(nail, symbolTransform));

const palmLine = transformCommands([
  M(635, 391),
  C(603, 421, 576, 454, 566, 492),
  C(558, 526, 566, 561, 576, 596),
], symbolTransform);

const lotus = {
  outer: [outerLeft, mirrorCommands(outerLeft)],
  middle: [middleLeft, mirrorCommands(middleLeft)],
  upper: [upperLeft, mirrorCommands(upperLeft)],
};

function shapeSvg(commands, { fill, stroke = OUTLINE, strokeWidth = 2.6 }) {
  return `<path d="${commandsToSvg(commands)}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linejoin="round"/>`;
}

function lineSvg(commands, { stroke, strokeWidth }) {
  return `<path d="${commandsToSvg(commands)}" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function makeSvg({ flat = false, wordmarkCommands, subtitleCommands }) {
  const definitions = flat ? "" : `
  <defs>
    <linearGradient id="rose-hand" x1="0" y1="45" x2="0" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F9B0BB"/>
      <stop offset="0.52" stop-color="#F18A98"/>
      <stop offset="1" stop-color="#E76B7A"/>
    </linearGradient>
    <linearGradient id="rose-outer" x1="0" y1="390" x2="0" y2="635" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F59AA7"/>
      <stop offset="1" stop-color="#E86B7A"/>
    </linearGradient>
    <linearGradient id="rose-middle" x1="0" y1="350" x2="0" y2="570" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F9AFB9"/>
      <stop offset="1" stop-color="#ED7C8A"/>
    </linearGradient>
    <linearGradient id="rose-upper" x1="0" y1="340" x2="0" y2="505" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FBC1C8"/>
      <stop offset="1" stop-color="#F18B98"/>
    </linearGradient>
  </defs>`;

  const fill = (gradient) => flat ? FLAT : `url(#${gradient})`;
  const edge = flat ? FLAT : OUTLINE;
  const details = flat ? "" : [
    ...nailShapes.map((nail) => shapeSvg(nail, { fill: "#FAD0D6", stroke: "#C94F62", strokeWidth: 2.4 })),
    lineSvg(palmLine, { stroke: "#C94F62", strokeWidth: 3.1 }),
  ].join("\n    ");
  const textColor = flat ? FLAT : WORDMARK;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" shape-rendering="geometricPrecision">
  <title>TOP TEN NAILS SPA luxury hand and lotus logo</title>
  <desc>Original vector logo with a slender feminine hand rising from a symmetrical lotus, above outlined luxury typography.</desc>${definitions}
  <g id="lotus" stroke-linejoin="round">
    ${lotus.outer.map((petal) => shapeSvg(petal, { fill: fill("rose-outer"), stroke: edge })).join("\n    ")}
    ${lotus.middle.map((petal) => shapeSvg(petal, { fill: fill("rose-middle"), stroke: edge })).join("\n    ")}
    ${lotus.upper.map((petal) => shapeSvg(petal, { fill: fill("rose-upper"), stroke: edge })).join("\n    ")}
  </g>
  <g id="hand">
    ${shapeSvg(hand, { fill: fill("rose-hand"), stroke: edge, strokeWidth: 2.9 })}
    ${details}
  </g>
  <path id="top-ten" d="${commandsToSvg(wordmarkCommands)}" fill="${textColor}"/>
  <g id="nails-spa" fill="${textColor}" stroke="${textColor}">
    <path d="${commandsToSvg(subtitleCommands)}" stroke="none"/>
    <path d="M206 903 H315 M685 903 H794" fill="none" stroke-width="2.6" stroke-linecap="round"/>
  </g>
</svg>
`;
}

function epsFill(commands, color) {
  return `${commandsToEps(commands)}\n${epsColor(color)} setrgbcolor\nfill`;
}

function epsStroke(commands, color, width) {
  return `${commandsToEps(commands)}\n${epsColor(color)} setrgbcolor\n${formatNumber(width)} setlinewidth\n1 setlinecap\n1 setlinejoin\nstroke`;
}

function makeEps({ wordmarkCommands, subtitleCommands }) {
  const blocks = [
    "%!PS-Adobe-3.0 EPSF-3.0",
    "%%Creator: TOP TEN NAILS SPA vector generator",
    "%%Title: TOP TEN NAILS SPA luxury hand and lotus logo",
    "%%BoundingBox: 0 0 1000 1000",
    "%%HiResBoundingBox: 0 0 1000 1000",
    "%%LanguageLevel: 2",
    "%%Pages: 1",
    "%%EndComments",
    "gsave",
    "0 1000 translate",
    "1 -1 scale",
  ];

  const petals = [
    ...lotus.outer.map((petal) => ({ commands: petal, fill: "#EA7180" })),
    ...lotus.middle.map((petal) => ({ commands: petal, fill: "#F08B97" })),
    ...lotus.upper.map((petal) => ({ commands: petal, fill: "#F5A4AE" })),
  ];

  for (const petal of petals) {
    blocks.push(epsFill(petal.commands, petal.fill));
    blocks.push(epsStroke(petal.commands, OUTLINE, 2.6));
  }

  blocks.push(epsFill(hand, "#EE7D8C"));
  blocks.push(epsStroke(hand, OUTLINE, 2.9));

  for (const nail of nailShapes) {
    blocks.push(epsFill(nail, "#F6C2CA"));
    blocks.push(epsStroke(nail, "#C94F62", 2.4));
  }
  blocks.push(epsStroke(palmLine, "#C94F62", 3.1));

  blocks.push(epsFill(wordmarkCommands, WORDMARK));
  blocks.push(epsFill(subtitleCommands, WORDMARK));
  blocks.push(epsStroke([M(206, 903), L(315, 903), M(685, 903), L(794, 903)], WORDMARK, 2.6));
  blocks.push("grestore", "showpage", "%%EOF", "");

  return blocks.join("\n");
}

async function main() {
  const italiana = loadFont(ITALIANA_PATH);
  const workSans = loadFont(WORK_SANS_PATH);
  const wordmark = textCommands(italiana, "TOP TEN", {
    fontSize: 195,
    baseline: 822,
    tracking: 5,
    wordSpacing: 18,
  });
  const subtitle = textCommands(workSans, "NAILS SPA", {
    fontSize: 34,
    baseline: 915,
    tracking: 13,
    wordSpacing: 7,
  });

  const primarySvg = makeSvg({ wordmarkCommands: wordmark.commands, subtitleCommands: subtitle.commands });
  const flatSvg = makeSvg({ flat: true, wordmarkCommands: wordmark.commands, subtitleCommands: subtitle.commands });
  const eps = makeEps({ wordmarkCommands: wordmark.commands, subtitleCommands: subtitle.commands });

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUTPUT_DIR, "top-ten-nails-spa-logo.svg"), primarySvg);
  fs.writeFileSync(path.join(OUTPUT_DIR, "top-ten-nails-spa-logo-flat.svg"), flatSvg);
  fs.writeFileSync(path.join(OUTPUT_DIR, "top-ten-nails-spa-logo.eps"), eps);

  await sharp(Buffer.from(primarySvg))
    .resize({ width: 2400, height: 2400, fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUTPUT_DIR, "top-ten-nails-spa-logo-preview.png"));

  console.log(JSON.stringify({
    outputDir: OUTPUT_DIR,
    wordmarkWidth: Math.round(wordmark.width * 100) / 100,
    subtitleWidth: Math.round(subtitle.width * 100) / 100,
  }, null, 2));
}

await main();
