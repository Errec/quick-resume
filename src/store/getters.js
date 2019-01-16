export default {
  getPersonalInfo(state) {
    const personalInfo = {
      name: state.name,
      address: state.address,
      phone: state.phone,
      email: state.email
    }
    return personalInfo
  }
}