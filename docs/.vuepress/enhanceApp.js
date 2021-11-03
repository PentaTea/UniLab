import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "remixicon/fonts/remixicon.css";

import UniLab from "../../src/UniLab";

export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(UniLab);
};
