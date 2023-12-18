<template>
  <div class="w-full md:w-[35%] h-auto">
    <div class="w-full rounded-md h-[70%] mb-[10%]">
      <img
        class="w-full h-full rounded-md"
        :src="selectedImage"
        :alt="id"
      />
    </div>
    <div class="flex items-center justify-between h-[20%]">
      <div
        class="w-1/4 h-full"
        v-for="img in images"
        :class="{
          'border-2 border-blue-500 p-1 rounded-md': img.url === selectedImage,
        }"
        @click="changeImage(img.url)"
      >
        <img
          class="w-full h-full rounded-md"
          :key="img.url"
          :src="img.url"
          :alt="id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
});

const selectedImage = ref(props.images[0].url);
const changeImage = (url) => (selectedImage.value = url);
</script>
