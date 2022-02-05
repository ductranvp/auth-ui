import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

/*
 * To resolve "Uncaught ReferenceError: process is not defined"
 * We assign process.env as global variables for vite app
 * https://vitejs.dev/config/#define
 * */
const envVariables = {};
Object.keys(process.env).forEach((key) => {
  if (key.startsWith("APP_")) {
    envVariables["process.env." + key] = `'${process.env[key]}'`;
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  envPrefix: "APP_",
  define: envVariables,
});
