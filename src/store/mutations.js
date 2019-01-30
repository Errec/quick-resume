export default {
  removeInfoForm (state, payload) {
    if (state[payload.infoFormType].data.length > 1) {
      state[payload.infoFormType].data.splice(payload.index, 1);
    } else {
      alert('Min items = 1')
    }
  }
}