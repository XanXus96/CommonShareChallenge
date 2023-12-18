<template>
  <Cars
    :label="$t('favouriteCars')"
    :cars="carsStore.favouriteCars"
    fallbackMessage="No favourite cars"
  />
</template>
<script setup>
const carsStore = useCarsStore();
</script>
