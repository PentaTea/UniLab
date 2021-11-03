<template>
  <UniList title="使用列插槽定制你的表格" :schema="schema">
    <!-- 作用域插槽的传值依然是{row, column, value, $index} -->
    <template #avatar="{row}">
      <el-avatar>王{{ row.id }}</el-avatar>
    </template>
    <template #name="{value}">
      <el-tag type="success">{{ value }}</el-tag>
    </template>
  </UniList>
</template>
<script>
  export default {
    data() {
      return {
        schema: {
          avatar: {
            label: "", //可以使用空string隐藏表头
            width: 70,
          },
          title: {
            label: "标题",
            align: "left",
          },
          name: "姓名",
          address: "地址",
          content: "内容",
        },
      };
    },
  };
</script>
