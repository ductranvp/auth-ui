<template>
  <el-row type="flex" justify="center">
    <el-col :span="8" class="p-4">
      <div v-if="mode === modeValues.register">
        <EmailPasswordRegister @submit="handleRegisterSubmit" />
        <div>
          <el-button @click="changeMode(modeValues.login)">
            Go to login page
          </el-button>
        </div>
      </div>
      <div v-if="mode === modeValues.login">
        <EmailPasswordLogin @submit="handleLoginSubmit" />
        <div>
          <el-button @click="changeMode(modeValues.register)">
            Go to register page
          </el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import EmailPasswordRegister from "../../components/email-password/EmailPasswordRegister.vue";
import EmailPasswordLogin from "../../components/email-password/EmailPasswordLogin.vue";
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { setToken } from "../../utils/token.util.js";

export default {
  name: "EmailPassword",
  components: { EmailPasswordLogin, EmailPasswordRegister },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const modeValues = reactive({ register: "register", login: "login" });

    const mode = ref(route.query.mode || modeValues.login);

    function changeMode(value) {
      mode.value = value;
      router.replace({ name: "EmailPassword", query: { mode: value } });
    }

    function handleLoginSubmit(user) {
      console.log(user);
      setToken(user.accessToken, true);
      console.log(store);
      store.commit("userModule/SET_USER", user);
      router.push({ name: "Home" });
    }

    function handleRegisterSubmit(user) {
      setToken(user.accessToken, true);
      store.commit("userModule/SET_USER", user);
      router.push({ name: "Home" });
    }

    return {
      modeValues,
      mode,
      changeMode,
      handleLoginSubmit,
      handleRegisterSubmit,
    };
  },
};
</script>
