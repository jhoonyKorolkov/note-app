import { data } from '@/api';

const notes = {
  namespaced: true,
  state: {
    notes: [],
  },
  getters: {
    notes: ({ notes }) => notes,
  },
  mutations: {
    GET_NOTES(state, payload) {
      state.notes = payload;
    },
    ADD_NOTE(state, payload) {
      state.notes.push(payload);
    },
    REMOVE_NOTE(state, id) {
      const index = state.notes.findIndex((item) => item.id == id);
      state.notes.splice(index, 1);
    },
    UPDATE_NOTE(state, payload) {
      state.notes.forEach((el) => {
        if (el.id !== payload.id) return;
        el.title = payload.title;
      });
    },
  },
  actions: {
    getNotes({ commit }) {
      commit('GET_NOTES', data);
      //? Что то типо эмитации получения данных:)
    },
    saveNote({ commit }, payload) {
      commit('ADD_NOTE', payload);
    },
    removeNote({ commit }, payload) {
      commit('REMOVE_NOTE', payload);
    },
    updateNote({ commit }, payload) {
      commit('UPDATE_NOTE', payload);
    },
  },
};
export default notes;
