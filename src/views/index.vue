<template>
  <div>
    <nav class="p-4">
      <ul class="flex justify-between">
        <li>Where in the world?</li>
        <li>Dark Mode</li>
      </ul>
    </nav>
    <div
      class="px-8 search-div flex gap-6 md:gap-0 md:justify-between flex-col md:flex-row mt-8"
    >
      <div>
        <input
          class="w-full border py-2 px-2"
          type="search"
          v-model="searchTerm"
          @keyup.enter="getSearchResult"
          placeholder="Search for a country..."
        />
      </div>
      <select
        placeholder="filter"
        class="p-2 w-1/2 md:w-auto"
        id="region-select"
        v-model="selectedRegion"
      >
        <option value="" disabled >Filter by region</option>
        <option
          v-for="region in regions"
          :key="region.region"
          :value="region.region"
        >
          {{ region.region }}
        </option>
      </select>
    </div>

    <div v-if="selectedRegion">
      <FilteredCountries :selectedRegion="selectedRegion"/>
    </div>


    <div v-else>
      <div v-if="!searchTerm">
        <countries />
      </div>
      <div v-else class="px-8 mt-8 flex flex-wrap gap-y-8 justify-between">
        <div
          v-for="country in searchedCountries"
          :key="country.name.common"
          class="country-card mb-8 w-full md:w-[31%] lg:w-[23%]"
        >
          <router-link
            :to="{ name: 'countryInfo', params: { id: country.name.common } }"
          >
            <div class="country-flag rounded-t-md relative h-1/2 w-full">
              <img
                class="w-full h-full block rounded-t-md"
                :src="country.flags.png"
                alt=""
              />
            </div>
          </router-link>
          <div class="card-text py-8">
            <h2>{{ country.name.common }}</h2>
            <p><span>Population:</span> {{ country.population }}</p>
            <p><span>Region:</span> {{ country.region }}</p>
            <p><span>Capital:</span> {{ country.capital }}</p>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import { ref, watch } from "vue";
import countries from "../components/countries.vue";
import FilteredCountries from "../components/filteredCountries.vue";
export default {
  components: { countries, FilteredCountries },
  setup() {
    const selectedRegion = ref("");
    const regions = ref([
      { name: "Item 1", region: "Africa" },
      { name: "Item 2", region: "Europe" },
      { name: "Item 3", region: "Americas" },
      { name: "Item 4", region: "Asia" },
      { name: "Item 5", region: "Oceania" },
    ]);
    const searchTerm = ref("");
    const searchedCountries = ref([]);

    watch(searchTerm, () => {
      if (!searchTerm.value) {
        searchedCountries.value = [];
      }
    });

    // watch(selectedRegion, (newValue, oldValue) =>{
    //   console.log(`Selected fruit changed from ${oldValue} to ${newValue}.`);
    //   selectedRegion.value = newValue

    // } )

    const getSearchResult = async () => {
      const url = ref(
        "https://restcountries.com/v3.1/name/" + searchTerm.value
      );

      try {
        let res = await fetch(url.value);
        const data = await res.json();

        searchedCountries.value = data;
        console.log(searchedCountries.value);
      } catch (err) {}
    };

    return {
      regions,
      selectedRegion,
      searchTerm,
      searchedCountries,
      getSearchResult,
    };
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
