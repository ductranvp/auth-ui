<template>
  <el-form :model="model" label-position="top">
    <el-form-item label="Email">
      <el-input v-model="model.email" type="email"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="model.password" type="password" show-password>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="doLogin">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "EmailPasswordLogin",
  setup() {
    const model = ref({ email: null, password: null });
    function doLogin() {
      if (!model.value.email || model.value.email.length < 4) {
        alert("Please enter an email address.");
        return;
      }
      if (!model.value.password || model.value.password.length < 4) {
        alert("Please enter a password.");
        return;
      }
      // Create user with email and pass.
      const auth = getAuth();
      signInWithEmailAndPassword(auth, model.value.email, model.value.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(userCredential);
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
    return { model, doLogin };
  },
};
</script>

<style scoped></style>
