<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        :value="title"
        @click="showListHandle"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>
export default {
    props:['isShow'],
    computed:{
        initShowList(){
            return this.isShow;
        },
        title(){
            return this.$store.state.selectModule.title;
        }
    },
    methods:{
        showListHandle(){
            this.$emit('update:isShow',!this.initShowList)
        }
    }
}
</script>
