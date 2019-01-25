<template lang="pug">
  div.work-form
    v-form
    v-card.mb-5.px-4(color="grey lighten-4")
      v-btn.right(@click="clear") clear
      v-card-title(prunart-title)
        div
          span.headline {{infos.title}}
          span.ml-2.right {{index + 1}}/3
      v-text-field(
        outline
        v-validate="'required|max:20'"
        :error-messages="errors.collect(infos.instituteLabel)"
        :data-vv-name="infos.instituteLabel"
        :counter="20"
        v-model="infos.instituteName"
        :label="infos.instituteLabel"
        required)

      v-text-field(
        outline
        v-validate="'required|max:20'"
        v-model="infos.positionTitle"
        :counter="20"
        :error-messages="errors.collect(infos.positionTitleLabel)"
        :label="infos.positionTitleLabel"
        :data-vv-name="infos.positionTitleLabel"
        required)

      v-menu(
        ref='infos.menu'
        :close-on-content-click='false'
        v-model='infos.menu'
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
          v-model='infos.dates'
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
          v-model='infos.dates'
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
      description(v-for="(description, index) in formInfos.descriptions" :descriptionText='description')

</template>

<script>
import Description from './Description'
export default {
  name: "work-form",
  props: ['formInfos', 'index'],
  components: {
    Description
  },
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return { 
      infos: {
        instituteName: '',
        positionTitle: '',
        dates: [],
        descriptions: [],
        instituteLabel: '',
        positionTitleLabel: ''
      },
        menu: false,
        dateErr: 'Date'
    }
  },
  beforeMount () {
    this.infos = this.formInfos
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.$validator.reset() //TODO
    }
  },
  watch: {
    dates (val) {
      if (this.infos.dates.length > 2) {
        this.$nextTick(() => this.infos.dates.pop())
      }
    }
  }
}
</script>