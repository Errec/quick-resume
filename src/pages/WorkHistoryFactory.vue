<template lang="pug">
  div.work-history-factory
    v-form(v-for="(company, index) in companies")
      v-card.mb-5.px-4(color="grey lighten-4")
        v-card-title(prunart-title)
          div
            span.headline Job Experience
            span.ml-2.right {{index + 1}}/3
        v-text-field(
          outline
          v-validate="'required|max:20'"
          :error-messages="errors.collect(company.companyNameErr)"
          :data-vv-name="company.companyNameErr"
          :counter="20"
          v-model="company.companyName"
          label="Company Name"
          required)

        v-text-field(
          outline
          v-validate="'required|max:20'"
          v-model="company.jobTitle"
          :counter="20"
          :error-messages="errors.collect(company.jobTitleErr)"
          label="Job Title"
          :data-vv-name="company.jobTitleErr"
          required)

        v-menu(
          ref='company.menu'
          :close-on-content-click='false'
          v-model='company.menu'
          :nudge-right='40'
          :return-value.sync='company.dates'
          lazy
          transition='scale-transition'
          offset-y
          full-width
          min-width='290px')
          
          v-combobox(
            v-validate="'required'"
            :error-messages="errors.collect(company.dateErr)"
            :data-vv-name="company.dateErr"
            slot='activator'
            v-model='company.dates'
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
            v-model='company.dates'
            multiple
            no-title
            scrollable
            type="month")
            
            v-spacer
            
            v-btn(
              flat
              color='primary'
              @click='company.menu = false') Cancel
            v-btn(
              flat
              color='primary'
              @click='$refs.menu.save(company.dates)') OK

        v-divider.mb-4(color="grey")

        v-textarea(
          v-for=("(description, index) in company.descriptions")
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

    v-btn(@click="submit") submit
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
      companies: [{
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
    }]
    }
  },
  mounted () {
    this.companies = this.$store.getters.getWorkHistory
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
    companies (company) {
      if (company.dates.length > 2) {
        this.$nextTick(() => this.dates.pop())
      }
    }
  }
}
</script>