<template>
  <div class="afisha wrapper">
    <p class="afisha__title">Афіша</p>
    <div class="afisha-items">
      <div class="afisha-item">
        <img class="afisha-item__img" src="../../assets/img/1.jpg" alt="" />
        <div class="afisha-item-info">
          <p class="afisha-item__name">Подпольный Стендап в Golden Gate</p>
          <p class="afisha-item__date">
            <i class="fa fa-calendar" aria-hidden="true"></i> 29.04.2022
          </p>
          <p class="afisha-item__place">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Golden Gate Pub & Restaurant ул. Золотоворотская, 15, Киев
          </p>
        </div>
        <button class="afisha-item__buy">Купити</button>
      </div>
      <div class="afisha-item">
        <img class="afisha-item__img" src="../../assets/img/1.jpg" alt="" />
        <div class="afisha-item-info">
          <p class="afisha-item__name">Подпольный Стендап в Golden Gate</p>
          <p class="afisha-item__date">
            <i class="fa fa-calendar" aria-hidden="true"></i> 29.04.2022
          </p>
          <p class="afisha-item__place">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Golden Gate Pub & Restaurant ул. Золотоворотская, 15, Киев
          </p>
        </div>
        <button class="afisha-item__buy">Купити</button>
      </div>
      <div class="afisha-item">
        <img class="afisha-item__img" src="../../assets/img/1.jpg" alt="" />
        <div class="afisha-item-info">
          <p class="afisha-item__name">Подпольный Стендап в Golden Gate</p>
          <p class="afisha-item__date">
            <i class="fa fa-calendar" aria-hidden="true"></i> 29.04.2022
          </p>
          <p class="afisha-item__place">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Golden Gate Pub & Restaurant ул. Золотоворотская, 15, Киев
          </p>
        </div>
        <button class="afisha-item__buy">Купити</button>
      </div>
      <a href="/afisha" class="afisha-item afisha-item_more">
        <span>Дивитися</span><span>всі <i class="fa fa-arrow-right"></i></span
        ><span>афіші</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Afishi",
  data() {
    return {
      afisha: []
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

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
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media all and (min-width: 1024px) {
      margin-top: 50px;
    }
  }

  &-item {
    position: relative;
    width: 48%;
    background: $yellow;
    overflow: hidden;

    min-height: 463px;
    box-sizing: border-box;
    margin-bottom: 20px;

    @media all and (min-width: 1024px) {
      width: 24.5%;
      min-height: 473px;
      margin-bottom: 0;
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
      padding: 0 40px;
      line-height: 5;
      cursor: pointer;

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
