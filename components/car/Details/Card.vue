<template>
  <div
    class="flex flex-col justify-between gap-8 w-full md:w-[60%] p-5 bg-white border border-gray-200 rounded-lg shadow"
  >
    <div class="flex items-top justify-between">
      <h5 class="text-lg md:text-xl lg:text-3xl font-semibold text-gray-900">
        {{ car.name }}
      </h5>
      <HeartIcon />
    </div>
    <div class="text-md md:text-lg lg:text-xl text-gray-400 font-light">
      NISMO has become the embodiment of Nissan's outstanding performance,
      inspired by the most unforgiving proving ground, the "race track".
    </div>
    <div class="flex flex-wrap gap-8 text-gray-400 font-semibold text-sm md:text-md lg:text-lg">
      <span>Type Car</span>
      <span class="text-gray-700">{{ car.type }}</span>
      <span>Capacity</span>
      <span class="text-gray-700">{{ car.people }}Person</span>
      <span>Gasoline</span>
      <span class="text-gray-700">{{ car.gasolineLiter }}L</span>
      <span>Steering</span>
      <span class="text-gray-700">{{ car.kindOfTransition }}</span>
    </div>
    <div class="mt-24 flex items-center justify-between flex-wrap">
      <span class="text-md md:text-lg lg:text-xl font-bold text-gray-900"
        >${{ price }}/
        <span class="text-sm md:text-md lg:text-lg font-normal text-gray-400">day</span></span
      >
      <Button :to="link" label="Rent Now"></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Car from "~/model/Car";

const props = defineProps({
  car: {
    type: Object as () => Car,
    required: true,
  },
});

const price = props.car.pricePerDay.toFixed(2);
const link = `/cars/${props.car.id}`;
</script>
