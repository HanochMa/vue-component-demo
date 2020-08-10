import Vue from 'vue'
let strategies = Vue.config.optionMergeStrategies;
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  return toVal
}