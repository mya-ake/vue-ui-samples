import { shallowMount } from '@vue/test-utils'

import { GlobalHeader } from '~/components'

describe('GlobalHeader', () => {
  describe('mount', () => {
    it('isVueInstance', () => {
      const wrapper = shallowMount(GlobalHeader, {
        stubs: {
          'nuxt-link': true,
        },
      })
      expect(wrapper.isVueInstance()).toBe(true)
    })
  })
})
