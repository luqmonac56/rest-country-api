<template>
  <div>
    <div class="">
      <p @click="toggleTheme" class=" cursor-pointer">
        <span v-if="theme.appMode === 'dark-theme'">Light Mode</span>
        <span v-else>Dark Mode</span>
      </p>
    </div>
  </div>
</template>

<script>
    import { useThemeStore } from '../stores/themeStore';
    export default {

      setup() {
        const theme = useThemeStore()


        return{
          theme
        }
      },

      data() {
        return {
          userTheme: "light-theme",
        };
      },

      mounted() {
        const initUserTheme = this.getTheme() || this.getMediaPreference();
        this.setTheme(initUserTheme);
        this.theme.changeMode(initUserTheme)
        
      },

      methods: {
        setTheme(theme) {
          localStorage.setItem("user-theme", theme);
          this.userTheme = theme;
          document.documentElement.className = theme;
        },

        toggleTheme() {
          const activeTheme = localStorage.getItem("user-theme");
          if (activeTheme === "light-theme") {
            this.setTheme("dark-theme");
            this.theme.changeMode('dark-theme')
          } else {
            this.setTheme("light-theme");
            this.theme.changeMode('light-theme')

          }
        },

        getMediaPreference() {
          const hasDarkPreference = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;

          if (hasDarkPreference) {
            return "dark-theme";
          } else {
            return "light-theme";
          }
        },

        getTheme() {
          return localStorage.getItem("user-theme");
        },
      },
};
</script>

<style lang="scss" scoped>

</style>

