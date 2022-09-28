<template>
  <div>
    <header-container :links="links" />
    <slot />
    <footer-container :links="links" />
  </div>
</template>

<script>
import HeaderContainer from "../components/Header";
import FooterContainer from "../components/Footer";
export default {
  name: "Default",
  data() {
    return {
      links: [
        {
          path: "/",
          name: "Головна"
        },
        {
          path: "/afisha",
          name: "Афіші"
        },
        {
          path: "/about",
          name: "Про нас"
        },
        {
          path: "/video",
          name: "Відео"
        }
      ]
    };
  },
  components: {
    HeaderContainer,
    FooterContainer
  }
};
</script>
