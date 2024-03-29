<script setup>
const res = ref(null);
const updateData = async (newData) => {
  await fetch("/api/updateJson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 3,
      skill: "angular",
    }),
  });
};
const { data, refresh } = await useFetch(`api/readJson`, {server:false,immediate:false})
onMounted(async () => {
  refresh()
});
</script>
<template>
  <div v-if="data">Data: {{ data }}</div>
</template>
<style lang="scss">
h1 {
  color: $sub-color;
}
</style>
