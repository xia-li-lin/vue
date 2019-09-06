<template>
  <div id="app">
    <ul class="nav">
      <router-link to="/tab" tag="li">选项卡</router-link>
      <router-link to="/qq" tag="li">QQ</router-link>
      <router-link to="/shuttle" tag="li">穿梭框</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
