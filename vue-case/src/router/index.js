import Vue from 'vue'
import VueRouter from 'vue-router'

import tab from "@/components/tab";
import qq from "@/components/qq";
import shuttle from "@/components/shuttle";

Vue.use(VueRouter)

const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/tab',
            component:tab
        },
        {
            path:'/qq',
            component: qq
        },
        {
            path:'/shuttle',
            component:shuttle
        }
    ]
})

export default router
