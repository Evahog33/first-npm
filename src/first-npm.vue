<template>
  <div>
      <p>这是我的第一个上传到NPM的VUE组件</p>
      <p>{{text}}</p>
  </div>
</template>
<script>
export default {
  name:'first',
  props: {
      text:'你好'
  }
}
</script>
<style>
p{
    color: red;
}
</style>


