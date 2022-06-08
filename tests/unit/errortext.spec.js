import { mount } from '@vue/test-utils'
import ErrorText from '../../src/common/ErrorText'

it('displays message', () => {
  const wrapper = mount(ErrorText)

  expect(wrapper.text()).toContain(
    'Sorry, we couldnt find any results. Please try another tv show'
  )
})

it('renders component correctly', () => {
  const wrapper = mount(ErrorText)

  expect(wrapper).toMatchSnapshot()
})
