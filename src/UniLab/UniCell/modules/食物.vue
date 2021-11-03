<template>
  <Select :payload="roles" multiple></Select>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import Base from "./base";
  import Select from "./select.vue";

  @Component({
    components: {
      Select,
    },
  })
  export default class Food extends Base {
    roles = [
      {
        value: "选项1黄金糕",
        label: "黄金糕",
      },
      {
        value: "选项2双皮奶",
        label: "双皮奶",
      },
      {
        value: "选项3蚵仔煎",
        label: "蚵仔煎",
      },
      {
        value: "选项4龙须面",
        label: "龙须面",
      },
      {
        value: "选项5北京烤鸭",
        label: "北京烤鸭",
      },
    ];
  }
</script>
<style scoped lang="scss"></style>
