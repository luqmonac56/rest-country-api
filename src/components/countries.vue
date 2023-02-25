<template>
    <div class=" countries mt-8 flex flex-wrap gap-y-8 rounded-t-md justify-between px-6 ">
        <div v-for="country in countries" :key="country.id" class="country-card w-full md:w-[31%] lg:w-[23%]">
            <div class=" country-flag rounded-t-md relative h-1/2 w-full" >
                <img class="w-full h-full block rounded-t-md" :src="country.flag" alt="">
            </div>
            <div class="card-text py-8">
                <h2>{{ country.name }}</h2>
                <p><span>Population:</span> {{ country.population }}</p>
                <p><span>Region:</span> {{ country.region }}</p>
                <p><span>Capital:</span> {{ country.capital }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'


export default {
    setup () {

        const countries = ref([]) 
        const error = ref(null)
        const url = ref("https://restcountries.com/v2/all")

        // const res = axios.get(url.value)
        
        // console.log(res);
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

<style scoped>
.country-card{
    box-shadow: 0px 0px 10px 2px rgba(68, 68, 68, 0.12);
}

img{

}

.card-text h2{
    margin: .5rem 0;
    font-size: 1.3rem;
    font-weight: bold;
}
.card-text p{
    margin: 0 0 .2rem 0;
    font-size: 1rem;

}

.card-text {
    padding-left: 1.5rem;
    border-radius:  0  0 .5rem .5rem;

}

.card-text p span {
    font-weight: 600;

}
</style>