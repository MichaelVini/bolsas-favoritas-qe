import { shallowMount } from '@vue/test-utils'
import Footer from "./../src/components/Footer/Footer.vue"


describe('Footer.vue', ()=> {
    it('should render default state', () => {
        const wrapper = shallowMount(Footer)
        expect(wrapper.html()).toMatchSnapshot()
    })
})