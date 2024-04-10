import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineEventHandler(async (event) => {
  const filePath = resolve(__dirname,'../../stores/skill.json');

  let fileContent;
  try {
    fileContent = await readFile(filePath, 'utf8');
  } catch (error) {
    if (error instanceof Error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
      fileContent = '[]'; // 文件不存在时初始化为空数组
    } else {
      // 抛出未知错误
      throw error;
    }
  }

  const skills = JSON.parse(fileContent);

  const newContent = await readBody(event);

  skills.push(newContent);

  await writeFile(filePath, JSON.stringify(skills, null, 2), 'utf8');

  return { status: 'success' };
});