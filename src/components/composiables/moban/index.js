import moban from "./moban.vue"
export const componentPlugin = {
  install(app) {
    //app.component("组件名称"，导入的组件)
    app.component("moban",moban)
  }
}