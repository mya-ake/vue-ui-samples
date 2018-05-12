<template>
  <header class="global-header">
    <div class="header__inner">
      <nuxt-link to="/" class="header__title-link">
        <span class="header__title-text">Vue.js UI samples</span>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.global-header {
  padding: 1em 1.6rem;
  border-bottom: solid 1px $cb-default;
}

.header__inner {
  width: 100%;
  max-width: $w-content;
  margin: 0 auto;
  text-align: center;
}

.header__title-link {
  color: $ct-default;
  text-decoration: none;
}

.header__title-text {
  font-size: 2rem;
  font-weight: bold;
}

</style>
