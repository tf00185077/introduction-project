<template>
  <div class="outline">
    <div class="user-hint">
      <p class="hint">Please Enter Your Name To Join The Room</p>
      <input
        v-model="userName"
        placeholder="User Name"
        id="enterUserName"
        type="text"
      />
      <Btn @click="sendUserName" class="btn">Join The Chat</Btn>
    </div>
  </div>
</template>
<script setup lang="ts">
const userName = defineModel<string>("userName");
const emit = defineEmits(["openSocket"]);
const sendUserName = () => {
  if (
    userName.value !== "" &&
    userName.value !== null &&
    userName.value !== undefined &&
    containsNoSpecialChars(userName.value)
  ) {
    emit("openSocket");
  }
};
const containsNoSpecialChars = (str: string) => {
  return /^[a-zA-Z0-9\s]*$/.test(str)
};
</script>
<style scoped lang="scss">
.outline,
.use-hint {
  width: 100%;
  height: calc(100dvh - 84px);
  border: 1px solid white;
  color: var(--primary-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 2rem;
  .user-hint {
    display: flex;
    flex-direction: column;
  }
  input {
    font-size: 2rem;
    outline: none;
    background: transparent;
    border: none;
    padding: 2px 6px;
    border-bottom: 2px solid var(--border-color);
    color: var(--primary-text-color);
  }
}
.btn {
  padding: 12px;
  margin-top: 12px;
  background-color: transparent;
}
</style>
