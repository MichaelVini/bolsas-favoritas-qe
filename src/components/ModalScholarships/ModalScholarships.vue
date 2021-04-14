<template>
    <section class="modal">
        <button class="btn-close-modal" @click="changeModal">X</button>
        <div class="modal-container">
            <div class="modal-dados">
                    <h2>Adicionar bolsa</h2>
                    <p>Filtre e adicione as bolsas de seu interesse.</p>
                    <div class="select-city">
                        <span>SELECIONE SUA CIDADE</span>
                        <select name="city" v-model="citySelected" id="city">
                            <option value="" selected>Selecione uma cidade</option>
                            <option 
                                v-for="city in scholarshipsCities"
                                :key="city"  
                                >{{ city }}</option>
                        </select>
                    </div>
                    <div class="select-scholarship">
                        <span>SELECIONE O CURSO DE SUA PREFERÊNCIA</span>
                        <select name="cc" v-model="scholarshipSelected" id="cc">
                            <option value="" selected>Selecione um curso</option>
                            <option 
                            v-for="name in scholarshipsNames" 
                            :key="name" 
                            >{{ name }}</option>
                        </select>
                    </div>
                    <div class="select-modality">
                        <span>COMO VOCÊ QUER ESTUDAR?</span>
                        <div class="modality">
                            <div class="presencial-modality">
                                <input type="checkbox" class="presencial" value="Presencial" v-model="modality" > 
                                <label for="presencial">Presencial</label>
                            </div>
                            <div class="ead-modality">
                                <input type="checkbox" value="EaD" v-model="modality">
                                <label for="ead">A distância</label>
                            </div>
                        </div>
                    </div>
                    <div class="select-max-payment">
                        <span>ATÉ QUANTO PODE PAGAR?</span>
                        <div class="slideContainer">
                            <p>R$ {{ rangeValue }}</p>
                            <input type="range" min="1" max="10000" value="5000" id="myRange" class="slider" v-model="rangeValue">      
                        </div>
                    </div>
                    <div class="filter">
                        <span>Resultado</span>
                        <span>Ordenar por</span>
                    </div>
                    <div v-for="(scholarship, id) in scholarshipsFilters"  :key="id"  class="scholarships-list">
                        <input type="checkbox" :value="`${id}`" v-model="checkedScholarships">
                        <img :src="scholarship.university.logo_url" alt="" width="100px">
                        <div class="scholarships-content">
                            <h3>{{ scholarship.course.name }}</h3>
                            <span>{{ scholarship.course.level}}</span>
                            <h4><p> Bolsa de </p> {{ scholarship.discount_percentage}}% </h4>
                            <h4>R$ {{ scholarship.price_with_discount }}/mês</h4>
                        </div>
                    </div>
                    <div class="add-favorite-courses">
                        <button class="btn-cancel">Cancelar</button>
                        <button class="btn-add-courses" @click="filterFavoriteScholarships">Adicionar bolsa(s)</button>
                    </div>
            </div>
        </div>
    </section>
</template>


<script>

export default {
    data() {
        return{
            rangeValue: "5000",
            scholarshipsCities: [],
            scholarshipsNames: [],
            citySelected: "",
            scholarshipSelected: "",
            modality: [],
            checkedScholarships: [],
            favoriteScholarships:[]
        }
    },
    props: {
        changeModal: { type: Function },
        dataScholarships: { type: Array }
    },
    computed:{
        scholarshipsFilters(){
            const filterByCourseName = this.dataScholarships.filter((elem) => {
               return elem.course.name === this.scholarshipSelected && elem.price_with_discount <= this.rangeValue 
            })

             const filterByCityName = this.dataScholarships.filter((elem) => {
                 return elem.campus.city === this.citySelected && elem.price_with_discount <= this.rangeValue 
             })
            
            const filterAll = this.dataScholarships.filter((elem) => {
                const resul = elem.course.name === this.scholarshipSelected
                 &&  elem.campus.city === this.citySelected && elem.price_with_discount <= this.rangeValue 
                return resul
            }) 

            if(this.citySelected && this.scholarshipSelected == "") {
                return filterByCityName
            } else if(this.scholarshipSelected && this.citySelected == ""){
                return filterByCourseName
            } else {
                return filterAll
            }
        }
    },
    methods: {
        filterCities(){
            let array = this.dataScholarships;
            
            let arrayCities = array.map( response => {
                return response.campus.city
            })

            let arrayCitiesWithoutRepeat = arrayCities.filter((elem, index) => {
                return arrayCities.indexOf(elem) === index;
            })
            // indexOf retorna a primeira posição em que o item do array aparece
            this.scholarshipsCities = arrayCitiesWithoutRepeat;
        },

        filterScholarshipsNames(){
            let array = this.dataScholarships;

            let arrayScholarshipNames = array.map(response => {
                return response.course.name
            })
            let scholarshipsNameWithoutRepeat = arrayScholarshipNames.filter((elem, index) => {
                return arrayScholarshipNames.indexOf(elem) === index;
            })
            this.scholarshipsNames = scholarshipsNameWithoutRepeat;
        },
        filterFavoriteScholarships(){
            let array = this.scholarshipsFilters;
            let arrayScholarshipChecked = this.checkedScholarships;

            let favoriteScholarshipsArray = arrayScholarshipChecked.map((response) => {
                let resul;
                array.forEach((elem, index) => {
                    if(index === parseInt(response)){
                        resul = elem;
                    }
                })
                return resul;
            })
            
            this.favoriteScholarships = favoriteScholarshipsArray
            this.sendEventFavoriteScholarships();
            this.changeModal();
        },
        sendEventFavoriteScholarships(){
            let parsedObj = JSON.parse(JSON.stringify(this.favoriteScholarships))
            this.$emit("dataFavoriteScholarships", parsedObj)
        }

    },
    created() {
        this.filterCities();
        this.filterScholarshipsNames();
    }

}
</script>

<style src="./_modalScholarships.css" scoped>