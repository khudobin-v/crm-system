<template>
  <div class="grid" style="min-height: 100vh">
    <LayoutSidebar />
    <slot />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
