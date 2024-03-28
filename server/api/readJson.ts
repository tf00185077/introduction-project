import { readFile } from 'fs/promises';
import { resolve } from 'path';

export default defineEventHandler(async (event) => {
  const filePath = resolve('./stores/skill.json');
  const jsonData = await readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);
  return data;
});