export default {
  getContactInfo(state) {
    const contactInfo = {
      firstName: state.name.firstName,
      lastName: state.name.lastName,
      phoneNumber: state.phoneNumber,
      email: state.email,
      website: state.website
    }
    return contactInfo
  },
  getAddressInfo(state) {
    const addressInfo = {
      country: state.address.country,
      city: state.address.city,
      state: state.address.state,
      addressLine: state.address.addressLine
    }
    return addressInfo
  },
  getSummary(state) {
    return state.summary
  },
  getMaxDescriptions(state) {
    return state.config.MAX_DESCRIPTIONS
  },
  getKeySkills(state) {
    return state.keySkills
  },
  getWorkHistory(state) {
    return state.workHistory
  },
  getEducation(state) {
    return state.education
  },
  getAdditionalExperience(state) {
    return state.additionalExperience
  }
}