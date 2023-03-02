<!-- <template>
  <div>
    <button :class="{'dark-theme': darkTheme}">Dark Mode</button>
  </div>
</template>

<script>
import {ref} from "vue"
  export default {
    setup() {
      const darkTheme = ref(true)

      return{darkTheme, }
    }
  }
</script>

<style lang="scss" scoped>

button{
color: var(--text-primary-color);
}

</style> -->


<template>
  <div>
    <div class="main-center">
      <input
        @change="toggleTheme"
        id="modeToggle"
        type="checkbox"
        class="switch-checkbox"
      />
      <label for="modeToggle" class="switch-label ">
        <div
          class="switch-toggle"
          :class="{ 'switch-toggle-checked': theme.appMode === 'dark-theme' }"
        ></div>
      </label>
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

