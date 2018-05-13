<template>
  <section class="content">
    <h1 class="visually-hidden">タブ</h1>
    <base-tab v-bind:size="3">

      <span slot="tab-0">tab1</span>
      <section slot="tabpanel-0">
        <h2>tab1</h2>
      </section>

      <span slot="tab-1">tab2</span>
      <section slot="tabpanel-1">
        <h2>tab2</h2>
      </section>

      <span slot="tab-2">tab3</span>
      <section slot="tabpanel-2">
        <h2>tab3</h2>
      </section>

    </base-tab>
  </section>
</template>

<script>
import { BaseTab } from '~/components'

export default {
  components: {
    BaseTab,
  },
}
</script>

<style lang="scss" scoped>

.content {

}

</style>
