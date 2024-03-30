import { defineStore } from "pinia";
export const useThemeStore = defineStore("themeStore", () => {
  type Theme = {
    "--primary-color": string;
    "--secondary-color": string;
    "--background-color": string;
    "--text-color": string;
    "--accent-color": string;
  };

  // 定义一个包含所有主题和对应颜色的对象类型
  type ThemeColors = {
    [key: string]: Theme;
  };

  const themeColors: ThemeColors = {
    light: {
      "--primary-color": "#ffffff",
      "--secondary-color": "#000000",
      "--background-color": "#f0f0f0",
      "--text-color": "#333333",
      "--accent-color": "#007bff",
    },
    dark: {
      "--primary-color": "#333333",
      "--secondary-color": "#ffffff",
      "--background-color": "#121212",
      "--text-color": "#ffffff",
      "--accent-color": "#1a8cff",
    },
  };

  const applyTheme = (themeName: keyof typeof themeColors) => {
    const theme = themeColors[themeName];
    const root = document.documentElement;

    // 使用 Object.entries 来确保键值对的类型安全
    Object.entries(theme).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }
  return {  applyTheme };
});
