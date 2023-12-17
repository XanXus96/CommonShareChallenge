<template>
  <CarAds />
  <Cars label="Popular Car" :cars="carsStore.popularCars" />
  <div class="mt-4">
    <Cars label="Recommendation Car" :cars="carsStore.allCars" />
    <LoadMore class="my-3" v-if="carsStore.isLoadMoreActive" />
  </div>
</template>
<script setup>
const carsStore = useCarsStore();

onBeforeMount(async () => {
  await carsStore.init();
});
</script>
