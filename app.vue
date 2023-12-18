<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const carsStore = useCarsStore();
await carsStore.init();
</script>
