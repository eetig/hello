<template>
  <el-button type="success" round @click="insertPictures">批量嵌入图片</el-button>
</template>

<script setup lang="js">
  import { onMounted,ref } from "vue";
  import { ElMessage } from 'element-plus'
  
  // const onbuttonClick=()=>{
  //    Applicatxion.Worksheets.Item("Sheet1").Range("A5").Value2 = Application.Worksheets.Item("Sheet1").Range("A1").Value2
  // }

  // const onbuttonClick2=()=>{
  //    Application.Worksheets.Item("Sheet1").Range("A5").Value2 = Application.Worksheets.Item("Sheet1").Range("A1").Value2
  // }

  const insertPictures = () => {

    try {
      const path = Application.DefaultFilePath; // 获取当前工作簿的路径，如果未保存则使用默认文件路径
      const imgPath = path + "\\readytoinsert\\1.jpg"; // 图片路径
      // ElMessage.warning(`imgPath:`+imgPath)



      // 正确获取WPS应用对象和选中区域
      const app = Application;
      const range = app.Selection;
      // const cells = range.Cells
      // ElMessage.warning(`cells.Count:`+cells.Count);
      // ElMessage.warning(`列：range.Column:`+range.Column);
      // ElMessage.warning(`行：range.Row:`+range.Row);
      // Range("A3").getRangeEx().InsertCellPicture(imgPath)
      // range.RangeEx.InsertCellPicture(imgPath)
      
      // let mes=``;
      // for (const key in range.Cells) {
      //   mes += key + `, \n`;
      // }
      // ElMessage.warning(`mes:`+mes);


      ElMessage.warning(`type:  `+range.Cells.Address);

      //ColumnWidth 宽


      //FormatConditions 格式


      //Hidden 隐藏行或列
      // const entireColumn = range.Rows.EntireColumn
      // entireColumn.Hidden = true
      // const entireRow = range.Rows.EntireRow
      // entireRow.Hidden = true


      //MergeArea 合并单元格区域



      //MergeCells 区域内是否存在合并的单元格


    } catch (error) {
      ElMessage.error(`获取选中区域失败：${error.message}`);
      console.error("错误详情：", error);
      return null;
    }


    // let selectionRange = Application.Selection.Range(Start, End);
    // ElMessage(`selectionRange:`+selectionRange)
    // // ElMessage(`selectionRange:`+selectionRange)
    // for (const key of electionRange) {
    //   if (!Object.hasOwn(object, key)) continue;
      
    //   ElMessage(`of selectionRange:`+key)
      
      
    // }

    // if (selection.Type === 8) {
    //     ElMessage(`selection.Type === 8`)
    //     // 遍历选中区域的每个单元格
    //     for (let row = 1; row <= selection.Rows.Count; row++) {
    //         for (let col = 1; col <= selection.Columns.Count; col++) {
    //             let cellValue = selection.Cells(row, col).Value;
    //             // console.log(`第${row}行第${col}列：${cellValue}`);
    //             ElMessage(`第${row}行第${col}列：${cellValue}`)
    //         }
    //     }
    // }

    // // ElMessage({
    // //   message: 'Congrats, this is a success message.',
    // //   type: 'success',
    // // })
    // // ElMessage.error('Oops, this is a error message.')
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
