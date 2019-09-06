import Vue from 'vue';
import Router from 'vue-router';

import home from '@/components/home';
import login from "@/components/login";

// import layout from "@/views/layout";
import project from "@/views/backend/project";
import doc from "@/views/backend/doc";
import workbench from "@/views/backend/workbench";

let layout=(resolve)=>{
    return require.ensure([],()=>{
        resolve(require('@/views/layout'))
    },'abc')
};

Vue.use(Router);

let router=new Router({
    mode:'history',
    linkActiveClass:'is-active',
    routes:[
        {
            path:'/',
            name:'Home',
            component:home
        },
        {
            path: '/management',
            name:'Management',
            component: layout,
            children:[
                {
                    path:'/project',
                    name:'Project',
                    component:project,
                    meta:{
                        login:true
                    }
                },
                {
                    path:'/doc',
                    name:'Doc',
                    component:doc
                },
                {
                    path:'/workbench',
                    name:'Workbench',
                    component:workbench,
                    meta:{
                        login:true
                    }
                }
            ]
        },
        {
            path:'/login',
            name:'Login',
            component:login
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
});

router.beforeEach((to, from, next)=>{
    console.log(to);
    let bol=to.matched.some((item)=>{
        return item.meta.login;
    });
    if(bol){
        let info=router.app.$local.fetch('miaov');
        if(info.login){
            next();
        }else{
            router.push({
                path:'/login',
                query:{
                    redirect:to.path.slice(1)
                }
            });
        }
    }else{
        next();
    }
});

export default router;
