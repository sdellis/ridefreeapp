import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Rides from "@/components/Rides.vue";
import AddRide from "@/components/AddRide.vue";
import ShowEditRide from "@/components/ShowEditRide.vue";
import Session from "@/components/Session.vue";

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
    path: "/ride/add",
    name: "AddRide",
    component: AddRide,
  },
  {
    path: "/ride/:id",
    name: "ShowEditRide",
    component: ShowEditRide,
  },
  {
    path: "/session",
    name: "Session",
    component: Session,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
