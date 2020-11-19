import { createApp } from "vue";
//import App from "./App.vue";
import App from "./Empty.vue";
import "./style.scss";

const app = createApp(App);
app.mount("#app");
app.config.devtools = true;
window.app = app;
