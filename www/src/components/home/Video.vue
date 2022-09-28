<template>
  <div class="video wrapper" id="video">
    <p class="video__title">Відео</p>
    <div class="video-container">
      <ul class="video-tabs">
        <li
          class="video-tabs__tab"
          :class="{ 'video-tabs__tab_active': tab.id == playlistId }"
          v-for="tab in getPlaylist"
          :key="tab.id"
          @click="selectPlaylist(tab)"
        >
          {{ tab.snippet.title }}
          <span>({{ tab.contentDetails.itemCount }})</span>
        </li>
      </ul>
      <div class="video-list">
        <a
          v-for="video in getVideo"
          :key="video.id"
          class="video-list__item"
          :href="
            'https://www.youtube.com/watch?v=' + video.contentDetails.videoId
          "
          target="_blank"
        >
          <img
            :src="video.snippet.thumbnails.medium.url"
            :alt="video.snippet.title"
          />
          <span>{{ video.snippet.title }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Video",
  data() {
    return {
      apiKey: "AIzaSyDhhOUbX-YvEYx1aWdc5R1wrfG1iUKPeYc",
      channelId: "UCwuzITdbxPSG_9PakpsKNwQ",
      playlistId: "PLL4Ae5AJTwoblGnoyCF3ymz6p6lNFc2gq",
      pageToken: "CBkQAA"
    };
  },
  created() {
    this.$store.dispatch("loadPlaylist", {
      channelId: this.channelId,
      apiKey: this.apiKey
    });
    this.$store.dispatch("loadVideos", {
      playlistId: this.playlistId,
      apiKey: this.apiKey
    });
  },
  computed: {
    ...mapGetters({
      getPlaylist: "getPlaylist",
      getVideo: "getVideo"
    })
  },
  methods: {
    selectPlaylist(tab) {
      this.playlistId = tab.id;
      this.$store.dispatch("loadVideos", {
        playlistId: this.playlistId,
        apiKey: this.apiKey
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.video {
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
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media all and (min-width: 768px) {
      margin-top: 50px;
    }
  }

  &-tabs {
    width: 90%;
    background: $yellow;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    max-height: 170px;
    overflow: scroll;

    @media all and (min-width: 768px) {
      max-height: 100%;
    }

    &__tab {
      display: inline-block;
      margin: 5px;
      padding: 5px 10px;
      background: rgba(255, 255, 255, 0.7);
      font-family: "SF UI Display Medium";
      font-size: 18px;
      cursor: pointer;

      span {
        color: red;
      }

      &_active {
        background: $white;
      }

      &:hover {
        background: $white;
      }
    }
  }

  &-list {
    width: 100%;
    background: $grayBlack;
    padding: 20px 20px 15px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    max-height: 330px;
    overflow: scroll;

    @media all and (min-width: 768px) {
      max-height: 620px;
    }

    ::v-deep {
      span {
        display: none;
      }
    }

    &__item {
      width: 100%;
      background: $white;
      display: flex;
      cursor: pointer;
      box-sizing: border-box;
      margin-bottom: 15px;
      overflow: hidden;
      position: relative;
      height: 115px;

      @media all and (min-width: 768px) {
        width: 49%;
        height: auto;
      }

      &:after {
        content: "";
        width: 50px;
        height: 50px;
        background: $yellow;
        position: absolute;
        right: -30px;
        bottom: -30px;
        transform: rotate(45deg);
      }

      img {
        min-width: 45%;
        width: 45%;
        padding: 2px;
        object-fit: cover;
      }
      span {
        display: block;
        padding: 10px;
        color: $grayBlack;
        font-size: 16px;
        line-height: 1.3;

        @media all and (min-width: 768px) {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
