<template>
  <el-row>
    <el-col :span="12" class="p-4">
      <EmailPasswordRegister />
    </el-col>
    <el-col :span="12" class="p-4">
      <EmailPasswordLogin />
    </el-col>
  </el-row>
</template>

<script>
import EmailPasswordRegister from "../components/email-password/EmailPasswordRegister.vue";
import EmailPasswordLogin from "../components/email-password/EmailPasswordLogin.vue";
export default {
  name: "EmailPassword",
  components: { EmailPasswordLogin, EmailPasswordRegister },
};
</script>
