<script setup>
const res = ref(null);
const skillName = ref('')
const updateData = async (newData) => {
  await fetch("/api/updateJson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
       name:skillName.value,
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
  <input type="text" v-model="skillName">
  <button @click="updateData">Update</button>
</template>
<style lang="scss">
h1 {
  color: $sub-color;
}
</style>
