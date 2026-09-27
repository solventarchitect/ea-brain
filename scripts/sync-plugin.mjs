#!/usr/bin/env node
// Keeps the plugin's bundled copy of the starter identical to the repo root.
// The repo root is the template (GitHub "Use this template"); the plugin under
// plugin/ea-brain/ carries the same files so an agent can scaffold them.
//
//   node scripts/sync-plugin.mjs          copy root -> plugin
//   node scripts/sync-plugin.mjs --check  exit 1 if the plugin copy has drifted
//
// Bundled SKILL.md files are stored as SKILL.template.md (and .gitignore as
// gitignore.template) so plugin hosts never load template content as live
// skills and git never applies the template's ignore rules to the plugin.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skill = join(root, 'plugin/ea-brain/skills/ea-brain');
const templateDir = join(skill, 'template');

const TEMPLATE_FILES = [
  '.gitignore',
  'CLAUDE.md',
  'agents/operator.md',
  'examples/disposition-record.yaml',
  'examples/golden-questions.json',
  'raw/README.md',
  'rules/contract-reconcile.md',
  'rules/guarded-writes.md',
  'rules/pushed-is-not-deployed.md',
  'rules/record-rule.md',
  'rules/servicenow-table-api.md',
  'rules/two-lens-capabilities.md',
  'rules/verify-before-assert.md',
  'skills/_template/SKILL.md',
  'skills/skeptical-reviewer/SKILL.md',
  'wiki/NOW.md',
  'wiki/inbox.md',
  'wiki/index.md',
  'wiki/log/README.md',
];

const bundledName = (p) =>
  p === '.gitignore' ? 'gitignore.template' : p.replace(/(^|\/)SKILL\.md$/, '$1SKILL.template.md');

// Plugin skills that are copies of root files (loaded live by plugin hosts).
const LIVE = [['skills/skeptical-reviewer/SKILL.md', 'plugin/ea-brain/skills/skeptical-reviewer/SKILL.md']];

const pairs = [
  ...TEMPLATE_FILES.map((p) => [join(root, p), join(templateDir, bundledName(p))]),
  ...LIVE.map(([a, b]) => [join(root, a), join(root, b)]),
];

const norm = (s) => s.replace(/\r\n/g, '\n');
const check = process.argv.includes('--check');
let drift = 0;

if (check) {
  for (const [src, dst] of pairs) {
    if (!existsSync(dst) || norm(readFileSync(src, 'utf8')) !== norm(readFileSync(dst, 'utf8'))) {
      console.error(`drift: ${relative(root, dst)} differs from ${relative(root, src)}`);
      drift++;
    }
  }
  const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
  const expected = new Set(pairs.map(([, dst]) => dst));
  for (const f of existsSync(templateDir) ? walk(templateDir) : []) {
    if (!expected.has(f)) { console.error(`extra: ${relative(root, f)} is not in the template list`); drift++; }
  }
  if (drift) { console.error(`\n${drift} problem(s). Run: node scripts/sync-plugin.mjs`); process.exit(1); }
  console.log(`plugin copy in sync (${pairs.length} files)`);
} else {
  rmSync(templateDir, { recursive: true, force: true });
  for (const [src, dst] of pairs) {
    mkdirSync(dirname(dst), { recursive: true });
    writeFileSync(dst, norm(readFileSync(src, 'utf8')));
  }
  console.log(`synced ${pairs.length} files into the plugin`);
}
