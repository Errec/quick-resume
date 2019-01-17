<template lang="pug">
  v-app#app
    app-header
    router-view.px-5.pb-3
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
