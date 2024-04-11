<template>
  <div>
    <div class="history-container" ref="container">
      <div class="log" v-for="message in history">
        <template v-if="message.split(':').length > 1">
          <p class="user">{{ message.split(":")[0] }}&nbsp;:</p>
          <p class="message">
            {{ message.split(":")[1] }}
          </p>
        </template>
        <template v-else>
          <p class="system">{{ message }}</p>
        </template>
      </div>
    </div>
    <div class="send-message-block" @keyup.enter="sendData">
      <input placeholder="Enter Your Message" type="text" v-model="message" />
      <div class="send-btn" @click.prevent="sendData"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const history = defineModel<string[]>("history");
const message = defineModel<string>("message");
const emit = defineEmits(["sendData"]);
const container = ref<HTMLDivElement | null>(null);
const sendData = () => {
  if (message.value !== undefined && message.value.trim() !== "") {
    emit("sendData");
  }
};
const scrollToBottom = () => {
  setTimeout(() => {
    if (container.value) {
      container.value.scrollTop = container.value.scrollHeight;
    }
  });
};
defineExpose({ scrollToBottom });
</script>
<style scoped lang="scss">
.history-container {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: calc(100dvh - 250px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-text-color);
    border-radius: 3px;
  }
  div.log {
    display: flex;
    padding: 0px;
    margin: 0px;
    p {
      display: flex;
      align-items: flex-start;
      margin: 0;
      padding: 0;
      color: var(--primary-text-color);
      font-size:1.2rem;
    }
    .user {
      padding: 4px 8px;
      white-space: nowrap;
    }
    .message {
      background-color: var(--primary-text-bg-color);
      border-radius: 6px;
      padding: 4px 10px;
    }
    .system {
      padding: 4px 8px;
      white-space: nowrap;
    }
  }
}
.send-message-block {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  width: calc(100dvw - 48px);
  display: flex;
  height: 40px;
  border:1px solid var(--border-color);
  input {
    flex: 1;
    padding-left: 8px;
    border:none;
    font-size:1.2rem;
    &:focus {
      outline: none;
    }
  }
  .send-btn {
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border:none;
    border-left: 1px solid var(--border-color);
    width: 40px;
    height: 100%;
    background-image: url("@/assets/icon/send.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    &:active {
      background-size: 45%;
    }
  }
}
</style>
