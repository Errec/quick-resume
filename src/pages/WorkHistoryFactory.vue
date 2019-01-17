<template lang="pug">
  div.work-history-factory
    v-form
      v-text-field(
        outline
        v-validate="'required|max:20'"
        v-model="companyName"
        :counter="20"
        :error-messages="errors.collect(companyNameErr)"
        label="Company Name"
        :data-vv-name="companyNameErr"
        required)

      v-text-field(
        outline
        v-validate="'required|max:20'"
        v-model="jobTitle"
        :counter="20"
        :error-messages="errors.collect(jobTitleErr)"
        label="Job Title"
        :data-vv-name="jobTitleErr"
        required)

      v-menu(
        ref='menu'
        :close-on-content-click='false'
        v-model='menu'
        :nudge-right='40'
        :return-value.sync='dates'
        lazy
        transition='scale-transition'
        offset-y
        full-width
        min-width='290px')
        
        v-combobox(
          slot='activator'
          v-model='dates'
          multiple
          chips
          small-chips
          label='Start and End dates'
          prepend-icon='event'
          readonly
          clearable)
        
        v-date-picker(
          v-model='dates'
          multiple
          no-title
          scrollable
          type="month")
          
          v-spacer
          
          v-btn(
            flat
            color='primary'
            @click='menu = false') Cancel
          
          v-btn(
            flat
            color='primary'
            @click='$refs.menu.save(dates)') OK

    //- v-btn(@click="submit") submit
    v-btn(to="skill-factory") back
    v-btn(to="education-factory") next
    v-btn.right(@click="clear") clear
</template>

<script>
export default {
  name: "work-history-factory",
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      companyName: '',
      jobTitle: '',
      companyNameErr: 'Company Name',
      jobTitleErr: 'Job Title',
      dates: [],
      menu: false
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.companyName = ''
      this.jobTitle = ''
      this.$validator.reset()
    }
  },
  watch: {
    dates (val) {
      if (val.length > 2) {
        this.$nextTick(() => this.dates.pop())
      }
    }
  }
}
</script>