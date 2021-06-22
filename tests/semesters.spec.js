import { shallowMount } from '@vue/test-utils'
import Semesters from './../src/components/Semesters/Semesters.vue'

describe('Semesters.vue', () => {
    it('should render default state', () => {
        const wrapper = shallowMount(Semesters)
        
        expect(wrapper.html()).toMatchSnapshot()
    })
})
