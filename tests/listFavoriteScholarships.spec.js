import { jest } from '@jest/globals'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ListFavoriteScholarships from "./../src/components/ListFavoriteScholarships/ListFavoriteScholarships.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state:{
        semestersScholarships: [
            {
                "full_price": 2139.64,
                "price_with_discount": 706.08,
                "discount_percentage": 67.0,
                "start_date": "01/08/2019",
                "enrollment_semester": "2019.2",
                "enabled": true,
                "course": {
                  "name": "Engenharia",
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
        ],
        favoriteScholarships: [
            {
                "full_price": 2139.64,
                "price_with_discount": 706.08,
                "discount_percentage": 67.0,
                "start_date": "01/08/2019",
                "enrollment_semester": "2019.2",
                "enabled": true,
                "course": {
                  "name": "Engenharia M",
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
        UPDATE_SHOWMODAL: jest.fn()
    }
})

describe('ListFavoriteScholarships.vue', ()=> {
    it('should render default state', () => {
      const wrapper = shallowMount(ListFavoriteScholarships, {
        localVue,
        store
      })      
      
      expect(wrapper.html()).toMatchSnapshot()
    })
})
