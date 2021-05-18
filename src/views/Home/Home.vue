<template>
        <section class="home">
            <div class="home__my-account">
                <a class=".home__my-account__a" href="">
                    <img class="home__my-account__image" src="@/assets/chevron-left-solid.svg" alt="">
                    <p>Minha Conta</p>
                </a>
            </div>
            <div class="home__elements">
                <h1 class="home__elements__title">Bolsas favoritas</h1>
                <p class="home__elements__text">
                Adicione bolsas de cursos e faculdades do seu interesse
                e receba atualizações com as melhores ofertas disponíveis.
                </p>

                <Semesters @dataSemesters="dataSemesters($event)"/>
                
                <div class="scholarships-list">
                    
                    <AddCourseCard 
                    :changeModal="changeModal"
                    />

                    <div v-for="(scholarship, index) in scholarshipsFilterBySemesters"  :key="index"  class="favorite-scholarships-list">
                        <div class="scholarships-content">
                            <div class="scholarship-content__logo">
                                <img :src="scholarship.university.logo_url" alt="" width="40%">
                            </div>
                            <div class="scholarship-content__star-rating">
                                <img class="scholarship-content__star-rating__image" src="@/assets/star-rating.png" width="40%">
                                <p class="scholarships-content__text"><b>{{ scholarship.university.score }}</b></p>
                            </div>
                            <span class="scholarships-content__span"><b>{{scholarship.course.kind}} - {{ scholarship.course.shift}}</b></span>
                            <p class="scholarships-content__text">Início das aulas em: {{ scholarship.start_date }}</p>
                            <p class="scholarships-content__text">Mensalidade com o Quero Bolsa:</p>
                            <p class="scholarships-content__text"><s>{{ scholarship.full_price }}</s></p>
                            <h3 class="scholarships-content__h3" >R$ {{ scholarship.price_with_discount }}/mês</h3>
                            <div class="favorite-scholarships-list__buttons">
                                <button class="btn btn--delete" @click="deleteScholarship(index)">Excluir</button>
                                <button class="btn btn--show-offers">Ver oferta</button>
                            </div>
                        </div>
                    </div>
                </div>
                 <ModalScholarships 
                    v-if="showModal"
                    :changeModal="changeModal"
                    :dataScholarships ="dataScholarships"
                    @dataFavoriteScholarships="dataFavoriteScholarships($event)"
                />
            </div>
        </section>
</template>

<script>
import ModalScholarships from '@/components/ModalScholarships/ModalScholarships'
import Semesters from '../../components/Semesters/Semesters.vue'
import api from '@/services/api'
import AddCourseCard from '../../components/AddCourseCard/AddCourseCard.vue'

export default {
    data(){
        return {
            showModal: false,
            dataScholarships: [],
            favoriteScholarships: [],
            semestersScholarships: []
        }
    },
    computed:{
        scholarshipsFilterBySemesters(){
            const filterBySecondSemester2019 = this.favoriteScholarships.filter((elem) => {
               return elem.enrollment_semester === "2019.2"  
            })

            const filterByFirstSemester2020 = this.favoriteScholarships.filter((elem) => {
               return elem.enrollment_semester === "2020.1"  
            })
            
            if(this.semestersScholarships[1] == true){
                return filterBySecondSemester2019
            } else if (this.semestersScholarships[2] == true) {
                return filterByFirstSemester2020
            } else {
                return this.favoriteScholarships
            }
        }
    },
    components: {
        ModalScholarships,
        Semesters,
        AddCourseCard
    },
    methods: {
        changeModal(){
            this.showModal = !this.showModal
        },
        dataSemesters($event){
            this.semestersScholarships = $event
        },
        dataFavoriteScholarships($event){
            this.favoriteScholarships = $event
        },
        deleteScholarship(index){
            this.favoriteScholarships.splice(index, 1);
        },
        async getData() {
            await api.get('/db.json').then( response => {
                this.dataScholarships = response.data
            })
        }
    },
    created(){
        this.getData();
    }
}
</script>

<style src="./home.css" scoped>
