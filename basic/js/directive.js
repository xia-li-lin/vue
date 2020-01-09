const role = 'super';

// 自定义指令
Vue.directive('focus', {
    inserted(el) {
        el.focus();
    }
});

// 如果是超级管理员super,显示批量更新
Vue.directive('permission', {
    inserted(el, binding) {
        console.log(binding);
        if (role !== binding.value) {
            el.parentElement.removeChild(el);
        }
    }
})