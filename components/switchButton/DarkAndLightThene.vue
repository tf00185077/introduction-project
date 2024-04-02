<template>
  <div
    :class="['btn-outline',{ dark: useThemeStore().mode === 'dark' }]"
    @click="
      useThemeStore().applyTheme(
        useThemeStore().mode === 'dark' ? 'light' : 'dark'
      )
    "
  >
    <div class="btn-move-outline">
      <div
        :class="['sun-or-moon', { dark: useThemeStore().mode === 'dark' }]"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.btn-outline {
  border: solid var(--border-color);
  min-width: 60px;
  height: 12px;
  border-radius: 24px;
  padding: 7px 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  &.dark{
    //   box-shadow: inset -2px -2px 2px 2px var(--border-color);
  }
}
.btn-move-outline {
  width: 100%;
  height: 2px;
  position: relative;
  .sun-or-moon {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    width: 30%;
    padding-top: 30%;
    background-color: #fff;
    border-radius: 50%;
    background-color: #ffd580;
    box-shadow: 0 0 10px #ffd580;
    transition: 0.5s all ease-in-out;
    &:after {
      position: absolute;
      border: 1px solid var(--background-color);
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--background-color);
      left: -100%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: left 0.5s ease-in-out;
      opacity: 0;
    }
    &.dark {
      background-color: #c0c0c0;
      box-shadow: 1px 1px 5px #c0c0c0, 1px 1px 5px #c0c0c0;
      left: 60%;
      &:after {
        opacity: 1;
        left: 10%;
        // top:40%;
      }
    }
  }
}
</style>
