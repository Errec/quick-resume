export default {
  removeInfoForm ({commit, state}, payload) {
    alert('remove form?')
    if (state[payload.infoFormType].data.length > 1) {
      commit("removeInfoForm", payload)
    } else {
      alert('Min data 1')
      return
    }
  }
}