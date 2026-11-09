import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('www', { recursive: true });
await copyFile('index.html', 'www/index.html');
await copyFile('finder.html', 'www/finder.html');
await copyFile('hajti-logo.svg', 'www/hajti-logo.svg');
console.log('HAJTI web app copied to www/');
