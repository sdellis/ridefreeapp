import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Rides from "@/components/Rides.vue";
import AddRide from "@/components/AddRide.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rides",
    name: "Rides",
    component: Rides,
  },
  {
    path: "/addride",
    name: "AddRide",
    component: AddRide,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
