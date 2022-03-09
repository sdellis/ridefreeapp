<template>
  <div id="app">
    <div class="container">
      <h1>Ride Free</h1>
      <router-view></router-view>
      <VueBottomNavigation :options="options" v-model="selected" />
    </div>
  </div>
</template>

<script>
import VueBottomNavigation from "bottom-navigation-vue";
export default {
  name: "App",
  components: { VueBottomNavigation },
  data: () => ({
    selected: 1,
    options: [
      {
        id: 1,
        icon: "fas fa-home",
        title: "Home",
        path: "/",
      },
      { id: 2, icon: "fas fa-plus", title: "Request Ride", path: "/ride/add" },
      { id: 3, icon: "fas fa-car", title: "Rides", badge: 15, path: "/rides" },
      { id: 4, icon: "fas fa-bell", title: "Notification", badge: 10 },
      { id: 5, icon: "fas fa-user", title: "Account", path:"/session" },
    ],
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
