<template>
    <div @click="changeModal" class="add-courses">
        <img class="add-courses__image" src="@/assets/plus-circle.svg" alt="">
        <h2>Adicionar bolsa</h2>
        <p class="add-courses__text">Clique para adicionar bolsas de cursos do seu interesse</p>
    </div>
</template>
<script>
export default {
    props: {
        changeModal: { type: Function },
    }
}
</script>
<style src="./addCourseCard.css" scoped>