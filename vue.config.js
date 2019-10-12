const path = require('path');

function resolve(dir) {
  //此处使用path.resolve 或path.join 可自行调整
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {

    var externals = {
      vue: 'Vue',
      axios: 'axios',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      vuex: 'Vuex'
    }
    config.externals(externals)
    const cdn = {
      css: [
        // element-ui css
        '//unpkg.com/element-ui/lib/theme-chalk/index.css'
      ],
      js: [
        // vue
        '//cdn.staticfile.org/vue/2.5.22/vue.min.js',
        // vue-router
        '//cdn.staticfile.org/vue-router/3.0.2/vue-router.min.js',
        // vuex
        '//cdn.staticfile.org/vuex/3.1.0/vuex.min.js',
        // axios
        '//cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
        // element-ui js
        '//unpkg.com/element-ui/lib/index.js'
      ]
    }
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })

    config.resolve.alias
      .set('@', resolve('src'))
      .set('Config', resolve('config'))
      .set('Plugins', resolve('plugins'))
      .set('Routes', resolve('routes/index.js'))
  }
}
