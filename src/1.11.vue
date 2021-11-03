<template>
  <UniList
    title="使用use参数替换表单生成器的某一元素"
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
          address: "地址",
          content: "内容",
        },
        init(page) {
          return {
            header: {
              原测试表单: () =>
                page
                  .dialog({ form: testForm })
                  .then((res) => page.dialog({ text: res })),
              替换了元素的测试表单: () =>
                page
                  .dialog({
                    form: testForm,
                    use: {
                      title: "text:海星", // 将title字段对应的表单替换为text策略,并重命名为海星
                      role: "食物:角色", // 假设在这个食物组件中请求了角色下拉
                    },
                  })
                  .then((res) => page.dialog({ text: res })),
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
          label: "角色",
          showLabel: true,
          labelWidth: null,
          tag: "el-select",
          tagIcon: "select",
          layout: "colFormItem",
          span: 24,
          required: true,
          regList: [],
          changeTag: true,
          document: "https://element.eleme.cn/#/zh-CN/component/select",
          formId: 109,
          renderKey: 1635746801726,
        },
        __slot__: {
          options: [
            {
              label: "选项一",
              value: 1,
            },
            {
              label: "选项二",
              value: 2,
            },
          ],
        },
        placeholder: "请选择角色",
        style: {
          width: "100%",
        },
        clearable: true,
        disabled: false,
        filterable: false,
        multiple: false,
        __vModel__: "role",
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
