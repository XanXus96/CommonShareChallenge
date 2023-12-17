<template>
  <div class="mt-4">
    {{ car }}
  </div>
</template>
<script setup>
const route = useRoute();
const carsStore = useCarsStore();

const car = ref(null);
onBeforeMount(async () => {
  car.value = await carsStore.getCarById(route.params.id);
});
</script>
