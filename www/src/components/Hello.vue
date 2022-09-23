<template>
  <div class="hello">
    <div class="hello-picture">
      <img class="hello-picture__img" src="../assets/img/me.jpeg" alt='me'>
    </div>
    <div class="hello-info">
      <h1 class="hello-info__title">Hello, I'm <span>Artem Skrypka</span></h1>
      <p class="hello-info__subtitle">FrontEnd developer</p>
      <div class="hello-more">
        <div class="hello-more__block"><p class="hello-more__text"><i class="fa fa-birthday-cake"></i>Date of birth:</p> <p class="hello-more__text hello-more__text_result">18.02.1995</p></div>
        <div class="hello-more__block"><p class="hello-more__text"><i class="fa fa-map-marker"></i>City:</p> <p class="hello-more__text hello-more__text_result">Kiev</p></div>
        <div class="hello-more__block"><p class="hello-more__text"><i class="fa fa-phone"></i>Phone:</p> <p class="hello-more__text hello-more__text_result">
          <a href="tel:+380950104766">+38(095)-010-47-66</a></p></div>
      </div>
      <div class="hello-more__block"><p class="hello-more__text"><i class="fa fa-envelope"></i>Email:</p> <p class="hello-more__text hello-more__text_result">
        <a href="mailto:skripkarte@i.ua">skripkarte@i.ua</a></p></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable no-unused-vars
export default {
  name: 'Hello',
    mounted() {
      console.log('fkf')
      console.log(axios)
        axios
            .get('https://www.undergroundstandup.com/wp-json/wp/v2/types')
            .then((response) => {
                console.log('response')
                console.log(response)
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

</style>
