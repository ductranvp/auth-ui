const PrivateRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../../views/private/home.vue"),
    meta: {
      title: "Home Page",
      roles: ["USER"],
    },
  },
];

export default PrivateRoutes;
