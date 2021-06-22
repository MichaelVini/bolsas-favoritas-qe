import { shallowMount } from '@vue/test-utils'
import AddCouseCard from './../src/components/AddCourseCard/AddCourseCard.vue'


describe('AddCouseCard.vue', ()=> {
    it('should render default state', () => {
        const wrapper = shallowMount(AddCouseCard)
        expect(wrapper.html()).toMatchSnapshot()
    })
})