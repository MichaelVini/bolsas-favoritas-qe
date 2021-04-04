<template>
        <section class="home">
            <div class="my-account">
                <a href="">
                    <img src="@/assets/chevron-left-solid.svg" alt="">
                    <p>Minha Conta</p>
                </a>
            </div>
            <div class="home-elements">
                <h1>Bolsas favoritas</h1>
                <p>
                Adicione bolsas de cursos e faculdades do seu interesse
                e receba atualizações com as melhores ofertas disponíveis.
                </p>
                <div class="semester-list">
                    <ul>
                        <li id="1"><a href="">Todos os semestres</a></li>
                        <li id="2"><a href="">2° semestre de 2019</a></li>
                        <li id="3"><a href="">1° semestre de 2020</a></li>
                    </ul>
                </div>
                <div @click="changeModal" class="add-courses">
                        <img src="@/assets/plus-circle.svg" alt="">
                        <h2>Adicionar bolsa</h2>
                        <p>Clique para adicionar bolsas de cursos do seu interesse</p>
                </div>
                <!-- <div v-for="scholarship in scholarships" :key="scholarship.discount_percentage" class="courses-list">
                    <img :src="item.university.logo_url" alt="">
                    <h3>{{ scholarship.university.name }}</h3>
                    <h4>{{ scholarship.course.name }}</h4>
                    <p>{{ scholarship.university.score }}</p>
                    <p>Mensalidade com o quero bolsa:</p>
                    <h4>R$ {{ scholarship.price_with_discount }}</h4>
                    <button>Excluir</button>
                    <button>Ver oferta</button>
                </div> -->
            </div>
            <section class="modal" v-if="showModal == true">
                <div class="modal-container">
                    <div class="modal-dados">
                            <button class="close-modal" @click="changeModal">X</button>
                            <h2>Adicionar bolsa</h2>
                            <p>Filtre e adicione as bolsas de seu interesse.</p>
                            <div class="select-city">
                                <span>SELECIONE SUA CIDADE</span>
                                <select name="city" v-model="citySelected" id="city">
                                    <option value selected disabled>Selecione uma cidade</option>
                                    <option 
                                        v-for="city in scholarshipsCities"
                                        :key="city"  
                                        >{{ city }}</option>
                                </select>
                            </div>
                           <div class="select-scholarship">
                               <span>SELECIONE O CURSO DE SUA PREFERÊNCIA</span>
                                <select name="cc" v-model="scholarshipSelected" id="cc">
                                    <option value selected disabled>Selecione um curso</option>
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
                                        <input type="checkbox" class="presencial" value="presencial" v-model="modality" > 
                                        <label for="presencial">Presencial</label>
                                    </div>
                                    <div class="ead-modality">
                                        <input type="checkbox" value="A distancia" v-model="modality">
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
                                <p>{{ scholarshipSelected }}</p>
                                <p>{{ citySelected }}</p>
                                <p>{{ modality }}</p>
                           </div>
                           <div v-for="scholarship in scholarships"  :key="scholarship"  class="scholarships-list">
                               <input type="checkbox">
                               <img :src="scholarship.university.logo_url" alt="" width="100px">
                               <div class="scholarships-content">
                                    <h3>{{ scholarship.course.name }}</h3>
                                    <span>{{ scholarship.course.level}}</span>
                                    <h4><p> Bolsa de </p> {{ scholarship.discount_percentage}}% </h4>
                                    <h4>R$ {{ scholarship.price_with_discount }}/mês</h4>
                               </div>
                           </div>
                           <button>Cancelar</button>
                           <button>Adicionar Bolsas</button>
                    </div>
                </div>
            </section>
        </section>


</template>

<script>
import dataScholarships from '@/services/db.json'

export default {
    data() {
        return{
            showModal: Boolean,
            rangeValue: "5000",
            scholarships: [],
            scholarshipsCities: [],
            scholarshipsNames: [],
            citySelected: "",
            scholarshipSelected: "",
            modality: []
        }
    },
    methods: {
        changeModal(){
            this.showModal = !this.showModal
        },
        filterCities(){
            let array = dataScholarships;
            let arrayCities = array.map( res => {
                return res.campus.city
            })
            let arrayCitiesWithoutRepeat = arrayCities.filter((elem, index) => {
                return arrayCities.indexOf(elem) === index;
            })
            // indexOf retorna a primeira posição em que o item do array aparece
            this.scholarshipsCities = arrayCitiesWithoutRepeat;
        },

        filterScholarshipsNames(){
            let array = dataScholarships;
            let arrayScholarshipNames = array.map(response => {
                return response.course.name
            })
            let scholarshipsNameWithoutRepeat = arrayScholarshipNames.filter((elem, index) => {
                return arrayScholarshipNames.indexOf(elem) === index;
            })
            this.scholarshipsNames = scholarshipsNameWithoutRepeat;
        },

        generalFilter(){

        }
    },
    created() {
        this.scholarships = dataScholarships
        this.filterCities();
        this.filterScholarshipsNames();
    }
}
</script>

<style src="./_home.css" scoped>
    