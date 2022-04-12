import { status as data } from '@/api';

const status = {
  namespaced: true,
  state: {
    status: [],
  },
  getters: {
    status: ({ status }) => status,
  },
  mutations: {
    GET_STATUS(state, payload) {
      state.status = payload;
    },
  },
  actions: {
    getStatus({ commit }) {
      commit('GET_STATUS', data);
    },
  },
};
export default status;
