<template>
  <div class="container">
    <div>
      <pre v-html="obj2html(data)"></pre>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import Base from "./base";
  import hanabi from "hanabi";

  @Component({})
  export default class Data extends Base {
    obj2html(data) {
      return hanabi("UniCell 测试窗口 " + JSON.stringify(data, null, "  "));
    }
  }
</script>
<style scoped lang="scss">
  .container {
    position: relative;
    display: inline-block;
    > div {
      position: absolute;
      font-size: 13px;
      width: 400px;
      z-index: 100;
      pointer-events: none;
    }
  }
</style>
