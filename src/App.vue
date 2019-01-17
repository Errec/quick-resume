<template lang="pug">
  v-app.px-5.pt-3#app
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
</style>
