import { createApp } from "vue/dist/vue.esm-bundler.js";

import Hello from "@/components/HelloWorld.vue";

createApp({
  // Setting the Vue template file rendering flag is mainly to avoid conflicts with other rendering engine tags
  // 设置Vue模板文件渲染标记符,主要是为了避免和其他渲染引擎标记冲突
  compilerOptions: {
    delimiters: ["{[", "]}"],
    comments: true,
  },
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
