<template>
  <div class="flex itens-center justify-between">
    <CarAdItem
      v-for="ad in ads"
      class="w-full md:w-[48%]"
      :class="ad.class"
      :buttonBgColorClass="ad.buttonBgColorClass"
      :backgroundColor="ad.backgroundColor"
      :buttonBgColor="ad.backgroundColor"
      :backgroundUrl="ad.backgroundUrl"
      :title="ad.title"
      :description="ad.description"
    />
  </div>
</template>

<script setup>
const ads = [
  {
    class: "",
    buttonBgColorClass: "bg-blue-600",
    backgroundColor: "#54A6FF",
    backgroundUrl: "/images/ad_bg_1.png",
    title: "The Best Platform for Car Rental",
    description:
      "Ease of doing a car rental safely and reliably. Of course at a low price.",
  },
  {
    class: "hidden md:block",
    buttonBgColorClass: "bg-blue-300",
    backgroundColor: "#3563E9",
    backgroundUrl: "/images/ad_bg_2.png",
    title: "Easy way to rent a car at a low price",
    description:
      "Providing cheap car rental services and safe and comfortable facilities.",
  },
];
</script>
