import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    workHistory: [
      {
        title: "Job Experience",
        instituteName: "1Freelancer-Brazil/Ireland",
        instituteLabel: "Company Name",
        positionTitle: "Front-end Developer",
        positionTitleLabel: "Job Title",
        dates: ["Feb.2012", "Present"],
        descriptions: [
          "za11Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "za12Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "za13Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "za14Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js."
        ]
      },
      {
        title: "Job Experience",
        instituteName: "2Freelancer-Brazil/Ireland",
        instituteLabel: "Company Name",
        positionTitle: "Front-end Developer",
        positionTitleLabel: "Job Title",
        dates: ["Feb.2012", "Present"],
        descriptionLabel: 'Job Description',
        descriptions: [
          "xa11Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "xa12Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "xa13Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "xa14Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js."
        ]
      },
      {
        title: "Job Experience",
        instituteName: "3Freelancer-Brazil/Ireland",
        instituteLabel: "Company Name",
        positionTitle: "Front-end Developer",
        positionTitleLabel: "Job Title",
        dates: ["Feb.2012", "Present"],
        descriptions: [
          "ca11Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "ca12Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "ca13Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.",
          "ca14Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js."
        ]
      }
    ],
    education: [
      {
        institutionName: "Federal University of Minas Gerais",
        gradDegree: "Bachelors of Mechanical Engineering",
        startDate: "Feb.2002",
        endDate: "Feb.2003",
        description:
          "Currently studying the Front-end Developer path on Europe's largest online education platform."
      },
      {
        institutionName: "Federal University of Minas Gerais",
        gradDegree: "Bachelors of Mechanical Engineering",
        startDate: "Feb.2002",
        endDate: "Feb.2003",
        description:
          "Currently studying the Front-end Developer path on Europe's largest online education platform."
      },
      {
        institutionName: "Federal University of Minas Gerais",
        gradDegree: "Bachelors of Mechanical Engineering",
        startDate: "Feb.2002",
        endDate: "Feb.2003",
        description:
          "Currently studying the Front-end Developer path on Europe's largest online education platform."
      }
    ],
    additionalExperience:
      "I work as a photographer in my spare time. Also, as a lover of the seventh art, I'm always going to the movies and film festivals."
  },
  actions: actions,
  mutations: mutations,
  getters: getters
});