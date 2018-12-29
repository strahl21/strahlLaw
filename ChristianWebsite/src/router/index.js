import Vue from 'vue'
import Router from 'vue-router'
import BodyFlow from '@/components/BodyFlow'
import About from '@/components/About'
import ContactPage from '@/components/ContactPage'
import LegalInformation from '@/components/LegalInformation'
import AreasOfPractice from '@/components/AreasOfPractice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BodyFlow',
      component: BodyFlow
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/legalInformation',
      name: 'LegalInformation',
      component: LegalInformation
    },
    {
      path: '/areasOfPractice',
      name: 'AreasOfPractice',
      component: AreasOfPractice
    },

  ]
})
