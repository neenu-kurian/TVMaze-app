import { mount } from '@vue/test-utils'
import ErrorText from '@/common/ErrorText'

describe('ErrorText', () => {
  it('displays message correctly', () => {
    const wrapper = mount(ErrorText)

    expect(wrapper.text()).toContain(
      'Sorry, we couldnt find any results. Please try another tv show'
    )
  })

  it('displays slot text correctly', () => {
    const wrapper = mount(ErrorText, {
      slots: {
        default: 'Something went wrong'
      }
    })

    expect(wrapper.text()).toContain(
      'Something went wrong'
    )
  })

  it('renders component correctly', () => {
    const wrapper = mount(ErrorText)

    expect(wrapper).toMatchSnapshot()
  })
})
