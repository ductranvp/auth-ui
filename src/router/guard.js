import { getToken, getTokenAsync } from "../utils/token.util.js";

import store from "../stores";
import { hasAuthority } from "../utils/auth.util.js";

export function createRouterGuard(
  router,
  {
    loginPage = "Login",
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

    // set page title
    if (to.meta.title) {
      document.title = to.meta.title;
    }

    const token = getToken() || (await getTokenAsync());

    // private routes
    if (to.meta.roles && to.meta.roles.length) {
      // dont have token, must login
      if (!token) {
        next({ name: loginPage });
      } else {
        // have token but user info is null
        if (!store.state.userModule.user) {
          try {
            // if can't get user info, just go to login page
            await store.dispatch("userModule/initUserStore");
          } catch (e) {
            next({ name: loginPage });
          }
        }

        // check if user has required roles
        if (hasAuthority(to.meta.roles)) {
          next();
        } else {
          next({ name: forbiddenPage });
        }
      }
    }
    // public routes
    else {
      // if found a token
      if (token) {
        if (!store.state.userModule.user) {
          try {
            // if can't get user info, just go to login page
            await store.dispatch("userModule/initUserStore");
          } catch (e) {
            next({ name: loginPage });
          }
        }
        // if route has redirect when user is authenticated
        if (to.meta && to.meta.authenticatedRedirect) {
          next({ name: to.meta.authenticatedRedirect });
        } else {
          next();
        }
      } else {
        next();
      }
    }
  });
}
