import { createStore } from "vuex";
import * as user from "./user.store.js";

const store = createStore({
  modules: {
    userModule: user,
  },
});

export default store;
