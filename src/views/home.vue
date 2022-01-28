<template>
  <el-container>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="4">
          <div v-for="(item, index) in functions" :key="index" class="pb-4">
            <el-button
              class="w-full"
              @click="$router.push({ name: item.routeName })"
            >
              {{ item.title }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      functions: [
        { title: "Anonymous", routeName: "Anonymous", icon: "" },
        { title: "Apple", routeName: "Apple", icon: "" },
        { title: "Email/Password", routeName: "EmailPassword", icon: "" },
        { title: "Facebook", routeName: "Facebook", icon: "" },
        { title: "GameCenter", routeName: "GameCenter", icon: "" },
        { title: "Github", routeName: "Github", icon: "" },
        { title: "Google", routeName: "Google", icon: "" },
        { title: "Microsoft", routeName: "Microsoft", icon: "" },
        { title: "Phone", routeName: "Phone", icon: "" },
        { title: "Play Games", routeName: "Play Games", icon: "" },
        { title: "Twitter", routeName: "Twitter", icon: "" },
        { title: "Yahoo", routeName: "Yahoo", icon: "" },
      ],
    };
  },
};
</script>
