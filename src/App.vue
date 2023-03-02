<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useThemeStore } from  './stores/themeStore';

const theme = useThemeStore()

</script>

<template>
  <div class=""  >
    <RouterView />
  </div>
</template>

<style scoped>

.bg-light{
  background: var(--background-color-primary) !important;
}

</style>
