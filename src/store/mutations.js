export default {
    UPDATE_SHOWMODAL(state, payload) {
        state.showModal = payload
    },
    UPDATE_SEMESTERS_SCHOLARSHIPS(state, payload) {
        state.semestersScholarships = payload
    },
    UPDATE_FAVORITE_SCHOLARSHIPS(state, payload){
        state.favoriteScholarships = payload
    },
    UPDATE_DATA_SCHOLARSHIPS(state, payload){
        state.dataScholarships = payload
    }
};