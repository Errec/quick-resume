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

    v-btn(
    flat
    color='primary'
    v-if="numberOfDescriptions > 1"
    @click='deleteDescription') Del

    v-btn(
    flat
    color='primary'
    v-if="(position === numberOfDescriptions - 1) && (numberOfDescriptions < maxDescriptions)"
    @click='addDescription') Add
</template>

<script>
  export default {
    name: 'work-description',
    props: ['descriptionText', 'position', 'numberOfDescriptions'],
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
        console.log(this.position)
        if (this.numberOfDescriptions === 1) {
          return
        } else {
          console.log('del -1')
        }
      },
      addDescription () {
        console.log('form number:', this.numberOfDescriptions);
        console.log(this.position)
        if (this.numberOfDescriptions === this.maxDescriptions) {
          return
        } else {
          console.log('add +1')
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