import Vue from 'vue';
import Vuex from 'vuex';

import notes from './modules/notes';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    notes,
  },
});

export default store;
