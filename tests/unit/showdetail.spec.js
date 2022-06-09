import ShowDetail from '@/components/ShowDetail'
import Vuex from 'vuex'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ShowDetail', () => {
  let store
  let actions
  let getters
  beforeEach(() => {
    actions = {
      fetchShowDetails: jest.fn()
    }
    getters = {
      show: () => {
        return {
          image: {
            original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg'
          },
          genres: ['comedy', 'drama'],
          rating: {
            average: 8
          }
        }
      },
      summary: () => 'test summary'
    }
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('renders loading bar only on loading', () => {
    const wrapper = mount(ShowDetail, {
      mocks: {
        $route: { params: { id: '1' } }

      },
      computed: {
        loading: () => true
      },
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.loader').exists()).toBe(true)
  })
})
