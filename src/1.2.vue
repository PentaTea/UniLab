<template>
  <UniList title="复杂的schema配置示例" :schema="schema" />
</template>
<script>
  export default {
    data() {
      return {
        schema: {
          $index: "", //特殊属性,渲染序号
          $selection: "", //特殊属性,多选模式
          title: {
            label: "标题",
            minWidth: 200,
            align: "left",
          },
          name: "姓名",
          address: "地址",
          content: {
            label: "内容",
            formatter: ({ value, $index }) => {
              return "第" + $index + "行的内容:" + value;
            },
          },
        },
      };
    },
  };
</script>
