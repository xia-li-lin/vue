// 事件总线:在Vue原型上添加一个Vue实例，实现组件间相互通信，而且不受组件关系影响
Vue.prototype.$bus = new Vue();

// 混入
const myMixin = {
    created: function () {
        this.hello();
    },
    methods: {
        hello() {
            console.log('mixin')
        }
    },
};

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
                    {{ course.name }} - {{course.price | currency('$')}}
                </li>
            </ul>
        </div>
    `,
    methods: {
        handleCourseClick(course) {
            this.selectedCourse = course;
        }
    },
    // 过滤器 - 局部
    filters: {
        currency(value, symbol = '￥') {
            return symbol + value;
        }
    }
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
            <input type="text" v-focus :value="value" @input="onInput" @keyup.enter="addCourse">
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

// 弹窗组件
Vue.component('pop-ups', {
    props: ['show'],
    mixins: [myMixin],
    // template: `
    //     <transition name="fade">
    //         <div class="pop-ups-box" v-if="show">
    //             <div class="pop-ups">
    //                 <span class="close" @click="$emit('update:show',false)">x</span>
    //                 <div class="content">
    //                     <slot name="title">提示:</slot>
    //                     <slot></slot>
    //                 </div>
    //             </div>
    //         </div>
    //     </transition>
    // `,
    template: `
        <transition name="fade"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @before-leave="beforeLeave"
                    @leave="leave"
        >
            <div class="pop-ups-box" v-if="show">
                <div class="pop-ups">
                    <span class="close" @click="$emit('update:show',false)">x</span>
                    <div class="content">
                        <slot name="title">提示:</slot>
                        <slot></slot>
                    </div>
                </div>
            </div>
        </transition>
    `,
    mounted() {
        this.$bus.$on('pop-ups-close', () => {
            this.$emit('update:show', false);
        });
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el, done) {
            // document.body.offsetHeight;
            // el.style.opacity=1;
            // 监听动画结束事件，并执行done
            // el.addEventListener('transitioned',done);
            // 纯js
            Velocity(el, { opacity: 1 }, { duration: 500, complete: done });
        },
        beforeLeave(el) {
            el.style.opacity = 1;
        },
        leave(el, done) {
            // document.body.offsetHeight;
            // el.style.opacity=0;
            // 监听动画结束事件，并执行done
            // el.addEventListener('transitioned',done);
            Velocity(el, { opacity: 0 }, { duration: 500, complete: done });
        }
    },
});

// 过滤器 - 全局
// Vue.filter('currency', function (value) {
//     return '￥' + value;
// });
