<template>
  <div class="home">
    <Slider />
    <Afisha />
    <About />
    <Video />
    <Comedians />
    <Contact />
  </div>
</template>

<script>
import Slider from "../components/home/Slider";
import Afisha from "../components/home/Afishi";
import About from "../components/home/About";
import Video from "../components/home/Video";
import Comedians from "../components/home/Comedians";
import Contact from "../components/home/Contact";

export default {
  name: "Home",
  components: {
    Slider,
    Afisha,
    About,
    Video,
    Comedians,
    Contact
  }
};
</script>
