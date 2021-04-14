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
                        <li :class="{selected: isSelected}" @click.prevent="changeSemester" id="1"><a href="">Todos os semestres</a></li>
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
                :dataScholarships ="dataScholarships"
                @dataFavoriteScholarships="dataFavoriteScholarships($event)"
            />

            <!-- <p>{{ dataScholarships }}</p> -->

            <div v-for="(scholarship, id) in favoriteScholarships"  :key="id"  class="favorite-scholarships-list">
                <div class="scholarships-content">
                    <img :src="scholarship.university.logo_url" alt="" width="65%">
                    <h4>{{ scholarship.university.name }}</h4>
                    <h3>{{ scholarship.course.name }}</h3>
                    <p><b>{{ scholarship.university.score }}</b></p>
                    <span><b>{{scholarship.course.kind}} - {{ scholarship.course.shift}}</b></span>
                    <p>Início das aulas em: {{ scholarship.start_date }}</p>
                    <p>Mensalidade com o Quero Bolsa:</p>
                    <p><s>{{ scholarship.full_price }}</s></p>
                    <h3>R$ {{ scholarship.price_with_discount }}/mês</h3>
                    <div class="buttons-favorite-scholarships-list">
                        <button class="btn-delete">Excluir</button>
                        <button class="btn-show-offers">Ver oferta</button>
                    </div>
                </div>
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
            favoriteScholarships: []
        }
    },
    components: {
        ModalScholarships
    },
    methods: {
        changeModal(){
            this.showModal = !this.showModal
        },
        changeSemester(){
            this.isSelected = !this.isSelected;
        },
        dataFavoriteScholarships($event){
            this.favoriteScholarships = $event
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

<style src="./_home.css" scoped>
