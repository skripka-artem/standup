<template>
  <div class="policy wrapper">
    <h1 class="policy__title">ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</h1>
    <div
      class="policy-container"
      v-if="this.getPolice.hasOwnProperty('content')"
      v-html="this.getPolice.content.rendered"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Policy",
  metaInfo: {
    title: "Політика конфеденційності | Підпільний Стендап",
    meta: [
      { name: "description", content: "Підпільний Стендап" },
      { name: "keywords", content: "Підпільний Стендап" }
    ]
  },
  created() {
    this.$store.dispatch("loadPolice");
  },
  computed: {
    ...mapGetters({
      getPolice: "getPolice"
    }),
    getPoliceInfo() {
      return this.getPolice;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.policy {
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: 768px) {
    padding: 100px 10px;
  }

  &-container {
    width: 100%;
    margin-top: 60px;

    ::v-deep {
      p {
        font-size: 16px;
        line-height: 1.3;
      }
    }
  }

  &__title {
    display: inline-block;
    font-family: "SF UI Display Bold";
    color: $grayBlack;
    font-size: 16px;
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
      bottom: -45%;
      margin: auto;
      width: 20px;
      height: 20px;
      border-bottom: 2px solid $yellow;
      border-left: 2px solid $yellow;

      @media all and (min-width: 768px) {
        width: 50px;
        height: 50px;
        left: -15px;
        bottom: -15%;
      }
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -15px;
      top: -45%;
      margin: auto;
      width: 20px;
      height: 20px;
      border-top: 2px solid $yellow;
      border-right: 2px solid $yellow;

      @media all and (min-width: 768px) {
        width: 50px;
        height: 50px;
        right: -15px;
        top: -15%;
      }
    }
  }
}
</style>
