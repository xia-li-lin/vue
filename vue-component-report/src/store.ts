import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      n:1
  },
  mutations: {
      changeN(state,m){
        console.log(m);
        return state.n=m;
      }
  },
  actions: {

  }
})
