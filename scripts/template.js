module.exports = {
  vueTemplate: componentName => {
    return `<template>
    <div class="${componentName}">${componentName}组件</div>
  </template>
              <script>
  export default {
    name: "${componentName}"
  };
  </script>
              <style lang="less" scoped>
  .${componentName} {
  }
  </style>`
  },
  entryTemplate: `import Main from './main.vue'
  export default Main
  `
}
