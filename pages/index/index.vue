<template>
  <div>
    <p v-if="data">Data: {{ data }}</p>
    <input type="text" v-model="skillName" />
    <button @click="updateData">Update</button>
  </div>
</template>
<script setup>
const res = ref(null);
const skillName = ref("");
const updateData = async (newData) => {
  await fetch("/api/updateJson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: skillName.value,
    }),
  });
};
const { data, refresh } = await useFetch(`api/readJson`, {
  server: false,
  immediate: false,
});
onMounted(async () => {
  refresh();
});
</script>
