<template>
  <div class="cursor-pointer">
    <FillHeartIcon v-if="isFavourite" @click="removeFromFavourite" />
    <NoFillHeartIcon v-else @click="addToFavourite" />
  </div>
</template>

<script setup lang="ts">
import type Car from "~/model/Car";

const carsStore = useCarsStore();

const props = defineProps({
  car: {
    type: Object as () => Car,
    required: true,
  },
});

const isFavourite = computed(
  () => carsStore.favouriteCars.findIndex((car) => car.id === props.car.id) > -1
);

const addToFavourite = () => carsStore.addToFavourite(props.car);
const removeFromFavourite = () => carsStore.removeFromFavourite(props.car);
</script>
