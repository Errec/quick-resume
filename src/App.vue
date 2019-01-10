<template lang="pug">
  div#app
    router-view
</template>

<script>
</script>

<style lang="sass">
  @import 'assets/styles/base/normalize.scss'
  @import 'assets/styles/base/reset.scss'

  body, html
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  #app
    position: relative
    width: 100%;
</style>
