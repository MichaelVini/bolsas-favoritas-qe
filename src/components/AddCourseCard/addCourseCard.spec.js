import { shallowMount } from '@vue/test-utils'
import AddCouseCard from "./AddCourseCard.vue"


describe('AddCouseCard', ()=> {
    it('should render', () => {
        const wrapper = shallowMount(AddCouseCard)
        expect(wrapper.exists()).toBeTruthy()
    })
})