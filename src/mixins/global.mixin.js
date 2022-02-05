import { getAuth } from "firebase/auth";
export const globalMixin = {
  data() {
    return {};
  },
  computed: {
    currentUser() {
      console.log("abc");
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user);
    },
  },
  methods: {},
};
