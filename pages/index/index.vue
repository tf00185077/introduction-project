<script setup>
const data = ref(null);
const updateData = async (newData) => {
  await fetch('/api/updateJson', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id:3,
      skill:"angular"
    }),
  });
};
onMounted(async () => {
  const response = await fetch(`/api/readJson`)
  data.value = await response.json();
});
</script>
<template>
    <h1>{{ data }}</h1>
    <button @click="updateData">Fix Data</button>
</template>
<style lang="scss">
h1{
    color:$sub-color
}
</style>