<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const themeStore = useThemeStore();
onMounted(() => {
  const theme = localStorage.getItem("theme");
  themeStore.applyTheme(theme ? theme : "dark");
});
</script>
<style>
/* 定義進入和離開時的動畫持續時間和過渡效果 */
.page-enter-active,
.page-leave-active {
  transition: opacity .4s, filter .4s, transform .4s;
  position:absolute;
  width:90%;
}

/* 初始狀態：不透明，無模糊，未旋轉 */
.page-enter-from {
  opacity: 0;
  filter: blur(1rem);
  /* transform: rotateX(0deg) rotateY(-90deg); */
   transform-origin: center center;
}
.page-enter-to {
  opacity: 1;
  filter: blur(0);
  /* transform: rotateX(0deg) rotateY(0deg); */
   transform-origin: center center;
}
.page-leave-from {
  opacity: 0;
  filter: blur(1rem);
  /* transform: rotateX(0deg) rotateY(0deg); */
   transform-origin: center center;
}
.page-leave-to {
  opacity: 0;
  filter: blur(0);
  /* transform: rotateX(0deg) rotateY(-90deg); */
   transform-origin: center center;
}

/* 結束狀態：進入動畫結束時或離開動畫開始時的狀態 */
</style>
