// 请求成功回调函数
export function requestSuccessFunc(config) {
  // 是否有token
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}
// 请求失败回调函数
export function requestFailFunc(err) {
  return Promise.resolve(err);
}
// 响应成功回调函数
export function responseSuccessFunc(data) {
  const responseCode = data.status
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (responseCode === 200) {
    return Promise.resolve(data)
  } else {
    return Promise.reject(data)
  }
}
// 响应失败回调函数
export function responseFailFunc(err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误(400)';
        break;
      case 401:
        err.message = '未授权，请重新登录(401)';
        // 跳转登录页
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
        break;
      case 403:
        err.message = '拒绝访问(403)';
        break;
      case 404:
        err.message = '请求出错(404)';
        break;
      case 408:
        err.message = '请求超时(408)';
        break;
      case 500:
        err.message = '服务器错误(500)';
        break;
      case 501:
        err.message = '服务未实现(501)';
        break;
      case 502:
        err.message = '网络错误(502)';
        break;
      case 503:
        err.message = '服务不可用(503)';
        break;
      case 504:
        err.message = '网络超时(504)';
        break;
      case 505:
        err.message = 'HTTP版本不受支持(505)';
        break;
      default:
        err.message = `连接出错(${err.response.status})!`;
    }

  } else {
    err.message = '连接服务器失败!'
    if (error.message.includes('timeout')) {
      console.log('超时了')
    }else{
      console.log('断网了')
    }
  }
  return Promise.resolve(err);
}
