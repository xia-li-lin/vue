<template>
    <div>
        <div>关于我们</div>
        <hr/>
        <ul class="nav">
<!--            <router-link to="/about" tag="li" exact>-->
<!--                <a>study</a>-->
<!--            </router-link>-->
<!--            <router-link to="/about/work" tag="li">-->
<!--                <a>work</a>-->
<!--            </router-link>-->
<!--            <router-link to="/about/hobby" tag="li">-->
<!--                <a>hobby</a>-->
<!--            </router-link>-->
            <router-link :to="{name:'about'}" tag="li" exact>
                <a>study</a>
            </router-link>
            <router-link :to="{name:'work'}" tag="li">
                <a>work</a>
            </router-link>
            <router-link :to="{name:'hobby'}" tag="li">
                <a>hobby</a>
            </router-link>
        </ul>
        <hr>
        测试数据：{{test}}
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "about",
        data(){
            return {
                test:'改变前'
            }
        },
        beforeCreate(){
            console.log('beforeCreate');
        },
        beforeRouteEnter(to,from,next){
            console.log('beforeRouteEnter');
            // console.log(this);
            next((vm)=>{
              vm.test='改变啦！！！';
            });
        },
        beforeRouteUpdate(to,from,next){
            console.log('beforeRouteUpdate');
            next();
        },
        beforeRouteLeave(to,from,next){
            console.log('beforeRouteLeave');
            next();
        }
    }
</script>

<style scoped>

</style>
