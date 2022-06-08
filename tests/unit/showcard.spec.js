import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils'
import ShowCard from '@/common/ShowCard'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ShowCard.vue', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store()
  })

  it('renders images for tv shows', () => {
    const wrapper = mount(ShowCard, {
      store,
      propsData: {
        shows: [
          {
            name: 'Downton Abbey',
            image: {
              original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg'
            },
            genres: ['comedy', 'drama'],
            rating: {
              average: 8
            }
          }
        ]
      },
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.img__original').exists()).toBe(true)
  })

  it('renders fallback image for tv shows', () => {
    const wrapper = mount(ShowCard, {
      store,
      propsData: {
        shows: [
          {
            name: 'Downton Abbey',
            image: null,
            genres: ['comedy', 'drama'],
            rating: {
              average: 8
            }
          }
        ]
      },
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.img__fallback').exists()).toBe(true)
  })

  it('doesnt render genres for tv shows if it is not present', () => {
    const wrapper = mount(ShowCard, {
      store,
      propsData: {
        shows: [
          {
            name: 'Downton Abbey',
            image: {
              original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg'
            },
            genres: [],
            rating: {
              average: 8
            }
          }
        ]
      },
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.show__genre--wrapper').exists()).toBe(false)
  })

  it('doesnt render rating for tv shows if it is not present', () => {
    const wrapper = mount(ShowCard, {
      store,
      propsData: {
        shows: [
          {
            name: 'Downton Abbey',
            image: {
              original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg'
            },
            genres: [],
            rating: {
            }
          }
        ]
      },
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.show__rating--wrapper').exists()).toBe(false)
  })

  it('displays the title correctly for tv shows', () => {
    const wrapper = mount(ShowCard, {
      store,
      propsData: {
        shows: [
          {
            name: 'Downton Abbey',
            image: {
              original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg'
            },
            genres: [],
            rating: {
            }
          }
        ]
      },
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.show__title').text()).toContain('Downton Abbey')
  })
})
