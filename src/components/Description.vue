<template lang="pug">
  div.work-description
    v-textarea(
      no-resize
      v-validate="'max:100'"
      :error-messages="errors.collect(descriptionLabel)"
      :data-vv-name="descriptionLabel"
      :counter="100"
      v-model="description"
      solo
      :label="descriptionLabel"
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
    $_veeValidate: {
      validator: 'new'
    },
    data() {
      return {
        description: '',
        descriptionLabel: 'Activity Description'
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
      }
    },
  }
</script>