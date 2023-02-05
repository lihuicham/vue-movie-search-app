import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
})

describe('Mounted App', () => {
  const wrapper = mount(App);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
})