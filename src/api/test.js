// 测试用接口
import api from 'Plugins/axios.js'
export const apitest = () => {
  return api.post("http://api.xuege100.com/tl_index/analys/single_analys", {
    article_content: "veniam dolor occaecat"
  })
}

