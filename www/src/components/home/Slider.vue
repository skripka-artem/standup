<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settingsSlider">
      <div class="slider-item" v-for="item in getListSlider" :key="item.id">
        <div class="slider-item-info">
          <div class="wrapper">
            <span class="slider-item-info__date">
              {{ formatDate(item["slider-custom-fields"].date[0]) }} в
              {{ formatTime(item["slider-custom-fields"].time[0]) }}
              <span>{{ item["slider-custom-fields"].places[0] }}</span></span
            >
            <p class="slider-item-info__name">
              {{ item.title.rendered }}
            </p>
            <button class="slider-item-info__buy">Купити</button>
          </div>
        </div>
        <img :src="urlImage(item.featured_media)" alt="logo" />
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
import { mapGetters } from "vuex";

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
  components: { VueSlickCarousel },
  computed: {
    ...mapGetters({
      getSlider: "getSlider",
      getImages: "getImages"
    }),
    getListSlider() {
      return this.getSlider;
    }
  },
  methods: {
    formatDate(date) {
      let day = date.slice(6, 8);
      let month = date.slice(4, 6);
      let year = date.slice(0, 4);
      return `${day}.${month}.${year}`;
    },
    formatTime(time) {
      let h = time.slice(0, 2);
      let m = time.slice(3, 5);
      return `${h}:${m}`;
    },
    urlImage(id) {
      return this.getImages.filter(elem => elem.id === id)[0].source_url;
    }
  }
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

        span {
          display: block;
          margin-top: 5px;
        }
      }

      &__name {
        max-width: 500px;
        margin-top: 35px;
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
