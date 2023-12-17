<template>
  <div class="min-h-[180px] flex items-center justify-center">
    <img class="min-w-[200px] h-fit" :src="img" :alt="id" />
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
});
</script>
