import axios from 'axios';
const api_url = "http://localhost:3000/api/v1/rides"

const state = {};
const getters = {
  allRides: (state) => state.rides,
  ride: (state) => state.ride,
};
const actions = {
  async fetchRides({ commit }) {
    const response = await axios.get(api_url);
    commit('setRides', response.data);
  },
  async fetchRide({ commit }, id) {
    const response = await axios.get(api_url + `/${id}`);
    commit('setRide', response.data);
  },
  async addRide( { commit }, r) {
    const response = await axios.post(api_url,
      {
        ride: {
          pickup_address: r.pickup_address,
          dropoff_address: r.dropoff_address,
          pickup_datetime: r.pickup_datetime,
          notes: r.notes,
          claimed: false
        }
      });
      commit('newRide', response.data);
  },
  async deleteRide({ commit }, id) {
    await axios.delete(api_url + `/${id}`);
    commit('removeRide', id);
  },
  async updateRide({ commit }, updatedRide) {
    const response = await axios.put(api_url + `/${updatedRide.id}`, updatedRide);
    commit('setUpdatedRide', response.data)
  }
};
const mutations = {
  setRides: (state, rides) => (state.rides = rides),
  setRide: (state, ride) => (state.ride = ride),
  newRide: (state, ride) => (state.rides.unshift(ride)),
  removeRide: (state, id) =>
    (state.rides = state.rides.filter(ride => ride.id !== id)),
  setUpdatedRide: (state, updatedRide) => {
    const index = state.rides.findIndex(ride => ride.id === updatedRide.id);
    if (index !== -1) {
      state.rides.splice(index, 1, updatedRide);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
