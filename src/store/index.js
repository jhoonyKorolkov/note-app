import Vue from 'vue';
import Vuex from 'vuex';

import notes from './modules/notes';
import status from './modules/status';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    notes,
    status,
  },
});

export default store;
