<template lang="pug">
  v-toolbar.app-header.mb-4(
    color="indigo"
    dark)
    router-link(to="/")
      h1 A4 Resume
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="sass">
  .app-header
    a
     text-decoration: none
     color: white
</style>
