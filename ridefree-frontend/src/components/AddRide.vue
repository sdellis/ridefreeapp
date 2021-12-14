<template>
  <div>
    <h3>Add Ride</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="pickup_address" placeholder="Add Ride..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions }from 'vuex';
export default {
    name: 'AddRide',
    data() {
      return {
        pickup_address: ""
      }
    },
    methods: {
      ...mapActions(['addRide']),
      onSubmit(event) {
        event.preventDefault();
        this.addRide(this.pickup_address);
        this.pickup_address = "";
      }
    }
}

</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #ccc;
  outline: 0;
}
input[type="text"]:hover, input[type="text"]:focus {
  border: 1px solid #41b883;
}
input[type="submit"]{
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
input[type="submit"]:hover, input[type="submit"]:focus {
  background: #318b63
}
</style>
