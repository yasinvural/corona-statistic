import Vue from "vue";
import { Button, Avatar } from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Avatar);

new Vue({
  render: h => h(App)
}).$mount("#app");
