<script setup lang="ts">
import { MENU_DATA } from "~/components/layout/menu.data.js";
</script>

<template>
  <NuxtLink
    class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2"
    v-for="item in MENU_DATA"
    :key="item.name"
    :to="item.url"
  >
    <Icon :name="item.icon" class="mr-3" />
    <span>{{ item.name }}</span>
  </NuxtLink>
</template>

<style scoped></style>
