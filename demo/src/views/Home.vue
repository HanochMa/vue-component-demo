<template>
  <div> 
    <h3>Home</h3>
    <a-component myname="123456" parent="2222"></a-component>

  </div>
</template>

<script>
// const testOption = {
//   myOption: 'testOption'
// }
export default {
  // mixins: [testOption],
  // myOption: 'home option',
  created () {
    // console.log(this.$options.myOption);
  },
  methods:{
    handle(){
      console.log('click me ')
    }
  }
}
</script>
