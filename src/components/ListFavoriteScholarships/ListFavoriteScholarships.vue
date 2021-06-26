<template>
    <section class="card-favorite-scholarships">
        <AddCourseCard />
        <div v-for="(scholarship, index) in scholarshipsFilterBySemesters"  :key="index"  class="favorite-scholarships-list">
            <div class="scholarships-content">
                <div class="scholarship-content__logo">
                    <img :src="scholarship.university.logo_url" alt="" width="35%">
                </div>
                <span class="scholarships-content__span"><b>{{scholarship.university.name}}</b></span>
                <p class="scholarships-content__name-course">{{scholarship.course.name}}</p>
                <div class="scholarship-content__star-rating">
                    <img class="scholarship-content__star-rating__image" src="@/assets/star-rating.png" width="40%">
                    <p class="scholarships-content__text"><b>{{ scholarship.university.score }}</b></p>
                </div>
                <hr>
                <span class="scholarships-content__span"><b>{{scholarship.course.kind}} - {{ scholarship.course.shift}}</b></span>
                <p class="scholarships-content__text">Início das aulas em: {{ scholarship.start_date }}</p>
                <hr>
                <p class="scholarships-content__text">Mensalidade com o Quero Bolsa:</p>
                <p class="scholarships-content__text"><s>{{ scholarship.full_price }}</s></p>
                <h3 class="scholarships-content__h3" >R$ {{ scholarship.price_with_discount }}/mês</h3>
                <div class="favorite-scholarships-list__buttons">
                    <button class="btn btn--delete" @click="deleteScholarship(index)">Excluir</button>
                    <button class="btn btn--show-offers">Ver oferta</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import AddCourseCard from '../AddCourseCard/AddCourseCard.vue';
export default {
    components: { 
        AddCourseCard
    },
    methods: {
        ...mapMutations(["UPDATE_SHOWMODAL","UPDATE_FAVORITE_SCHOLARSHIPS"]),
        
        deleteScholarship(index){
            let arrayFavoriteScholarships = this.favoriteScholarships

            arrayFavoriteScholarships.splice(index, 1)
            this.UPDATE_FAVORITE_SCHOLARSHIPS(arrayFavoriteScholarships)
        },
        changeModal(){
            this.UPDATE_SHOWMODAL(true);
        }
    },
    computed: {
        ...mapState(
            ["semestersScholarships","favoriteScholarships"]),

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
    }
}
</script>

<style src="./listFavoriteScholarships.css" scoped>