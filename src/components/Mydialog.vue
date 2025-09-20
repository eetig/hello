<template>
  <div class="hello">
    <p>自定义窗口</p>
  </div>
  <button @click="onbuttonClick">点我</button>
  <el-button type="success" round @click="open">Success</el-button>
</template>

<script setup lang="js">
  import { onMounted,ref } from "vue";
  import { ElMessage } from 'element-plus'
  
  const onbuttonClick=()=>{
     Application.Worksheets.Item("Sheet1").Range("A5").Value2 = Application.Worksheets.Item("Sheet1").Range("A1").Value2
  }

  const onbuttonClick2=()=>{
     Application.Worksheets.Item("Sheet1").Range("A5").Value2 = Application.Worksheets.Item("Sheet1").Range("A1").Value2
  }

  const open = () => {
  ElMessage('This is a message.')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
