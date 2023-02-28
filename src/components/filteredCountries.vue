<template>
    <div class=" countries mt-8 flex flex-wrap gap-y-8 rounded-t-md justify-between px-6 ">
        <div v-for="country in countries" :key="country.name.common" class="country-card w-full md:w-[31%] lg:w-[23%]">
            <router-link :to="{ name: 'countryInfo' , params: {id: country.name.common }}">
                <div class=" country-flag rounded-t-md relative h-1/2 w-full" >
                    <img class="w-full h-full block rounded-t-md" :src="country.flags.png" alt="">
                </div>
            </router-link>
            <div class="card-text py-8">
                <h2>{{ country.name.common }}</h2>
                <p><span>Population:</span> {{ country.population }}</p>
                <p><span>Region:</span> {{ country.region }}</p>
                <p><span>Capital:</span> {{ country.capital}}</p>
                <p><span>id:</span> {{ country.id }}</p>
            </div>
        </div>
    </div>

    <!-- <div>
        ndgbjbhjsfmnxnjfv
    </div> -->
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['selectedRegion'],
    setup (props) {
        const countries = ref([]) 
        const error = ref(null)

        const getFilteredCountries = async () =>{
            const url = ref("https://restcountries.com/v3.1/region/" + props.selectedRegion)

            try {

                let res = await fetch(url.value)
                const data = await res.json()

                if (!res.ok){
                    throw Error('no res available')
                }

                countries.value = data
                console.log(countries.value);
                console.log('luqman');

            } 
            catch (err) {
                error.value = err.message
                console.log(error);
            }

        }

        console.log(props.selectedRegion);

        getFilteredCountries()


        return {
            countries,
            getFilteredCountries, 
            error

        }
    }
}
</script>

<style scoped>

</style>