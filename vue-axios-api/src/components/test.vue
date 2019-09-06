<template>
    <div>
        11111
    </div>
</template>

<script>
    export default {
        name: 'test',
        created() {
            this.$http.get('https://easy-mock.com/mock/5d5d0217d3c3093825873711/example/test-axios').then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.error(error);
            })
        }
    }
</script>

<style>

</style>
