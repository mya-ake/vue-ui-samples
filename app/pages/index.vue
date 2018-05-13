<template>
  <section class="content">
    <h1 class="title">このサイトについて</h1>
    <div class="text">
      <p>web の UI を色々作ってみたサイト。Vue.js製。</p>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.content {
  width: 100%;
  max-width: $w-content;
  margin: 0 auto;
  padding: 2.4rem 1.6rem;
}

.text {
  padding: 1em 0 2em;
  p {
    margin: 0 0 1em;
    line-height: 1.6;
  }
}

</style>
