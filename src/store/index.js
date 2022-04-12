<<<<<<< HEAD
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
=======
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
>>>>>>> 5a33d72946134301379ba4cdd0176cea3a06cc6c
