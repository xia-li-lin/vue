import Vue from 'vue';
import Router from 'vue-router';

import home from '@/components/home';
import about from "@/components/about";
import document from "@/components/document";
// import noFound from '@/components/404';
import user from "@/components/user";
import study from "@/views/study";
import work from "@/views/work";
import hobby from "@/views/hobby";
import slider from "@/views/slider";

Vue.use(Router);

let router=new Router({
    mode:'history',
    // linkActiveClass:'is-active',
    scrollBehavior(to,from,savePosition){
        // console.log(to);
        // console.log(from);
        // console.log(savePosition);

        // if(savePosition){
        //     return savePosition;
        // }else{
        //     return {x:0,y:0};
        // }

        // if(to.hash){
        //     return {
        //         selector:to.hash
        //     }
        // }
    },
    routes:[
        {
            path:'/',
            component:home,
            meta:{
                index:0,
                title:'home'
            },
            beforeEnter(to,from,next){
                console.log('beforeEnter');
                next();
            }
        },
        {
            path:'/home',
            name:'home',
            alias:'/index',
            component:home,
            meta:{
                index:0,
                title:'home'
            }
        },
        {
            path: '/about',
            component: about,
            children:[
                {
                    path:'',
                    name:'about',
                    component:study,
                    meta:{
                        index:1,
                        title:'about'
                    }
                },
                {
                    path:'/work',
                    name:'work',
                    component: work
                },
                {
                    path:'/hobby',
                    name:'hobby',
                    component:hobby
                }
            ]
        },
        {
            path:'/document',
            name:'document',
            components:{
                default:document,
                slider:slider
            },
            meta:{
                index:2,
                title:'document'
            }
        },
        {
            path:'/user/:type?/:userId?',
            name:'user',
            component:user,
            meta:{
                index:3,
                login:true,
                title:'user'
            }
        },
        // {
        //     path:'*',
        //     // component:noFound
        //     // redirect:'/home'
        //     // redirect:{path:'/home'}
        //     // redirect:{name:'home'}
        //     // eslint-disable-next-line no-console
        //     redirect:(to)=>{console.log(to);
        //         return '/home';
        //     }
        // }
    ]
});

/*全局导航钩子函数*/
// router.beforeEach((to,from,next)=>{
//     // console.log('beforeEach...');
//     // if(to.meta.login){
//     //     next('/login');
//     // }else{
//     //     next();
//     // }
//
//     next();
// });
//
// router.afterEach((to,from)=>{
//     if(to.meta.title){
//         window.document.title=to.meta.title;
//     }else{
//         window.document.title='app';
//     }
// });

export default router;
