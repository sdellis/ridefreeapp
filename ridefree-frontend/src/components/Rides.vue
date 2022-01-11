<template>
  <div>
    <h2>Rides</h2>
    <div class="legend">
      <span>Double click to claim ride.</span>
      <span>
        <span class="unclaimed">  = Unclaimed</span>
      </span>
      <span>
        <span class="claimed">  = Claimed</span>
      </span>
    </div>
    <div class="rides">
      <div
      class="ride"
      v-for="ride in allRides"
      :key="ride.id"
      v-bind:class="{ is_claimed: ride.claimed }"
      >
        <div class="details">
          {{ ride.pickup_address }} to {{ ride.dropoff_address }}
          on {{ ride.pickup_datetime }}
        </div>
        <div class="cardmenu">
          <div @click="onDoubleClick(ride)">
            <font-awesome-icon
              icon="hand-paper"
              class="i"
            /> CLAIM
          </div>
          <div @click="onClick(ride)">
            <font-awesome-icon
              icon="edit"
              class="i"
            /> EDIT
          </div>
          <div @click="deleteRide(ride.id)">
            <font-awesome-icon
              icon="trash"
              class="i"
            /> REMOVE
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "Rides",
  props: {
    msg: String,
  },
  methods: {
    ...mapActions([
      'fetchRides',
      'deleteRide',
      'updateRide'
    ]),
    onDoubleClick(currentRide) {
      const updatedRide = {
        id: currentRide.id,
        pickup_address: currentRide.pickup_address,
        dropoff_address: currentRide.dropoff_address,
        pickup_datetime: currentRide.pickup_datetime,
        claimed: !currentRide.claimed,
      }
      this.updateRide(updatedRide)
    },
    onClick(currentRide) {
      this.$router.push('/ride/' + currentRide.id)
    },
  },
  computed: {
    ...mapGetters([
      'allRides',
    ])
  },
  created() {
    this.fetchRides()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.rides {
  --w:400px;
  --n:3;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(max(var(--w), 100%/(var(--n) + 1) + 0.1%),1fr)); /*this */
  gap:1rem;
}

/* .rides {
  --w:300px;
  --n:3;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
} */
.ride {
  border: 1px solid #ccc;
  height:200px;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.cardmenu {
  display: flex;
  justify-content: center;
  gap:2rem;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.i {
  /* position: absolute;
  bottom: 10px;
  right: 10px; */
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.claimed {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.unclaimed {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b882;
}
.is_claimed {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .rides {
    grid-template-columns: 1fr;
  }
}
</style>
