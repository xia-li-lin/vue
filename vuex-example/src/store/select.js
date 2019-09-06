import axios from "axios";

const selectModule={
    state:{
        title:'',
        list:[]
    },
    mutations:{
        changeTitle(state,payload){
            state.title=payload.title;
        },
        changeList(state,list){
            state.list=list;
        }
    },
    actions:{
        addAction(context){
            setTimeout(()=>{
                context.commit('addIncrement',{num:5});
                context.dispatch('textAction',{test:'测试'});
            },1000);
        },
        textAction(context,obj){
            console.log(obj);
        },
        getListAction({commit}){
            axios.get('https://easy-mock.com/mock/5d5d0217d3c3093825873711/example/list').then((data)=>{
                console.log(data.data.lists);
                commit('changeList',data.data.lists)
            }).catch((error)=>{
                console.error(error);
            });
        }
    }
}

export default selectModule
