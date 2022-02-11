import { userService } from "../services/user.service.js";

export const namespaced = true;

export const state = {
  user: null,
};

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};

export const getters = {};

export const actions = {
  async initUserStore({ commit }) {
    const user = await userService.getCurrentUserInfo();
    commit("SET_USER", user);
    throw new Error();
  },
};
