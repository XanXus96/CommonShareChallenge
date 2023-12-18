<template>
  <div class="search relative flex-grow mx-2">
    <SearchInput
      name="search"
      :placeholder="$t('search.input.placeholder')"
      @submit="onSubmitSearch"
    />
    <div class="absolute left-2 top-1/2 transform -translate-y-1/2 pl-1">
      <SearchIcon />
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const onSubmitSearch = async (value) => {
  router.push({
    path: `/cars/search`,
    query: {
      q: value,
    },
  });
};
</script>
