import { mount } from '@vue/test-utils'
import PrimaryButton from '@/common/PrimaryButton'

it('displays button text based on slot text', () => {
  const wrapper = mount(PrimaryButton, {
    slots: {
      default: 'Search'
    }
  })

  expect(wrapper.text()).toContain('Search')
})

it('renders the component correctly', () => {
  const wrapper = mount(PrimaryButton, {
    propsData: {
      type: 'submit'
    }
  })

  expect(wrapper).toMatchSnapshot()
})

// test('triggers a click', async () => {
//   const wrapper = mount(PrimaryButton)
//   const $route = {
//     name: 'show'
//   }

//   await wrapper.find('button').trigger('click')

  

//   expect(wrapper.vm.$route.path).toBe($route.name)
// })
