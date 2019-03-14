export default {
  removeInfoForm (state, payload) {
    state[payload.infoFormType].data.splice(payload.index, 1)
  },
  addInfoForm (state, payload) {
    state[payload].data.push(
      {
        instituteName: "",
        positionTitle: "",
        dates: [],
        descriptions: ['']
      }
    )
  },
  addDescription (state, payload) {
    state[payload.infoFormType].data[payload.formPosition].descriptions.push('')
  }
}