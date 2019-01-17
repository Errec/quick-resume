import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    name: {
      first: 'Raniro',
      last: 'Coelho'
    },
    address: {
      city: 'Belo Horizonte',
      state: 'MG',
      street: 'Aimores',
      number: '615',
      complement: '1402',
      country: 'Brazil',
      zip: '30140-070'
    },
    phone: '+55-31-994079886',
    email: 'ranirocoelho@gmail.com',
    website: 'wwww.errec.surge.sh',
    summary: 'Prolific, web-based Front-end developer working on new and live micro-sites, landing pages, and templates. Executed and contributed to full-stack web development projects, with an emphasis on front-end features, browser manipulation, and cross-browser compatibility. Great English communication skills.',
    keySkills: [{
      skill_1: 'Javascript'
    }, {
      skill_2: 'HTML/PUG'
    }, {
      skill_3: 'CSS/SASS'
    }, {
      skill_4: 'Git'
    }, {
      skill_5: 'Vue/React'
    }, {
      skill_6: 'Gulp/Webpack'
    }, {
      skill_7: 'Photoshop/Illustrator'
    }, {
      skill_8: 'Linux/CLI'
    }],
    workStory: [{
      companyName: 'Freelancer-Brazil/Ireland',
      jobTitle: 'Front-end Developer',
      startDate: 'Feb.2015',
      endDate: 'Present',
      descriptions: [{
        description_1: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_2: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_3: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_4: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }]
    }, {
      companyName: 'Freelancer-Brazil/Ireland',
      jobTitle: 'Front-end Developer',
      startDate: 'Feb.2015',
      endDate: 'Present',
      descriptions: [{
        description_1: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_2: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_3: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_4: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }]
    }, {
      companyName: 'Freelancer-Brazil/Ireland',
      jobTitle: 'Front-end Developer',
      startDate: 'Feb.2015',
      endDate: 'Present',
      descriptions: [{
        description_1: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_2: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_3: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }, {
        description_4: 'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
      }]
    }],
    education: [{
      institutionName: 'Federal University of Minas Gerais',
      gradDegree: 'Bachelors of Mechanical Engineering',
      startDate: 'Feb.2002',
      endDate: 'Feb.2003',
      description: "Currently studying the Front-end Developer path on Europe's largest online education platform."
    }, {
      institutionName: 'Federal University of Minas Gerais',
      gradDegree: 'Bachelors of Mechanical Engineering',
      startDate: 'Feb.2002',
      endDate: 'Feb.2003',
      description: "Currently studying the Front-end Developer path on Europe's largest online education platform."
    }, {
      institutionName: 'Federal University of Minas Gerais',
      gradDegree: 'Bachelors of Mechanical Engineering',
      startDate: 'Feb.2002',
      endDate: 'Feb.2003',
      description: "Currently studying the Front-end Developer path on Europe's largest online education platform."

    }],
    additionalExperience: "I work as a photographer in my spare time. Also, as a lover of the seventh art, I'm always going to the movies and film festivals."
  },
  actions: actions,
  mutations: mutations,
  getters: getters
})