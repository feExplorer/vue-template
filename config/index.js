// 全局配置
// 宿主平台
export const HOST_PLATFORM = 'WEB'
// node 环境
export const NODE_ENV = process.env.NODE_ENV || 'prod'
// 是否强制所有请求访问本地
export const AJAX_LOCALLY_ENABLE = false
// 是否开启监控
export const MONITOR_ENABLE = true
// 路由默认配置，路由表并不从此注入
export const ROUTER_DEFAULT_CONFIG = {
  waitForData: true,
  transitionOnLoad: true
}
// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {},
  baseURL: process.env.BASE_URL
}
// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== 'production'
}
// API 默认配置
export const API_DEFAULT_CONFIG = {
  mockBaseURL: '',
  mock: true,
  debug: false,
  sep: '/'
}
// CONST 默认配置
export const CONST_DEFAULT_CONFIG = {
  sep: '/'
}

// 还有一些方便开发的配置
export const CONSOLE_REQUEST_ENABLE = true      // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = true     // 开启响应参数打印
export const CONSOLE_MONITOR_ENABLE = true      // 监控记录打印