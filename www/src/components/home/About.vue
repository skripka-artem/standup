<template>
  <div class="about wrapper" id="about">
    <p class="about__title">{{ getBlockAbout.title.rendered }}</p>
    <div v-html="getBlockAbout.content.rendered"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "About",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getAboutUs: "getAboutUs"
    }),
    getBlockAbout() {
      return this.getAboutUs[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.about {
  background: $grayBlack;
  box-shadow: -40vh 0 $grayBlack, 40vh 0;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: 768px) {
    padding: 100px 10px;
  }

  &__title {
    display: inline-block;
    font-family: "SF UI Display Bold";
    color: $white;
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
    position: relative;

    @media all and (min-width: 768px) {
      font-size: 60px;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      left: -15px;
      bottom: -15%;
      margin: auto;
      width: 40px;
      height: 40px;
      border-bottom: 2px solid $yellow;
      border-left: 2px solid $yellow;

      @media all and (min-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -15px;
      top: -15%;
      margin: auto;
      width: 40px;
      height: 40px;
      border-top: 2px solid $yellow;
      border-right: 2px solid $yellow;

      @media all and (min-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }
  }

  ::v-deep &-info {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media all and (min-width: 768px) {
      flex-direction: row;
    }

    p {
      width: 200px;
      font-family: "SF UI Display Bold";
      font-size: 32px;
      color: $yellow;
      text-align: center;
      line-height: 1.2;
      margin-bottom: 20px;

      @media all and (min-width: 1024px) {
        width: 300px;
        font-size: 40px;
        margin-bottom: 0;
      }

      span {
        color: $white;
      }
    }
  }

  ::v-deep &-text {
    font-size: 16px;
    color: $white;
    text-align: center;
    margin: 40px auto 0;
    width: 90%;
    line-height: 1.3;

    @media all and (min-width: 1024px) {
      width: 900px;
    }
  }
}
</style>
