import api from '@/services/api'

export default {
    async getData(context) {
        await api.get('/db.json')
            .then( response => {
                context.commit("UPDATE_DATA_SCHOLARSHIPS", response.data)
            })
    }
}