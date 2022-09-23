<template>
  <footer class="footer-wrapper">
    <div class="footer wrapper">
    <img class="footer__logo" src="../assets/img/my-logo.png" alt="">
    <nav class="footer__nav">
        <router-link v-for="link in links" :key="link.name"
                     class="block no-underline product-link"
                     :to="link.path"
        >
          {{ link.name }}
        </router-link>
    </nav>
    </div>
    <div class="copyright">&copy; by  <a target="_blank" href="https://www.instagram.com/skripka._.artem/">Artem Skrypka</a></div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.footer-wrapper {
  height: 70px;
  background: $grayBlack;

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;

    &__logo {
      width: 70px;
    }
    &__nav {
      width: 60%;
      display: flex;
      justify-content: space-between;
      .product-link {
        position: relative;
        font-size: 20px;
        color: $white;

        &::after {
          content: "";
          display: none;
          width: 80%;
          height: 2px;
          margin: auto;
          background: $white;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
        }

        &:hover::after {
          display: block;
        }
      }
      .router-link-exact-active::after {
        display: block;
      }
    }
  }
  .copyright {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $blueBlack;
    font-size: 16px;
    color: $white;
    text-transform: uppercase;
    text-align: center;
    a {
      margin-left: 10px;
      font-size: 16px;
      color: $white;
      text-decoration: underline;
    }
  }
}

</style>
