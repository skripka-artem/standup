<template>
  <div id="app">
    <default>
      <router-view />
    </default>
  </div>
</template>

<script>
import Default from "@/layout/Default";
export default {
  name: "App",
  components: {
    Default
  }
};
</script>

<style lang="scss">
@import "./src/assets/scss/reset";
@import "./src/assets/scss/base";
@import "./src/assets/scss/variables";
@import "./src/assets/scss/fonts";
</style>
