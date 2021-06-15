import { shallowMount } from '@vue/test-utils'
import Menu from "./Menu"


describe('Menu', ()=> {
    it('should render', () => {
        const wrapper = shallowMount(Menu)
        expect(wrapper.exists()).toBeTruthy()
    })
})
