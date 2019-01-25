<template lang="pug">
  div.work-form
    v-form
    v-card.mb-5.px-4(color="grey lighten-4")
      v-btn.right(@click="clear") clear
      v-card-title(prunart-title)
        div
          span.headline Job Experience
          //- span.ml-2.right {{index + 1}}/3
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
      work-description(v-for="(description, index) in jobInfo.descriptions" :descriptionText='description')

</template>

<script>
import WorkDescription from './WorkDescription'
export default {
  name: "work-form",
  props: ['jobInfo'],
  components: {
    WorkDescription
  },
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      companyName: '',
      jobTitle: '',
      jobTitleErr: 'Job Title',
      dates: [],
      menu: false,
      companyNameErr: 'Company Name',
      dateErr: 'Date',
      descriptions: []
    }
  },
  mounted () {
    this.companyName = this.jobInfo.companyName
    this.jobTitle = this.jobInfo.jobTitle
    this.dates = this.jobInfo.dates
    this.descriptions = this.jobInfo.descriptions
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
      if (this.dates.length > 2) {
        this.$nextTick(() => this.dates.pop())
      }
    }
  }
}
</script>