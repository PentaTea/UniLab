<template>
  <UniList
    :schema="schema"
    text:标题
    text:地址="address"
    text:海星
    @fetch="
      (page) =>
        Object.keys(page.params).length && page.dialog({ text: page.params })
    "
  />
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
