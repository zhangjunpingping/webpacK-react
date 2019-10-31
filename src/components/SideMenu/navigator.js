/**
 * 配置导航
 */
export default [
  {
    path: "/table",
    title: "table表格"
  },
  {
    path: "/form",
    title: "from表单",
    children: [
      { path: "/form1", title: "from1表单" },
      { path: "/form2", title: "from2表单" }
    ]
  },
  {
    path: "/map",
    title: "地图"
  },
  {
    path: "/biz-charts",
    title: "bizCharts"
  }
];
