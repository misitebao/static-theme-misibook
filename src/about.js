import { createApp } from "vue/dist/vue.esm-bundler.js";

createApp({
  setup() {
    let name = "zhangsan";
    return {
      name,
    };
  },
}).mount("#app");
