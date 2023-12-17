<template>
  <div class="p-5 rounded-lg h-[38vh]" :style="{ background }">
    <div class="w-2/3 text-bold text-white">
      <div class="text-lg md:text-xl lg:text-3xl">
        {{ title }}
      </div>
      <div class="text-sm sm:text-md mt-4">
        {{ description }}
      </div>
      <div class="mt-6 mb-12">
        <Button
          to=""
          label="Rental Car"
          :class="buttonBgColorClass"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  backgroundUrl: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  buttonBgColorClass: {
    type: String,
    required: true,
  },
});

const background = `${props.backgroundColor} url('${props.backgroundUrl}') bottom/cover no-repeat`;
</script>
