<template>
  <CarAds />
  <div class="flex items-center justify-center" v-if="isLoading">
    {{ $t("loading") }}
  </div>
  <template v-else>
    <Cars :label="$t('popularCars')" :cars="carsStore.popularCars" :is-overflowing="true" />
    <div class="mt-4">
      <Cars :label="$t('recommendationCars')" :cars="carsStore.allCars" />
      <LoadMore class="my-3" v-if="carsStore.isLoadMoreActive" />
    </div>
  </template>
</template>
<script setup>
const carsStore = useCarsStore();

const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await carsStore.init();
  isLoading.value = false;
});

onBeforeUnmount(() => {
  carsStore.reset();
});
</script>
