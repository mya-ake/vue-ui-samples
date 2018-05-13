import { shallowMount } from '@vue/test-utils'

import { GlobalFooter } from '~/components'

describe('GlobalFooter', () => {
  describe('mount', () => {
    it('isVueInstance', () => {
      const wrapper = shallowMount(GlobalFooter, {
        stubs: {
          'nuxt-link': true,
        },
      })
      expect(wrapper.isVueInstance()).toBe(true)
    })
  })
})
