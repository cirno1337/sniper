import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const contentDir = join(root, "src/content");
const publicDir = join(root, "public");

const files = readdirSync(contentDir).filter((f) => f.endsWith(".ts") && f !== "index.ts");

let errors = [];
let totalSections = 0, totalQuiz = 0, totalFlash = 0, totalImages = 0;
const allChapterIds = new Set();

function findAll(re, text) {
  const out = [];
  let m;
  const r = new RegExp(re, "g");
  while ((m = r.exec(text))) out.push(m);
  return out;
}

for (const file of files) {
  const src = readFileSync(join(contentDir, file), "utf8");
  const tag = file;

  const chapterIdMatch = src.match(/^\s*id:\s*"([^"]+)"/m);
  const chapterId = chapterIdMatch?.[1];
  if (!chapterId) {
    errors.push(`${tag}: could not find top-level chapter id`);
    continue;
  }
  if (allChapterIds.has(chapterId)) errors.push(`${tag}: DUPLICATE chapter id "${chapterId}"`);
  allChapterIds.add(chapterId);

  if (!/kind:\s*"(chapter|appendix|reference)"/.test(src)) errors.push(`${tag}: missing/invalid kind`);
  if (!/title:\s*"[^"]+"/.test(src)) errors.push(`${tag}: missing title`);

  // section ids: id: "xxx" inside sections array (rough heuristic: all id: "..." occurrences minus the top-level chapter id)
  const allIds = findAll(/\bid:\s*"([^"]+)"/, src).map((m) => m[1]);
  const sectionLikeIds = allIds.filter((id) => id !== chapterId);
  const seen = new Map();
  for (const id of allIds) seen.set(id, (seen.get(id) ?? 0) + 1);
  for (const [id, count] of seen) {
    if (count > 1) errors.push(`${tag}: id "${id}" used ${count} times (possible duplicate — check sections/quiz/flashcards don't reuse it)`);
  }

  const sectionCount = (src.match(/\bpage:\s*"/g) ?? []).length;
  totalSections += sectionCount;

  const quizBlocks = findAll(/correctIndex:\s*(\d+)[^}]*?options:\s*\[([^\]]*)\]/s, src);
  // fallback: count "correctIndex" occurrences for quiz total, and validate bounds via a more direct scan
  const quizMatches = findAll(/question:\s*"[^"]*"[\s\S]*?options:\s*\[([\s\S]*?)\][\s\S]*?correctIndex:\s*(\d+)/, src);
  totalQuiz += quizMatches.length;
  for (const m of quizMatches) {
    const optionsRaw = m[1];
    const optCount = (optionsRaw.match(/"(?:[^"\\]|\\.)*"/g) ?? []).length;
    const correctIndex = parseInt(m[2], 10);
    if (correctIndex >= optCount) errors.push(`${tag}: correctIndex ${correctIndex} out of bounds for ${optCount} options`);
  }

  const flashMatches = findAll(/term:\s*"[^"]*"/, src);
  totalFlash += flashMatches.length;

  const figMatches = findAll(/src:\s*"([^"]+)"/, src);
  for (const m of figMatches) {
    totalImages++;
    const p = join(publicDir, m[1].replace(/^\//, ""));
    if (!existsSync(p)) errors.push(`${tag}: figure src does NOT exist on disk: ${m[1]}`);
  }

  console.log(`${tag} (${chapterId}): ~${sectionCount} sections, ${quizMatches.length} quiz, ${flashMatches.length} flashcards, ${figMatches.length} figures`);
}

console.log(`\n=== TOTALS: ${files.length} files, ${allChapterIds.size} unique chapter ids, ~${totalSections} sections, ${totalQuiz} quiz, ${totalFlash} flashcards, ${totalImages} figure refs ===\n`);

if (errors.length) {
  console.log(`FOUND ${errors.length} POTENTIAL ISSUE(S):\n`);
  errors.forEach((e) => console.log(" - " + e));
  process.exit(1);
} else {
  console.log("OK: no duplicate ids detected, no dangling image refs, all quiz correctIndex values in bounds.");
}
