<template>
  <UniList title="注入文本，表单，自定义组件" :schema="schema" :init="init" />
</template>
<script>
  export default {
    data() {
      return {
        schema: {
          $index: "",
          title: "标题",
          name: "姓名",
        },
        init(page) {
          return {
            // actionWidth: 350, //设定操作条宽度
            header: {
              表单: () =>
                page
                  .view({ form: testForm })
                  .then((res) => page.dialog({ text: res })) //res回传数据,在这里请求接口
                  .then(() => this.$message.success("添加成功")),
            },
            action: {
              文本: () =>
                page
                  .dialog({ text: "此操作不可逆,确认要删除吗?" })
                  .then(() => console.log(123)) //在这里请求接口
                  .then(() => this.$message.success("删除成功"))
                  .catch(() => this.$message.error("删除失败")),
              有初始值的表单: ({ row }) =>
                page
                  .dialog({ form: testForm, data: row })
                  .then((res) => page.dialog({ text: res })) //res回传数据,在这里请求接口
                  .then(() => this.$message.success("编辑成功")),
              组件: () =>
                page.view({
                  component: "UniList", //UniList已注册为全局组件
                  props: {
                    use: {}, //抑制UniCell报错,并无意义
                    schema: {
                      $index: "",
                      title: "标题",
                      name: "姓名",
                    },
                  },
                }),
            },
          };
        },
      };
    },
  };

  //测试用json,实际应用时你应该单独创建一个json文件并引入
  const testForm = {
    fields: [
      {
        __config__: {
          label: "标题",
          labelWidth: null,
          showLabel: true,
          changeTag: true,
          tag: "el-input",
          tagIcon: "input",
          required: true,
          layout: "colFormItem",
          span: 24,
          document: "https://element.eleme.cn/#/zh-CN/component/input",
          regList: [],
          formId: 101,
          renderKey: 1635397742235,
        },
        __slot__: {
          prepend: "",
          append: "",
        },
        placeholder: "请输入标题",
        style: {
          width: "100%",
        },
        clearable: true,
        "prefix-icon": "",
        "suffix-icon": "",
        maxlength: null,
        "show-word-limit": false,
        readonly: false,
        disabled: false,
        __vModel__: "title",
      },
      {
        __config__: {
          label: "姓名",
          labelWidth: null,
          showLabel: true,
          changeTag: true,
          tag: "el-input",
          tagIcon: "input",
          required: true,
          layout: "colFormItem",
          span: 24,
          document: "https://element.eleme.cn/#/zh-CN/component/input",
          regList: [],
          formId: 102,
          renderKey: 1635397743179,
        },
        __slot__: {
          prepend: "",
          append: "",
        },
        placeholder: "请输入姓名",
        style: {
          width: "100%",
        },
        clearable: true,
        "prefix-icon": "",
        "suffix-icon": "",
        maxlength: null,
        "show-word-limit": false,
        readonly: false,
        disabled: false,
        __vModel__: "name",
      },
      {
        __config__: {
          label: "时间选择",
          tag: "el-time-picker",
          tagIcon: "time",
          defaultValue: null,
          span: 24,
          showLabel: true,
          layout: "colFormItem",
          labelWidth: null,
          required: true,
          regList: [],
          changeTag: true,
          document: "https://element.eleme.cn/#/zh-CN/component/time-picker",
          formId: 107,
          renderKey: 1635397815408,
        },
        placeholder: "请选择时间选择",
        style: {
          width: "100%",
        },
        disabled: false,
        clearable: true,
        "picker-options": {
          selectableRange: "00:00:00-23:59:59",
        },
        format: "HH:mm:ss",
        "value-format": "HH:mm:ss",
        __vModel__: "test",
      },
    ],
    formRef: "elForm",
    formModel: "formData",
    size: "medium",
    labelPosition: "right",
    labelWidth: 100,
    formRules: "rules",
    gutter: 15,
    disabled: false,
    span: 24,
    formBtns: true,
    unFocusedComponentBorder: false,
  };
</script>
