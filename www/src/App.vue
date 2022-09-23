<template>
  <div id="app">
    <default>
      <router-view/>
    </default>
  </div>
</template>

<script>
import Default from '@/layout/Default'
export default {
  name: 'App',
  components: {
    Default
  }
}
</script>

<style lang="scss" >
@import './src/assets/scss/base';
</style>
