<template>
        <section class="home">
            <div class="home__my-account">
                <a class="home__my-account__a" href="">
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
                <Semesters />
                <ListFavoriteScholarships />
                <ModalScholarships v-if="showModal" />
            </div>
        </section>
</template>

<script>
import ModalScholarships from '@/components/ModalScholarships/ModalScholarships'
import Semesters from '@/components/Semesters/Semesters.vue'
import ListFavoriteScholarships from '@/components/ListFavoriteScholarships/ListFavoriteScholarships.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    computed: { 
        ...mapState(["showModal", "favoriteScholarships"])
    },
    components: {
        ModalScholarships,
        Semesters,
        ListFavoriteScholarships
    },
    methods: {
        ...mapActions(["getData"]),
        ...mapMutations(["UPDATE_FAVORITE_SCHOLARSHIPS"])
    },   
    created(){
        this.getData();
    },
    mounted(){
        const favoriteScholarshipsLocalStorage = JSON.parse(localStorage.getItem('favoriteScholarships'))

        if(favoriteScholarshipsLocalStorage){
            this.UPDATE_FAVORITE_SCHOLARSHIPS(favoriteScholarshipsLocalStorage)
        }
    }
}
</script>

<style src="./home.css" scoped>
