import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {
      MAX_DESCRIPTIONS: 4
    },
    id: "",

    name: {
      firstName: "Raniro",
      lastName: "Coelho"
    },

    phoneNumber: "+55-31-994079886",
    email: "ranirocoelho@gmail.com",
    website: "wwww.errec.surge.sh",
    address: {
      addressLine: "615 Aimores,CEP 30140-070",
      country: "Brazil",
      state: "MG",
      city: "Belo Horizonte"
    },

    summary:
      "Prolific, web-based Front-end developer working on new and live micro-sites, landing pages, and templates. Executed and contributed to full-stack web development projects, with an emphasis on front-end features, browser manipulation, and cross-browser compatibility. Great English communication skills.",

    keySkills: [
      "Javascript",
      "HTML/PUG",
      "CSS/SASS",
      "Git",
      "Vue/React",
      "Gulp/Webpack",
      "Photoshop/Illustrator",
      "Linux/CLI"
    ],

    workHistory: {
      labels: {
        formName: "workHistory",
        title: "Job Experience",
        instituteLabel: "Company Name",
        positionTitleLabel: "Job Title",
        descriptionLabel: "Job Description"
      },
      data: [
        {
          instituteName: "1Freelancer-Brazil/Ireland",
          positionTitle: "Front-end Developer",
          dates: ["2018-01"],
          descriptions: [
            "za11Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
            "za12Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
            "",
            "za14Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js."
          ]
        },
        {
          instituteName: "1Freelancer-Brazil/Ireland",
          positionTitle: "Front-end Developer",
          dates: ["2018-01"],
          descriptions: [
            "za11Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
            "za13Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
            "za14Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js."
          ]
        }
      ]
    },

    education: {
      labels: {
        formName: "education",
        title: "Education",
        instituteLabel: "Institution Name",
        positionTitleLabel: "Graduation Degree",
        descriptionLabel: "Activities Description"
      },
      data: [
        {
          instituteName: "Federal University of Minas Gerais",
          positionTitle: "Bachelors of Mechanical Engineering",
          dates: ["2002-01", "2004-12"],
          descriptions: [
            "Currently studying the Front-end Developer path on Europe's largest online education platform."
          ]
        }
      ]
    },

    additionalExperience:
      "I work as a photographer in my spare time. Also, as a lover of the seventh art, I'm always going to the movies and film festivals."
  },

  actions: actions,
  mutations: mutations,
  getters: getters
});