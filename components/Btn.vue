<template>
  <div class="custom-component-btn"><slot /></div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.custom-component-btn {
  background-color: var(--btn-bg-color);
  color: var(--primary-text-color);
  box-shadow:0 0 5px var(--secondary-accent-color);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  &:active {
    transform: translate(0, 2px);
  }
}
</style>
