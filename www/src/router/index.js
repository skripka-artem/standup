import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import Portfolio from '../page/Portfolio'
import Resume from '../page/Resume'
import AboutMe from '../page/AboutMe'
import Contact from '../page/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/about-me',
      name: 'About Me',
      component: AboutMe
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
