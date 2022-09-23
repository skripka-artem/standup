<template>
<header class="header-wrapper">
  <div class="header wrapper">
  <img class="header__logo" src="../assets/img/my-logo.png" alt="logo">
<nav class="header__nav">
    <router-link v-for="link in links" :key="link.name"
        class="block no-underline product-link"
        :to="link.path"
    >
      {{ link.name }}
    </router-link>
</nav>
  </div>
</header>
</template>

<script>

export default {
  name: 'Header',
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

.header-wrapper {
  height: 80px;
  box-shadow: 0 10px 14px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0 10px 14px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0 10px 14px 0px rgba(0,0,0,0.15);
  background: $grayBlack;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
}

</style>
