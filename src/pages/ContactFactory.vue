<template lang="pug">
  div.contact-factory
    v-form
      v-text-field(
        v-validate="'required|max:10'"
        v-model="firstName"
        :counter="10"
        :error-messages="errors.collect(firstNameErr)"
        label="First Name"
        :data-vv-name="firstNameErr"
        required
      )
      v-text-field(
        v-validate="'required|max:10'"
        v-model="lastName"
        :counter="10"
        :error-messages="errors.collect(lastNameErr)"
        label="Last Name"
        :data-vv-name="lastNameErr"
        required
      )
      v-text-field(
        v-validate="'required|email'"
        v-model="email"
        :error-messages="errors.collect(emailErr)"
        label="E-mail"
        :data-vv-name="emailErr"
        required
      )
      v-text-field(
        label="Phone"
        type="text"
        v-model="phoneNumber"

      )
      

      //- v-btn(@click="submit") next
      v-btn(to="address-factory") next
      v-btn.right(@click="clear") clear
</template>

<script>
export default {
  name: "contact-factory",
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      firstName: '',
      firstNameErr: 'First Name',
      lastName: '',
      lastNameErr: 'Last Name',
      email: '',
      emailErr: 'E-mail',
      phoneNumber: ''
    }
  },
  mounted() {
    const personalInfo = this.$store.getters.getContactInfo
    
    this.firstName = personalInfo.firstName
    this.lastName = personalInfo.lastName
    this.email = personalInfo.email
    this.phoneNumber = personalInfo.phoneNumber
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.$validator.reset()
    }
  }
}
</script>