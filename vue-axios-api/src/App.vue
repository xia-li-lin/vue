<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // import axios from 'axios'
  // import queryString from 'querystring'
  // // const CancelToken=axios.CancelToken;
  // // const source=CancelToken.source();
  // let Http=axios.create({
  //   baseURL:'https://easy-mock.com/mock/5d5d0217d3c3093825873711/example/',
  //   timeout:1000,
  //   responseType:'json',
  //   params:{
  //     book:'123'
  //   },
  //   // transformRequest:[function (data) {
  //   //   console.log(data);
  //   //   data.age=30;
  //   //   return queryString.stringify(data);
  //   // }],
  //   // transformResponse:[function (data) {
  //   //   console.log(data);
  //   //   data.abc='janice';
  //   //   return data;
  //   // }],
  //   validateStatus(status){
  //     // console.log(status);
  //     return status;
  //   },
  //   // cancelToken:source.token,
  //   headers:{
  //     'custome-header':'miaov',
  //     'content-type':'application/x-www-from-urlencoded'
  //   }
  // })
  //
  // Http.interceptors.request.use(function (config) {
  //   console.log('拦截');
  //   console.log(config);
  //   return config;
  // },function (error) {
  //   return Promise.reject(error);
  // })
  //
  // Http.interceptors.response.use(function (data) {
  //   console.log(data);
  //   return data;
  // },function (error) {
  //   return Promise.reject(error);
  // })

  export default {
    name: 'app',
    created() {
      // function http1() {
      //   return Http.get('test-axios');
      // }
      //
      // function http2() {
      //   return Http.post('test-post-axios');
      // }

      // axios.all([http1(),http2()]).then(axios.spread((res1,res2)=>{
      //   // console.log(res1);
      //   // console.log(res2);
      // })).catch((error)=>{
      //   console.error(error);
      // })

      // Http.get('test-axios').then((response)=>{
      //   console.log(response.data);
      // }).catch((error)=>{
      //   console.error(error);
      // })

      // Http.post('test-post-axios',{id:'123456',name:'janice'}).then((response)=>{
      //   console.log(response.data);
      // }).catch((error)=>{
      //   if(axios.isCancel(error)){
      //     console.error(error.message);
      //   }else{
      //     console.log(error);
      //   }
      // })
      //
      // source.cancel('操作被用户取消');

      // axios({
      //   method:'get',
      //   url:'https://easy-mock.com/mock/5d5d0217d3c3093825873711/example/test-axios'
      // }).then((response)=>{
      //   console.log(response.data);
      // }).catch((error)=>{
      //   console.error(error);
      // })

      // axios({
      //   method:'post',
      //   url:'https://easy-mock.com/mock/5d5d0217d3c3093825873711/example/test-post-axios',
      //   data:{name:'janice'}
      // }).then((response)=>{
      //   console.log(response);
      // }).catch((error)=>{
      //   console.error(error);
      // })

      // axios.post('https://easy-mock.com/mock/5d5d0217d3c3093825873711/example/test-post-axios',{name:'yueyue'}).then((response)=>{
      //   console.log(response.data);
      // }).catch((error)=>{
      //   console.error(error);
      // })

      // axios.get('https://easy-mock.com/mock/5d5d0217d3c3093825873711/example/test-axios',{
      //   params:{
      //     id:'1233444',
      //     name:'miaov'
      //   }
      // }).then((response)=>{
      //   console.log(response.data);
      // }).catch((error)=>{
      //   console.error(error);
      // })

      // axios.delete('https://easy-mock.com/mock/5d5d0217d3c3093825873711/example/test-delete-axios').then((response)=>{
      //   console.log(response.data);
      // }).catch((error)=>{
      //   console.error(error);
      // })


    }
  }
</script>

<style>

</style>
