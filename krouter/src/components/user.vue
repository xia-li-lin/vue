<template>
    <div>
        <div class="user-list">
            <router-link style="padding: 0 20px;" :key="index" v-for="item,index in userList" :to="{path:'/user/'+item.type+'/'+item.id,query: {info:'follow'}}">
                {{item.userName}}
            </router-link>
        </div>
        <div class="user-info" v-if="userInfo.id">
            <p>姓名：{{userInfo.userName}}</p>
            <p>性别：{{userInfo.sex}}</p>
            <p>爱好：{{userInfo.hobby}}</p>
        </div>
        <hr>
        <div class="info-list" v-if="userInfo.id">
            <router-link exact :to="{path:'',query:{info:'follow'}}">TA的关注</router-link>
            <router-link exact to="?info=share">TA的分享</router-link>
            <div>
                {{$route.query}}
            </div>
        </div>
    </div>
</template>

<script>
    import data from '@/mock/data.js';
    export default {
        name: "user",
        data(){
            return {
                userList:data,
                userInfo:{}
            }
        },
        watch:{
            $route(){
              this.getData();
            }
        },
        created() {
            this.getData();
        },
        methods:{
            getData(){
                const params=this.$route && this.$route.params;
                let userId=params && params.userId;
                if(userId){
                    this.userInfo=this.userList.filter((item)=>{
                        return item.id==userId;
                    })[0];
                }else{
                    this.userInfo={};
                }
            }
        }
    }
</script>

<style scoped>
.user-info,
.info-list{
    font-size: 20px;
}
</style>
