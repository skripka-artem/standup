<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settingsSlider">
      <div class="slider-item">
        <div class="slider-item-info">
          <div class="wrapper">
            <span class="slider-item-info__date">04.05.2022 Ceyler pab</span>
            <p class="slider-item-info__name">
              Підпільний стендап клуб в підвалі
            </p>
            <button class="slider-item-info__buy">Купити</button>
          </div>
        </div>
        <img src="../../assets/img/1.jpg" alt="logo" />
      </div>
      <div class="slider-item">
        <div class="slider-item-info">
          <div class="wrapper">
            <span class="slider-item-info__date">04.05.2022 Ceyler pab</span>
            <p class="slider-item-info__name">
              Підпільний стендап клуб в підвалі
            </p>
            <button class="slider-item-info__buy">Купити</button>
          </div>
        </div>
        <img src="../../assets/img/1.jpg" alt="logo" />
      </div>
      <div class="slider-item">
        <div class="slider-item-info">
          <div class="wrapper">
            <span class="slider-item-info__date">04.05.2022 Ceyler pab</span>
            <p class="slider-item-info__name">
              Підпільний стендап клуб в підвалі
            </p>
            <button class="slider-item-info__buy">Купити</button>
          </div>
        </div>
        <img src="../../assets/img/1.jpg" alt="logo" />
      </div>
      <div class="slider-item">
        <div class="slider-item-info">
          <div class="wrapper">
            <span class="slider-item-info__date">04.05.2022 Ceyler pab</span>
            <p class="slider-item-info__name">
              Підпільний стендап клуб в підвалі
            </p>
            <button class="slider-item-info__buy">Купити</button>
          </div>
        </div>
        <img src="../../assets/img/1.jpg" alt="logo" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Slider",
  data() {
    return {
      settingsSlider: {
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000
      }
    };
  },
  components: { VueSlickCarousel }
  // mounted() {
  //   axios
  //     .get("https://www.undergroundstandup.com/wp-json/wp/v2/types")
  //     .then(response => {
  //       console.log("response");
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.slider {
  height: calc(100vh - 80px);

  ::v-deep {
    .slick-list,
    .slick-slider,
    .slick-track {
      height: 100%;

      div {
        height: 100%;
      }
    }
  }

  &-item {
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-info {
      width: 100%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.9766281512605042) 0%,
        rgba(0, 0, 0, 0.5396533613445378) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      position: absolute;
      top: 0;
      left: 0;
      color: $white;

      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &__date {
        font-size: 18px;
      }

      &__name {
        max-width: 500px;
        margin-top: 40px;
        font-family: "SF UI Display Bold";
        font-size: 54px;
        line-height: 1.3;

        @media all and (min-width: 768px) {
          font-size: 60px;
        }
      }

      &__buy {
        margin-top: 60px;
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $yellow;
        border: 2px solid $yellow;
        cursor: pointer;
        font-family: "SF UI Display Bold";
        color: $grayBlack;
        font-size: 14px;
        text-transform: uppercase;

        &:hover {
          background: rgba(0, 0, 0, 0);
          color: $white;
        }
      }
    }
  }
}
</style>
