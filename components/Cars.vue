<template>
  <div class="my-4">
    <div class="text-gray-500 text-sm text-bold p-2 mb-1">{{ label }}</div>
    <div
      v-if="cars.length"
      class="grid gap-y-2 grid-cols-1 sm:gap-2 sm:grid-cols-2 md:gap-4 md:grid-cols-3 xl:gap-6 xl:grid-cols-4"
    >
      <CarItem v-for="car in cars" :key="car.id" :car="car" />
    </div>
    <div class="flex items-center justify-center" v-else>
      {{ fallbackMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type Car from "~/model/Car";

defineProps({
  cars: {
    type: Array as PropType<Car[]>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  fallbackMessage: {
    type: String,
    default: "No cars",
  },
});
</script>
