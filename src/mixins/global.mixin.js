import { getAuth } from "firebase/auth";
import { logout } from "../utils/auth.util.js";
export const globalMixin = {
  data() {
    return {};
  },
  computed: {
    currentUser() {
      return getAuth().currentUser;
    },
  },
  methods: {
    async logout() {
      await logout();
      await this.$router.push({ name: "Login" });
    },
  },
};
