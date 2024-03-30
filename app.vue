<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useThemeStore } from "./stores/useThemeStore"
const themeStore = useThemeStore()
onMounted(()=>{
  themeStore.applyTheme('light')
})
</script>
