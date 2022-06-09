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
      fetchSearchResults: jest.fn(),
      fetchShowDetails: jest.fn()
    }
    getters = {
      shows: () => [
        {
          name: 'Hells Kitchen',
          image: {
            original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg'
          },
          genres: ['comedy', 'drama'],
          rating: {
            average: 8
          }
        }],
      searchText: () => 'test'
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

  it('renders a values from getters', () => {
    const wrapper = mount(HomePage, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.show__rating')
      .text().trim()).toEqual('8')
    expect(wrapper.find('.show__title')
      .text().trim()).toEqual('Hells Kitchen')
    expect(wrapper.find('.show__genre')
      .text().trim()).toEqual('comedy')
  })

  it('renders loading bar only on loading', () => {
    const wrapper = mount(HomePage, {
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

  it('doesnt render loading bar when loading is finished', () => {
    const wrapper = mount(HomePage, {
      computed: {
        loading: () => false
      },
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.loader').exists()).toBe(false)
  })

  it('render shows tiles only if it is not empty', () => {
    const wrapper = mount(HomePage, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.show__container').exists()).toBe(true)
  })

  it('dispatches an action when user searches something', () => {
    const wrapper = mount(HomePage, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    wrapper.find('button').trigger('click')
    expect(actions.fetchSearchResults.mock.calls).toHaveLength(1)
  })
})
