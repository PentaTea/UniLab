<template>
  <UniList
    title="监听fetch事件修改data"
    :schema="schema"
    :data="data"
    :init="init"
    @fetch="(list) => getData(list.pages.current)"
  />
</template>
<script>
  export default {
    data() {
      return {
        data: [],
        schema: {
          title: "标题",
          name: "姓名",
        },
        init() {
          return {
            pages: { current: 1, total: 7, size: 5 },
          };
        },
      };
    },
    methods: {
      getData(current) {
        const start = 5 * (current - 1);
        const nzh = "三四五六七八九";
        const d = [];
        for (let i = 0; i < 5; i++) {
          if (nzh[start + i])
            d.push({ title: "法外狂徒", name: "张" + nzh[start + i] });
        }
        this.data = d;
      },
    },
  };
</script>
