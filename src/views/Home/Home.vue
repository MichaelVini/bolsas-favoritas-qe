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
            <section class="modal" v-if="showModal == true">
                <div class="modal-container">
                    <div class="modal-dados">
                            <button class="close-modal" @click="changeModal">X</button>
                            <h2>Adicionar bolsa</h2>
                            <p>Filtre e adicione as bolsas de seu interesse.</p>
                            <div class="select-city">
                                <span>SELECIONE SUA CIDADE</span>
                                <select name="city" id="city">
                                    <option value="sjc">São José dos Campos</option>
                                    <option value="sp">São Paulo</option>
                                    <option value="guaru">Guarulhos</option>
                                    <option value="jacarei">Jacareí</option>
                                </select>
                            </div>
                           <div class="select-scholarship">
                               <span>SELECIONE O CURSO DE SUA PREFERÊNCIA</span>
                                <select name="cc" id="cc">Ciência da Computação</select>
                           </div>
                           <div class="select-modality">
                               <span>COMO VOCÊ QUER ESTUDAR?</span>
                               <div class="modality">
                                    <div class="presencial-modality">
                                        <input type="checkbox" name="presencial">
                                        <label for="presencial">Presencial</label>
                                    </div>
                                    <div class="ead-modality">
                                        <input type="checkbox" value="ead">
                                        <label for="ead">A distância</label>
                                    </div>
                               </div>
                           </div>
                           <div class="select-max-payment">
                               <span>ATÉ QUANTO PODE PAGAR?</span>
                           </div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button>Cancelar</button>
                            <button>Adicionar Bolsas</button>
                    </div>
                </div>
            </section>
        </section>


</template>

<script>

export default {
    data() {
        return{
            showModal: Boolean
        }
    },
    methods: {
        changeModal(){
            this.showModal = !this.showModal
        }
    }
}
</script>

<style src="./_home.css" scoped>
    