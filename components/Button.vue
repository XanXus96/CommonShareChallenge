<template>
  <NuxtLink
    :to="to"
    class="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded text-sm px-5 py-3 text-center"
  >
    {{ label }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
