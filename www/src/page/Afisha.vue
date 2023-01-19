<template>
  <div class="afisha wrapper">
    <h1 class="afisha__title">Афіша</h1>
    <div class="afisha-items">
      <div class="afisha-item" v-for="item in getListAfisha" :key="item.id">
        <img
          class="afisha-item__img"
          :src="urlImage(item.featured_media)"
          alt=""
        />
        <div class="afisha-item-info">
          <p class="afisha-item__name">{{ item.title.rendered }}</p>
          <p class="afisha-item__date">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            {{ formatDate(item["afisha-custom-fields"].date[0]) }} в
            {{ formatTime(item["afisha-custom-fields"].time[0]) }}
          </p>
          <p class="afisha-item__place">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            {{ item["afisha-custom-fields"].places[0] }}
          </p>
        </div>
        <button @click="buy(item)" class="afisha-item__buy">Купити</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Afisha",
  metaInfo: {
    title: "Афіша | Підпільний Стендап",
    meta: [
      { name: "description", content: "Підпільний Стендап" },
      { name: "keywords", content: "Підпільний Стендап" }
    ]
  },
  created() {
    this.$store.dispatch("loadImages");
    this.$store.dispatch("loadAfisha");
  },
  computed: {
    ...mapGetters({
      getAfisha: "getAfisha",
      getImages: "getImages"
    }),
    getListAfisha() {
      return this.getAfisha;
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
      if (this.getImages.length > 0) {
        let images = this.getImages.filter(elem => elem.id === id);
        if (images.length > 0) {
          return images[0].source_url;
        }
      }
    },
    buy(item) {
      let link = item['afisha-custom-fields']['link_to_bye'][0]
      if (link !== undefined) {
        window.open(`${link}`, "_blank");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.afisha {
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
    color: $grayBlack;
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

  &-items {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media all and (min-width: 1024px) {
      justify-content: flex-start;
    }
  }

  &-item {
    position: relative;
    width: 47%;
    background: $yellow;
    overflow: hidden;
    min-height: 473px;
    box-sizing: border-box;
    margin: 0 1% 20px;

    @media all and (min-width: 1024px) {
      width: 24.2%;
      margin: 0 5px 20px;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -25px;
      left: -25px;
      transform: rotate(45deg);
      width: 50px;
      height: 50px;
      background: $yellow;
    }

    &__img {
      width: 100%;
      height: 230px;
      object-fit: cover;
    }

    &-info {
      padding: 15px 10px 0;

      @media all and (min-width: 1024px) {
        padding: 25px 20px 0;
      }

      i {
        margin-right: 10px;
        min-width: 20px;
        display: flex;
        justify-content: center;
        font-size: 20px;
      }
    }

    &__name {
      font-family: "SF UI Display Bold";
      font-size: 20px;
      line-height: 1.2;
      min-height: 55px;
      @media all and (min-width: 768px) {
        font-size: 22px;
      }
    }

    &__date {
      display: flex;
      align-items: center;
      margin-top: 10px;
      color: $grayBlack;
      font-size: 14px;
      @media all and (min-width: 768px) {
        font-size: 16px;
      }
    }

    &__place {
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 14px;
      line-height: 1.2;
      min-height: 40px;
      @media all and (min-width: 768px) {
        font-size: 16px;
      }
    }

    &__buy {
      margin-top: 30px;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "SF UI Display Bold";
      font-size: 14px;
      text-transform: uppercase;
      color: $white;
      background: $grayBlack;
      border: none;
      border-top: 2px solid $white;
      cursor: pointer;

      &:hover {
        color: $yellow;
      }
    }

    &_more {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: $grayBlack;
      font-family: "SF UI Display Bold";
      font-size: 22px;
      text-transform: uppercase;
      padding: 0 20px;
      line-height: 5;
      cursor: pointer;

      @media all and (min-width: 768px) {
        padding: 0 40px;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $white;
        i {
          font-size: 40px;
          color: $white;
        }
      }

      &:hover {
        span {
          color: $yellow;

          i {
            color: $yellow;
          }
        }
      }
    }
  }
}
</style>
