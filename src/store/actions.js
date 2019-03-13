export default {
  removeInfoForm ({commit, state}, payload) {
    alert('remove form?')
    if (state[payload.infoFormType].data.length > 1) {
      commit("removeInfoForm", payload)
    } else {
      return
    }
  },
  addInfoForm ({commit, state}, payload) {
    if (state[payload].data.length < 3) {
      commit("addInfoForm", payload)
    } else {
      return
    }
  }
}