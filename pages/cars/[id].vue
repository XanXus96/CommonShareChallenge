<template>
  <div class="mt-4">
    <CarDetails v-if="car" :car="car" />
    <Cars :label="$t('recommendationCars')" :cars="carsStore.popularCars" />
  </div>
</template>
<script setup>
const route = useRoute();
const carsStore = useCarsStore();

const car = ref(null);

onBeforeMount(async () => {
    const c = await carsStore.getCarById(route.params.id);
    car.value = c
});
</script>
