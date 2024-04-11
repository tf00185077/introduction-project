import { defineEventHandler } from "h3";
import { readdir } from "fs/promises";
import { resolve } from "pathe";

export default defineEventHandler(async (event) => {
  const folderPath = resolve("pages");
  try {
    const files = await readdir(folderPath);
    return files;
  } catch (err) {
    console.error("Error reading the directory", err);
    // 處理錯誤，回傳錯誤訊息
    return { error: "Error reading the directory" };
  }
});
