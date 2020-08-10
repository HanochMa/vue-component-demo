import Vue from 'vue'

//通知组件页面变化
const notifyVisibilityChange = (lifeCycleName, vm) => {
    const lifeCycles = vm.$options[lifeCycleName]
    if (lifeCycles && lifeCycles.length) {
        lifeCycles.forEach(lifecycle => {
            lifecycle.call(vm)
        })
    }
    //遍历子组件
    if (vm.$children && vm.$children.length) {
        vm.$children.forEach(child => {
          notifyVisibilityChange(lifeCycleName, child)
        })
      }
}

//添加生命周期钩子
export function init () {
    const optionMergeStrategies = Vue.config.optionMergeStrategies
    // console.log(optionMergeStrategies)
    //指定合并策略onHide、onShow和created一样
    optionMergeStrategies.onHide = optionMergeStrategies.beforeDestroy
    optionMergeStrategies.onShow = optionMergeStrategies.created
}
//事件变化绑定到根结点上
export function bind (rootVm) {
    window.addEventListener('visibilitychange', () => {
        let lifeCycleName = undefined
        if (document.visibilityState === 'hidden') {
            lifeCycleName = 'onHide'
        } else if(document.visibilityState === 'visible'){
            lifeCycleName = 'onShow'
        }
        if (lifeCycleName) {
            notifyVisibilityChange(lifeCycleName,rootVm)
        }
    })
}
