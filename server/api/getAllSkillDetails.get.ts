import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// 将import.meta.url转换为路径
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default defineEventHandler(async (event) => {
  const filePath = resolve('stores/skill.json');
  const jsonData = await readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);
  return data;
});