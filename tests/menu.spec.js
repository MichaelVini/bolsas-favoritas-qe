import { shallowMount } from '@vue/test-utils'
import Menu from "./../src/components/Menu/Menu.vue"


describe('Menu', ()=> {
    it('should render default state', () => {
        const wrapper = shallowMount(Menu)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
