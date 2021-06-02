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
                <CardFavoriteScholarships />
                <ModalScholarships v-if="showModal" />
            </div>
        </section>
</template>

<script>
import ModalScholarships from '@/components/ModalScholarships/ModalScholarships'
import Semesters from '@/components/Semesters/Semesters.vue'
import CardFavoriteScholarships from '@/components/CardFavoriteScholarships/CardFavoriteScholarships.vue'
import { mapState, mapActions } from 'vuex'

export default {
    computed: { 
        ...mapState(["showModal"])
    },
    components: {
        ModalScholarships,
        Semesters,
        CardFavoriteScholarships
    },
    methods: mapActions(["getData"]),
    created(){
        this.getData();
    }
}
</script>

<style src="./home.css" scoped>
