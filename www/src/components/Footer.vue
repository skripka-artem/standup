<template>
  <footer class="footer-wrapper">
    <div class="footer wrapper">
      <div class="footer__logo">
        <a href="/"><img src="../assets/img/logo.png" alt=""/></a>
      </div>
      <nav class="footer__nav">
        <a class="block no-underline product-link" href="/">Головна</a>
        <a class="block no-underline product-link" href="/afisha">Aфіша</a>
        <a class="block no-underline product-link" href="/#about">Про нас</a>
        <a class="block no-underline product-link" href="/#video">Відео</a>
        <a class="block no-underline product-link" href="/#comedians">Коміки</a>
        <a class="block no-underline product-link" href="/privacy-police"
          >Політика кофеденційності</a
        >
        <a class="block no-underline product-link" href="/#contact">Контакти</a>
      </nav>
    </div>
    <div class="copyright">
      &copy; 2022
      <a target="_blank" href="https://www.instagram.com/skripka._.artem/"
        >Artem Skrypka</a
      >
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  props: {
    links: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.footer-wrapper {
  background: $grayBlack;
  padding: 10px 0 0;

  @media all and (min-width: 768px) {
    height: 70px;
    padding: 0;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media all and (min-width: 768px) {
      flex-direction: row;
    }

    &__logo {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: auto;
        max-width: 300px;
        object-fit: contain;
        height: 80%;

        @media all and (min-width: 768px) {
          max-width: 100%;
        }
      }

      @media all and (min-width: 768px) {
        width: 25%;
        justify-content: flex-start;
      }

      @media all and (min-width: 1024px) {
        width: 20%;
      }
    }

    &__nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      font-family: "SF UI Display Medium";

      @media all and (min-width: 768px) {
        width: 85%;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 0;
      }

      @media all and (min-width: 1024px) {
        width: 65%;
      }

      .product-link {
        position: relative;
        font-size: 16px;
        color: $white;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 15px;

        @media all and (min-width: 768px) {
          padding: 0 5px;
          margin: 0 15px;
          font-size: 14px;
        }

        @media all and (min-width: 1024px) {
          font-size: 16px;
        }

        &:last-of-type {
          @media all and (min-width: 768px) {
            padding: 0 0 0 5px;
            margin: 0 0 0 15px;
          }
        }

        &:after {
          @media all and (min-width: 768px) {
            content: "";
            width: 0;
            height: 2px;
            margin: auto;
            background: $yellow;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            transition: all 0.5s ease;
          }
        }

        &:hover {
          color: $yellow;
          @media all and (min-width: 768px) {
            color: $white;
          }
          &:after {
            width: 80%;
          }
        }
      }

      .router-link-exact-active {
        color: $yellow;
        @media all and (min-width: 768px) {
          color: $white;
        }
        &:after {
          width: 80%;
        }
      }
    }
  }
  .copyright {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $grayBlack;
    font-size: 12px;
    color: $white;
    text-transform: uppercase;
    text-align: center;
    border-top: 1px solid $yellow;
    a {
      margin-left: 10px;
      font-size: 12px;
      color: $white;
    }
  }
}
</style>
