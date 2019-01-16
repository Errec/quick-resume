<template lang="pug">
  div.address-factory
    v-form
      v-autocomplete(
        v-model="country"
        v-validate="'required|country'"
        :error-messages="errors.collect(countryErr)"
        :data-vv-name="countryErr"
        :items="['Brazil','United States','Ireland','Uruguay','Netherlands','France']"
        label="Country"
        persistent-hint
        required
      )
      v-autocomplete(
        v-model="city"
        v-validate="'required|city'"
        :error-messages="errors.collect(cityErr)"
        :data-vv-name="cityErr"
        :items="['Belo Horizonte','Orlando','Dublin','Montevideo','Amsterdam','Paris']"
        label="City"
        persistent-hint
        required
      )
      v-text-field(
        v-validate="'required|address'"
        v-model="addressLine"
        :error-messages="errors.collect(addressLineErr)"
        label="Address Line"
        :data-vv-name="addressLineErr"
        required
      )
      //- v-btn(@click="submit") submit
      v-btn(to="contact-factory") back
      v-btn(to="summary-factory") next
      v-btn.right(@click="clear") clear
</template>

<script>
export default {
  name: "address-factory",
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      country: '',
      countryErr: 'Country',
      city: '',
      cityErr: 'City',
      addressLine: '',
      addressLineErr: 'Address Line'
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.country = ''
      this.city = ''
      this.adressLine = ''
      this.$validator.reset()
    }
  }
}
</script>