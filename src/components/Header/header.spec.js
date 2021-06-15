import { shallowMount } from '@vue/test-utils'
import Header from "./Header.vue"


describe('Header', ()=> {
    it('should render', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.exists()).toBeTruthy()
    })
})