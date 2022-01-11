<template>
  <div>
    <h2>Show Edit Ride</h2>
    <div class="showedit" v-show="!editing">
      <p>
        {{ ride.pickup_address }}
        to {{ ride.dropoff_address }}
        on {{ ride.pickup_datetime }}
      </p>
      <span>
        <button @click="editRide">Edit Ride</button>
      </span>
    </div>
    <form v-show="editing" @submit="onSubmit">
      <input id="ride_id" type="hidden" v-model="ride.id" />
      <ul class="flex-outer">
        <li>
          <label for="pickup_address">Pickup Address</label>
          <input id="pickup_address" type="text" v-model="ride.pickup_address" placeholder="Pickup" />
        </li>
        <li>
          <label for="dropoff_address">Dropoff Address</label>
          <input id="dropoff_address" type="text" v-model="ride.dropoff_address" placeholder="Dropoff">
        </li>
        <li>
          <label for="pickup_datetime">Pickup Date/Time</label>
          <v-date-picker class="pickup_datetime" v-model="ride.pickup_datetime" mode="dateTime" />
        </li>
        <li>
          <label for="notes">Note to Driver</label>
          <textarea rows="6" id="notes" v-model="ride.notes" placeholder="Need assistance getting to vehicle, car seat needed, etc."></textarea>
        </li>
        <li>
          <button @click="editRide">X</button>
        </li>
        <li>
          <input type="submit" value="Update Ride" />
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { useToast } from "vue-toastification";
export default {
    name: 'ShowEditRide',
    data() {
      return {
        editing: true,
      }
    },
    computed: {
      ...mapGetters([
        'ride',
      ])
    },
    methods: {
      ...mapActions([
        'fetchRide',
        'deleteRide',
        'updateRide'
      ]),
      redirect () {
        this.$router.push('/rides');
      },
      onSubmit(event) {
        event.preventDefault();
        this.updateRide(this.ride);
        // Get toast interface
        const toast = useToast();
        toast.success("Ride Updated!", {
          timeout: 2000,
          onClose: this.redirect()
        });
      },
      editRide () {
        this.editing = !this.editing
      },
    },
    created() {
      this.fetchRide(this.$route.params.id)
    }
}

</script>

<style scoped>
form {
  display: flex;
}
.pickup_datetime {
  min-width: 315px;
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


.flex-outer,
.flex-inner {
  list-style-type: none;
  padding: 0;
}

.flex-outer {
  max-width: 800px;
  margin: 0 auto;
}

.flex-outer li,
.flex-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.flex-inner {
  padding: 0 8px;
  justify-content: space-between;
}

.flex-outer > li:not(:last-child) {
  margin-bottom: 20px;
}

.flex-outer li label,
.flex-outer li p {
  padding: 8px;
  font-weight: 300;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.flex-outer > li > label,
.flex-outer li p {
  flex: 1 0 100px;
  max-width: 220px;
}

.flex-outer > li > label + *,
.flex-inner {
  flex: 1 0 220px;
}

.flex-outer li p {
  margin: 0;
}

.flex-outer li input:not([type='checkbox']),
.flex-outer li textarea {
  padding: 15px;
  border: 1px solid #ccc;
}

.flex-inner li {
  width: 100px;
}
</style>
