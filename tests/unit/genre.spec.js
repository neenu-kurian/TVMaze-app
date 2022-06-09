import { mount } from '@vue/test-utils'
import Genre from '@/common/Genre'

describe('Genre', () => {
  it('displays genre correctly', () => {
    const wrapper = mount(Genre, {
      propsData: {
        genre: 'comedy'
      }
    })

    expect(wrapper.text()).toContain('comedy')
  })

  it('renders the component correctly', () => {
    const wrapper = mount(Genre, {
      propsData: {
        genre: 'drama'
      }
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('doesnt display genre if it not available', () => {
    const wrapper = mount(Genre)

    expect(wrapper.find('.show__genre--wrapper').exists()).toBe(false)
  })
})
