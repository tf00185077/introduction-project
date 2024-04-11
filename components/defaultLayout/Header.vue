<template>
  <KeepAlive>
    <div class="header-outline">
      <ul>
        <li v-for="page in pageList">
          <input type="radio" v-model="chooseHeader" :id="'/'+page" :value="'/' + page" /><label
            :for="'/' + page"
            @click="navigateTo('/' + page)"
            >{{ page }}</label
          >
        </li>
      </ul>
      <SwitchButtonDarkAndLightThene></SwitchButtonDarkAndLightThene>
    </div>
  </KeepAlive>
</template>
<script lang="ts" setup>
const chooseHeader = ref(useRoute().path);
const {data:pageList,refresh} = await useFetch("/api/getPages")
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
