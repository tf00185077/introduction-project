<template>
  <div class="header-outline">
    <ul>
      <li>
        <NuxtLink @click="chooseHeader = 'introduction'" to="/">
          <input
            type="radio"
            v-model="chooseHeader"
            id="introduction"
            value="introduction"
          /><label for="introduction">Introduction</label></NuxtLink
        >
      </li>
      <li>
        <NuxtLink @click="chooseHeader = 'SideProject'" to="/SideProject">
          <input
            type="radio"
            v-model="chooseHeader"
            id="Side Project"
            value="SideProject"
          /><label for="Side Project">Side Project</label></NuxtLink
        >
      </li>
      <li>
        <NuxtLink @click="chooseHeader = 'MyDoc'" to="/MyDoc">
          <input
            type="radio"
            v-model="chooseHeader"
            id="Documnet"
            value="MyDoc"
          /><label for="Documnet">Documnet</label></NuxtLink
        >
      </li>
    </ul>
    <SwitchButtonDarkAndLightThene></SwitchButtonDarkAndLightThene>
  </div>
</template>
<script lang="ts" setup>
const chooseHeader = ref("introduction");
// watch(
//   () => chooseHeader.value,
//   () => {
//     navigateTo(`${chooseHeader.value}`);
//   }
// );
</script>
<style lang="scss" scoped>
.header-outline {
  z-index: 999;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: var(--background-color);
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;
    color: var(--primary-text-color);
    li {
      input {
        display: none;
        &:checked + label {
          color: var(--primary-accent-color);
          text-shadow: 0 0 1px var(--primary-accent-color);
        }
      }
      label {
        cursor: pointer;
      }
    }
  }
}
</style>