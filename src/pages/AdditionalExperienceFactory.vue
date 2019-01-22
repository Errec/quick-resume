<template lang="pug">
  div.additional-experience-factory
    v-textarea(
      outline
      solo
      v-validate="'max:200'"
      :error-messages="errors.collect(additionalExperienceErr)"
      :data-vv-name="additionalExperienceErr"
      name="Additional Experience"
      label="Write a little bit about other experiences, hobbies, your Pokemon colletcion..."
      v-model='additionalExperience'
      persistent-hint
      no-resize
      :counter="200"
    )
    //- v-btn(@click="submit") submit
    v-btn(to="education-factory") back
    v-btn(to="my-a4-resume" disabled) finish
    v-btn.right(@click="clear") clear
</template>

<script>
export default {
  name: "additional-experience-factory",
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      additionalExperience: '',
      additionalExperienceErr: 'Additional Experience'
    }
  },
  mounted() {
    this.additionalExperience  = this.$store.getters.getAdditionalExperience
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.additionalExperience = ''
      this.$validator.reset()
    }
  }
}
</script>