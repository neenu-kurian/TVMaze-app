import HomePage from '@/components/HomePage'
import Vuex from 'vuex'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HomePage', () => {
  let store
  let mutations
  let actions
  let getters
  beforeEach(() => {
    mutations = {
      SET_SEARCH: jest.fn()
    }
    actions = {
      fetchSearchResults: jest.fn()
    }
    getters = {
      shows: () => [
        {
          image: {
            original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg'
          },
          genres: ['comedy', 'drama'],
          rating: {
            average: 8
          }
        }],
      searchText: () => ' '
    }
    store = new Vuex.Store({
      mutations,
      actions,
      getters
    })
  })

  it('calls mutation on form submit', () => {
    const wrapper = mount(HomePage, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    wrapper.find('button').trigger('submit')
    expect(mutations.SET_SEARCH.mock.calls).toHaveLength(1)
  })
})
