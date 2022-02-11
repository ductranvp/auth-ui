<template>
  <div>
    <div>Home Page</div>
    <div>
      <el-button @click="logout">Log out</el-button>
      <el-button @click="$router.push({ name: 'EmailPassword' })">
        Email
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
