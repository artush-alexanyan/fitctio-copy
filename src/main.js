import { createApp } from "vue";
import router from "./router/router";
import { createPinia } from "pinia";
import firebase from "./firebase/firebase";
import "./index.css";
import "./assets/fonts/fonts.css";
import "primeicons/primeicons.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(firebase);
app.mount("#app");
