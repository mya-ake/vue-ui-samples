import {
  shallowMount,
} from '@vue/test-utils'

import { BaseTab } from '~/components'

describe('BaseTab', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(BaseTab, {
      propsData: {
        size: 3,
      },
    })
  })

  describe('初期', () => {
    it('最初のタブが選択されていて、最初のタブパネルが表示されている', () => {
      expect.assertions(3)

      const firstTab = wrapper.findAll('.tab__link').wrappers[0]
      const firstTabpanel = wrapper.findAll('.tabpanel').wrappers[0]
      expect(firstTab.attributes()['aria-selected']).toBe('true')
      expect(firstTab.attributes()['tabindex']).toBe('0')
      expect(firstTabpanel.attributes()['aria-hidden']).toBeUndefined()
    })

    it('最初のタブ以外は未選択で、最初のタブ以外は非表示になっている', () => {
      const tabsOtherThanFirstTab = wrapper.findAll('.tab__link').wrappers.slice(1)
      const tabpanelsOtherThanFirstTabpanel = wrapper.findAll('.tabpanel').wrappers.slice(1)

      const assertionCount =
      tabsOtherThanFirstTab.length * 2 +
      tabpanelsOtherThanFirstTabpanel.length
      expect.assertions(assertionCount)

      for (const tab of tabsOtherThanFirstTab) {
        expect(tab.attributes()['aria-selected']).toBeUndefined()
        expect(tab.attributes()['tabindex']).toBe('-1')
      }
      for (const tabpanel of tabpanelsOtherThanFirstTabpanel) {
        expect(tabpanel.attributes()['aria-hidden']).toBe('true')
      }
    })
  })

  describe('タブの切り替え', () => {
    it('2個目のタブをクリックしたとき、1個目が非表示になり、2個目が表示になる', () => {
      expect.assertions(4)

      const [firstTab, secondTab] = wrapper.findAll('.tab__link').wrappers
      const [firstTabpanel, secondTabpanel] = wrapper.findAll('.tabpanel').wrappers

      secondTab.trigger('click')

      expect(firstTab.attributes()['aria-selected']).toBeUndefined()
      expect(secondTab.attributes()['aria-selected']).toBe('true')
      expect(firstTabpanel.attributes()['aria-hidden']).toBe('true')
      expect(secondTabpanel.attributes()['aria-hidden']).toBeUndefined()
    })

    it('1個目のタブにフォーカスがあるときに、右キーで2コメのタブに切り替わる', () => {
      expect.assertions(3)

      const [firstTab, secondTab] = wrapper.findAll('.tab__link').wrappers

      firstTab.element.focus()
      firstTab.trigger('keydown.right')

      expect(firstTab.attributes()['aria-selected']).toBeUndefined()
      expect(secondTab.attributes()['aria-selected']).toBe('true')
      expect(document.activeElement).toBe(secondTab.element)
    })

    it('両端のタブにフォーカスがあるときに、タブ外への矢印キーを押したときにフォーカスが動かない', () => {
      expect.assertions(4)

      const tabs = wrapper.findAll('.tab__link').wrappers
      const firstTab = tabs[0]
      const lastTab = tabs[tabs.length - 1]

      // 左端
      firstTab.element.focus()
      firstTab.trigger('keydown.left')

      expect(firstTab.attributes()['aria-selected']).toBe('true')
      expect(document.activeElement).toBe(firstTab.element)

      // 右端
      lastTab.trigger('click')
      lastTab.element.focus() // clickをトリガするだけではフォーカスの移動まではされない模様
      lastTab.trigger('keydown.right')

      expect(lastTab.attributes()['aria-selected']).toBe('true')
      expect(document.activeElement).toBe(lastTab.element)
    })
  })
})
