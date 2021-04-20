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
                        <li :class="{selected: allSemesters}"><a  @click.prevent="changeSemester($event.target.id)" id="1">Todos os semestres</a></li>
                        <li :class="{selected: segundoSem2019}"><a @click.prevent="changeSemester($event.target.id)" id="2">2° semestre de 2019</a></li>
                        <li :class="{selected: primeiroSem2020}"><a  @click.prevent="changeSemester($event.target.id)" id="3">1° semestre de 2020</a></li>
                    </ul>
                </div>
                <div class="scholarships-list">
                    <div @click="changeModal" class="add-courses">
                        <img src="@/assets/plus-circle.svg" alt="">
                        <h2>Adicionar bolsa</h2>
                        <p>Clique para adicionar bolsas de cursos do seu interesse</p>
                    </div>

                    <div v-for="(scholarship, index) in scholarshipsFilterBySemesters"  :key="index"  class="favorite-scholarships-list">
                        <div class="scholarships-content">
                            <div class="logo-university">
                                <img :src="scholarship.university.logo_url" alt="" width="40%">
                            </div>
                            <div class="star-rating">
                                <img src="@/assets/star-rating.png" width="40%">
                                <p><b>{{ scholarship.university.score }}</b></p>
                            </div>
                            <span><b>{{scholarship.course.kind}} - {{ scholarship.course.shift}}</b></span>
                            <p>Início das aulas em: {{ scholarship.start_date }}</p>
                            <p>Mensalidade com o Quero Bolsa:</p>
                            <p><s>{{ scholarship.full_price }}</s></p>
                            <h3>R$ {{ scholarship.price_with_discount }}/mês</h3>
                            <div class="buttons-favorite-scholarships-list">
                                <button class="btn-delete" @click="deleteScholarship(index)">Excluir</button>
                                <button class="btn-show-offers">Ver oferta</button>
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
import api from '@/services/api'

export default {
    data(){
        return {
            showModal: false,
            dataScholarships: [],
            isSelected: true,
            favoriteScholarships: [],
            allSemesters: true,
            segundoSem2019: false,
            primeiroSem2020: false
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
            
            if(this.segundoSem2019 == true){
                return filterBySecondSemester2019
            } else if (this.primeiroSem2020 == true) {
                return filterByFirstSemester2020
            } else {
                return this.favoriteScholarships
            }
        }
    },
    components: {
        ModalScholarships
    },
    methods: {
        changeModal(){
            this.showModal = !this.showModal
        },
        changeSemester(id){
            if(id == 1){
                this.allSemesters = true;
                this.segundoSem2019 = false;
                this.primeiroSem2020 = false;
            } else if (id == 2) {
                this.segundoSem2019 = true;
                this.allSemesters = false;
                this.primeiroSem2020 = false;
            } else {
                this.primeiroSem2020 = true;
                this.allSemesters = false;
                this.segundoSem2019 = false;
            }
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
