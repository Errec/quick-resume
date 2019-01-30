<template lang="pug">
  div.education-factory
    h1 Education
    info-form(
      ref="infoForm"
      v-for="(insitution, index) in institutions.data"
      :formData='insitution'
      :formLabels='institutions.labels'
      :index='index')
  
    v-btn(@click="submit") submit
    v-btn(to="work-history-factory") back
    v-btn(to="additional-experience-factory") next
</template>

<script>
import InfoForm from '@/components/InfoForm'
export default {
  name: "education-factory",
  components: {
    InfoForm
  },
  data () {
    return {
      institutions: []
    }
  },
  methods: {
    submit () {
      this.$refs.infoForm.forEach( (child) => {
        child.submit()
      } )
    }
  },
  mounted () {
    this.institutions = this.$store.getters.getEducation
  }
}
</script>
