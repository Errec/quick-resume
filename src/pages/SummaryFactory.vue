<template lang="pug">
  div.summary-factory
    v-textarea(
      outline
      v-validate="'required|max:200'"
      :error-messages="errors.collect(summaryErr)"
      :data-vv-name="summaryErr"
      required
      name="Summary"
      label="Write about yourself"
      v-model='summary'
      persistent-hint
      no-resize
      :counter="200"
    )
    //- v-btn(@click="submit") submit
    v-btn(to="address-factory") back
    v-btn(to="skill-factory") next
    v-btn.right(@click="clear") clear
</template>

<script>
export default {
  name: "summary-factory",
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      summary: '',
      summaryErr: 'Summary'
    }
  },
  mounted() {
    this.summary  = this.$store.getters.getSummary
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.summary = ''
      this.$validator.reset()
    }
  }
}
</script>