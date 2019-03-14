<template lang="pug">
  div.work-form
    v-form
    v-card.mb-5.px-4(color="grey lighten-4")
      v-btn.right(@click="removeForm" v-if=("totalForms > 1")) Delete
      v-btn.right(@click="addForm" v-if=("totalForms <= 3 && formIndex === totalForms - 1")) Add
      v-card-title(prunart-title)
        div
          span.headline {{infos.title}}
          span.ml-2.right {{formIndex + 1}}/3

      v-text-field(
        outline
        v-validate="'required|max:20'"
        :error-messages="errors.collect(infos.labels.instituteLabel)"
        :data-vv-name="infos.labels.instituteLabel"
        :counter="20"
        v-model="infos.data.instituteName"
        :label="infos.labels.instituteLabel"
        required)

      v-text-field(
        outline
        v-validate="'required|max:20'"
        v-model="infos.data.positionTitle"
        :counter="20"
        :error-messages="errors.collect(infos.labels.positionTitleLabel)"
        :label="infos.labels.positionTitleLabel"
        :data-vv-name="infos.labels.positionTitleLabel"
        required)

      v-menu(
        ref='menu'
        :close-on-content-click='false'
        v-model='menu'
        :nudge-right='40'
        :return-value.sync='infos.dates'
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
          v-model='currentDates'
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
          v-model='currentDates'
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
            @click='$refs.menu.save(currentDates)') OK

      v-divider.mb-4(color="grey")

      description(
        v-for="(description, index) in infos.data.descriptions" 
        ref="description"
        :descriptionText='description'
        :numberOfDescriptions='totalDescriptions'
        :descriptionPosition='index'
        :formPosition='formIndex'
        :infoFormType='infos.labels.formName')

</template>

<script>
import Description from './Description'
export default {
  name: "info-forms",
  props: ['formData', 'formLabels', 'formIndex', 'totalForms'],
  components: {
    Description
  },
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      totalDescriptions: null, 
      infos: {
        labels: {
          formName: '',
          title: '',
          instituteLabel: '',
          positionTitleLabel: '',
          descriptionLabel: ''
        },
        data: [{
          instituteName: '',
          positionTitle: '',
          dates: [],
          descriptions: []
        }]
      },
        currentDates: '',
        menu: false,
        dateErr: 'Date'
    }
  },
  beforeMount () {
    this.infos.data = this.formData
    this.infos.labels = this.formLabels
    this.currentDates = this.formData.dates
    this.totalDescriptions = this.formData.descriptions.length
  },
  methods: {
    submit () {
      this.$validator.validateAll()
      this.$refs.description.forEach( (child) => {
        child.submit()
      } )
    },
    removeForm () {
      this.$validator.reset() //TODO
      const payload = {
        infoFormType: this.infos.labels.formName,
        index: this.formIndex
      }
      this.$store.dispatch('removeInfoForm', payload)
    },
    addForm () {
      const payload = this.infos.labels.formName      
      this.$store.dispatch('addInfoForm', payload)
    }
  },
  watch: {
    currentDates () {
      if (this.currentDates.length > 2) {
        this.$nextTick(() => this.currentDates.pop())
      }

      if (this.currentDates.length === 2) {
        this.currentDates[0] > this.currentDates[1] ? this.currentDates.pop() : ''
      }
    }
  }
}
</script>