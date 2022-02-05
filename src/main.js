/* Core */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";

/* Libraries */
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import vi from "element-plus/es/locale/lang/vi";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Assets */
import "./assets/icons/fontawesome.js";
import "./assets/styles/index.scss";

/* Custom configs */
import { initFirebase } from "./configs/firebase.config.js";
import { createRouterGuard } from "./router/guard.js";
import { globalMixin } from "./mixins/global.mixin.js";

function bootstrap() {
  createRouterGuard(router);
  initFirebase();

  const app = createApp(App);
  app.use(store).use(router).use(ElementPlus, { locale: vi });
  app.mixin(globalMixin);
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.mount("#app");
}

bootstrap();
