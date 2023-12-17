<template>
  <div class="flex items-center justify-between">
    <span class="text-lg font-bold text-gray-900"
      >${{ price }}/ <span class="text-sm font-normal text-gray-400">day</span></span
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
});

const price = props.pricePerDay.toFixed(2);
const link = `/cars/${props.id}`;
</script>
