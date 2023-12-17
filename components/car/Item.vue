<template>
  <div class="p-5 bg-white border border-gray-200 rounded-lg shadow">
    <CarItemHeader :id="car.id" :name="car.name" :type="car.type" />
    <CarItemBody :id="car.id" :img="car.img" />
    <CarItemFooter
      :id="car.id"
      :price-per-day="car.pricePerDay"
      :gasoline-liter="car.gasolineLiter"
      :kind-of-transition="car.kindOfTransition"
      :people="car.people"
    />
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
