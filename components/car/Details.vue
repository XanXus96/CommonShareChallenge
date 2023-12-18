<template>
  <div class="flex flex-col md:flex-row gap-8 items-stretch justify-around">
    <CarDetailsImages :images="images" :id="car.id" />
    <CarDetailsCard :car="car" />
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

const images = [{ url: props.car.img }, ...props.car.images];
</script>
