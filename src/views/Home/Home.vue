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

                <Semesters 
                    @dataSemesters="dataSemesters($event)"
                />

                <CardFavoriteScholarships 
                    :dataScholarships ="dataScholarships" 
                    :favoriteScholarships="favoriteScholarships" 
                    :semestersScholarships="semestersScholarships"
                    @dataShowModal="dataShowModal($event)"
                />

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
import CardFavoriteScholarships from '../../components/CardFavoriteScholarships/CardFavoriteScholarships.vue'

export default {
    data(){
        return {
            showModal: false,
            dataScholarships: [],
            favoriteScholarships: [],
            semestersScholarships: []
        }
    },
    components: {
        ModalScholarships,
        Semesters,
        CardFavoriteScholarships
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
        dataShowModal($event){
            this.showModal = $event
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
