// 创建课程列表组件
Vue.component('course-list', {
    data() {
        return {
            selectedCourse: ''
        }
    },
    props: {
        courses: {
            type: Array,
            default: []
        }
    },
    template: `
        <div>
            <p v-if="courses.length==0">没有课程了~</p>
            <ul v-else>
                <!-- class -->
                <!-- <li v-for="course in courses" 
                    :key="course.id" 
                    :id="'course-'+course.id" 
                    :class="{'active':selectedCourse===course}"
                    @click="handleCourseClick(course)"
                > -->
                <!-- style -->
                <li v-for="course in courses" :key="course.id" :id="'course-'+course.id"
                    :class="{'active':selectedCourse===course}"
                    :style="{backgroundColor:selectedCourse===course?'orange':'transparent'}"
                    @click="handleCourseClick(course)">
                    {{ course.name }}
                </li>
            </ul>
        </div>
    `,
    methods: {
        handleCourseClick(course) {
            this.selectedCourse = course;
        }
    },
});

// 新增课程组件
Vue.component('course-add', {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    model: {
        value: 'value',
        event: 'input'
    },
    data() {
        return {
            onoff: null,
        }
    },
    template: `
        <div>
            <input type="text" :value="value" @input="onInput" @keyup.enter="addCourse">
            <button @click="addCourse" :disabled="onoff">新增</button>
            <p>{{value}}</p>
        </div>
    `,
    methods: {
        addCourse() {
            this.$emit('add-course');
        },
        onInput(e) {
            this.$emit('input', e.target.value);
        }
    },
});