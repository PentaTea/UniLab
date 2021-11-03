<template>
  <UniList
    title="使用data提供数据"
    :schema="schema"
    :data="[{ title: '法外狂徒', name: '张三' }]"
    :init="init"
  />
</template>
<script>
  export default {
    data() {
      return {
        schema: {
          title: "标题",
          name: "姓名",
        },
        init() {
          return {
            pages: { current: 123, total: 4321 },
          };
        },
      };
    },
  };
</script>
