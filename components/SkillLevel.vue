<template>
  <div>
    <p>{{ props.skillName }}</p>
    <div class="level">
      <div class="proficiency"></div>
      <div class="proficiency"></div>
      <div class="proficiency"></div>
      <div class="proficiency"></div>
      <div class="proficiency"></div>
      <div class="fillLevel">
        <div
          v-for="level in props.skillLevel >= 5 ? 5 : props.skillLevel"
          class="proficiency fill-proficiency"
          :key="level"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  skillName: string;
  skillLevel: number;
}>();
</script>
<style lang="scss" scoped>
.level {
  display: flex;
  gap: 12px;
  position: relative;
  .proficiency {
    width: 40px;
    height: 12px;
    border-radius: 4px;
    border: 2px solid var(--border-color);
  }
  .fillLevel {
    position: absolute;
    display: flex;
    gap: 12px;
    z-index: 2;
    .fill-proficiency {
      background: var(--primary-accent-color);
      box-shadow: 0 0 5px var(--primary-accent-color),
        0 0 5px var(--primary-accent-color), 0 0 5px var(--primary-accent-color);
      border: 2px solid var(--primary-accent-color);
    }
  }
}
</style>