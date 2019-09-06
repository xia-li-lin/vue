<template>
    <div>
        <ul class="list">
            <li v-for="list in data" @click="itemHandleClick(list.title)">{{list.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed:{
        data(){
            return this.$store.state.selectModule.list;
        }
    },
    methods:{
        itemHandleClick(title){
            this.$store.commit('changeTitle',{title:title});
        }
    },
    created() {
        this.$store.dispatch('getListAction');
    }
}
</script>
