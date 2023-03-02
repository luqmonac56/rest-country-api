<template>
    <div class=" px-8 py-4">
        <nav >
            <ul class="flex justify-between">
              <li class=" font-bold">Where in the world?</li>
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