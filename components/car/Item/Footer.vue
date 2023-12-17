<template>
  <div
    class="flex items-center justify-between flex-wrap text-gray-400 font-light text-sm my-5"
  >
    <span class="flex items-center"><GasIcon /> {{ gasolineLiter }}L</span>
    <span class="flex items-center"
      ><TransmissionIcon /> {{ kindOfTransition }}</span
    >
    <span class="flex items-center"><PeopleIcon /> {{ people }}People</span>
  </div>
  <div class="flex items-center justify-between flex-wrap">
    <span class="text-lg font-bold text-gray-900"
      >${{ price }}/
      <span class="text-sm font-normal text-gray-400">day</span></span
    >
    <Button :to="link" label="Rent Now"></Button>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: Number,
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

const price = props.pricePerDay.toFixed(2);
const link = `/cars/${props.id}`;
</script>
