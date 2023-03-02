<template>
    <div>
        <nav class="p-4">
            <ul class="flex justify-between">
              <li>Where in the world?</li>
              <li> <DarkmodeButton/></li>
            </ul>
          </nav>
    </div>
</template>

<script>
import DarkmodeButton from './darkmodeButton.vue';

// import darkmodeButton from "../components/darkmodeButton.vue";
export default {
    setup() {
        return {};
    },
    components: { DarkmodeButton }
}
</script>

<style lang="scss" scoped>

</style>