<template>
  <div class="places wrapper" id="places">
    <p class="places__title">Місця</p>
    <div class="places-slider">
      <VueSlickCarousel v-bind="settingsSlider">
        <div class="places-item">
          <img
            class="places-item__img"
            src="../../assets/img/place.jpg"
            alt=""
          />
          <div class="places-item-info">
            <p class="places-item-info__title">Голден Нейм</p>
            <p class="places-item-info__address"><span>Адрес:</span> Київ</p>
            <a
              href="#"
              class="places-item-info__address places-item-info__address_site"
            >
              <span>Сай:</span> test.com.ua
            </a>
            <div class="places-item-info__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5642875630165!2d30.511535215944104!3d50.44921599533455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf7d6ed71c91%3A0xe6974b5a5764d3b9!2sUnderground%20StandUp%20Club!5e0!3m2!1suk!2sua!4v1664105339226!5m2!1suk!2sua"
                width="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="places-item">
          <img
            class="places-item__img"
            src="../../assets/img/place.jpg"
            alt=""
          />
          <div class="places-item-info">
            <p class="places-item-info__title">Голден Нейм</p>
            <p class="places-item-info__address"><span>Адрес:</span> Київ</p>
            <p class="places-item-info__address places-item-info__address_site">
              <span>Сайт:</span> test.com.ua
            </p>
            <div class="places-item-info__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5642875630165!2d30.511535215944104!3d50.44921599533455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf7d6ed71c91%3A0xe6974b5a5764d3b9!2sUnderground%20StandUp%20Club!5e0!3m2!1suk!2sua!4v1664105339226!5m2!1suk!2sua"
                width="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="places-item">
          <img
            class="places-item__img"
            src="../../assets/img/place.jpg"
            alt=""
          />
          <div class="places-item-info">
            <p class="places-item-info__title">Голден Нейм</p>
            <p class="places-item-info__address"><span>Адрес:</span> Київ</p>
            <p class="places-item-info__address places-item-info__address_site">
              <span>Сай:</span> test.com.ua
            </p>
            <div class="places-item-info__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5642875630165!2d30.511535215944104!3d50.44921599533455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf7d6ed71c91%3A0xe6974b5a5764d3b9!2sUnderground%20StandUp%20Club!5e0!3m2!1suk!2sua!4v1664105339226!5m2!1suk!2sua"
                width="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="places-item">
          <img
            class="places-item__img"
            src="../../assets/img/place.jpg"
            alt=""
          />
          <div class="places-item-info">
            <p class="places-item-info__title">Голден Нейм</p>
            <p class="places-item-info__address"><span>Адрес:</span> Київ</p>
            <p class="places-item-info__address places-item-info__address_site">
              <span>Сай:</span> test.com.ua
            </p>
            <div class="places-item-info__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5642875630165!2d30.511535215944104!3d50.44921599533455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf7d6ed71c91%3A0xe6974b5a5764d3b9!2sUnderground%20StandUp%20Club!5e0!3m2!1suk!2sua!4v1664105339226!5m2!1suk!2sua"
                width="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Places",
  data() {
    return {
      settingsSlider: {
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    };
  },
  components: { VueSlickCarousel },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.places {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $grayBlack;
  box-shadow: -40vh 0 $grayBlack, 40vh 0;
  padding: 30px 10px;
  box-sizing: border-box;

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

  &-slider {
    margin-top: 75px;
    width: 100%;

    @media all and (min-width: 768px) {
      margin-top: 50px;
    }
  }

  ::v-deep {
    .slick-next {
      right: 25px;
      top: -50px;
    }
    .slick-prev {
      left: auto;
      right: 100px;
      top: -50px;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 50px;
      color: $yellow;
      opacity: 1;
    }
  }

  &-item {
    background: $white;
    display: flex !important;
    position: relative;
    margin-bottom: 10px;
    height: 280px;

    @media all and (min-width: 768px) {
      height: auto;
      min-height: 350px;
    }

    &-info {
      width: 50%;
      position: relative;

      &__title {
        padding: 15px;
        font-family: "SF UI Display Bold";
        font-size: 24px;
        text-align: center;
        margin-bottom: 10px;
      }

      &__address {
        margin-bottom: 10px;
        padding: 0 15px;
        font-size: 18px;

        span {
          font-family: "SF UI Display Medium";
        }

        &_site {
          color: $yellow;

          span {
            color: $grayBlack;
          }
        }
      }

      &__map {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 170px;

        iframe {
          height: 100%;
        }
      }
    }

    &__img {
      width: 50%;
      object-fit: cover;
      border-right: 2px solid $yellow;
      border-left: 10px solid $grayBlack;
    }
  }
}
</style>
