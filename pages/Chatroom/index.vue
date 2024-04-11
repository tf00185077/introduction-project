<template>
  <div class="chatroom">
    <ChatroomInitUser
      v-if="!socketStatus"
      @openSocket="openSocket"
      v-model:userName="userName"
    />
    <ChatroomWebSocket @closeSocket="closeSocket" v-else v-model:userName="userName" />
  </div>
</template>
<script setup lang="ts">
const userName = ref("");
const socketStatus = ref(false);
const openSocket = () => {
  socketStatus.value = true;
};
const closeSocket = () => {
  socketStatus.value = false;
}
</script>
<style>
.chatroom{
  position:relative
}
</style>
