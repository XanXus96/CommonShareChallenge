<template>
  <CarAds />
  <div class="flex items-center justify-center" v-if="isLoading">
    {{ $t("loading") }} Popular Cars
  </div>
  <template v-else>
    <Cars label="Popular Car" :cars="carsStore.popularCars" />
    <div class="mt-4">
      <Cars label="Recommendation Car" :cars="carsStore.allCars" />
      <LoadMore class="my-3" v-if="carsStore.isLoadMoreActive" />
    </div>
  </template>
</template>
<script setup>
const carsStore = useCarsStore();

const isLoading = ref(false);

onBeforeMount(async () => {
  isLoading.value = true;
  await carsStore.init();
  isLoading.value = false;
});

onBeforeUnmount(() => {
  carsStore.reset();
});
</script>
