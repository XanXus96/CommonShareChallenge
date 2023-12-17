<template>
  <div class="flex items-top justify-between">
    <div>
      <h5 class="text-xl font-semibold text-gray-900">
        {{ name }}
      </h5>
      <h3 class="text-sm font-normal text-gray-500">
        {{ type }}
      </h3>
    </div>
    <HeartIcon />
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>
