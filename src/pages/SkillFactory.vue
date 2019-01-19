<template lang="pug">
  div.skill-factory
    h1 Key Skills
    v-form
      v-text-field(
        v-for="(skill, index) in keySkills"
        v-model="keySkills[index]"
        solo
        :label='labelText + (index + 1)'
        clearable
        persistent-hint
      )

    //- v-btn(@click="submit") submit
    v-btn(to="summary-factory") back
    v-btn(to="work-history-factory") next
    v-btn.right(@click="clear") clear
</template>

<script>
export default {
  name: 'skill-factory',
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      labelText: 'Skill ',
      keySkills: []
    }
  },
  mounted() {
    this.keySkills  = this.$store.getters.getKeySkills
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.keySkills = this.keySkills.map(x => '');
      this.$validator.reset()
    }
  }
}
</script>