import "./assets/main.css";

import { useIntersectionObserver } from "@vueuse/core";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/styles/common.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("image-lazy", {
  mounted(el, binding) {
    console.log(el, binding);
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting);
      if (isIntersecting) {
        // 进入视口区域
        el.src = binding.value;
        stop();
      }
    });
  },
});
app.mount("#app");
