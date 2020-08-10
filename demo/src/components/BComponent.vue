<template>
  <div>
    <h1>bbbbbbb</h1>
  </div>
  
</template>

<script>
export default {
  // props:['foo'],
  data(){
    return{
      newVal:'newb'
    }
  },
  mounted(){
    // this.$emit('update:foo', this.newVal)
    // console.log(this.$listeners)
    console.log(this.$attrs)
  }
}
</script>