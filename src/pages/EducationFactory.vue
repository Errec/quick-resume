<template lang="pug">
  div.education-factory
    v-form
      v-card.mb-5.px-4(color="grey lighten-4")
        v-card-title(prunart-title)
          div
            span.headline Education
            span.ml-2.right 1/3
        v-text-field(
          outline
          v-validate="'required|max:20'"
          :error-messages="errors.collect(institutionNameErr)"
          :data-vv-name="institutionNameErr"
          :counter="20"
          v-model="institutionName"
          label="Instituion Name"
          required)

        v-text-field(
          outline
          v-validate="'required|max:20'"
          v-model="gradDegree"
          :counter="20"
          :error-messages="errors.collect(gradDegreeErr)"
          label="Graduation Degree"
          :data-vv-name="gradDegreeErr"
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
          v-validate="'max:100|required'"
          :error-messages="errors.collect(descriptionErr)"
          :data-vv-name="descriptionErr"
          :counter="100"
          v-model="description"
          solo
          label="Description"
          required
          clearable
        )

    //- v-btn(@click="submit") submit
    v-btn(to="work-history-factory") back
    v-btn(to="additional-experience-factory") next
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
      institutionName: '',
      gradDegree: '',
      institutionNameErr: 'Instituion Name',
      gradDegreeErr: 'Job Title',
      dates: [],
      dateErr: 'Date',
      menu: false,
      description: '',
      descriptionErr: 'Description'
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.institutionName = ''
      this.gradDegree = ''
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
