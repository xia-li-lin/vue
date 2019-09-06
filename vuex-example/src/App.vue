<template>
  <div id="app">
    <ul>
      <router-link :to="{path:'/'}" tag="li">
        <a>首页</a>
      </router-link>
      <router-link :to="{path:'/increment'}" tag="li">
        <a>计算器</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

