<template>
  <UniList title="简单的schema配置示例" :schema="schema" />
</template>
<script>
  export default {
    data() {
      return {
        schema: {
          title: "标题",
          name: "姓名",
          address: "地址",
          content: "内容",
        },
      };
    },
  };
</script>
