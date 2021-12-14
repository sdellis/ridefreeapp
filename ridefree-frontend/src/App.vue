<template>
  <div id="app">
    <div class="container">
      <h1>Ride Free</h1>
      <AddRide />
      <Rides />
    </div>
  </div>
</template>

<script>
import Rides from '@/components/Rides.vue';
import AddRide from '@/components/AddRide.vue';
export default {
  name: "App",
  components: {
    Rides,
    AddRide,
  },
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
