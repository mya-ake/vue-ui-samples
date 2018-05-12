<template>
  <div class="layout">

    <global-header/>

    <main>
      <nuxt/>
    </main>

    <global-footer/>

  </div>
</template>

<script>
import {
  GlobalHeader,
  GlobalFooter,
} from '~/components'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  },
}
</script>

<style lang="scss" scoped>

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

</style>
