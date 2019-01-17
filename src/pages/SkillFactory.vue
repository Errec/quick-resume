<template lang="pug">
  div.skill-factory
    h1 Key Skills
    v-form
      v-text-field(
        v-model="skill_1"
        solo
        label="Skill 1"
        clearable
      )
      v-text-field(
        v-model="skill_2"
        solo
        label="Skill 2"
        clearable
      )
      v-text-field(
        v-model="skill_3"
        solo
        label="Skill 3"
        clearable
      )
      v-text-field(
        v-model="skill_4"
        solo
        label="Skill 4"
        clearable
      )
      v-text-field(
        v-model="skill_5"
        solo
        label="Skill 5"
        clearable
      )
      v-text-field(
        v-model="skill_6"
        solo
        label="Skill 6"
        clearable
    )
      v-text-field(
        v-model="skill_7"
        solo
        label="Skill 7"
        clearable
    )
      v-text-field(
        v-model="skill_8"
        solo
        label="Skill 8"
        clearable
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
      skill_1: '',
      skill_2: '',
      skill_3: '',
      skill_4: '',
      skill_5: '',
      skill_6: '',
      skill_7: '',
      skill_8: ''
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.skill_1 = '',
      this.skill_2 = '',
      this.skill_3 = '',
      this.skill_4 = '',
      this.skill_5 = '',
      this.skill_6 = '',
      this.skill_7 = '',
      this.skill_8 = '',
      this.$validator.reset()
    }
  }
}
</script>