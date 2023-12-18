<template>
  <header class="flex items-center justify-evenly flex-wrap gap-1 bg-white p-4">
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>
    <Search />
    <nuxt-link class="border bg-background p-2 rounded-full" to="/favourites">
      <HeartIcon/>
    </nuxt-link>
  </header>
</template>
