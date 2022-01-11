import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import VCalendar from 'v-calendar';
import router from './router'
import VueBottomNavigation from "bottom-navigation-vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

library.add(faTrash);
library.add(faHandPaper);
library.add(faEdit);

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
