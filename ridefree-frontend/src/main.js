import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import VCalendar from 'v-calendar';
import router from './router'
import VueBottomNavigation from "bottom-navigation-vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

/**
 * Load JWT from Local Storage on Refresh
 */
let localAuthToken = localStorage.auth_token;
let cookieExists = localAuthToken !== "undefined" && localAuthToken !== null;
if (cookieExists) {
  const auth_token = localStorage.getItem("auth_token");
  const authTokenExists = auth_token !== "undefined" && auth_token !== null;
  if (authTokenExists) {
    store.dispatch("loginUserWithToken", { auth_token });
  }
}

library.add(faTrash);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const toastOpts = {};

createApp(App)
.use(store)
.use(router)
.use(VueBottomNavigation)
.use(Toast, toastOpts)
.use(VCalendar, {})
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");
