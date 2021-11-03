<template>
  <UniList title="各种按钮的生成" :schema="schema" :init="init" />
</template>
<script>
  export default {
    data() {
      return {
        schema: {
          $selection: "",
          title: "标题",
          name: "姓名",
        },
        init(page) {
          return {
            header: {
              此按钮选中可见: {
                show: (rows) => !!rows.length,
                fn: (rows) => page.view({ text: rows }),
              },
              //全局配置中也可以控制按钮样式
              //下面这个测试样式是全局配置中规定的
              测试按钮: () => page.view({ text: 123 }),
            },
            action: {
              //创建操作按钮
              "123AA123": ({ row }) => page.view({ text: row }),
              "123BB123": ({ row }) => page.view({ text: row }),
              AA123: ({ row }) => page.view({ text: row }),
              //也可以直接传配置对象
              测试按钮: {
                show: ({ $index }) => $index != 2, //下标为2则不显示
                fn: ({ row }) => page.view({ text: row }),
              },
            },
            actionWidth: 450, //设定操作条宽度
            actionStyle: {
              "123.*123": {
                //匹配前后有'123'的内容
                type: "danger",
              },
              AA: {
                //匹配存在'AA'的内容
                icon: "ri-cactus-fill",
              },
              测试: {
                //匹配存在'测试'的内容
                type: "warning",
                icon: "ri-flask-fill",
                style: "width:100px",
              },
            },
          };
        },
      };
    },
  };
</script>
