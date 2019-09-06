<template>
  <header class="header" >
      <h1>todos--{{update}}</h1>
      <button @click="changeHandle">改变state的值</button>
      <input class="new-todo" placeholder="请输入内容" @keydown="handleKeydown"/>
  </header>
</template>
<script>
  export default {
      name: 'todoHeader',
      computed:{
          update(){
              return this.$store.state.n;
          }
      },
      methods:{
          handleKeydown(){
              this.$eventBus.$emit('add-todo','新添加的');
          },
          changeHandle(){
              this.$store.commit('changeN',1000);
          }
      }
  }
</script>
