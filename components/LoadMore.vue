<template>
  <div class="flex items-center justify-center">
    <span
      @click="onClick"
      class="cursor-pointer text-white bg-blue-600 hover:bg-blue-800 font-medium rounded text-sm px-5 py-3 text-center"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  isSearch: {
    type: Boolean,
    default: false,
  },
});
const carsStore = useCarsStore();
const { t: $t } = useI18n()
const isLoading = ref(false);

const onClick = async (e) => {
  isLoading.value = true;
  await carsStore.loadMore(props.isSearch);
  isLoading.value = false;
};

const label = computed(() =>
  isLoading.value ? $t("loading") : $t("loadMore")
);
</script>
