<template>
  <div class="my-5">
    <img class="min-w-[200px] my-12" :src="img" :alt="id" />
    <div class="flex items-center justify-between text-gray-400 font-light text-sm">
      <span class="flex items-center"><GasIcon /> {{ gasolineLiter }}L</span>
      <span class="flex items-center"><TransmissionIcon /> {{ kindOfTransition }}</span>
      <span class="flex items-center"><PeopleIcon /> {{ people }}People</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  gasolineLiter: {
    type: Number,
    required: true,
  },
  kindOfTransition: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
});
</script>
