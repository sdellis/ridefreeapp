import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
