<template>
  <div>
    <h1>aaaaa</h1>
    <b-component v-bind="$attrs"></b-component>
  </div>
  
</template>

<script>
export default {
  // inject:['myself'],
  // created(){
  //   // console.log(this.myself)
  //   console.log(this.$listeners)
  // }
  props: ['myname'],
  created(){
    console.log(this.$attrs);
  }

}
</script>