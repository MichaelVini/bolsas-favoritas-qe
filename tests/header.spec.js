import { shallowMount } from '@vue/test-utils'
import Header from "./../src/components/Header/Header.vue"


describe('Header', ()=> {
    it('should render', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.html()).toMatchSnapshot()
    })
})