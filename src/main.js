import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import routes from "./routers";

createApp(App).component("Icon", Icon).use(routes).mount("#app");
