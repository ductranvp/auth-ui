import { getToken } from "../utils/token.util.js";

import store from "../stores";
import { hasAuthority } from "../utils/auth.util.js";

export function createRouterGuard(
  router,
  {
    loginPage = "Login",
    homePage = "Home",
    notFoundPage = "NotFound",
    forbiddenPage = "Forbidden",
  } = {}
) {
  router.beforeEach(async (to, from, next) => {
    const matched = to.matched[0];

    // route not found
    if (!matched) {
      next({ name: notFoundPage });
      return;
    }

    if (to.meta.title) {
      document.title = to.meta.title;
    }

    const token = getToken();

    // If route require roles
    if (to.meta.roles && to.meta.roles.length) {
      if (!token) {
        next({ name: loginPage });
      } else {
        if (!store.state.userModule.user) {
          await store.dispatch("userModule/initUserStore");
        }
        if (hasAuthority(to.meta.roles)) {
          next();
        } else {
          next({ name: forbiddenPage });
        }
      }
    } else {
      // If route doesn't require route

      // If current page is login page & found a token
      if (to.name === loginPage && token) {
        // If don't have user info
        if (!store.state.userModule.user) {
          await store.dispatch("userModule/initUserStore");
        }
        next({ name: homePage });
      } else {
        next();
      }
    }
  });
}
