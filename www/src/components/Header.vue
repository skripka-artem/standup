<template>
  <header class="header-wrapper">
    <div class="header wrapper">
      <div class="header__logo">
        <a href="/"><img src="../assets/img/logo.png" alt=""/></a>
      </div>
      <nav
        class="header__nav"
        :class="{
          header__nav_active: this.getMenu.open && this.getMenu.open === true
        }"
      >
        <a class="block no-underline product-link" @click="toggleMenu" href="/"
          >Головна</a
        >
        <a
          class="block no-underline product-link"
          @click="toggleMenu"
          href="/afisha"
          >Aфіша</a
        >
        <a
          class="block no-underline product-link"
          @click="toggleMenu"
          href="/#about"
          >Про нас</a
        >
        <a
          class="block no-underline product-link"
          @click="toggleMenu"
          href="/#video"
          >Відео</a
        >
        <a
          class="block no-underline product-link"
          @click="toggleMenu"
          href="/#comedians"
          >Коміки</a
        >
        <a
          class="block no-underline product-link"
          @click="toggleMenu"
          href="/#contact"
          >Контакти</a
        >
        <nav class="header__social">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/undergroundstandupkiev/"
              >
                <i class="fa fa-facebook" aria-hidden="true"
              /></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/undergroundstandupkiev"
                ><i class="fa fa-instagram" aria-hidden="true"
              /></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCwuzITdbxPSG_9PakpsKNwQ"
                ><i class="fa fa-youtube-play" aria-hidden="true"
              /></a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/under_standup"
                ><i class="fa fa-twitter" aria-hidden="true"
              /></a>
            </li>
          </ul>
        </nav>
      </nav>
      <nav class="header__social">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/undergroundstandupkiev/"
            >
              <i class="fa fa-facebook" aria-hidden="true"
            /></a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/undergroundstandupkiev"
              ><i class="fa fa-instagram" aria-hidden="true"
            /></a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCwuzITdbxPSG_9PakpsKNwQ"
              ><i class="fa fa-youtube-play" aria-hidden="true"
            /></a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/under_standup"
              ><i class="fa fa-twitter" aria-hidden="true"
            /></a>
          </li>
        </ul>
      </nav>
      <div
        class="header-burger"
        :class="{ active: this.getMenu.open && this.getMenu.open === true }"
        @click="toggleMenu"
      >
        <div class="header-burger__item"></div>
        <div class="header-burger__item"></div>
        <div class="header-burger__item"></div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getMenu: "getMenu"
    })
  },
  methods: {
    toggleMenu() {
      const el = document.body;

      if (this.getMenu.open && this.getMenu.open === true) {
        el.classList.remove("hidden");
        this.$store.dispatch("toggleMenu", { open: false });
      } else {
        this.$store.dispatch("toggleMenu", { open: true });
        el.classList.add("hidden");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.header-wrapper {
  height: 80px;
  box-shadow: 0 10px 14px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 10px 14px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 10px 14px 0px rgba(0, 0, 0, 0.15);
  background: $grayBlack;
  border-bottom: 1px solid $yellow;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    cursor: pointer;

    &-burger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 40px;
      height: 30px;

      @media all and (min-width: 768px) {
        display: none;
      }

      &__item {
        width: 100%;
        height: 2px;
        background: $yellow;
      }
    }

    &__logo {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      max-width: 300px;

      @media all and (min-width: 768px) {
        width: 25%;
      }

      @media all and (min-width: 1024px) {
        width: 20%;
      }

      img {
        width: auto;
        max-width: 100%;
        object-fit: contain;
        height: 80%;
      }
    }

    &__nav {
      position: absolute;
      display: none;
      right: 0;
      bottom: 0;
      width: 70%;
      height: calc(100vh - 81px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: $grayBlack;
      font-family: "SF UI Display Medium";
      z-index: 9;

      &_active {
        display: flex;
      }

      .header__social {
        display: flex;
        width: 100%;

        ul {
          justify-content: center;
          margin-top: 20px;
        }

        @media all and (min-width: 768px) {
          display: none;
        }
      }

      @media all and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        width: 65%;
        height: auto;
        position: relative;
      }

      .product-link {
        position: relative;
        padding: 0 5px;
        margin: 15px;
        font-size: 16px;
        color: $white;
        text-transform: uppercase;

        @media all and (min-width: 768px) {
          margin: 0 5px;
          font-size: 14px;
        }

        @media all and (min-width: 1024px) {
          margin: 0 15px;
          font-size: 16px;
        }

        &::after {
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

        &:hover::after {
          width: 80%;
        }
      }

      .router-link-exact-active::after {
        width: 80%;
      }
    }

    &__social {
      width: 12%;
      display: none;
      @media all and (min-width: 768px) {
        display: flex;
      }

      @media all and (min-width: 1024px) {
        width: 15%;
      }

      ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        li {
          margin: 0 5px;
          @media all and (min-width: 1024px) {
            margin: 0 10px;
          }

          &:last-of-type {
            margin: 0 0 0 5px;
            @media all and (min-width: 1024px) {
              margin: 0 0 0 10px;
            }
          }
          i {
            font-size: 18px;
            color: $yellow;

            @media all and (min-width: 1024px) {
              font-size: 22px;
            }
          }

          &:hover {
            i {
              color: $white;
            }
          }
        }
      }
    }
  }
}
</style>
