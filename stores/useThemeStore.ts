import { defineStore } from "pinia";
export const useThemeStore = defineStore("themeStore", () => {
  type Theme = {
    "--background-color": string;
    "--primary-text-color": string;
    "--secondary-text-color": string;
    "--primary-accent-color": string;
    "--secondary-accent-color": string;
    "--border-color": string;
  };

  // 定义一个包含所有主题和对应颜色的对象类型
  type ThemeColors = {
    [key: string]: Theme;
  };

  const themeColors: ThemeColors = {
    light: {
      "--background-color": "#121212",
      "--primary-text-color": "#E0E0E0",
      "--secondary-text-color": "#BDBDBD",
      "--primary-accent-color": "#03DAC5",
      "--secondary-accent-color": "#BB86FC",
      "--border-color": "#292929",
    },
    dark: {
      "--background-color": "#121212",
      "--primary-text-color": "#E0E0E0",
      "--secondary-text-color": "#BDBDBD",
      "--primary-accent-color": "#03DAC5",
      "--secondary-accent-color": "#BB86FC",
      "--border-color": "#292929",
    },
  };

  const applyTheme = (themeName: keyof typeof themeColors) => {
    const theme = themeColors[themeName];
    const root = document.documentElement;

    // 使用 Object.entries 来确保键值对的类型安全
    Object.entries(theme).forEach(([property, value]) => {
      // root.style.setProperty(property, value);
    });
  };
  return { applyTheme };
});