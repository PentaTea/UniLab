<template>
  <UniList
    title="从配置中注入渲染Action和Header的能力"
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
        init(page) {
          //这里接收到的是UniList组件实例
          //其中暴露了一些功能方法
          return {
            header: {
              打开view层: () => page.view({ text: 123 }),
            },
            action: {
              文本dialog: ({ row }) => page.dialog({ text: row.title }),
              组件dialog: ({ row }) =>
                page.dialog({ component: "Badge", props: { text: row.name } }),
            },
          };
        },
      };
    },
  };
</script>
