import { shallowMount } from '@vue/test-utils'
import Footer from "./Footer.vue"


describe('Footer', ()=> {
    it('should render', () => {
        const wrapper = shallowMount(Footer)
        expect(wrapper.exists()).toBeTruthy()
    })
})