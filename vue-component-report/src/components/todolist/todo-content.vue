<template>
  <section class="main">
    1211111
    <input class="toggle-all" type="checkbox"  />
    <ul class="todo-list">
        <li>
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>miaoweiketang</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" />
        </li>
    </ul>
  </section>
</template>
<script>
    export default {
        created() {
            this.$eventBus.$on('add-todo',(value)=>{
                console.log(value);
            })
        }
    }
</script>
