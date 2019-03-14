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

    v-btn.work-description__delete(
    flat
    color='primary'
    @click='deleteDescription') Del

    v-btn.work-description__add(
    flat
    color='primary'
    @click='addDescription') Add
</template>

<script>
  export default {
    name: 'work-description',
    props: ['descriptionText', 'descriptionPosition', 'numberOfDescriptions', 'formPosition', 'infoFormType'],
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
      },
      deleteDescription () {
        console.log('form number:', this.numberOfDescriptions);
        console.log(this.descriptionPosition)
        if (this.numberOfDescriptions === 1) {
          return
        } else {
          console.log('del -1')
        }
      },
      addDescription () {
        console.log('description number:', this.numberOfDescriptions);
        console.log('form number:', this.formPosition);
        console.log(this.descriptionPosition)
        if (this.numberOfDescriptions === this.maxDescriptions) {
          return
        } else {
          console.log('add +1')
          const payload = {
            formPosition : this.formPosition,
            infoFormType : this.infoFormType
          }
          this.$store.dispatch('addDescription',payload)
        }
      }
    },
    computed: {
      maxDescriptions () {
        return this.$store.getters.getMaxDescriptions
      }
    }
  }
</script>

<style lang="sass">
  .work-description
    border: solid #3F51B5 1px
    margin-bottom: 2px
  .work-description__delete
    background-color: pink
  .work-description__add
    background-color: aquamarine
</style>
