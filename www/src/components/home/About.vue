<template>
  <div class="about wrapper" id="about">
    <p class="about__title">Про Нас</p>
    <div class="about-info">
      <p>Авторський юмор <span>18+</span></p>
      <p><span>400+</span> вечірок на рік</p>
      <p>Такого не покажуть по ТВ</p>
    </div>
    <div class="about-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  mounted() {}
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

  &-info {
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
  &-text {
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
