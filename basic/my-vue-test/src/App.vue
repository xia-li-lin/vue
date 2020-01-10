<template>
  <div id="app">
    <CourseList :courses="courses"></CourseList>
  </div>
</template>

<script>
import CourseList from "./components/CourseList";
export default {
  props: {
    courses: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  name: "app",
  components: {
    CourseList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
