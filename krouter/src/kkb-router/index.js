let Vue;
class KRouter{
    static install(_Vue){
        Vue=_Vue
        Vue.mixin({
            beforeCreate() {
                Vue.prototype.$kkbrouter='啦啦啦...'
            }
        })
    }
}

export default KRouter
