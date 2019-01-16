<template lang="pug">
  v-app.pa-5#app
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
