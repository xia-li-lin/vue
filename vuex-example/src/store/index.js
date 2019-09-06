import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import selectModule from "./select";
import incrementModule from './increment'

Vue.use(Vuex)



let store=new Vuex.Store({
    modules:{
        selectModule:selectModule,
        incrementModule:incrementModule
    }
})

export default store
