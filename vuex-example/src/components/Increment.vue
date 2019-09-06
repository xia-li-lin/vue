<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="reduceHandle({num:5})"/>
      <span>{{incrementModule.count}}</span>
      <input type="button" value="+" @click="addHandle"/>
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
      // computed:mapState({
      //   num:state=>state.count
      // }),
      // computed:mapState(['count']),
      computed:{
        abc(){
          return 123;
        },
        ...mapGetters({num2:'filterCount'}),
        ...mapState(['incrementModule'])
      },
      methods:{
        // addHandle(){
        //   // this.$store.commit('addIncrement',{num:5});
        //   this.$store.dispatch('addAction',{num:5});
        // },
        reduceHandle(){
          this.$store.commit({
            type:'reduceIncrement',
            num:2
          });
        },
        ...mapActions({
          addHandle:'addAction'
        }),
        ...mapMutations({reduceHandle:'reduceIncrement'}),
      }
    }
</script>
<style>

</style>
