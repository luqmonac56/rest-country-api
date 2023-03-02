import { defineStore } from "pinia";

export const useThemeStore = defineStore('themeStore', {

    state: ()  => ({
        appMode: "light-theme"
    }),
    actions: {
        changeMode(mode) {
                this.appMode =mode
        }
    }
})