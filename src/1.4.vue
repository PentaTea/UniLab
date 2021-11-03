<template>
  <UniList
    title="传递init函数,接收一个参数为本组件实例,返回配置对象"
    :schema="schema"
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
        init: (page) => {
          // 别着急,此处接收的组件实例在后面会有大用
          return {
            async fetch() {
              return {
                pages: { current: 1, total: 1 },
                data: [
                  {
                    title: "妈耶,我的值被自定义fetch方法给覆盖了",
                    name: "由于设置了columnStyle.align,本行应该靠右对齐",
                  },
                ],
              };
            },
            columnStyle: {
              align: "right", // 默认对齐
              minWidth: "150", // 默认最小宽度
            },
          };
        },
      };
    },
  };
</script>
