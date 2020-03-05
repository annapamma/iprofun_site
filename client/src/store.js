import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import axios from 'axios';
// import luad from '../data/luad.js'


export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    'SET_LOADING'(state, loading) {
        state.loading = loading;
    }
  },
  actions: {
    fetchTable(store, { tumor }) {
        store.commit('SET_LOADING', true);
      console.log('in action')
      // axios.get(
      //   `${apiRoot}/api/${tumor}`,
      // ).then(
      //   ({ data }) => {
      //       console.log(data)
      //   },
      // ).then(
      //   () => {
      //   },
      // ).catch(
      //   () => {
      //     console.log('oh no there was an error!');
      //   },
      // );
    },
  }
})
