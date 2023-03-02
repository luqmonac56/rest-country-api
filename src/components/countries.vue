<template>
    <div class=" countries mt-8 flex flex-wrap gap-y-8 rounded-t-md justify-between px-6 ">
        <!-- <router-link :to="{ path: 'home', params: { userId: 123 }}"></router-link> -->
        <div v-for="country in countries" :key="country.id" class="country-card w-full md:w-[31%] lg:w-[23%]">
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
                <!-- <p><span>id:</span> {{ country.id }}</p> -->
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
// @import "@/assets/global:scss";


export default {
    setup () {

        const countries = ref([]) 
        const error = ref(null)
        const url = ref("https://restcountries.com/v3.1/all")

        const getCountries = async () =>{
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

        getCountries()


        return {
            countries,
            getCountries, 
            error

        }
    }
}
</script>

<style lang="scss" scoped>
.card-text{
    padding-left: 1.5rem;
    border-radius:  0  0 .3rem .3rem;
    //color:  var(--text-primary-color);

  }


</style>