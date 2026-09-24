import { copyFile, cp } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const artifactDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspaceDir = resolve(artifactDir, '../..');
const outputDir = resolve(artifactDir, 'dist/public');

await Promise.all([
  copyFile(resolve(workspaceDir, 'index.html'), resolve(outputDir, 'knowledge-base.html')),
  copyFile(resolve(workspaceDir, 'privacy.html'), resolve(outputDir, 'privacy.html')),
  cp(resolve(workspaceDir, 'help-articles'), resolve(outputDir, 'help-articles'), { recursive: true }),
  copyFile(resolve(outputDir, 'index.html'), resolve(outputDir, '404.html')),
]);