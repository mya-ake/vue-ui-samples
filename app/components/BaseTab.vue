<template>
  <div class="base-tab">
    <ul role="tablist" class="tabs">
      <li
        v-for="(tab, index) in tabs"
        v-bind:key="`tab-${index}`"
        role="presentation"
        class="tab"
      >
        <a
          v-on:click.prevent="handleClickTab(index)"
          v-on:keydown="handleKeyDownTab(index, $event)"
          v-bind:href="`#${buildId('tabpanel', index)}`"
          v-bind:aria-controls="buildId('tabpanel', index)"
          v-bind:aria-selected="tab.selected"
          v-bind:tabindex="tab.selected ? 0 : -1"
          ref="tabs"
          role="tab"
          class="tab__link"
        >
          <slot v-bind:name="`tab-${index}`" />
        </a>
      </li>
    </ul>

    <span
      ref="indicator"
      class="indicator"
      v-bind:style="{
        transform: indicatorTransform,
      }"
    ></span>

    <div>
      <div
        v-for="(tab, index) in tabs"
        v-bind:key="`tabpanel-${index}`"
        v-bind:id="buildId('tabpanel', index)"
        v-bind:aria-hidden="!tab.selected"
        ref="tabpanels"
        role="tabpanel"
        class="tabpanel"
      >
        <slot v-bind:name="`tabpanel-${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    size: {
      type: Number,
      required: true,
    },
  },

  data () {
    return {
      selectedIndex: 0,
      tabs: Array(this.size).fill({}).map((tab, index) => {
        return {
          selected: index === 0,
        }
      }),
    }
  },

  computed: {
    indicatorWidth () {
      return 1 / this.size
    },

    indicatorTransform () {
      return `translateX(${this.indicatorWidth * 100 * this.selectedIndex}%) scale(${this.indicatorWidth}, 1)`
    },
  },

  methods: {
    handleClickTab (index) {
      this.selectTab(index)
    },

    handleKeyDownTab (index, evt) {
      switch (evt.keyCode) {
        case 39: { // right arrow
          this.changeTabSelection(index + 1)
          break
        }
        case 37: { // left arrow
          this.changeTabSelection(index - 1)
          break
        }
        default:
          break
      }
    },

    changeTabSelection (nextIndex) {
      if (nextIndex < 0 || nextIndex >= this.tabs.length) {
        return
      }
      this.selectTab(nextIndex)
      this.$refs.tabs[nextIndex].focus()
    },

    selectTab (index) {
      this.selectedIndex = index
      this.tabs.forEach((tab, tabIndex) => {
        tab.selected = index === tabIndex
      })
    },

    buildId (name, index) {
      return `${name}-${this.uid}-${index}`
    },
  },
}
</script>

<style lang="scss" scoped>

.base-tab {
  position: relative;
}

.tabs {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tab {
  flex: 1 0 0%;
}

.tab__link {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: .9em .5em;
  color: $ct-default;
  text-align: center;
  text-decoration: none;
  transition: {
    property: color, background-color, opacity;
    duration: map-get($durations, fast);
    timing-function: ease-out;
  }
  will-change: opacity;
  opacity: .7;
  &:hover {
    color: $ct-default;
    background-color: $cbg-hover;
    opacity: 1;
  }
  &[aria-selected="true"] {
    color: $ct-default;
    opacity: 1;
  }
}

.tabpanel {
  padding: 1em;
  &[aria-hidden="true"] {
    display: none;
  }
}

.indicator {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: $ct-default;
  transition: {
    property: transform;
    duration: map-get($durations, default);
    timing-function: cubic-bezier(0, 0, .2, 1);
  }
  transform-origin: left top;
  will-change: transform;
}

</style>
