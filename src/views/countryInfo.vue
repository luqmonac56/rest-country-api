<template>
    <div class=" h-screen flex flex-col">
        <!-- <router-link to="/">Back</router-link> -->
        <router-link class="btn w-fit px-8 py-2 mt-8 ml-8 text-white" :to="{ name: 'home'}">Back</router-link>

        <div class=" px-8 m-auto w-screen">
            <div v-for="item in country" :key="item"  class=" flex flex-col gap-6 md:flex-row justify-between items-center">
                <div class=" w-full md:w-[40%]">
                    <img class="w-full max-w-[450px]" :src="item.flags.png" alt="">
                </div>
                <div  class=" w-full md:w-[50%]">
                    <h2 class="text-[45px] font-bold">{{ item.name.common }}</h2>
                    <div class="details flex flex-col md:flex-row gap-12">
                        <div class="flex flex-col gap-2 ">
                            <h3><span>Native Name: </span>{{ item.name.official }}</h3>
                            <h3><span>Population: </span> {{ item.population }}</h3>
                            <h3><span>Region: </span>{{ item.region }}</h3>
                            <h3><span>Sub Region: </span>{{ item.subregion }}</h3>
                            <h3><span>Capital: </span>{{ item.capital[0] }}</h3>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h3><span>Top Level Domain: </span></h3>
                            <h3><span>Currencies: </span>{{ currency }}</h3>
                            <h3><span>Languages: </span>{{ language }}</h3>
                        </div>
                    </div>
                    <div class="flex gap-2 mt-8">
                        <h3  class="font-bold">Border Countries: </h3>
                        <div class="flex gap-1 flex-wrap">
                            <ul  v-for="border in item.borders" :key="border">
                                <li class="rounded-lg shadow-3xl bg-slate-200 px-3 ">{{ border }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['id'],
    setup (props) {
        const country = ref(null) 
        const error = ref('')
        const currency = ref('')
        const language = ref('')
        const url = ref('https://restcountries.com/v3.1/name/' + props.id )

        const getCountry = async () =>{
            try {

                let res = await fetch(url.value)
                const data = await res.json()

                if (!res.ok){
                    throw Error('no res available')
                }

                country.value = data
                console.log(country.value);
                console.log('luqman');



            } 
            catch (err) {
                error.value = err.message
                console.log("seems there's error");
            }
            const objMoney = country.value[0].currencies
            const arrCurrency = Object.values(objMoney)

            const objLang = country.value[0].languages
            const arrLang = Object.values(objLang)

            currency.value = arrCurrency[0].name
            language.value = arrLang[0]

            console.log(currency.value);
            // console.log(country.value);

        }

        getCountry()


        return {getCountry, country, error, currency, language}
    }
}
</script>

<style scoped>

.btn{
    background: rgba(18, 20, 26, 0.48);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.9px);
}

.details h3 span {
    font-weight:  700;


}

img{
    box-shadow: 0px 0px 10px 2px rgba(5, 5, 5, 0.479);
}
</style>