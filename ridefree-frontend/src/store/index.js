import { createStore } from "vuex";
import rides from "@/store/modules/rides";
import sessionManager from "@/store/modules/session_manager";

export default createStore({
  modules: {
    rides,
    sessionManager,
  }
});
