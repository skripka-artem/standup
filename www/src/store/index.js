import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlistArray: [],
    videoArray: [],
    menu: false,
    afisha: [],
    images: [],
    slider: [],
    aboutUs: [],
    place: [],
    police: []
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
    },
    getAfisha: state => {
      return state.afisha;
    },
    getImages: state => {
      return state.images;
    },
    getSlider: state => {
      return state.slider;
    },
    getAboutUs: state => {
      return state.aboutUs;
    },
    getPlace: state => {
      return state.place;
    },
    getPolice: state => {
      return state.police;
    }
  },
  actions: {
    async loadPolice({ commit }) {
      let police = await axios.get(
        "http://admin.undergroundstandup.com/wp-json/wp/v2/pages/103"
      );
      console.log(police);
      commit("SET_POLICE", police.data);
    },
    async loadImages({ commit }) {
      let images = await axios.get(
        "http://admin.undergroundstandup.com/wp-json/wp/v2/media?per_page=100"
      );

      commit("SET_IMAGES", images.data);
    },
    async loadAfisha({ commit }) {
      let afisha = await axios.get(
        "http://admin.undergroundstandup.com/wp-json/wp/v2/afisha?per_page=100"
      );

      commit("SET_AFISHA", afisha.data);
    },
    async loadSlider({ commit }) {
      let slider = await axios.get(
        "http://admin.undergroundstandup.com/wp-json/wp/v2/slider"
      );

      commit("SET_SLIDER", slider.data);
    },
    async loadPlace({ commit }) {
      let place = await axios.get(
        "http://admin.undergroundstandup.com/wp-json/wp/v2/place"
      );

      commit("SET_PLACE", place.data);
    },
    async loadAboutUs({ commit }) {
      let item = await axios.get(
        "http://admin.undergroundstandup.com/wp-json/wp/v2/posts"
      );
      commit("SET_ABOUT_US", item.data);
    },
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
    },
    SET_AFISHA(state, afisha) {
      state.afisha = afisha || [];
    },
    SET_IMAGES(state, images) {
      state.images = images || [];
    },
    SET_SLIDER(state, date) {
      state.slider = date || [];
    },
    SET_ABOUT_US(state, date) {
      state.aboutUs = date || [];
    },
    SET_PLACE(state, place) {
      state.place = place || [];
    },
    SET_POLICE(state, police) {
      state.police = police || [];
    }
  }
});
