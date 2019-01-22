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

      v-textarea(
        v-for=("(description, index) in descriptions")
        no-resize
        v-validate="'max:100'"
        :error-messages="errors.collect(description.descriptionErr)"
        :data-vv-name="description.descriptionErr"
        :counter="100"
        v-model="description.text"
        solo
        label="Job description"
        clearable
      )

</template>

<script>
export default {
  name: "work-form",
  props: ['jobInfo'],
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
      descriptions: [{
        text: '',
        descriptionErr: 'Description'
      }],
      companyNameErr: 'Company Name',
      dateErr: 'Date'
    }
  },
  mounted () {
    this.companyName = this.jobInfo.companyName
    this.jobTitle = this.jobInfo.jobTitle
    this.dates = this.jobInfo.dates
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