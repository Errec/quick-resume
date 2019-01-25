<template lang="pug">
  div.work-description
    v-textarea(
      no-resize
      v-validate="'max:100'"
      :error-messages="errors.collect(descriptionErr)"
      :data-vv-name="descriptionErr"
      :counter="100"
      v-model="description"
      solo
      label="Job description"
      clearable
    )
</template>

<script>
  export default {
    name: 'work-description',
    props: ['descriptionText'],
    mounted () {
      this.description = this.descriptionText
    },
    data() {
      return {
        description: '',
        descriptionErr: 'Job Description'
      }
    }
  }
</script>