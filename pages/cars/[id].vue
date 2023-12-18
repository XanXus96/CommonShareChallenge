<template>
  <div class="mt-4">
    <CarDetails v-if="car" :car="car" />
    <Cars :label="$t('recommendationCars')" :cars="carsStore.popularCars" class="mt-12" />
  </div>
</template>
<script setup>
const route = useRoute();
const carsStore = useCarsStore();

const car = ref(await carsStore.getCarById(route.params.id));
</script>
