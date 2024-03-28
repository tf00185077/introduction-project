import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

export default defineEventHandler(async (event) => {
  const filePath = resolve('./stores/skill.json');

  // 读取现有文件内容
  let fileContent;
  try {
    fileContent = await readFile(filePath, 'utf8');
  } catch (error) {
    // 使用类型守卫来检查错误类型
    if (error instanceof Error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
      fileContent = '[]'; // 文件不存在时初始化为空数组
    } else {
      // 抛出未知错误
      throw error;
    }
  }

  // 将文件内容转换为JavaScript对象
  const skills = JSON.parse(fileContent);

  // 从请求体中获取新内容
  const newContent = await readBody(event);

  // 将新内容添加到现有数据中
  skills.push(newContent);

  // 将更新后的数据写回文件
  await writeFile(filePath, JSON.stringify(skills, null, 2), 'utf8');

  return { status: 'success' };
});