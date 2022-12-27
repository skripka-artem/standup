<template>
  <div class="сontact wrapper" id="contact">
    <p class="сontact__title">Контакти</p>
    <div class="сontact-container">
      <div class="сontact-maps">
        <p class="сontact-maps__title">
          Підпільний стендап клуб:
          <span>вулиця Золотоворітська, 15, Київ</span>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5642875630165!2d30.511535215944104!3d50.44921599533455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf7d6ed71c91%3A0xe6974b5a5764d3b9!2sUnderground%20StandUp%20Club!5e0!3m2!1suk!2sua!4v1664105339226!5m2!1suk!2sua"
          width="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="сontact-info">
        <div class="сontact-info-item">
          <p>Email:</p>
          <a href="mailto:undergroundstandupkiev@gmail.com"
            >undergroundstandupkiev@gmail.com</a
          >
        </div>
        <div class="сontact-info-item">
          <p>Телефон:</p>
          <a href="tel:+38039494944">38039494944</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.сontact {
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

  &-container {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media all and (min-width: 768px) {
      flex-direction: row;
    }
  }

  &-maps {
    width: 100%;
    margin-bottom: 25px;

    @media all and (min-width: 768px) {
      width: 45%;
      margin-bottom: 0;
    }

    iframe {
      height: 250px;

      @media all and (min-width: 768px) {
        height: 350px;
      }

      @media all and (min-width: 1024px) {
        height: 450px;
      }
    }

    &__title {
      font-family: "SF UI Display Bold";
      color: $grayBlack;
      font-size: 24px;
      text-transform: uppercase;
      margin-bottom: 20px;

      span {
        display: block;
        font-family: "SF UI Display Medium";
        text-transform: capitalize;
        line-height: 1.3;
      }
    }
  }

  &-info {
    width: 45%;

    &-item {
      margin-bottom: 40px;

      p {
        font-family: "SF UI Display Bold";
        color: $grayBlack;
        font-size: 24px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      a {
        font-family: "SF UI Display Medium";
        color: $grayBlack;
        border-bottom: 2px solid $yellow;

        &:hover {
          border-bottom: 2px solid $grayBlack;
        }
      }
    }
  }
}
</style>
