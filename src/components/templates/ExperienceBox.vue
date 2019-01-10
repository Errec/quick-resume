<template lang="pug">
  div.experience-box
    div.experience-box__infos
      p.experience-box__company {{experience.company}}
      p.experience-box__date {{experience.date}}
      p.experience-box__position {{experience.position}}
    ul.experience-box__description-grid
      li(v-for="description in experience.descriptionList").experience-box__description-item {{description}}

</template>

<script>
  export default {
    props: ['experience']
  }
</script>

<style lang="sass" scoped>
  $resumeDark: #545454
  .experience-box__company
    font-weight: bold
  .experience-box
    width: 100%
    display: flex
    flex-direction: row
    padding: 0.4cm 0
    border-bottom: solid $resumeDark 1px
    &:last-child
      padding-bottom: 0
      border-bottom: none
  .experience-box__infos
    flex: 3
  .experience-box__description-grid
    flex: 7
</style>
