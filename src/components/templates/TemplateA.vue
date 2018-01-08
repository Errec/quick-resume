<template lang="pug">
  div.template
    header.template__header
      h1.template__name {{name.first}} {{name.last}}
      div.template__info
        div.template__address
          p {{address.number}} {{address.street}}, {{address.city}}/{{address.state}}, {{address.country}} {{address.zip}}
        div.template__contact
          p {{contact.phone}} ● {{contact.email}}
    main.template__main
      section.template__website
        p {{website}}
      section.template__summary
        div.template-title
          h2 professional summary
        div.template__summary-content
          p Prolific, web-based Front end developer working on new and existing micro-sites, landing pages, and templates. Executed and contributed to full-stack web development projects, with an emphasis on front end features, browser manipulation, and cross-browser compatibility.
      section.template__skills
        div.template-title
          h2 key skills
        ul.template__skills-grid
          li.template__skills-item
            p Javascript
          li.template__skills-item
            p HTML/PUG
          li.template__skills-item
            p CSS/SASS
          li.template__skills-item
            p Git
          li.template__skills-item
            p Vue/Angular/jQuery
          li.template__skills-item
            p Gulp/Webpack
          li.template__skills-item
            p Photoshop/Illustrator
          li.template__skills-item
            p Linux/CLI
      section.template__experience
        div.template-title
          h2 work history
        experience-box(:experience="expeciences[0]")
        experience-box(:experience="expeciences[1]")
        experience-box(:experience="expeciences[2]")
      section.template__education
        div.template-title
          h2 education
        ul.template__education-grid
          li.template__education-item(v-for="educationalInstitution in educationalInstitutions")
            p <span>{{educationalInstitution.name}}</span> {{educationalInstitution.date}}
            p {{educationalInstitution.degreeType}} {{educationalInstitution.course}}
            p {{educationalInstitution.description}}
      section.template__additional
        div.template-title
          h2 additional experience
        p {{additionalExperience}}
</template>

<script>
  import ExperienceBox from './ExperienceBox'
  export default {
    data () {
      return {
        name: {
          first: 'Raniro',
          last: 'Coelho'
        },
        address: {
          number: 615,
          street: 'Rua dos Aimores',
          city: 'Belo Horizonte',
          country: 'Brazil',
          state: 'MG',
          zip: '30140-070'
        },
        contact: {
          email: 'ranirocoelho@gmail.com',
          phone: '+55-31-99407-9886'
        },
        website: 'www.errec.surge.sh',
        expeciences: [{
          company: 'Raro Labs',
          date: 'Sep.2017 - Present',
          position: 'Front End Developer',
          descriptionList: [
            'Collaborate with creative and development teams on the execution of ideas and projects.',
            'Closely worked with back-end developers to a build faster front-back API integration.',
            'Collaborate with User Interface and User Experience teams to guarantee the clients desired results.',
            'Perform website maintenance and enhancements using cutting edge JavaScript and HTML 5 techniques and frameworks like Vue.js.'
          ]
          },{
          company: 'Freelancer',
          date: 'Feb.2016 - Present',
          position: 'Front End Developer',
          descriptionList: [
            'Built an sales Web App to product on-line consulting increasing company efficiency.',
            'Developed demography consulting Web App for the State Nursing Board.',
            'Built front end interface for an tourism agency portal adding reusable modules for maintainability.',
            'Rebuild the Brazilian Dam Committee portal adding mobile responsiveness.',
          ]
          },{
          company: 'FIAT/CTM-UFMG',
          date: 'Jul.2013 - Dec.2015',
          position: 'Front End Developer',
          descriptionList: [
            'Built Computational Fluid Dynamics(CFD) models for turbo injection ethanol engines.',
            'Designed 3D animations for motion and heat analysis.',
            'Helped to improve geometric positioning of ICE valves and injectors though CFD results.',
            'Developed Java routines to improve my team work flow.',
          ]
        }],
        educationalInstitutions: [{
          name: 'Federal University of Minas Gerais',
          date: 'Aug.2010-Jul.2016',
          degreeType: 'Bachelors of ',
          course: 'Mechanical Engineer',
          description: 'Worked with physics simulation'
          },{
          name: 'PUC-MG',
          date: 'Feb.2002-Feb.2003',
          degreeType: 'Bachelors of ',
          course: 'Computer Science',
          description: 'Prospects on Data Structures and C++ basis'
        }],
        additionalExperience: "I work as a photographer in my spare time. I'm also a lover of the seventh art."
      }
    },
    components: {
      ExperienceBox
    }
  }
</script>

<style lang="sass">
  // MOVE TO GENERAL
  $templateHeight: 29.7cm
  $templateWidth: 21cm
  $headerHeight: 2.4cm
  $mainHeight: $templateHeight - $headerHeight
  $resumeLight: #fff
  $resumeDark: #545454

  .template-title
    padding: 0.35cm 0
    h2
      font-size: 0.5cm
      text-transform: uppercase

  // SCOPED
  body
    background-color: grey
  #app
    padding: 1cm 0
  .template
    height: $templateHeight
    color: white
    width: $templateWidth
    margin: 0 auto
    font-size: 0.36cm
  .template__header
    background-color: #0ba940
    height: $headerHeight
    width: 100%
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
  .template__name
    font-weight: normal
    font-size: 0.75cm
    margin-right: 0.6cm
    text-transform: uppercase
  .template__info
    font-weight: bold
    text-align: left
  .template__address
    max-width: 11cm
  .template__main
    padding: 0.2cm 1.4cm
    height: $mainHeight
    line-height: 1.2
    width: 100%
    color: $resumeDark
    background-color: $resumeLight
    border:
      left: solid $resumeDark 1px
      right: solid $resumeDark 1px
      bottom: solid $resumeDark 1px
  .template__website
    text-align: center
    margin-bottom: 0.2cm
    font-weight: bold
  section
    margin-bottom: 0.2cm
  .template__summary-content
    text-align: justify
  .template__skills-grid
    padding-left: 1.6cm
    height: 2.1cm;
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: space-between
  .template__skills-item
    p
      line-height: 1

  .template__education-item
    list-style: none
    span
      font-weight: bold
    &:not(:last-child)
      margin-bottom: 0.3cm

  @media print
    body
      background-color: white
    #app
      padding: 0
</style>
