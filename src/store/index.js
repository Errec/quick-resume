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
      firstName: 'Raniro',
      lastName: 'Coelho'
    },
    phoneNumber: '+55-31-994079886',
    email: 'ranirocoelho@gmail.com',
    website: 'wwww.errec.surge.sh',
    address: {
      addressLine: '615 Aimores,CEP 30140-070',
      country: 'Brazil',
      state: 'MG',
      city: 'Belo Horizonte'
    },
    summary: 'Prolific, web-based Front-end developer working on new and live micro-sites, landing pages, and templates. Executed and contributed to full-stack web development projects, with an emphasis on front-end features, browser manipulation, and cross-browser compatibility. Great English communication skills.',
    keySkills: ['Javascript', 'HTML/PUG', 'CSS/SASS', 'Git', 'Vue/React', 'Gulp/Webpack', 'Photoshop/Illustrator', 'Linux/CLI'],
    workHistory: [{
      companyName: '1Freelancer-Brazil/Ireland',
      jobTitle: 'Front-end Developer',
      dates: ['Feb.2015', 'Present'],
      descriptions: [{
        text: 'a11Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'a12Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'a13Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'a14Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }],
      companyNameErr: 'Company Name',
      jobTitleErr: 'Job Title',
      dateErr: 'Date',
      menu: false
    }, {
      companyName: '2Freelancer-Brazil/Ireland',
      jobTitle: 'Front-end Developer',
      dates: ['Feb.2015', 'Present'],
      descriptions: [{
        text: 'b11Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'b12Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'b13Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'b14Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }],
      companyNameErr: 'Company Name',
      jobTitleErr: 'Job Title',
      dateErr: 'Date',
      menu: false
    }, {
      companyName: '3Freelancer-Brazil/Ireland',
      jobTitle: 'Front-end Developer',
      dates: ['Feb.2015', 'Present'],
      descriptions: [{
        text: 'c11Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'c12Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'c13Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }, {
        text: 'c14Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.',
        descriptionErr: 'Description'
      }],
      companyNameErr: 'Company Name',
      jobTitleErr: 'Job Title',
      dateErr: 'Date',
      menu: false
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