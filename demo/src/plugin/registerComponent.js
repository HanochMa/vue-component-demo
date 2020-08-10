import Vue from 'vue'
import upperFirst from 'loadsh/upperFirst'
import camelCase from 'loadsh/camelCase'
// import AComponent from '../components/AComponent.vue'
export default function () {
  const requireComponent = require.context(
    // 其组件目录的相对路径
    '../components',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /\w+\.(vue|js)$/
  )
  requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    // console.log(fileName)
    const componentConfig = requireComponent(fileName) // 返回一个mudule模块，和import导入的模块是一样的
    // console.log(componentConfig)
    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
      camelCase(
        // 获取和目录深度无关的文件名
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )
    Vue.component(componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
    )
  })
}

