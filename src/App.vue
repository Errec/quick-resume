<template lang="pug">
  div#app
    app-header
    router-view
</template>

<script>
  import AppHeader from '@/components/AppHeader'
  export default {
    name: 'home',
    components: {
      AppHeader
    }
  }
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
