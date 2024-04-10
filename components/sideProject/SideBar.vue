<template>
  <div class="side-bar-outline">
    <ul class="projects" v-if="allProjects">
      <SideProjectProjectDetailStructure v-for="(name,index) in allProjects" :projectName="name"></SideProjectProjectDetailStructure>
    </ul>
  </div>
</template>
<script setup lang="ts">
const { data: allProjects } = await useFetch(
  "/api/getProjectFolders"
);
</script>
<style scoped lang="scss">
.side-bar-outline {
  overflow: hidden;
  margin-right: 8px;
  box-sizing: border-box;
  height: calc(100dvh - 80px);
  border-right: 1px solid var(--border-color);
}
ul.projects {
  display: flex;
  color: var(--primary-text-color);
  margin: 0;
  padding: 0 36px 0 0;
  flex-direction: column;
  gap:16px;
}
</style>