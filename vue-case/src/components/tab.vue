<template>
    <div class="tab">
        <div class="tab-header">
            <div class="tab-item"
                 :class="{'tab-active':currentIndex===index}"
                 v-for="tab,index in tabData"
                 @click="handleTabClick(index)">
                {{tab.title}}
            </div>
        </div>
        <div class="tab-content">
            <div v-for="tab,index in tabData" :style="{'display':currentIndex===index?'block':'none'}">
                <p v-for="list in tab.list">{{list.subTitle}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import tabData from "@/mock/tab.mock";
    export default {
        name: "tab",
        data(){
            return{
                tabData:tabData,
                currentIndex:0
            }
        },
        methods:{
            handleTabClick(index){
                this.currentIndex=index;
            }
        }
    }
</script>

<style scoped>

</style>
