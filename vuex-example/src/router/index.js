import Vue from 'vue';
import VueRouter from "vue-router";

import Select from "@/components/select";
import Increment from "@/components/Increment";

Vue.use(VueRouter);

let router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Select
        },
        {
            path: '/increment',
            component: Increment
        }
    ]
});

export default router;
