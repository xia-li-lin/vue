<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link :to="index" exact tag="li" event="click">
          <i class="fa fa-home"></i>
          <span> home</span>
        </router-link>
        <router-link :to="{path:'/about'}" tag="li" active-class="activeClass" event="click">
          <i></i>
          <span>about</span>
        </router-link>
        <router-link to="/document#abc" tag="li" event="click">
          <i></i>
          <span>document</span>
        </router-link>
        <router-link to="/user" tag="li" event="click">
          <i></i>
          <span>user</span>
        </router-link>
      </ul>
    </div>

    <input type="button" value="后退" @click="backHandleClick">
    <input type="button" value="前进" @click="forwardHandleClick">
    <input type="button" value="控制前进后退的步数" @click="goHandleClick">
    <input type="button" value="控制指定的导航push" @click="pushHandleClick">
    <input type="button" value="替换当前历史记录" @click="replaceHandleClick">
<!--    <router-view name="slider" />-->
<!--    {{$route.meta.index}}-->
    <transition :name="names">
      <router-view class="center" />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  watch:{
    $route(to,from){
      // console.log(to.meta.index);
      // console.log(from.meta.index);
      if(to.meta.index<from.meta.index){
        this.names='right';
      }else{
        this.names='left';
      }
    }
  },
  data(){
    return {
      index:'/',
      names:'left'
    }
  },
  methods:{
    backHandleClick(){
      this.$router.back();
    },
    forwardHandleClick(){
      this.$router.forward();
    },
    goHandleClick(){
      this.$router.go(-2);
    },
    pushHandleClick(){
      // this.$router.push('/document');
      this.$router.push({path:'/document'});
    },
    replaceHandleClick(){
      this.$router.replace({path:'/user'});
    }
  }
}
</script>
<style>
  .v-enter{
    opacity: 0;
  }
  .v-enter-active{
    transition: 1s;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-leave{
    opacity: 1;
  }
  .v-leave-to{
    opacity: 0;
  }
  .v-leave-active{
    transition: 1s;
  }
  .left-enter{
    transform: translateX(100%);
  }
  .left-enter-to{
    transform: translateX(0);
  }
  .left-enter-active{
    transition: 1s;
  }
  .left-leave{
    transform: translateX(0);
  }
  .left-leave-to{
    transform: translateX(-100%);
  }
  .left-leave-active{
    transition: 1s;
  }

  .right-enter{
    transform: translateX(-100%);
  }
  .right-enter-to{
    transform: translateX(0);
  }
  .right-enter-active{
    transition: 1s;
  }
  .right-leave{
    transform: translateX(0);
  }
  .right-leave-to{
    transform: translateX(100%);
  }
  .right-leave-active{
    transition: 1s;
  }
</style>
