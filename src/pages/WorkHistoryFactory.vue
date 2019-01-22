<template lang="pug">
  div.work-history-factory
    h1 Work History
    work-form(v-for="(company, index) in companies" :jobInfo='company')
    //- v-btn(@click="submit") submit
    v-btn(to="skill-factory") back
    v-btn(to="education-factory") next
</template>

<script>
import WorkForm from '@/components/WorkForm'
export default {
  name: "work-history-factory",
  data() {
    return {
      companies: []
    }
  },
  components: {
    WorkForm
  },
  mounted () {
    this.companies = this.$store.getters.getWorkHistory
  },
}
</script>