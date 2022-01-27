import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import vi from "element-plus/es/locale/lang/vi";

import "./assets/styles/index.scss";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: vi });

app.mount("#app");
