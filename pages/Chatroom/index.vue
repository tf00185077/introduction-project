<template>
  <div>
    <WebSocket v-if="openSocket"/>
    <button @click="openSocket = !openSocket">CLICK ME</button>
  </div>
</template>
<script setup lang="ts">
const openSocket = ref(false)
</script>