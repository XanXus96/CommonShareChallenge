<template>
  <CarAds />
  <Cars
    :label="$t('popularCars')"
    :cars="carsStore.popularCars"
    :is-overflowing="true"
  />
  <div class="mt-4">
    <Cars :label="$t('recommendationCars')" :cars="carsStore.allCars" />
    <LoadMore class="my-3" v-if="carsStore.isLoadMoreActive" />
  </div>
</template>
<script setup>
const carsStore = useCarsStore();
</script>
