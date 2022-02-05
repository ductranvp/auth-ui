import { createRouter, createWebHistory } from "vue-router";
import PublicRoutes from "./routes/public.route";
import PrivateRoutes from "./routes/private.route";

const routes = [...PublicRoutes, ...PrivateRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
