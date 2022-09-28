import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlistArray: [],
    videoArray: [],
    menu: false
  },
  getters: {
    getPlaylist: state => {
      return state.playlistArray;
    },
    getVideo: state => {
      return state.videoArray;
    },
    getMenu: state => {
      return state.menu;
    }
  },
  actions: {
    async loadPlaylist({ commit }, payload) {
      let playlist = await axios.get(
        "https://content.googleapis.com/youtube/v3/playlists",
        {
          params: {
            channelId: payload.channelId,
            maxResults: "50",
            part: "snippet,contentDetails",
            key: payload.apiKey
          }
        }
      );
      commit("SET_PLAYLIST_COLLECTION", playlist.data.items);
    },

    async loadVideos({ commit }, payload) {
      let playlist = await axios.get(
        "https://content.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            playlistId: payload.playlistId,
            maxResults: "500",
            part: "snippet,contentDetails",
            key: payload.apiKey
          }
        }
      );
      commit("SET_VIDEOS_COLLECTION", playlist.data.items);
    },

    async toggleMenu({ commit }, payload) {
      console.log("dddd");
      commit("SET_TOGGLE_MENU", payload);
    }
  },
  mutations: {
    SET_PLAYLIST_COLLECTION(state, playlistArray) {
      state.playlistArray = playlistArray || [];
    },
    SET_VIDEOS_COLLECTION(state, video) {
      state.videoArray = video || [];
    },
    SET_TOGGLE_MENU(state, action) {
      state.menu = action || [];
    }
  }
});
