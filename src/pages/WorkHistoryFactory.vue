<template lang="pug">
  div.work-history-factory
    v-form
      v-card.mb-5.px-4(color="grey lighten-4")
        v-card-title(prunart-title)
          div
            span.headline Job Experience
            span.ml-2.right 1/3
        v-text-field(
          outline
          v-validate="'required|max:20'"
          :error-messages="errors.collect(companyNameErr)"
          :data-vv-name="companyNameErr"
          :counter="20"
          v-model="companyName"
          label="Company Name"
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
            v-validate="'required'"
            :error-messages="errors.collect(dateErr)"
            :data-vv-name="dateErr"
            slot='activator'
            v-model='dates'
            multiple
            outline
            chips
            small-chips
            label='Start and End dates'
            prepend-icon='event'
            readonly
            required
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

        v-divider.mb-4(color="grey")

        v-textarea(
          persist-hint
          no-resize
          v-validate="'max:100'"
          :error-messages="errors.collect(descriptionErr1)"
          :data-vv-name="descriptionErr1"
          :counter="100"
          v-model="description_1"
          solo
          label="Description 1"
          clearable
        )

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
      dateErr: 'Date',
      menu: false,
      description_1: '',
      descriptionErr1: 'Description 1'
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