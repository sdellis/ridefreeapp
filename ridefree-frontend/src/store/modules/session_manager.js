import axios from 'axios';
const BASE_URL = "http://localhost:3000/"

const state = {
  auth_token: null,
  user: {
    id: null,
    username: null,
    email: null,
  }
};

const getters = {
  getAuthToken(state) {
    return state.auth_token;
  },
  getUserEmail(state) {
    return state.user?.email;
  },
  getUserID(state) {
    return state.user?.id;
  },
  isLoggedIn(state) {
    const loggedOut =
      state.auth_token == null || state.auth_token == JSON.stringify(null);
    return !loggedOut;
  },
};

const actions = {
  registerUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users`, payload)
        .then((response) => {
          commit("setUserInfo", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  loginUser({ commit }, payload) {
    console.log(payload);
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users/sign_in`, payload)
        .then((response) => {
          commit("setUserInfo", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });

    });
  },
  logoutUser({ commit }) {
    const config = {
      headers: {
        Authorization: state.auth_token,
      },
    };
    new Promise((resolve, reject) => {
      axios
        .delete(`${BASE_URL}users/sign_out`, config)
        .then((response) => {
          commit("resetUserInfo", response);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });

    });
  },
  loginUserWithToken({ commit }, payload) {
    const config = {
      headers: {
        Authorization: payload.auth_token,
      },
    };
    new Promise((resolve, reject) => {
      axios
        .delete(`${BASE_URL}member-data`, config)
        .then((response) => {
          commit("setUserInfoFromToken", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

const mutations = {
  setUserInfo(state, payload) {
    state.user = payload.data.user;
    state.auth_token = payload.headers.authorization;
    console.log(payload.headers.authorization)
    axios.defaults.headers.common['Authorization'] = payload.headers.authorization;
    localStorage.setItem("auth_token", payload.headers.authorization);
  },
  setUserInfoFromToken(state, payload) {
    state.user = payload.data.user;
    state.auth_token = localStorage.getItem("auth_token");
  },
  resetUserInfo(state) {
    state.user = {
      id: null,
      username: null,
      email: null,
    }
    state.auth_token = null;
    localStorage.removeItem("auth_token");
    axios.defaults.headers.common['Authorization'] = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
