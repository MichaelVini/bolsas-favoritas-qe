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
            </div>
            <ModalScholarships 
                v-if="showModal"
                :changeModal="changeModal"
            />
        </section>
</template>

<script>
import ModalScholarships from '@/components/ModalScholarships/ModalScholarships'

export default {
    data(){
        return {
            showModal: false
        }
    },
    components: {
        ModalScholarships
    },
    methods: {
        changeModal(){
            this.showModal = !this.showModal
        }
    }
}
</script>

<style src="./_home.css" scoped>
