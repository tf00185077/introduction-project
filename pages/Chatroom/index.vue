<template>
    <div class="chatroom">
      <ChatroomInitUser
        v-if="!socketStatusStore.socketStatus"
        @openSocket="openSocket"
        v-model:userName="userName"
      />
      <ChatroomWebSocket @closeSocket="closeSocket" v-else v-model:userName="userName" />
    </div>
</template>
<script setup lang="ts">
const userName = ref("");
const socketStatusStore = useSocketStatusStore()
const openSocket = () => {
  socketStatusStore.openSocket();
};
const closeSocket = () => {
  socketStatusStore.closeSocket();
}
</script>
<style>
.chatroom{
  position:relative
}
</style>
