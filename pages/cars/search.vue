<template>
  <div class="flex items-center justify-center" v-if="isLoading">
    {{ $t("loading") }} Popular Cars
  </div>
  <template v-else>
    <template v-if="search">
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
    <template v-else>
      <Cars
        label="All cars"
        :cars="carsStore.allCars"
        fallbackMessage="No cars"
      />
      <LoadMore class="my-3" v-if="carsStore.isLoadMoreActive" />
    </template>
  </template>
</template>
<script setup>
const route = useRoute();
const carsStore = useCarsStore();

const isLoading = ref(false);

const search = computed(() => route.query.q);

onBeforeMount(async () => {
  if (search.value !== carsStore.search) {
    isLoading.value = true;
    if (search.value) {
      await carsStore.searchInCars(search.value);
    } else {
      await carsStore.getAllCars();
    }
    isLoading.value = false;
  }
});

onBeforeUnmount(() => {
  carsStore.resetSearch();
});
</script>
