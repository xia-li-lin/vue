<template>
  <div>
    <p v-if="courses.length==0">没有课程了~</p>
    <ul v-else>
      <!-- class -->
      <!-- <li v-for="course in courses" 
                :key="course.id" 
                :id="'course-'+course.id" 
                :class="{'active':selectedCourse===course}"
                @click="handleCourseClick(course)"
      >-->
      <!-- style -->
      <li
        v-for="course in courses"
        :key="course.id"
        :id="'course-'+course.id"
        :class="{'active':selectedCourse===course}"
        :style="{backgroundColor:selectedCourse===course?'orange':'transparent'}"
        @click="handleCourseClick(course)"
      >{{ course.name }} - {{course.price | currency('$')}}</li>
    </ul>
  </div>
</template>

<script>
import { getCourses } from "../api/course-list";
export default {
  data() {
    return {
      courses: [],
      newCourseId: "3",
      selectedCourse: ""
    };
  },
  async created() {
    this.courses = await getCourses();
  },
  methods: {
    addCourse() {
      if (!this.course) {
        this.showWarning = true;
      } else {
        this.courses.push({
          id: this.newCourseId++,
          name: this.course
        });
        this.course = "";
        this.show = true;
      }
    },
    handleCourseClick(course) {
      this.selectedCourse = course;
    }
  },
  // 过滤器 - 局部
  filters: {
    currency(value, symbol = "￥") {
      return symbol + value;
    }
  }
};
</script>

<style scoped>
.active {
  background-color: purple;
  color: #fff;
}

.success {
  text-align: center;
  position: relative;
  width: 320px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: auto;
  background: #4fc08d;
  border: 1px solid #42b983;
}

.warning {
  text-align: center;
  position: relative;
  width: 320px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: auto;
  background: #f66;
  border: 1px solid #d63200;
}

.pop-ups .close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 18px;
  cursor: pointer;
}

/* 动画样式 */
/* .fade-enter,.fade-leave-to {
            opacity: 0;
        } */

/*     */
</style>