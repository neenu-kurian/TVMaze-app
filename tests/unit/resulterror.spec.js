import { mount } from '@vue/test-utils'
import ResultsError from '../../src/common/ResultsError'

it('renders the component correctly', () => {
  const wrapper = mount(ResultsError)

  expect(wrapper).toMatchSnapshot()
})
