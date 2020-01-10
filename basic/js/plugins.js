// 插件
const MyPlugin = {
    install(Vue, options) {
        Vue.component('heading', {
            props: {
                title: {
                    type: String,
                    default: 'Hello Vue!!!'
                }
            },
            template: `<h1>{{title}}</h1>`
        });
    }
};

// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(MyPlugin);
// }