<template>
  <div>
    渲染多个策略
    <UniCell v-model="data" input />
    指定策略对应的字段
    <UniCell v-model="data" input="username" />
    传递策略配置
    <UniCell v-model="data" :input="{ style: 'width:300px' }" />
    配置策略显示别名
    <UniCell v-model="data" input:用户名="字段" />
    传递策略配置并配置别名
    <!-- <UniCell v-model="data" :input:用户名="{ style: 'width:300px' }" /> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: {},
      };
    },
  };
</script>
