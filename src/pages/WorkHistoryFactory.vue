<template lang="pug">
  div.work-history-factory
    h1 Work History
    info-form(v-for="(company, index) in companies" :formInfos='company' :index='index')
    //- v-btn(@click="submit") submit
    v-btn(to="skill-factory") back
    v-btn(to="education-factory") next
</template>

<script>
import InfoForm from '@/components/InfoForm'
export default {
  name: "work-history-factory",
  data() {
    return {
      companies: []
    }
  },
  components: {
    InfoForm
  },
  mounted () {
    this.companies = this.$store.getters.getWorkHistory
  },
}
</script>