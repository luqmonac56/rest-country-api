<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/navBar.vue';
import { useThemeStore } from  './stores/themeStore';

const theme = useThemeStore()

</script>

<template>
  <div class=""  >
    <NavBar/>
    <RouterView />
  </div>
</template>

<style scoped>

.bg-light{
  background: var(--background-color-primary) !important;
}

</style>
