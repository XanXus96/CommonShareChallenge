<template>
  <div class="flex items-top justify-between">
    <div>
      <h5 class="text-xl font-semibold text-gray-900">
        {{ car.name }}
      </h5>
      <h3 class="text-sm font-normal text-gray-500">
        {{ car.type }}
      </h3>
    </div>
    <FavouriteIcon :car="car" />
  </div>
</template>

<script setup lang="ts">
import type Car from "~/model/Car";

defineProps({
  car: {
    type: Object as () => Car,
    required: true,
  },
});
</script>
