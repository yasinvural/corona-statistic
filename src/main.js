import Vue from "vue";
import { Avatar, Collapse, Row, Col } from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(Avatar);
Vue.use(Collapse);
Vue.use(Row);
Vue.use(Col);

new Vue({
  render: h => h(App)
}).$mount("#app");
