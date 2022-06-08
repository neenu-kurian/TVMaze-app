import { mount } from '@vue/test-utils'
import Rating from '../../src/common/Rating'

it('displays rating correctly', () => {
  const wrapper = mount(Rating, {
    propsData: {
      rating: 8
    }
  })

  expect(wrapper.text()).toContain('8')
})

it('renders the component correctly', () => {
  const wrapper = mount(Rating, {
    propsData: {
      rating: 10
    }
  })

  expect(wrapper).toMatchSnapshot()
})
