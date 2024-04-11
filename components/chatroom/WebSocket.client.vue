<template>
  <div>
    <div class="chatroom-header">
      <h1>NUXT Chatroom</h1>
      <Btn @click="closeSocket" class="exit-btn">Exit Socket</Btn>
    </div>
    <Chatroom
      v-model:history="history"
      v-model:message="message"
      @sendData="sendData"
    ></Chatroom>
  </div>
</template>
<script setup lang="ts">
// In prod: check if secure, then use wss://
const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
const { status, data, send, open, close } = useWebSocket(
  `${wsProtocol}://${location.host}/api/websocket`,
  {
    // heartbeat: {
    //   interval: 10000,
    // },
  }
);
const emit = defineEmits(["closeSocket"]);

const history = ref<string[]>([]);
watch(data, (newValue: any) => {
  history.value.push(`${newValue}`);
});
const userName = defineModel("userName");
const message = ref("");
function sendData() {
  history.value.push(`Me: ${message.value}`);
  send(
    `${userName.value === "" ? "Anonymous" : userName.value}:${message.value}`
  );
  message.value = "";
}
const closeSocket = () => {
  emit("closeSocket");
};
onUnmounted(() => {
  close();
});
</script>
<style lang="scss" scoped>
.chatroom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .exit-btn {
    padding: 4px 16px;
  }
}
p,
h1 {
  color: var(--primary-text-color);
}
</style>
