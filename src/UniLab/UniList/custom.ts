import { Component } from "vue-property-decorator";
import Base from "./base";

@Component({})
export default class extends Base {
  /**
   * 请求方法,返回当前页数据和页码数据
   * @return {{pages: {current: number, total: number}, data: any[]}}
   */
  async fetch() {
    const formData = { ...this.pages, ...this.params };
    const total = 31;
    const data = [];
    for (let i = 1; i <= total; i++) {
      data.push({
        id: i,
        title: "title" + i,
        name: "王小虎",
        address: `上海市普陀区金沙江路 ${1517 + i} 弄`,
        content: "text" + i,
      });
    }

    return new Promise<any>((R) =>
      setTimeout(
        () =>
          R({
            pages: { current: formData.current, total },
            data: data.slice(
              (formData.current - 1) * formData.size,
              formData.current * formData.size
            ),
          }),
        500
      )
    );
  }

  /**
   * 刷新方法
   */
  reload() {}
  /**
   * 样式覆盖
   */
  actionWidth = 300;
  /**
   * 按钮样式
   * key为按钮名称(可以使用标准正则) value为attrs对象,将会被绑定到对应组件
   * 注: '.*' 匹配所有
   * 也可以在init函数中覆盖本配置
   */
  actionStyle = {
    ".*": { size: "mini", plain: true },
    删除: { type: "danger" },
    编辑: { type: "primary" },
  };
  headerStyle = {
    ".*": { size: "small", type: "primary" },
    测试: { type: "warning", icon: "ri-flask-fill" },
    删除: { type: "danger" },
  };
  /**
   * 列样式
   * 可以被schema中的value覆盖
   */
  columnStyle = {
    align: "center",
    minWidth: "150",
  };
  /**
   * 搜索按钮下拉行为
   * 若为空对象则不显示搜索下拉
   */
  searchDropdown = {
    清空查询条件: () => {
      this.params = {};
      this.runSearch();
    },
  };
}
