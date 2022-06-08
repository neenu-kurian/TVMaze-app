import { mount } from '@vue/test-utils'
import Rating from '@/common/Rating'

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

it('doesnt render the rating if not present', () => {
  const wrapper = mount(Rating)

  expect(wrapper.find('.show__rating--wrapper').exists()).toBe(false)
})
