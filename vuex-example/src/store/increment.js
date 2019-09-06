const incrementModule={
    state:{
        count:100
    },
    getters:{
        filterCount(state){
            return state.count>=120?120:state.count;
        }
    },
    mutations:{
        addIncrement(state,payload){
            state.count+=payload.num;
        },
        reduceIncrement(state,payload){
            state.count-=payload.num;
        }
    }
}

export default incrementModule
