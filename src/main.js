import Vue from "vue";
import { Button, Avatar, Collapse } from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Avatar);
Vue.use(Collapse);

new Vue({
  render: h => h(App)
}).$mount("#app");
