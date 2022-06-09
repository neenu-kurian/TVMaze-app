import { createLocalVue, mount } from '@vue/test-utils'
import ResultsError from '@/common/ResultsError'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ResultsError.vue', () => {
  it('displays error text correctly when api call is success', () => {
    const wrapper = mount(ResultsError, {
      computed: {
        error: () => false
      },
      slots: {
        default: 'Sorry, we couldnt find any results. Please try another tv show'
      },
      localVue
    })

    expect(wrapper.find('.error__message').text()).toContain('Sorry, we couldnt find any results. Please try another tv show')
  })

  it('displays error text correctly when api call is failed', () => {
    const wrapper = mount(ResultsError, {
      computed: {
        error: () => true
      },
      slots: {
        default: 'Something went wrong, please try again later'
      },
      localVue
    })

    expect(wrapper.find('.error__message').text()).toContain('Something went wrong, please try again later')
  })

  it('renders the component correctly', () => {
    const wrapper = mount(ResultsError, {
      computed: {
        error: () => false
      }
    })

    expect(wrapper).toMatchSnapshot()
  })
})
