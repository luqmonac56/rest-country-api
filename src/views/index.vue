<template>
  <div>
    <nav class="p-4">
      <ul class="flex justify-between">
        <li>Where in the world?</li>
        <li>Dark Mode</li>
      </ul>
    </nav>
    <div class="px-8 search-div flex gap-6 md:gap-0 md:justify-between flex-col md:flex-row mt-8">
      <div>
        <input
          class="w-full border py-2 px-2"
          type="search"
          placeholder="Search for a country..."
        />
      </div>
      <select placeholder="filter" class=" p-2 w-1/2 md:w-auto" id="region-select" v-model="selectedRegion">
        <option class="mt-7" value="">Filter by region</option>
        <option
          v-for="region in regions"
          :key="region.region"
          :value="region.region"
        >
          {{ region.region }}
        </option>
      </select>
    </div>
    <countries/>
  </div>
</template>

<script>
import { ref } from "vue";
import countries from "../components/countries.vue"
export default {
    components: {countries},
    setup() {
        const selectedRegion = ref('')
        const regions = ref([
            { name: "Item 1", region: "West" },
            { name: "Item 2", region: "East" },
            { name: "Item 3", region: "West" },
        ]);

    return { regions, selectedRegion };
  },
};
</script>

<style scoped>
nav {
  box-shadow: 0px 1px 10px 1px rgba(83, 81, 81, 0.12);
}

.search-div div,
.search-div select {
  box-shadow: 0px 0px 10px 2px rgba(68, 68, 68, 0.12);
  border-radius: 5px;
  outline: none;
  border: none;
}

input {
  outline: none;
  border: none;
  border-radius: 5px;
}
</style>
