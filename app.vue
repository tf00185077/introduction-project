<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
// import { useThemeStore } from "./stores/useThemeStore"
const themeStore = useThemeStore()
onMounted(()=>{
  const theme = localStorage.getItem('theme')
  themeStore.applyTheme(theme?theme:'light')
})
</script>
