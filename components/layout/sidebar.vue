<script setup lang="ts"></script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink
      to="/"
      class="mb-10 w-full flex items-center justify-center gap-4"
    >
      <NuxtImg src="/logo.svg" width="70px" alt="logo" />
      <h1 class="font-bold text-2xl">Apidog</h1>
    </NuxtLink>
    <button
      class="absolute top-4 right-4 transition-colors hover:text-primary rotate-180"
    >
      <Icon name="solar:logout-2-bold" size="25" />
    </button>
    <LayoutMenu />
  </aside>
</template>

<style scoped></style>
