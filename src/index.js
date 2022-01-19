import { createApp } from "vue/dist/vue.esm-bundler.js";

import Hello from "@/components/HelloWorld.vue";

createApp({
  components: {
    Hello,
  },
  setup() {
    let name = "zhangsan";
    return {
      name,
    };
  },
}).mount("#app");
