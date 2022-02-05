const PublicRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../../views/public/login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/email-password",
    name: "EmailPassword",
    component: () => import("../../views/public/email-password.vue"),
    meta: {
      title: "Email Password",
    },
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: () => import("../../views/public/not-found.vue"),
    meta: {
      title: "Not Found",
    },
  },
  {
    path: "/forbidden",
    name: "Forbidden",
    component: () => import("../../views/public/forbidden.vue"),
    meta: {
      title: "Not Found",
    },
  },
];

export default PublicRoutes;
