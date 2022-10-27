<template>
  <div class="home">
    <Slider />
    <Afisha />
    <About />
    <Video />
    <Places />
    <Contact />
  </div>
</template>

<script>
import Slider from "../components/home/Slider";
import Afisha from "../components/home/Afishi";
import About from "../components/home/About";
import Video from "../components/home/Video";
import Places from "../components/home/Places";
import Contact from "../components/home/Contact";

export default {
  name: "Home",
  components: {
    Slider,
    Afisha,
    About,
    Video,
    Places,
    Contact
  },
  created() {
    this.$store.dispatch("loadImages");
  }
};
</script>
