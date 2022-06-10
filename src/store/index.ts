import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      albums: [],
    };
  },

  getters: {
    filteredAlbums(state, searchKeys) {}
  }
});

export default store;
