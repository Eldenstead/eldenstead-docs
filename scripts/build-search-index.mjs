import fs from 'node:fs';
import path from 'node:path';

const appName = process.argv[2];

if (!appName || !['community', 'operations'].includes(appName)) {
  throw new Error('Usage: node scripts/build-search-index.mjs <community|operations>');
}

const repoRoot = path.resolve(import.meta.dirname, '..');
const appRoot = path.join(repoRoot, appName);
const docsRoot = path.join(appRoot, 'docs');
const outDir = path.join(appRoot, 'src', 'data');
const outFile = path.join(outDir, 'searchIndex.ts');

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return walk(fullPath);
    }
    return entry.isFile() && entry.name.endsWith('.md') ? [fullPath] : [];
  });
}

function stripFrontMatter(source) {
  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
}

function getFrontMatterTitle(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return undefined;
  }
  const title = match[1].match(/^title:\s*["']?(.+?)["']?\s*$/m);
  return title?.[1];
}

function getHeadingTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match?.[1];
}

function cleanText(content) {
  return content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`|[\]()-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function toDocUrl(filePath) {
  const relative = path.relative(docsRoot, filePath).replaceAll(path.sep, '/');
  const withoutExtension = relative.replace(/\.md$/, '');
  const segments = withoutExtension.split('/').map((segment) =>
    segment.replace(/^\d+_/, ''),
  );
  return `/docs/${segments.join('/')}`;
}

const entries = walk(docsRoot)
  .filter((filePath) => !path.basename(filePath).startsWith('_'))
  .map((filePath) => {
    const source = fs.readFileSync(filePath, 'utf8');
    const content = stripFrontMatter(source);
    const text = cleanText(content);
    const title = getFrontMatterTitle(source) ?? getHeadingTitle(content) ?? path.basename(filePath, '.md');

    return {
      title,
      url: toDocUrl(filePath),
      excerpt: text.slice(0, 220),
      text,
    };
  })
  .sort((a, b) => a.url.localeCompare(b.url));

fs.mkdirSync(outDir, {recursive: true});
fs.writeFileSync(
  outFile,
  `export type SearchEntry = {
  title: string;
  url: string;
  excerpt: string;
  text: string;
};

const searchIndex: SearchEntry[] = ${JSON.stringify(entries, null, 2)};

export default searchIndex;
`,
);
