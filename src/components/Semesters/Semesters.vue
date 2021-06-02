<template>
    <div class="semester-list">
        <ul class="semester-list__items">
            <li class="semester-list__item" :class="{selected: allSemesters}"><a  @click.prevent="changeSemester($event.target.id)" id="1" class="semester-list__item__text">Todos os semestres</a></li>
            <li class="semester-list__item" :class="{selected: segundoSem2019}"><a @click.prevent="changeSemester($event.target.id)" id="2" class="semester-list__item__text">2° semestre de 2019</a></li>
            <li class="semester-list__item" :class="{selected: primeiroSem2020}"><a  @click.prevent="changeSemester($event.target.id)" id="3" class="semester-list__item__text">1° semestre de 2020</a></li>
        </ul>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data(){
        return {
            allSemesters: true,
            segundoSem2019: false,
            primeiroSem2020: false
        }
    },
    computed: {
        ...mapState(["semesterScholarships"])
    },
    methods: {
        ...mapMutations(["UPDATE_SEMESTERS_SCHOLARSHIPS"]),
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
            this.sendSemesters();            
        }, 
        sendSemesters(){
            this.UPDATE_SEMESTERS_SCHOLARSHIPS([this.allSemesters, this.segundoSem2019, this.primeiroSem2020])
        }
    },
}
</script>

<style src="./semesters.css" scoped>