<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow"></list>
      </div>
    </section>
</template>

<script>
import selectInput from '@/components/selectInput'
import list from '@/components/list'

export default {
  components: {
    selectInput,
    list
  },
    data(){
      return{
          listShow:false,
          title:''
      }
    },
    methods:{
        itemHandleClick(title){
            this.title=title;
            this.listShow=false;
        }
    }
}
</script>
