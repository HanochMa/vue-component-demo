<template>
  <div>
    <p>v-for循环渲染</p>
    <component v-for="(item,index) in componentList" :key="index" :is="item"></component>
    <p>------------------------------------</p>
    <p>根据条件决定哪个渲染</p>
    <component :is="render ? componentList[0]: componentList[1]"></component>
    <button @click="render = !render">点我切换组件</button>
  </div>
  
</template>

<script>
import AComponent from '../components/AComponent.vue';
import BComponent from '../components/BComponent.vue'
export default {
  components:{
    AComponent,
    BComponent
  },
  data(){
    return {
      render: true,
      componentList:[
        'AComponent',
        'BComponent'
      ]
    }
  }
}
</script>