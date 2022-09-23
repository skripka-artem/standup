<template>
  <div>
  <header-container :links="links"/>
    <slot />
  <footer-container :links="links"/>
  </div>
</template>

<script>
import HeaderContainer from '../components/Header'
import FooterContainer from '../components/Footer'
export default {
  name: 'Default',
  data () {
    return {
      links: [
        {
          path: '/',
          name: 'Home'
        },
        {
          path: '/resume',
          name: 'Resume'
        },
        {
          path: '/portfolio',
          name: 'Portfolio'
        },
        {
          path: '/about-me',
          name: 'About Me'
        },
        {
          path: '/contact',
          name: 'Contact'
        }
      ]
    }
  },
  components: {
    HeaderContainer,
    FooterContainer
  }
}
</script>
