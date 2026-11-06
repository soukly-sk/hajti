import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('www', { recursive: true });
await copyFile('index.html', 'www/index.html');
await copyFile('finder.html', 'www/finder.html');
console.log('SOUKLY web app copied to www/');
