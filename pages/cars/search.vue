<template>
  <div class="flex items-center justify-center" v-if="isLoading">
    {{ $t("loading") }}
  </div>
  <template v-else>
    <Cars
      :label="'Search: ' + search"
      :cars="carsStore.searchCars"
      :fallbackMessage="'No search results for: ' + search"
    />
    <LoadMore
      class="my-3"
      :is-search="true"
      v-if="carsStore.isLoadMoreSearchActive"
    />
  </template>
</template>
<script setup>
const route = useRoute();
const carsStore = useCarsStore();

const isLoading = ref(false);

const search = computed(() => route.query.q || "");

const loadSearch = async () => {
  isLoading.value = true;
  await carsStore.searchInCars(search.value);
  isLoading.value = false;
};

onBeforeMount(async () => {
  await loadSearch();
});

onBeforeUnmount(() => {
  carsStore.resetSearch();
});

watch(() => search.value, loadSearch);
</script>
