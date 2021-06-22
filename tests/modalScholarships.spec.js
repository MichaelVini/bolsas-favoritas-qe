import { createLocalVue, shallowMount } from '@vue/test-utils'
import ModalScholarships from './../src/components/ModalScholarships/ModalScholarships.vue'
import Vuex from 'vuex'
import { it, jest } from '@jest/globals'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        dataScholarships: [
            {
                "full_price": 2139.64,
                "price_with_discount": 706.08,
                "discount_percentage": 67.0,
                "start_date": "01/08/2019",
                "enrollment_semester": "2019.2",
                "enabled": true,
                "course": {
                  "name": "TESTE",
                  "kind": "Presencial",
                  "level": "Bacharelado",
                  "shift": "Noite"
                },
                "university": {
                  "name": "UNIP",
                  "score": 4.5,
                  "logo_url": "https://www.tryimg.com/u/2019/04/16/unip.png"
                },
                "campus": {
                  "name": "Jardim das Indústrias",
                  "city": "São José dos Campos"
                }
              }
        ]
    },
    mutations: {
        UPDATE_FAVORITE_SCHOLARSHIPS: jest.fn(), 
        UPDATE_SHOWMODAL: jest.fn()
    }
})

describe('ModalScholarships', () => {
    it('should render default state', () => {
        const wrapper = shallowMount(ModalScholarships, {
            localVue,
            store
        })

        expect(wrapper.html()).toMatchSnapshot()
    })
})